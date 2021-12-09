import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingsComponent } from './comps/topheadings/topheadings.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsappService } from './services/newsapp.service';
import { TechheadingsComponent } from './comps/techheadings/techheadings.component';
import { ErrorpageComponent } from './comps/errorpage/errorpage.component';
import { FooterComponent } from './comps/footer/footer.component';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingsComponent,
    TechheadingsComponent,
    ErrorpageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [
    NewsappService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
