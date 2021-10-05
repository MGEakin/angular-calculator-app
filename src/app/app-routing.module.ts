import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorsComponent } from './calculators/calculators.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculators', pathMatch: 'full' },
  { path: 'calculators', component: CalculatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
