import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design.module';
import { HomeComponent } from './home/home.component';
import { AppConfig } from './shared/app-config.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EthereumService } from './services/ethereum.service';
import { AuthenticationService } from './auth/authentication.service';
import { LoginDialogComponent } from './auth/login-dialog/login-dialog.component';
import { AlertService } from './shared/alert.service';
import { RegisterDialogComponent } from './auth/register-dialog/register-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AuthGuard } from './auth/auth.guard';
import { UserService } from './services/user.service';

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialDesignModule,
    AgmCoreModule.forRoot({
      apiKey: 'SIzaSyCG99G7GvLoyjzOitwhqjfYTHYofNIPgrM' // change API key cypher
    })
  ],
  providers: [
    AuthenticationService,
    AlertService,
    UserService,
    EthereumService,
    AuthGuard,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    }
  ],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
