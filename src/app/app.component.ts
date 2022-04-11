import { Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from './app.model';
import { CardService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ftmt-challenge-preview-cards';
  cards: Card[] = [];
  currentCardIndex = 0;
  currentCard: Card| any = null;

  constructor(public cardsService: CardService) {}

  ngOnInit() {
    this.cards = this.cardsService.getCards();
    this.currentCard = this.cards[0];
    console.log("cards: ", this.cards);
  }

  onChangeCard(move: number) {
    this.changeCardIndex(move);
    this.currentCard = this.cards[this.currentCardIndex];
  }

  private changeCardIndex(move:number){
    const numOfCards = this.cards.length;

    if(move > 0){
      if(this.currentCardIndex != (numOfCards-1)){
        this.currentCardIndex++;
      } else {
        this.currentCardIndex = 0
      }
    } else {
      if(this.currentCardIndex != 0){
        this.currentCardIndex--;
      } else {
        this.currentCardIndex = (numOfCards-1);
      }
    }
  }
}
