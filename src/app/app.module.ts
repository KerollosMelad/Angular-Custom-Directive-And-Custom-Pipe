import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { Aa1Component } from './a/aa1/aa1.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { CustomPipePipe } from './pipes/summary';
import { SalaryRangePipe } from './pipes/salary-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    Aa1Component,
    CustomDirectiveDirective,
    CustomPipePipe,
    SalaryRangePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule        //  hint 1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
