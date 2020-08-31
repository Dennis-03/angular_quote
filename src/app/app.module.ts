import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormQuoteComponent } from './form-quote/form-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormQuoteComponent,
    ReactiveFormsModule,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
