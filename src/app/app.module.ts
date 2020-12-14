import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';


import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AppService } from './shared/services/app.service';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DesignationComponent } from './designation/designation.component';
import { DesignationDialogComponent } from './designation/designation-dialog/designation-dialog.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import {ToastrModule} from 'ngx-toastr';
import { MessageDialogComponent } from './shared/message-dialog/message-dialog.component';
import { DesignationSecurityComponent } from './designation/designation-security/designation-security.component';
import { MatTableModule } from '@angular/material/table';
import { DemoMaterialModule } from './material-module';
import { NotificationService } from './Services/notification.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    ToastrModule.forRoot(),
    MatTableModule,
    DemoMaterialModule
 

    /*AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
    */
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DesignationDialogComponent,
    DesignationComponent,
    MessageDialogComponent,
    DesignationSecurityComponent
  ],
  entryComponents:[MessageDialogComponent,DesignationDialogComponent],
  providers: [AppService, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue : {hasBackdrop: true}},NotificationService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
