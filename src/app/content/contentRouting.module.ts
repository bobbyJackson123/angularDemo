import {ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FrameComponent } from './frame/frame.component';
import { TopbarComponent } from './topbar/topbar.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: FrameComponent,
        children: [
          {path: '', redirectTo: 'childOne', pathMatch:"full"},
          {path: 'childOne', component: ChildOneComponent},
          {path: 'childTwo', component: ChildTwoComponent}
        ]
      }
])

@NgModule({
    declarations: [
        ChildOneComponent,
        ChildTwoComponent,
        FrameComponent,
        TopbarComponent

      ],
    imports: [RouterModule, routing],
    exports: [RouterModule],
    bootstrap: [FrameComponent]
  })
  export class ContentRoutingModule { }