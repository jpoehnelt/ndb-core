import { fakeAsync, flush, TestBed, tick } from "@angular/core/testing";
import { DataImportService } from "./data-import.service";
import { PouchDatabase } from "../../core/database/pouch-database";
import { Database } from "../../core/database/database";
import { BackupService } from "../../core/admin/services/backup.service";
import { ConfirmationDialogService } from "../../core/confirmation-dialog/confirmation-dialog.service";
import { MatSnackBar, MatSnackBarRef } from "@angular/material/snack-bar";
import { MatDialogRef } from "@angular/material/dialog";
import { of } from "rxjs";
import { EntityMapperService } from "../../core/entity/entity-mapper.service";
import { EntitySchemaService } from "../../core/entity/schema/entity-schema.service";

describe("DataImportService", () => {
  let db: PouchDatabase;
  let service: DataImportService;

  let mockBackupService: jasmine.SpyObj<BackupService>;
  let confirmationDialogMock: jasmine.SpyObj<ConfirmationDialogService>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;

  function createFileReaderMock(result: string = "") {
    const mockFileReader: any = {
      result: result,
      addEventListener: (str: string, fun: () => any) => fun(),
      readAsText: () => {},
    };
    spyOn(mockFileReader, "readAsText");
    // mock FileReader constructor
    spyOn(window, "FileReader").and.returnValue(mockFileReader);
    return mockFileReader;
  }

  function createDialogMock(
    confirm: boolean
  ): jasmine.SpyObj<MatDialogRef<any>> {
    const mockDialogRef: jasmine.SpyObj<
      MatDialogRef<any>
    > = jasmine.createSpyObj("mockDialogRef", ["afterClosed"]);
    mockDialogRef.afterClosed.and.returnValue(of(confirm));
    confirmationDialogMock.openDialog.and.returnValue(mockDialogRef);
    return mockDialogRef;
  }

  function createSnackBarMock(
    clicked: boolean
  ): jasmine.SpyObj<MatSnackBarRef<any>> {
    const mockSnackBarRef: jasmine.SpyObj<
      MatSnackBarRef<any>
    > = jasmine.createSpyObj("mockSnackBarRef", ["onAction"]);
    if (clicked) {
      mockSnackBarRef.onAction.and.returnValue(of(null));
    } else {
      mockSnackBarRef.onAction.and.returnValue(of());
    }
    mockSnackBar.open.and.returnValue(mockSnackBarRef);
    return mockSnackBarRef;
  }

  beforeEach(() => {
    db = new PouchDatabase().initInMemoryDB();
    mockSnackBar = jasmine.createSpyObj("MatSnackBar", ["open"]);
    mockBackupService = jasmine.createSpyObj("BackupService", [
      "getJsonExport",
      "importCsv",
      "clearDatabase",
      "importJson",
    ]);
    confirmationDialogMock = jasmine.createSpyObj("ConfirmationDialogService", [
      "openDialog",
    ]);
    TestBed.configureTestingModule({
      providers: [
        DataImportService,
        {
          provide: Database,
          useValue: db,
        },
        {
          provide: BackupService,
          useValue: mockBackupService,
        },
        {
          provide: ConfirmationDialogService,
          useValue: confirmationDialogMock,
        },
        {
          provide: MatSnackBar,
          useValue: mockSnackBar,
        },
        EntityMapperService,
        EntitySchemaService,
      ],
    });
    service = TestBed.inject(DataImportService);
    spyOn(db, "put");
  });

  afterEach(async () => {
    await db.destroy();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should open dialog and call backup service and data-import service when loading csv", fakeAsync(() => {
    const mockFileReader = createFileReaderMock();
    mockBackupService.getJsonExport.and.resolveTo(null);
    createDialogMock(true);
    createSnackBarMock(false);
    spyOn(service, "importCsvContentToDB");

    service.handleCsvImport(null);

    expect(mockBackupService.getJsonExport).toHaveBeenCalled();
    tick();
    expect(mockFileReader.readAsText).toHaveBeenCalled();
    expect(confirmationDialogMock.openDialog).toHaveBeenCalled();
    flush();
    expect(service.importCsvContentToDB).toHaveBeenCalled();
  }));

  it("should open dialog and abort data-import when cancelled", fakeAsync(() => {
    const mockFileReader = createFileReaderMock();
    mockBackupService.getJsonExport.and.resolveTo(null);
    createDialogMock(false);
    spyOn(service, "importCsvContentToDB");

    service.handleCsvImport(null);

    expect(mockBackupService.getJsonExport).toHaveBeenCalled();
    tick();
    expect(mockFileReader.readAsText).toHaveBeenCalled();
    expect(confirmationDialogMock.openDialog).toHaveBeenCalled();
    flush();
    expect(service.importCsvContentToDB).not.toHaveBeenCalled();
  }));

  it("should restore database when undo button is clicked", fakeAsync(() => {
    createFileReaderMock();
    mockBackupService.getJsonExport.and.resolveTo("mockRestorePoint");
    mockBackupService.clearDatabase.and.callThrough();
    createDialogMock(true);
    createSnackBarMock(true);

    service.handleCsvImport(null);

    tick();
    expect(mockBackupService.clearDatabase).toHaveBeenCalled();
    expect(mockBackupService.importJson).toHaveBeenCalledWith(
      "mockRestorePoint",
      true
    );
    flush();
  }));

  it("should import csv file and generate searchIndices", async () => {
    const csvString = "_id,name,projectNumber\n" + 'Child:1,"John Doe",123';

    await service.importCsvContentToDB(csvString);

    expect(db.put).toHaveBeenCalledWith(
      jasmine.objectContaining({
        searchIndices: ["John", "Doe", 123],
      }),
      jasmine.anything()
    );
  });
});
