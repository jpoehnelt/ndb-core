/*
 *     This file is part of ndb-core.
 *
 *     ndb-core is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     ndb-core is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with ndb-core.  If not, see <http://www.gnu.org/licenses/>.
 */

import { SyncedSessionService } from "./session-service/synced-session.service";
import { AppConfig } from "../app-config/app-config";
import { SessionService } from "./session-service/session.service";
import { AlertService } from "../alerts/alert.service";
import { LoggingService } from "../logging/logging.service";
import { LoginState } from "./session-states/login-state.enum";
import { SessionType } from "./session-type";
import { HttpClient } from "@angular/common/http";
import { LocalSession } from "./session-service/local-session";
import { Database } from "../database/database";
import { PouchDatabase } from "../database/pouch-database";
import { AnalyticsService } from "../analytics/analytics.service";

/**
 * Factory method for Angular DI provider of SessionService.
 *
 * see [sessionServiceProvider]{@link sessionServiceProvider} for details.
 */
export function sessionServiceFactory(
  alertService: AlertService,
  loggingService: LoggingService,
  httpClient: HttpClient,
  database: Database,
  analyticsService: AnalyticsService
): SessionService {
  const pouchDatabase = database as PouchDatabase;
  let sessionService: SessionService;
  if (AppConfig.settings.session_type === SessionType.synced) {
    sessionService = new SyncedSessionService(
      alertService,
      loggingService,
      httpClient,
      pouchDatabase,
      analyticsService
    );
  } else {
    sessionService = new LocalSession(pouchDatabase, analyticsService);
  }
  // TODO: requires a configuration or UI option to select RemoteSession: https://github.com/Aam-Digital/ndb-core/issues/434
  // return new RemoteSession(httpClient, loggingService);

  updateServicesWithUserContexts(sessionService, analyticsService);

  return sessionService;
}

function updateServicesWithUserContexts(
  sessionService: SessionService,
  analyticsService: AnalyticsService
) {
  // update the user context for remote error logging and tracking
  // cannot subscribe within LoggingService itself because of cyclic dependencies, therefore doing this here
  sessionService.loginState.subscribe((newState) => {
    if (newState === LoginState.LOGGED_IN) {
      const username = sessionService.getCurrentUser().name;
      LoggingService.setLoggingContextUser(username);
      analyticsService.setUser(username);
    } else {
      LoggingService.setLoggingContextUser(undefined);
      analyticsService.setUser(undefined);
    }
  });
}

/**
 * Provider for SessionService implementation based on the AppConfig settings.
 *
 * Set `"database": { "useTemporaryDatabase": true }` in your app-config.json
 * to use the MockSessionService which will set up an in-memory database with demo data.
 * Otherwise the SyncedSessionService is used, establishing a local and remote session and setting up sync between them.
 */
export const sessionServiceProvider = {
  provide: SessionService,
  useFactory: sessionServiceFactory,
  deps: [
    AlertService,
    LoggingService,
    HttpClient,
    Database,
    AnalyticsService,
  ],
};
