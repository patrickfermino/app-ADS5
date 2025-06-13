import { Component } from '@angular/core';
import { IonBackButton } from '@ionic/angular/directives/navigation/ion-back-button';
import { IonIcon, IonInput, IonItem, IonLabel } from '@ionic/angular/directives/proxies';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonList  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonToolbar, IonList, IonModal, IonLabel, IonInput, IonIcon, IonBackButton, IonItem, IonLabel ],
})
export class HomePage {
  constructor() {}
}
