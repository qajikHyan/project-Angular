import { SliderComponent } from './pages/slider/slider.component';
import { ProductComponent } from './pages/product/product.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'slider', component: SliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
