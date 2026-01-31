import { useEffect, useState } from 'react';
import { BusinessCard } from '../domain/BusinessCard';
import { LocalCardService } from '../services/localCardService';

const service = new LocalCardService();

export function useCards() {
  const [cards, setCards] = useState<BusinessCard[]>([]);

  useEffect(() => {
    service.getCards().then(setCards);
  }, []);

  const addCard = async (card: BusinessCard) => {
    await service.addCard(card);
    setCards(await service.getCards());
  };

  return { cards, addCard };
}

