module.exports = {
  getCards: getCards,
};

function getCards(amount) {
    const suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    const values = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Jack',
      'Queen',
      'King',
    ];

    let fullDeck = [];

    for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            let card = {suit: suits[s], value: values[v]};
            fullDeck.push(card);
        }
    }

  
}
