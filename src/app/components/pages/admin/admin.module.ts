import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from './admin.component';
import { NavComponent } from '../../parts/_admin/nav/nav.component';
import { BoardComponent } from '../../parts/_admin/board/board.component';
import { AddprojectComponent } from '../../parts/_admin/board/_boards/addproject/addproject.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main', component: AdminComponent, children: [
      { path: 'projects', component: AddprojectComponent },
      { path: 'fff', component: BoardComponent },
    ]
  },
  // { path: 'project-list', component: AdminComponent },
  // { path: 'messages', component: AdminComponent },
  { path: '**', redirectTo: 'auth' }
])

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    NavComponent,
    BoardComponent,
    AddprojectComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class AdminModule {
}

