import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import moment from "moment/moment";
import { FormControl } from "@angular/forms";
import { ConfirmationDialogService } from "../../../../core/confirmation-dialog/confirmation-dialog.service";
import { MappingDialogData } from "../import-column-mapping.component";

@Component({
  selector: "app-date-value-mapping",
  templateUrl: "./date-value-mapping.component.html",
  styleUrls: ["./date-value-mapping.component.scss"],
})
export class DateValueMappingComponent {
  format = new FormControl("");
  valid = false;
  values: { value: string; parsed?: Date }[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: MappingDialogData,
    private confirmation: ConfirmationDialogService,
    private dialog: MatDialogRef<any>
  ) {
    this.values = this.data.values.map((value) => ({ value }));
    this.format.valueChanges.subscribe(() => this.checkDateValues());
    this.format.setValue(this.data.col.additional);
  }

  checkDateValues() {
    this.format.setErrors(undefined);
    this.values.forEach((val) => {
      const date = moment(val.value, this.format.value?.toUpperCase(), true);
      if (date.isValid()) {
        val.parsed = date.toDate();
      } else {
        delete val.parsed;
        this.format.setErrors({ parsingError: true });
      }
    });
    this.values.sort((v) => (v.parsed ? 1 : 0));
  }

  async save() {
    const confirmed =
      !this.format.errors ||
      (await this.confirmation.getConfirmation(
        $localize`Ignore values?`,
        $localize`Some values don't have a mapping and will not be imported. Are you sure you want to keep it like this?`
      ));
    if (confirmed) {
      this.data.col.additional = this.format.value?.toUpperCase();
      this.dialog.close();
    }
  }
}