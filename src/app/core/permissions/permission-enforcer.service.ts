import { Inject, Injectable } from "@angular/core";
import { DatabaseRule } from "./permission-types";
import { SessionService } from "../session/session-service/session.service";
import { EntityConstructor } from "../entity/model/entity";
import { DynamicEntityService } from "../entity/dynamic-entity.service";
import { EntityMapperService } from "../entity/entity-mapper.service";
import { Database } from "../database/database";
import { LOCATION_TOKEN } from "../../utils/di-tokens";
import { AnalyticsService } from "../analytics/analytics.service";
import { EntityAbility } from "./entity-ability";
import { User } from "../user/user";
import { ProgressDashboardConfig } from "../../child-dev-project/progress-dashboard-widget/progress-dashboard/progress-dashboard-config";
import { Config } from "../config/config";

@Injectable()
export class PermissionEnforcerService {
  static readonly STORAGE_KEY = "RULES";
  private readonly ignoredSubject = [
    User.ENTITY_TYPE,
    ProgressDashboardConfig.ENTITY_TYPE,
    Config.ENTITY_TYPE,
  ];
  constructor(
    private sessionService: SessionService,
    private dynamicEntityService: DynamicEntityService,
    private ability: EntityAbility,
    private entityMapper: EntityMapperService,
    private database: Database,
    private analyticsService: AnalyticsService,
    @Inject(LOCATION_TOKEN) private location: Location
  ) {}

  async enforcePermissionsOnLocalData(userRules: DatabaseRule[]) {
    const userRulesString = JSON.stringify(userRules);
    if (!this.userRulesChanged(userRulesString)) {
      return;
    }
    const subjects = this.getSubjectsWithReadRestrictions(userRules);
    if (await this.dbHasEntitiesWithoutPermissions(subjects)) {
      this.analyticsService.eventTrack(
        "destroying local db due to lost permissions",
        { category: "Migration" }
      );
      await this.database.destroy();
      this.location.reload();
    }
    window.localStorage.setItem(this.getUserStorageKey(), userRulesString);
  }

  private userRulesChanged(newRules: string): boolean {
    const storedRules = window.localStorage.getItem(this.getUserStorageKey());
    return storedRules !== newRules;
  }

  private getUserStorageKey() {
    return `${this.sessionService.getCurrentUser().name}-${
      PermissionEnforcerService.STORAGE_KEY
    }`;
  }

  private getSubjectsWithReadRestrictions(
    rules: DatabaseRule[]
  ): EntityConstructor[] {
    const subjects = new Set<string>(DynamicEntityService.ENTITY_MAP.keys());
    rules
      .filter((rule) => this.isReadRule(rule))
      .forEach((rule) => this.collectSubjectsFromRule(rule, subjects));
    return [...subjects]
      .filter((subject) => !this.ignoredSubject.includes(subject))
      .map((subj) => this.dynamicEntityService.getEntityConstructor(subj));
  }

  private collectSubjectsFromRule(rule: DatabaseRule, subjects: Set<string>) {
    const relevantSubjects = this.getRelevantSubjects(rule);
    if (rule.inverted || rule.conditions) {
      // Add subject if the rule can prevent someone from having access
      relevantSubjects.forEach((subject) => subjects.add(subject));
    } else {
      // Remove subject if rule gives access
      relevantSubjects.forEach((subject) => subjects.delete(subject));
    }
  }

  private isReadRule(rule: DatabaseRule): boolean {
    return (
      rule.action === "read" ||
      rule.action.includes("read") ||
      rule.action === "manage"
    );
  }

  private getRelevantSubjects(rule: DatabaseRule): string[] {
    if (rule.subject === "any") {
      return [...DynamicEntityService.ENTITY_MAP.keys()];
    } else if (Array.isArray(rule.subject)) {
      return rule.subject;
    } else {
      return [rule.subject];
    }
  }

  private async dbHasEntitiesWithoutPermissions(
    subjects: EntityConstructor[]
  ): Promise<boolean> {
    for (const subject of subjects) {
      const entities = await this.entityMapper.loadType(subject);
      if (entities.some((entity) => this.ability.cannot("read", entity))) {
        return true;
      }
    }
    return false;
  }
}