import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudioComponent } from './studio/studio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { StudioManageComponent } from './studio-manage/studio-manage.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { MatPaginatorModule } from  '@angular/material/paginator';
import { ReservationService } from './services/Reservation/reservation.service';
import { UserService } from './services/User/user.service';
import { StudioService } from './services/Studio/studio.service';
import { ReservationComponent } from './reservation/reservation.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StudioComponent,
    NavbarComponent,
    HomeComponent,
    StudioManageComponent,
    FooterComponent,
    AccountComponent,
    ReservationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [
    ReservationService,
    UserService,
    StudioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
