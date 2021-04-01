import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {ToastrModule} from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RentalComponent } from './components/rental/rental.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NavbarComponent,
    RentalComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
