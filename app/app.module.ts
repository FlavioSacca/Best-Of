import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChatPage } from '../pages/chat/chat';
import { GalleryPage } from '../pages/gallery/gallery';
import { ProfilePage } from '../pages/profilo/profilo';
import { TrophyPage } from '../pages/trophy/trophy';
import { SearchPage } from '../pages/search/search';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ChatPage,
    GalleryPage,
    HomePage,
    ProfilePage,
    TrophyPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatPage,
    GalleryPage,
    HomePage,
    ProfilePage,
    TrophyPage,
    SearchPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
