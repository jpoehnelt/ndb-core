import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ColumnMapping } from "../column-mapping";

@Component({
  selector: "app-import-review-data",
  templateUrl: "./import-review-data.component.html",
  styleUrls: ["./import-review-data.component.scss"],
})
export class ImportReviewDataComponent {
  @Input() rawData: any[];
  @Input() entityType: string;
  @Input() columnMapping: ColumnMapping[];

  @Output() importComplete = new EventEmitter<void>();

  // TODO: popup confirmation: <app-import-confirm-summary></app-import-confirm-summary>
}
