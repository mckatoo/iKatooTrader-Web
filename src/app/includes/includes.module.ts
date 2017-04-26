import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SearchComponent, SidebarComponent],
  exports: [
    NavbarComponent,
    SearchComponent,
    SidebarComponent
  ]
})
export class IncludesModule { }
