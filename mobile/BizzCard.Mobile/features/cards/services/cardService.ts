import { BusinessCard } from '../domain/BusinessCard';

export interface CardService {
  getCards(): Promise<BusinessCard[]>;
  addCard(card: BusinessCard): Promise<void>;
}
