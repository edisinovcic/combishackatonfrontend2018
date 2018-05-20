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

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginDialogComponent,
    RegisterDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MaterialDesignModule
  ],
  providers: [
    AuthenticationService,
    AlertService,
    EthereumService,
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
