import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms' ;
import { AppComponent } from './app.component';
import { ApiserviceService } from './apiservice.service';
import { HttpmsgService } from './httpmsg.service';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ApiserviceService, HttpmsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
