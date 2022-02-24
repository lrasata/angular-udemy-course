import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { AppCmpBindingComponent } from './app-cmp-binding/app-cmp-binding.component';
import { GameControlComponent } from './app-cmp-binding/game-control/game-control.component';
import { OddComponent } from './app-cmp-binding/game-control/odd/odd.component';
import { EvenComponent } from './app-cmp-binding/game-control/even/even.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TransformWithPipeComponent } from './transform-with-pipe/transform-with-pipe.component';
import { ShortenPipe } from './transform-with-pipe/shorten.pipe';
import { ReversePipe } from './transform-with-pipe/reverse.pipe';
import { FilterPipe } from './transform-with-pipe/filter.pipe';
import { SortPipe } from './transform-with-pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    DataBindingComponent,
    DirectivesComponent,
    AppCmpBindingComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    TdFormsComponent,
    ReactiveFormsComponent,
    TransformWithPipeComponent,
    ShortenPipe,
    ReversePipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
