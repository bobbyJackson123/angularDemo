import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { FrameComponent } from './content/frame/frame.component';
import { ChildOneComponent } from './content/child-one/child-one.component';
import { ChildTwoComponent } from './content/child-two/child-two.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent

  },
  {
    path: 'content', loadChildren: './content/contentRouting.module#ContentRoutingModule'
  }
  
  /* ,
  {
    path: 'content',
    component: FrameComponent,
    children: [
      {path: '', redirectTo: 'childOne', pathMatch:"full"},
      {path: 'childOne', component: ChildOneComponent},
      {path: 'childTwo', component: ChildTwoComponent}
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
