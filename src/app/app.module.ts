import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LeftsideComponent } from './leftside/leftside.component';
import { RightsideComponent } from './rightside/rightside.component';
import { LeftbrownComponent } from './leftside/leftbrown/leftbrown.component';
import { BottomBlueComponent } from './bottom-blue/bottom-blue.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LeftsideComponent,
    RightsideComponent,
    LeftbrownComponent,
    BottomBlueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
