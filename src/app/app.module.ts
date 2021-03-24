import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component'

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    UpdateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
