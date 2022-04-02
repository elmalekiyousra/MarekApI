import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StudioComponent } from './studio/studio.component';
import { StudioManageComponent } from './studio-manage/studio-manage.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LegalComponent } from './legal/legal.component';
import { ContactComponent } from './contact/contact.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { NavbaruserComponent } from './navbaruser/navbaruser.component'
import { AddStudioComponent } from './studio/add-studio/add-studio.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'studioManage', component: StudioManageComponent },
  { path: 'account', component: AccountComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'navbaruser', component: NavbaruserComponent },
  { path: 'add-studio', component: AddStudioComponent },

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
