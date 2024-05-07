import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SingupComponent } from './Components/singup/singup.component';
import { CreateBinComponent } from './Components/create-bin/create-bin.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './auth.guard';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { GetSingleCodeComponent } from './Components/get-single-code/get-single-code.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'singup', component: SingupComponent },
  { path: '', component: HomePageComponent },
  { path: 'singleBin/:id', component: GetSingleCodeComponent },
  { path: 'bin', component: CreateBinComponent, canActivate: [authGuard] },
  { path: '**', component: NotFoundComponent },
];
