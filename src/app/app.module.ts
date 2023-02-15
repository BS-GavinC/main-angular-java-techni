import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { MainDemoComponent } from './modules/demo/main-demo/main-demo.component';
import { MainExerciceComponent } from './modules/exercice/main-exercice/main-exercice.component';
import { BindingsComponent } from './modules/demo/bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './modules/demo/pipes/pipes.component';
import { TempPipe } from './shared/pipes/temp.pipe';
import { ChronometreComponent } from './modules/exercice/chronometre/chronometre.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MainDemoComponent,
    MainExerciceComponent,
    BindingsComponent,
    PipesComponent,
    TempPipe,
    ChronometreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
