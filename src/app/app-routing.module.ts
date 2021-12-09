import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './comps/errorpage/errorpage.component';
import { TechheadingsComponent } from './comps/techheadings/techheadings.component';
import { TopheadingsComponent } from './comps/topheadings/topheadings.component';

const routes: Routes = [
  
  {path : '', component : TopheadingsComponent},
  {path : 'tech', component : TechheadingsComponent},
  {path : '**', component : ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
