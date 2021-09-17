import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents(null)
    // .withComponents([EditorComponent])
  ],
  declarations: [ AppComponent],
  entryComponents: [],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
