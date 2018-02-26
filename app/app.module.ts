import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
  ],
  imports: [
	BrowserModule,
	HttpModule,
	ScrollToModule.forRoot(),
	RouterModule,
	RouterModule.forRoot(AppRoutes),
	ReactiveFormsModule,
	FormsModule,
	MatSliderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
