import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { GalleryPage } from '../gallery/gallery';
import { ProfilePage } from '../profilo/profilo';
import { TrophyPage } from '../trophy/trophy';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ChatPage;
  tab3Root: any = GalleryPage;
  tab4Root: any = ProfilePage;
  tab5Root: any = TrophyPage;
  tab6Root: any = SearchPage;
  constructor() {

  }
}
