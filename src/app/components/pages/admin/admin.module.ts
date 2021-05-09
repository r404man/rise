import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from './admin.component';
import { NavComponent } from '../../parts/_admin/nav/nav.component';
import { BoardComponent } from '../../parts/_admin/board/board.component';
import { AddprojectComponent } from '../../parts/_admin/board/_boards/addproject/addproject.component';
import { AdminMainComponent } from '../admin-main/admin-main.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { MessageDetailComponent } from '../message-detail/message-detail.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main-page', component: AdminComponent, children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'messages/:messageId', component: MessageDetailComponent },
      { path: 'project-list', component: ProjectListComponent }
    ]
  },
  // { path: 'messages', component: MessagesComponent },
  // { path: 'project-list', component: ProjectListComponent },
  { path: '**', redirectTo: 'auth' }
])

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    NavComponent,
    BoardComponent,
    AddprojectComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    routing
  ]
})
export class AdminModule {
}

