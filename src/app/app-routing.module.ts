import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LinkedListComponent } from './components/data-structures/linked-list/linked-list.component';
import { ArraysComponent } from './components/data-structures/arrays/arrays.component';
import { HeapsComponent } from './components/data-structures/heaps/heaps.component';
import { QueueComponent } from './components/data-structures/queue/queue.component';
import { StackComponent } from './components/data-structures/stack/stack.component';
import { TreesComponent } from './components/data-structures/trees/trees.component';
import { SearchComponent } from './components/algorithms/search/search.component';
import { SortingComponent } from './components/algorithms/sorting/sorting.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'linked-list', component: LinkedListComponent },
    { path: 'array', component: ArraysComponent },
    { path: 'heaps', component: HeapsComponent },
    { path: 'queue', component: QueueComponent },
    { path: 'stack', component: StackComponent },
    { path: 'tree', component: TreesComponent },
    { path: 'search', component: SearchComponent },
    { path: 'sort', component: SortingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
