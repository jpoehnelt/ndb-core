import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { Todo } from "../model/todo";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from "@angular/material/dialog";
import { DetailsComponentData } from "../../../core/entity-components/entity-subrecord/row-details/row-details.component";
import { TodoService } from "../todo.service";
import { FormFieldConfig } from "../../../core/entity-components/entity-form/entity-form/FormConfig";
import {
  EntityForm,
  EntityFormService,
} from "../../../core/entity-components/entity-form/entity-form.service";
import { NgIf } from "@angular/common";
import { TodoCompletionComponent } from "../todo-completion/todo-completion/todo-completion.component";
import { DialogCloseComponent } from "../../../core/common-components/dialog-close/dialog-close.component";
import { EntityFormComponent } from "../../../core/entity-components/entity-form/entity-form/entity-form.component";
import { DialogButtonsComponent } from "../../../core/form-dialog/dialog-buttons/dialog-buttons.component";

@Component({
  selector: "app-todo-details",
  templateUrl: "./todo-details.component.html",
  styleUrls: ["./todo-details.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    MatDialogModule,
    DialogCloseComponent,
    EntityFormComponent,
    TodoCompletionComponent,
    DialogButtonsComponent,
  ],
})
export class TodoDetailsComponent implements OnInit {
  @Input() entity: Todo;

  @Output() close = new EventEmitter<Todo>();

  formColumns: FormFieldConfig[][];
  form: EntityForm<Todo>;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: DetailsComponentData,
    private dialogRef: MatDialogRef<any>,
    private todoService: TodoService,
    private entityFormService: EntityFormService
  ) {
    this.entity = data.entity as Todo;
    this.formColumns = [data.columns];
  }

  ngOnInit(): void {
    this.form = this.entityFormService.createFormGroup(
      [].concat(...this.formColumns),
      this.entity
    );
  }

  async completeTodo() {
    if (this.form.dirty) {
      // we assume the user always wants to save pending changes rather than discard them
      await this.entityFormService.saveChanges(this.form, this.entity);
    }
    await this.todoService.completeTodo(this.entity);
    this.dialogRef.close();
  }

  uncompleteTodo() {
    return this.todoService.uncompleteTodo(this.entity);
  }
}
