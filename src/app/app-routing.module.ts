import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { MainDemoComponent } from './modules/demo/main-demo/main-demo.component';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';
import { MainExerciceComponent } from './modules/exercice/main-exercice/main-exercice.component';

const routes: Routes = [
  {path : 'demo', component : MainDemoComponent, children : [
    {path : 'bindings', component : BindingsComponent},
    {path : 'pipes', component : PipesComponent}
  ]},
  {path : 'exercice', component : MainExerciceComponent, children : [
    {path : 'chronometre', component : ChronometreComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
