import { ClickOutsideDirective } from './click-outside.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChartsModule } from 'ng2-charts';
import { VisitorsComponent } from './component/charts/visitors/visitors.component';
import { DoughnutComponent } from './component/charts/doughnut/doughnut.component';
import { SliderComponent } from './pages/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    UserHeaderComponent,
    ClickOutsideDirective,
    ChatComponent,
    VisitorsComponent,
    DoughnutComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
