import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-contentgeneralrutine',
  templateUrl: './contentgeneralrutine.page.html',
  styleUrls: ['./contentgeneralrutine.page.scss'],
})
export class ContentgeneralrutinePage implements OnInit {

  title:string;
  text:string[] = ["diaria 1", "diaria 2", "diaria 3", "diaria 4", "diaria 5", "diaria 6", "diaria 7", "diaria 8", "diaria 9", "diaria 10"];

  constructor(private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    
    this.storage.get('rutine').then(title => {
      this.title=title;
    });
   
  }

  editdailyrutine(title:string) {

    console.log("edit daily rutine");
    this.storage.set('titledaily',title);
    this.navCtrl.navigateForward('/editdailyrutine');
  }


}

