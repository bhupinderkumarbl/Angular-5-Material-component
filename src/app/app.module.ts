import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import  {
    MatButtonModule, MatRadioModule, MatCheckboxModule, MatSliderModule,
    MatSnackBarModule, MatInputModule, MatTableModule, MatStepperModule, MatFormFieldModule, MatSnackBar,
    MatAutocompleteModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatChipsModule,
    MatSidenavModule, MatMenuModule, MatTabsModule, MatCardModule, MatExpansionModule, MatProgressBarModule,
    MatProgressSpinnerModule
} from '@angular/material';
// import {MdButtonModule} from '@angular/button';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { GridComponent } from './grid/grid.component';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { SlidenavComponent } from './slidenav/slidenav.component';
import { MenuComponent } from './menu/menu.component';
import { TabComponent } from './tab/tab.component';
import { CardComponent } from './card/card.component';
import { AccordianComponent } from './accordian/accordian.component';
import { StepperComponent } from './stepper/stepper.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

const appRoutes: Routes = [
    {path: 'CheckboxComponent', component: CheckboxComponent},
    {path: 'DatepickerComponent', component: DatepickerComponent},
    {path: 'GridComponent', component: GridComponent},
    {path: 'ButtonComponent', component: ButtonComponent},
    {path: 'ChipsComponent', component: ChipsComponent},
    {path: 'SlidenavComponent', component: SlidenavComponent},
    {path: 'MenuComponent', component: MenuComponent},
    {path: 'TabComponent', component: TabComponent},
    {path: 'CardComponent', component: CardComponent},
    {path: 'AccordianComponent', component: AccordianComponent},
    {path: 'StepperComponent', component: StepperComponent},
    {path: 'ProgressbarComponent', component: ProgressbarComponent},
    {path: 'ProgressSpinnerComponent', component: ProgressbarComponent},
    {path: 'LoginComponent', component: LoginComponent},
    {path: 'DashboardComponent', component: DashboardComponent},
    {path: 'SnackbarComponent', component: SnackbarComponent},


];

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        DatepickerComponent,
        GridComponent,
        ButtonComponent,
        ChipsComponent,
        SlidenavComponent,
        MenuComponent,
        TabComponent,
        CardComponent,
        AccordianComponent,
        StepperComponent,
        ProgressbarComponent,
        ProgressSpinnerComponent,
        LoginComponent,
        DashboardComponent,
        SnackbarComponent,


    ],
    imports: [
        BrowserModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatCardModule,
        MatTabsModule,
        MatMenuModule,
        MatSidenavModule,
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
        MatGridListModule,
        MatChipsModule,




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
