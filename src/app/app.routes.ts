import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { LibraryComponent } from './MyComponents/LifecycleHooks/library/library.component';

export const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutComponent },
    { path: 'lifecycle-hooks', component: LibraryComponent }
];
