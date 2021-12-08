import { moduleMetadata } from "@storybook/angular";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Meta, Story } from "@storybook/angular/types-6-0";
import { EntitySubrecordComponent } from "./entity-subrecord.component";
import { EntitySubrecordModule } from "../entity-subrecord.module";
import { Note } from "../../../../child-dev-project/notes/model/note";
import { EntityMapperService } from "../../../entity/entity-mapper.service";
import { DatePipe } from "@angular/common";
import { DemoNoteGeneratorService } from "../../../../child-dev-project/notes/demo-data/demo-note-generator.service";
import { ConfigService } from "../../../config/config.service";
import { EntitySchemaService } from "../../../entity/schema/entity-schema.service";
import { DemoChildGenerator } from "../../../../child-dev-project/children/demo-data-generators/demo-child-generator.service";
import { DemoUserGeneratorService } from "../../../user/demo-user-generator.service";
import { ConfigurableEnumDatatype } from "../../../configurable-enum/configurable-enum-datatype/configurable-enum-datatype";
import { MatNativeDateModule } from "@angular/material/core";
import { FormFieldConfig } from "../../entity-form/entity-form/FormConfig";
import { ChildrenModule } from "../../../../child-dev-project/children/children.module";
import { ChildrenService } from "../../../../child-dev-project/children/children.service";
import { of, Subject } from "rxjs";
import * as faker from "faker";
import { AttendanceLogicalStatus } from "../../../../child-dev-project/attendance/model/attendance-status";
import { MockSessionModule } from "../../../session/mock-session.module";
import { defineAbility } from "@casl/ability";
import { EntityAbility } from "../../../permissions/permission-types";
import {
  AbilityService,
  detectEntityType,
} from "../../../permissions/ability.service";

const configService = new ConfigService();
const schemaService = new EntitySchemaService();
schemaService.registerSchemaDatatype(
  new ConfigurableEnumDatatype(configService)
);
const childGenerator = new DemoChildGenerator({ count: 10 });
const userGenerator = new DemoUserGeneratorService();
const data = new DemoNoteGeneratorService(
  { minNotesPerChild: 5, maxNotesPerChild: 10, groupNotes: 2 },
  childGenerator,
  userGenerator,
  schemaService,
  configService
).generateEntities();
// Change this to alter the permission settings
const ability = defineAbility<EntityAbility>(
  (can, cannot) => {
    can("update", Note);
    cannot("create", Note);
    cannot("delete", Note);
  },
  { detectSubjectType: detectEntityType }
);

export default {
  title: "Core/EntitySubrecord",
  component: EntitySubrecordComponent,
  decorators: [
    moduleMetadata({
      imports: [
        EntitySubrecordModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        ChildrenModule,
        MockSessionModule.withState(),
      ],
      providers: [
        {
          provide: EntityMapperService,
          useValue: {
            save: () => Promise.resolve(),
            remove: () => Promise.resolve(),
            load: () =>
              Promise.resolve(
                faker.random.arrayElement(childGenerator.entities)
              ),
            loadType: () => Promise.resolve(childGenerator.entities),
          },
        },
        { provide: EntitySchemaService, useValue: schemaService },
        { provide: ConfigService, useValue: configService },
        DatePipe,
        {
          provide: ChildrenService,
          useValue: {
            getChild: () =>
              of(faker.random.arrayElement(childGenerator.entities)),
          },
        },
        { provide: EntityAbility, useValue: ability },
        {
          provide: AbilityService,
          useValue: { abilityUpdateNotifier: new Subject() },
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<EntitySubrecordComponent<Note>> = (
  args: EntitySubrecordComponent<Note>
) => {
  EntitySubrecordComponent.prototype.newRecordFactory = () => new Note();
  EntitySubrecordComponent.prototype.entityConstructor = Note;
  return {
    component: EntitySubrecordComponent,
    props: args,
  };
};

export const Primary = Template.bind({});
Primary.args = {
  columns: <FormFieldConfig[]>[
    { id: "date" },
    { id: "subject" },
    { id: "category" },
    { id: "children" },
  ],
  records: data,
};

export const WithAttendance = Template.bind({});
WithAttendance.args = {
  columns: <FormFieldConfig[]>[
    { id: "date" },
    { id: "subject" },
    { id: "category" },
    { id: "children" },
    {
      id: "present",
      label: "Present",
      view: "NoteAttendanceCountBlock",
      additional: { status: AttendanceLogicalStatus.PRESENT },
      noSorting: true,
    },
    {
      id: "absent",
      label: "Absent",
      view: "NoteAttendanceCountBlock",
      additional: { status: AttendanceLogicalStatus.ABSENT },
      noSorting: true,
    },
  ],
  records: data,
};
