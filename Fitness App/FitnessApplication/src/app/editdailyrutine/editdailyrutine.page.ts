import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-editdailyrutine',
  templateUrl: './editdailyrutine.page.html',
  styleUrls: ['./editdailyrutine.page.scss'],
})
export class EditdailyrutinePage implements OnInit {

  title:string;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('titledaily').then(title => {
      this.title = title;
    });
  }

}
