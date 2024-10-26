import { defineStore } from 'pinia'
import { useUsersStore } from './users';
import { ref } from 'vue';

export const CardType = Object.freeze({
    AMEX: { name: 'Amex', image: '/logos/amex.png' },
    MASTERCARD: { name: 'Mastercard', image: '/logos/mastercard.png' },
    VISA: { name: 'Visa', image: '/logos/visa.png' }
});

export const useCardsStore = defineStore('card  s', () => {
    const initialCards = [
        {
            id: 1,
            bank: CardType.AMEX,
            type: 'credit',
            number: 378282246310,
            CVV: 123,
            expirationMonth: 12,
            expirationYear: 2025,
            ownerId: 2,
            cardHolder: 'Jane Smith',
        },
        {
            id: 2,
            bank: CardType.MASTERCARD,
            type: 'debit',
            number: 510510510510,
            CVV: 123,
            expirationMonth: 12,
            expirationYear: 2025,
            ownerId: 2,
            cardHolder: 'Jane Smith',
        },
        {
            id: 3,
            bank: CardType.VISA,
            type: 'credit',
            number: 411111111111,
            CVV: 123,
            expirationMonth: 12,
            expirationYear: 2025,
            ownerId: 1,
            cardHolder: 'John Doe'
        }
    ] 
    
    const userStore = useUsersStore()
    const cards = ref(initialCards)

    function getCards() {
        return cards.value
    }

    function getUserDebitCards() {
        const user = userStore.getUserLoggedIn()
        return cards.value.filter(card => card.ownerId === user.id && card.type === 'debit')
    }

    function getUserCreditCards() {
        const user = userStore.getUserLoggedIn()
        return cards.value.filter(card => card.ownerId === user.id && card.type === 'credit')
    }

    function addCard(cardNumber, cardHolder, expirationMonth, expirationYear, bank, CVV) {
        const user = userStore.getUserLoggedIn()
        let cardBank = Object.values(CardType).find(type => type.name.toLowerCase() === bank.toLowerCase());
        if (!cardBank) {
            cardBank = { name: bank, image: '/logos/mastercard.png' }; //@TODO: cambiar la imagen default
        }
        const newCard = {
            id: cards.value.length + 1,
            bank: cardBank,
            type: 'credit',
            number: cardNumber,
            CVV,
            expirationMonth,
            expirationYear,
            ownerId: user.id,
            cardHolder
        }
        cards.value.push(newCard)
    }

    function removeCard(cardId) {
        const cardIndex = cards.value.findIndex(card => card.id === cardId)
        if (cardIndex === -1) 
            return
        cards.value.splice(cardIndex, 1)
    }

    return { cards, getCards, getUserDebitCards, getUserCreditCards , addCard, removeCard }
})