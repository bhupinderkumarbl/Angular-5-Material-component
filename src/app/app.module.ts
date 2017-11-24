import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  {
    MatButtonModule, MatRadioModule, MatCheckboxModule, MatSliderModule,
    MatSnackBarModule, MatInputModule, MatTableModule, MatStepperModule, MatFormFieldModule, MatSnackBar,
    MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
// import {MdButtonModule} from '@angular/button';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

const appRoutes: Routes = [
    {path: 'CheckboxComponent', component: CheckboxComponent},
    {path: 'DatepickerComponent', component: DatepickerComponent},

];

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        DatepickerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        MatAutocompleteModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatButtonModule,
        MatSliderModule,
        MatSnackBarModule,
        MatInputModule,
        MatTableModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,



        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        )

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
