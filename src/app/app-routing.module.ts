import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { ComponentDirectiveComponent } from './modules/demo/component-directive/component-directive.component';
import { CustomDirectiveComponent } from './modules/demo/custom-directive/custom-directive.component';
import { MainDemoComponent } from './modules/demo/main-demo/main-demo.component';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { StructuralDirectiveComponent } from './modules/demo/structural-directive/structural-directive.component';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';
import { ListUserComponent } from './modules/exercice/list-user/list-user.component';
import { MainExerciceComponent } from './modules/exercice/main-exercice/main-exercice.component';

const routes: Routes = [
  {path : 'demo', component : MainDemoComponent, children : [
    {path : 'bindings', component : BindingsComponent},
    {path : 'pipes', component : PipesComponent},
    {path : 'component-directive', component : ComponentDirectiveComponent},
    {path : 'structural-directive', component : StructuralDirectiveComponent},
    {path : 'custom-directive', component : CustomDirectiveComponent}
  ]},
  {path : 'exercice', component : MainExerciceComponent, children : [
    {path : 'chronometre', component : ChronometreComponent},
    {path : 'list-user', component : ListUserComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
