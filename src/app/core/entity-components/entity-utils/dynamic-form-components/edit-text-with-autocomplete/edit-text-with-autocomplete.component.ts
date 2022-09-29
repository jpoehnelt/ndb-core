import { Component } from "@angular/core";
import { EditComponent, EditPropertyConfig } from "../edit-component";
import { Entity } from "../../../../entity/model/entity";
import { BehaviorSubject } from "rxjs";
import { DynamicComponent } from "../../../../view/dynamic-components/dynamic-component.decorator";
import { EntityMapperService } from "../../../../entity/entity-mapper.service";
import { FormControl } from "@angular/forms";
import { ConfirmationDialogService } from "app/core/confirmation-dialog/confirmation-dialog.service";

/**
 * This component creates a normal text input with autocomplete.
 * Compared to the {@link EditSingleEntityComponent} this does not just assign the ID to the form control
 * but instead completely overwrites the form with the values taken from the selected entity.
 * This is especially useful when instead of creating a new entity, an existing one can also be selected (and extended).
 *
 * When a value is already present the autocomplete is disabled, and it works like a normal text input.
 *
 * E.g.
 * ```json
 * {
 *     "id": "title",
 *     "edit": "EditTextWithAutocomplete",
 *     "additional": {
 *       "entityType": "RecurringActivity",
 *       "relevantProperty": "linkedGroups",
 *       "relevantValue": "some-id",
 *     },
 *   }
 * ```
 */
@DynamicComponent("EditTextWithAutocomplete")
@Component({
  selector: "app-edit-text-with-autocomplete",
  templateUrl: "./edit-text-with-autocomplete.component.html",
})
export class EditTextWithAutocompleteComponent extends EditComponent<string> {
  /**
   * Config passed using component
   */
  additional: {
    /**
     * The entity type for which autofill should be created.
     * This should be the same type as for which the form was created.
     */
    entityType: string;
    /**
     * (optional) a property which should be filled with certain value, if an entity is selected.
     */
    relevantProperty?: string;
    /**
     * (optional) required if `relevantProperty` is set.
     * The value to be filled in `selectedEntity[relevantProperty]`.
     */
    relevantValue?: string;
  };

  entities: Entity[] = [];
  autocompleteEntities = new BehaviorSubject(this.entities);
  selectedEntity?: Entity;
  initialValues;
  autocompleteDisabled = true;
  lastValue = "";

  constructor(
    private entityMapperService: EntityMapperService,
    private confirmationDialog: ConfirmationDialogService
  ) {
    super();
  }

  keyup() {
    this.lastValue = this.formControl.value;
    this.updateAutocomplete();
  }

  updateAutocomplete() {
    let val = this.formControl.value;
    if (
      !this.autocompleteDisabled &&
      val !== this.initialValues[this.formControlName]
    ) {
      let filteredEntities = this.entities;
      if (val) {
        filteredEntities = this.entities.filter(
          (entity) =>
            entity !== this.selectedEntity &&
            entity.toString().toLowerCase().includes(val.toLowerCase())
        );
      }
      this.autocompleteEntities.next(filteredEntities);
    }
  }

  async onInitFromDynamicConfig(config: EditPropertyConfig<string>) {
    super.onInitFromDynamicConfig(config);
    if (!this.formControl.value) {
      // adding new entry - enable autocomplete
      this.additional = config.formFieldConfig.additional;
      const entityType = this.additional.entityType;
      this.entities = await this.entityMapperService.loadType(entityType);
      this.entities.sort((e1, e2) =>
        e1.toString().localeCompare(e2.toString())
      );
      this.autocompleteDisabled = false;
      this.initialValues = this.parent.getRawValue();
    }
  }

  async selectEntity(selected: Entity) {
    if (!this.valuesChanged() || (await this.userConfirmsOverwrite(selected))) {
      this.selectedEntity = selected;
      this.addRelevantValueToRelevantProperty(this.selectedEntity);
      this.setAllFormValues(this.selectedEntity);
      this.initialValues = this.parent.getRawValue();
      this.autocompleteEntities.next([]);
    } else {
      this.formControl.setValue(this.lastValue);
    }
  }

  private userConfirmsOverwrite(selected: Entity) {
    return this.confirmationDialog.getConfirmation(
      $localize`:Discard the changes made:Discard changes`,
      $localize`Do you want to discard the changes made and load '${selected}'?`
    );
  }

  private valuesChanged() {
    return Object.keys(this.initialValues).some(
      (prop) =>
        prop != this.formControlName &&
        this.initialValues[prop] != this.parent.controls[prop].value
    );
  }

  private addRelevantValueToRelevantProperty(selected: Entity) {
    if (
      this.additional.relevantProperty &&
      this.additional.relevantValue &&
      !selected[this.additional.relevantProperty].includes(
        this.additional.relevantValue
      )
    ) {
      selected[this.additional.relevantProperty].push(
        this.additional.relevantValue
      );
    }
  }

  private setAllFormValues(selected: Entity) {
    Object.keys(selected)
      .filter((key) => selected.getSchema().has(key))
      .forEach((key) => {
        if (this.parent.controls.hasOwnProperty(key)) {
          this.parent.controls[key].setValue(this.selectedEntity[key]);
        } else {
          // adding missing controls so saving does not lose any data
          this.parent.addControl(key, new FormControl(selected[key]));
        }
      });
  }
}