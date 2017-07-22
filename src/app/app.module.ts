import { CdkTableModule } from '@angular/cdk';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule, MdMenuModule,
  MdSelectModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTableModule,
  MdToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { MatchDialog } from './match/match.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WatchComponent } from './watch/watch.component';
import { WindbotComponent } from './windbot/windbot.component';
import { YGOProService } from './ygopro.service';
import { ResultDialog } from './result/result.dialog';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    NewRoomComponent,
    RoomListComponent,
    MatchDialog,
    WindbotComponent,
    WatchComponent,
    ToolbarComponent,
    ResultDialog,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdSelectModule,
    MdCheckboxModule,
    MdButtonModule,
    MdSlideToggleModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdTableModule,
    CdkTableModule,
    MdListModule,
    MdDialogModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdAutocompleteModule,
    ReactiveFormsModule,
    JsonpModule,
    MdMenuModule
  ],
  providers: [YGOProService],
  bootstrap: [AppComponent],
  entryComponents: [MatchDialog, ResultDialog],
})
export class AppModule {
}
