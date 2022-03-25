import { Injectable } from "@angular/core";
import { HistoricalEntityData } from "./historical-entity-data";
import { DatabaseIndexingService } from "../../core/entity/database-indexing/database-indexing.service";

@Injectable({
  providedIn: "root",
})
export class HistoricalDataService {
  constructor(private dbIndexingService: DatabaseIndexingService) {
    this.createHistoricalDataIndex();
  }

  private createHistoricalDataIndex(): Promise<void> {
    const designDoc = {
      _id: "_design/historicalData_index",
      views: {
        by_entity: {
          map: `(doc) => {
            emit([doc.relatedEntity, new Date(doc.date).getTime()]);
          }`,
        },
      },
    };
    return this.dbIndexingService.createIndex(
      designDoc,
      HistoricalEntityData.ENTITY_TYPE
    );
  }

  getHistoricalDataFor(entityId: string): Promise<HistoricalEntityData[]> {
    return this.dbIndexingService.queryIndexDocs(
      HistoricalEntityData,
      "historicalData_index/by_entity",
      {
        startkey: [entityId + "\u0000"],
        endkey: [entityId],
        descending: true,
      }
    );
  }
}
