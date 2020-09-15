import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { Aa1Component } from './a/aa1/aa1.component';


// hint 2
const routes: Routes = [
   {path: 'a', component: AComponent, children: [
     {path: ':name/:id', component: Aa1Component}                         // hint 5
   ]},
   {path: 'b', component: BComponent},
   {path: 'c', component: CComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],   // hint 3
  exports: [RouterModule]                    // hint 4
})
export class AppRoutingModule { }
