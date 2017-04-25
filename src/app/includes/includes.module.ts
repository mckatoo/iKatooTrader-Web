import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, TopsearchComponent, SidebarComponent]
})
export class IncludesModule { }
