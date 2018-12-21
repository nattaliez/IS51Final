import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TestScoreComponent } from './test-score/test-score.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    MainNavComponent,
    TestScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
