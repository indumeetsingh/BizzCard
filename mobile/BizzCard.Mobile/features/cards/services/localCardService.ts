import { CardService } from './cardService';
import { BusinessCard } from '../domain/BusinessCard';

let cards: BusinessCard[] = [];

export class LocalCardService implements CardService {
  async getCards() {
    return cards;
  }

  async addCard(card: BusinessCard) {
    cards.push(card);
  }
}
