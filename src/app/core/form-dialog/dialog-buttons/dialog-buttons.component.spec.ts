import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from "@angular/core/testing";

import { DialogButtonsComponent } from "./dialog-buttons.component";
import { EntityFormService } from "../../entity-components/entity-form/entity-form.service";
import { Entity } from "../../entity/model/entity";
import { MatDialogRef } from "@angular/material/dialog";
import { AlertService } from "../../alerts/alert.service";
import { Child } from "../../../child-dev-project/children/model/child";
import { Router } from "@angular/router";
import { MockedTestingModule } from "../../../utils/mocked-testing.module";
import { FormGroup } from "@angular/forms";
import {
  EntityRemoveService,
  RemoveResult,
} from "../../entity/entity-remove.service";
import { firstValueFrom, of, Subject } from "rxjs";
import { UnsavedChangesService } from "../../entity-components/entity-details/form/unsaved-changes.service";

describe("DialogButtonsComponent", () => {
  let component: DialogButtonsComponent;
  let fixture: ComponentFixture<DialogButtonsComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<any>>;
  let backdropClick = new Subject<any>();
  let closed = new Subject<void>();

  beforeEach(waitForAsync(() => {
    dialogRef = jasmine.createSpyObj(["close", "backdropClick", "afterClosed"]);
    dialogRef.backdropClick.and.returnValue(backdropClick);
    dialogRef.afterClosed.and.returnValue(closed);
    TestBed.configureTestingModule({
      imports: [DialogButtonsComponent, MockedTestingModule.withState()],
      providers: [{ provide: MatDialogRef, useValue: dialogRef }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogButtonsComponent);
    component = fixture.componentInstance;
    component.entity = new Entity();
    component.form = new FormGroup({});
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should close the dialog when saving is successful", fakeAsync(() => {
    const formService = TestBed.inject(EntityFormService);
    const result = new Entity();
    spyOn(formService, "saveChanges").and.resolveTo(result);
    const closeSpy = jasmine.createSpy();
    TestBed.inject(MatDialogRef).close = closeSpy;

    component.save();
    tick();

    expect(closeSpy).toHaveBeenCalledWith(result);
  }));

  it("should show an alert when saving fails", fakeAsync(() => {
    const formService = TestBed.inject(EntityFormService);
    const message = "Error message";
    spyOn(formService, "saveChanges").and.rejectWith(new Error(message));
    const alertSpy = jasmine.createSpy();
    TestBed.inject(AlertService).addDanger = alertSpy;
    const closeSpy = jasmine.createSpy();
    TestBed.inject(MatDialogRef).close = closeSpy;

    component.save();
    tick();

    expect(alertSpy).toHaveBeenCalledWith(message);
    expect(closeSpy).not.toHaveBeenCalled();
  }));

  it("should not disable the form when creating a new entity", () => {
    expect(component.form.disabled).toBeFalsy();
  });

  it("should create the details route", () => {
    const child = new Child();
    child._rev = "existing";
    component.entity = child;
    TestBed.inject(Router).resetConfig([
      { path: "child/:id", redirectTo: "/" },
    ]);

    component.ngOnInit();

    expect(component.detailsRoute).toBe(`${Child.route}/${child.getId()}`);
  });

  it("should close the dialog if a entity is deleted", () => {
    const removeSpy = spyOn(TestBed.inject(EntityRemoveService), "remove");
    removeSpy.and.returnValue(of(RemoveResult.REMOVED));

    component.delete();

    expect(dialogRef.close).toHaveBeenCalled();
  });

  it("should only close the dialog if user confirms to discard changes", fakeAsync(() => {
    const confirmed = new Subject<boolean>();
    spyOn(
      TestBed.inject(UnsavedChangesService),
      "checkUnsavedChanges"
    ).and.returnValue(firstValueFrom(confirmed));

    backdropClick.next(undefined);
    tick();

    expect(dialogRef.close).not.toHaveBeenCalled();

    confirmed.next(true);
    tick();

    expect(dialogRef.close).toHaveBeenCalled();
  }));

  it("should reset pending changes when dialog is closed", () => {
    const unsavedChanges = TestBed.inject(UnsavedChangesService);
    unsavedChanges.pending = true;

    closed.next();

    expect(unsavedChanges.pending).toBeFalse();
  });
});
