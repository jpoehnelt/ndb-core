import { Component, OnInit } from "@angular/core";
import { Child } from "../model/child";
import { ActivatedRoute } from "@angular/router";
import { ChildrenService } from "../children.service";
import { EntityListConfig } from "../../../core/entity-components/entity-list/EntityListConfig";
import { RouteData } from "../../../core/view/dynamic-routing/view-config.interface";
import { RouteTarget } from "../../../app.routing";
import { EntityListComponent } from "../../../core/entity-components/entity-list/entity-list.component";

@RouteTarget("ChildrenList")
@Component({
  selector: "app-children-list",
  template: `
    <app-entity-list
      [allEntities]="childrenList"
      [listConfig]="listConfig"
      [isLoading]="isLoading"
      [entityConstructor]="childConstructor"
    ></app-entity-list>
  `,
  standalone: true,
  imports: [EntityListComponent],
})
export class ChildrenListComponent implements OnInit {
  childrenList: Child[] = [];
  listConfig: EntityListConfig;
  childConstructor = Child;
  isLoading = true;

  constructor(
    private childrenService: ChildrenService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.route.data.subscribe(
      (data: RouteData<EntityListConfig>) => (this.listConfig = data.config)
    );
    this.childrenList = await this.childrenService.getChildren();
    this.isLoading = false;
  }
}
