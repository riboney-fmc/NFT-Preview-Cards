import { Injectable } from "@angular/core";
import { Card } from "./app.model";
import PokemonJSON from '../assets/pokemon.json';
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class CardService {

    private cards: Card[];
    // placeholder for when we add a form that allows users to add cards to the array
    //private cardsSubject = new Subject<Card[]>();

    constructor(){
        this.cards = this.initCards(PokemonJSON);
    }

    // id: number;
    // title: string;
    // desc: string;
    // price: string;
    // time: string;

    private initCards (jsonData: {title: string, desc: string}[]) :Card[] {
        let counter = 0;
        //let price = () => Math.round(((((Math.random() * 9.0) + 1) + Number.EPSILON) * 100) / 100);

        const cards: Card[] = jsonData.map(item => {
            return {
                id: ++counter,
                title: item.title,
                desc: item.desc,
                price: (Math.random() * 9.0) + 1,
                time: Math.floor(Math.random() * 10) + 1
            }
        })

        cards.splice(0, 0, {
            id: 0,
            title: "Equilibrium #3429",
            desc: "Our Equilibrium collection promotes balance and calm",
            price: 0.041,
            time: 3
        })

        return cards;
    }

    getCards(): Card[] {
        return [...this.cards];
    }
}