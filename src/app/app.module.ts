import { MyFirstPipe } from './pipe/myfirstPipe.pipe';
import { FeatureModule } from './home/feature/feature.module';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNextComponentComponent } from './my-next-component/my-next-component.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MyCustomPipePipe } from './pipe/my-custom-pipe.pipe';
import { CustomDir } from './Directives/customDir.directive';
import { UserService } from './service/getUserData.service';
import { Routes, RouterModule } from '@angular/router';
import { HomePageNewComponent } from './home-page-new/home-page-new.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const router:Routes=[
  {path:'home' ,component:HomeComponent},
    {path:'userprofile' ,component:UserProfileComponent},
    {path:'about' ,component:AboutComponent},
    {path:'**', component:HomeComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent,
    LoginComponent,
    FooterComponent,
    MyFirstPipe,
    MyCustomPipePipe,
    CustomDir,
    HomePageNewComponent,
    UserProfileComponent

  ],
  imports: [
    BrowserModule,FeatureModule,HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
