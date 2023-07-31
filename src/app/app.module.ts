import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppHelperService } from './services/app-helper.service';
import { LinkedListComponent } from './components/data-structures/linked-list/linked-list.component';
import { StackComponent } from './components/data-structures/stack/stack.component';
import { QueueComponent } from './components/data-structures/queue/queue.component';
import { TreesComponent } from './components/data-structures/trees/trees.component';
import { ArraysComponent } from './components/data-structures/arrays/arrays.component';
import { HeapsComponent } from './components/data-structures/heaps/heaps.component';
import { SortingComponent } from './components/algorithms/sorting/sorting.component';
import { SearchComponent } from './components/algorithms/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinkedListComponent,
    StackComponent,
    QueueComponent,
    TreesComponent,
    ArraysComponent,
    HeapsComponent,
    SortingComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
