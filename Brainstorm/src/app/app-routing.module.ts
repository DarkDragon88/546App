import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'thread',
    loadChildren: () => import('./thread/thread.module').then( m => m.ThreadPageModule)
  },
  {
    path: 'user-settings',
    loadChildren: () => import('./user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
  },
  {
    path: 'update-email',
    loadChildren: () => import('./update-email/update-email.module').then( m => m.UpdateEmailPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'update-info',
    loadChildren: () => import('./update-info/update-info.module').then( m => m.UpdateInfoPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },  {
    path: 'conversations',
    loadChildren: () => import('./conversations/conversations.module').then( m => m.ConversationsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'my-ideas',
    loadChildren: () => import('./my-ideas/my-ideas.module').then( m => m.MyIdeasPageModule)
  },
  {
    path: 'create-thread',
    loadChildren: () => import('./create-thread/create-thread.module').then( m => m.CreateThreadPageModule)
  },
  {
    path: 'edit-idea',
    loadChildren: () => import('./edit-idea/edit-idea.module').then( m => m.EditIdeaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
