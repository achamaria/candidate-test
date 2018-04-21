import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { baseURL } from './shared/baseurl';


import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';
import { HighlightDirective } from './directives/highlight.directive';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

import { RugService } from "./services/rug.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RugdetailComponent } from './rugdetail/rugdetail.component';
import { RugformComponent } from './rugform/rugform.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    RugdetailComponent,
    RugformComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [
    RugService,
    {provide: 'BaseURL', useValue: baseURL}
  ],
  entryComponents: [
    RugformComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
