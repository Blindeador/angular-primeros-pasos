import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { CardComponent } from '../gifs/components/card/card.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
  ]
})
export class SharedModule { }
