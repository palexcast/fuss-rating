import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HomeRouterModule} from './home.route';
import {HomeComponent} from './home.component';
import {MatchmakerComponent} from './matchmaker/matchmaker.component';
import {GameSettingsComponent} from './matchmaker/game-settings/game-settings.component';
import {ScoreComponent} from './score/score.component';
import {GamesComponent} from './games/games.component';
import {HistoryComponent} from './history/history.component';
import {RouterModule} from '@angular/router';
import {RegisterMatchComponent} from './register-winner/register-match.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { Register1vs1MatchComponent } from './register-winner/register1vs1-match/register1vs1-match.component';
import { Register2vs2MatchComponent } from './register-winner/register2vs2-match/register2vs2-match.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouterModule,
    NgSelectModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    MatchmakerComponent,
    GameSettingsComponent,
    ScoreComponent,
    GamesComponent,
    RegisterMatchComponent,
    HistoryComponent,
    Register1vs1MatchComponent,
    Register2vs2MatchComponent,
  ],
  providers: [],
})
export class HomeModule {
}
