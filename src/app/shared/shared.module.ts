import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DynamicFormQuestionComponent } from "app/directives/dynamicforms/dynamic-form-question.component";
import { UploaderComponent } from "app/directives/dynamicforms/uploader/uploader.component";
import { UploadTaskComponent } from "app/directives/dynamicforms/uploader/upload-task.component";
import { DropzoneDirective } from "app/directives/dropzone.directive";
import { RatingComponent } from "app/directives/dynamicforms/rating/rating.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule, MatIcon } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule, MatInput } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MaterialModule } from "app/material.module";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { FuseSharedModule } from "@fuse/shared.module";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule, MatList } from "@angular/material/list";
import { CrudlistComponent } from "app/directives/crudlist/crudlist.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatCardModule } from "@angular/material/card";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AlertDialogComponent } from "./components/alert-dialog/alert-dialog.component";
import { SendMailDialogComponent } from "./components/send-mail-dialog/send-mail-dialog.component";
import { MatButtonModule } from "@angular/material/button";
import { SpecialCharacterDirective } from "app/directives/specialCharacters.directive";
@NgModule({
    declarations: [
        DynamicFormQuestionComponent,
        RatingComponent,
        UploaderComponent,
        UploadTaskComponent,
        DropzoneDirective,
        CrudlistComponent,
        AlertDialogComponent,
        SendMailDialogComponent,
        SpecialCharacterDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ScrollingModule,
        MaterialModule,
        FuseSharedModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatStepperModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatListModule,
        MatCardModule,
        MatButtonModule,
    ],
    exports: [
        DynamicFormQuestionComponent,
        RatingComponent,
        MaterialModule,
        MatFormFieldModule,
        MatInputModule,
        CrudlistComponent,
        MatSelectModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatCardModule,
        MatStepperModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatListModule,
        ScrollingModule,
        MatButtonModule,
        AlertDialogComponent,
        SendMailDialogComponent,
        SpecialCharacterDirective,
    ],
    entryComponents: [AlertDialogComponent, SendMailDialogComponent],
})
export class SharedModule {}
