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

import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, PercentPipe} from '@angular/common';
import { ChildDetailsComponent } from './child-details/child-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { ChildrenListComponent } from './children-list/children-list.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule, MatCheckboxModule,
  MatDialogModule,
  MatIconModule, MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule, MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ChildrenService} from './children.service';
import {AttendanceBlockComponent} from './attendance/attendance-block/attendance-block.component';
import {ChildAttendanceComponent} from './attendance/child-attendance/child-attendance.component';
import {UiHelperModule} from '../ui-helper/ui-helper.module';
import {ChildBlockComponent} from './child-block/child-block.component';
import { ChildrenCountDashboardComponent } from './children-count-dashboard/children-count-dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AttendanceAverageDashboardComponent } from './attendance/attendance-average-dashboard/attendance-average-dashboard.component';
import { AttendanceWarningsDashboardComponent } from './attendance/attendance-warnings-dashboard/attendance-warnings-dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { ChildSelectComponent } from './child-select/child-select.component';
import {SchoolsModule} from '../schools/schools.module';
import { EducationalMaterialComponent } from './educational-material/educational-material.component';
import {AserComponent} from './aser/aser.component';
import {FilterPipeModule} from 'ngx-filter-pipe';
import { NotesManagerComponent } from './notes/notes-manager/notes-manager.component';
import { AddMonthAttendanceComponent } from './attendance/add-month-attendance/add-month-attendance.component';
import { AttendanceDaysComponent } from './attendance/attendance-days/attendance-days.component';
import { AttendanceDetailsComponent } from './attendance/attendance-details/attendance-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddDayAttendanceComponent } from './attendance/add-day-attendance/add-day-attendance.component';
import { AttendanceWeekDashboardComponent } from './attendance/attendance-week-dashboard/attendance-week-dashboard.component';
import {AttendanceDayBlockComponent} from './attendance/attendance-days/attendance-day-block.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FilterPipeModule,
    UiHelperModule,
    SchoolsModule,
  ],
  declarations: [
    AttendanceBlockComponent,
    ChildBlockComponent,
    ChildAttendanceComponent,
    NotesComponent,
    ChildDetailsComponent,
    ChildrenListComponent,
    ChildrenCountDashboardComponent,
    AttendanceAverageDashboardComponent,
    AttendanceWarningsDashboardComponent,
    NoteDetailsComponent,
    ChildSelectComponent,
    EducationalMaterialComponent,
    AserComponent,
    NotesManagerComponent,
    AddMonthAttendanceComponent,
    AttendanceDayBlockComponent,
    AttendanceDaysComponent,
    AttendanceDetailsComponent,
    AddDayAttendanceComponent,
    AttendanceWeekDashboardComponent,
  ],
  providers: [ChildrenService, DatePipe, PercentPipe],
  exports: [
    ChildBlockComponent,
    ChildSelectComponent,
    ChildrenCountDashboardComponent,
    AttendanceAverageDashboardComponent,
    AttendanceWarningsDashboardComponent,
    AttendanceWeekDashboardComponent,
    AttendanceDaysComponent,
  ],
  entryComponents: [NoteDetailsComponent, AttendanceDetailsComponent],
})
export class ChildrenModule { }