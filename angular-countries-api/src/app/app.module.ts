import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './features/title/components/title-bar/title-bar.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { SearchBarComponent } from './features/search/components/search-bar/search-bar.component';

@NgModule({
  declarations: [AppComponent, TitleBarComponent, LayoutComponent, SearchBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
