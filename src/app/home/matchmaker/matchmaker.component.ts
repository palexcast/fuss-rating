import {Component, OnInit} from '@angular/core';
import {AppConstants} from '../../shared/constants/constant.variable';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-matchmaker',
  styleUrls: ['matchmaker.component.scss'],
  templateUrl: 'matchmaker.component.html'
})
export class MatchmakerComponent implements OnInit {

  selectedGame: string;
  gameTypes: any;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.gameTypes = AppConstants.GameType;
  }

  createGame(gameType: string) {
    this.selectedGame = gameType;
  }
}

