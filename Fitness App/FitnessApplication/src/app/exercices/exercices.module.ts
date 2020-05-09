import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExercicesPageRoutingModule } from './exercices-routing.module';
import { ExercicesPage } from './exercices.page';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercicesPageRoutingModule
  ],
  declarations: [ExercicesPage],
  providers: [Network, Dialogs]
})
export class ExercicesPageModule {}
