import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/pages/main/main.component';
import { ProjectdetailComponent } from './components/pages/projectdetail/projectdetail.component';
import { AdminComponent } from './components/pages/admin/admin.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'project/:id', component: ProjectdetailComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
