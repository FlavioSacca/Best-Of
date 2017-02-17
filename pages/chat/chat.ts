import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from "../profilo/profilo";

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {}

  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(ProfilePage);

  }

}
