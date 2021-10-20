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
  const hand = [];
  const firstHalf = [];
  const secondHalf = [];

  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let card = { suit: suits[s], value: values[v] };
      fullDeck.push(card);
    }
  }

  switch (amount) {
    case 1:
      return `${fullDeck[0].value} of ${fullDeck[0].suit}`;

    case 5:
      for (let i = 0; i < 5; i++) {
        let card = { suit: fullDeck[i].suit, value: fullDeck[i].value };
        hand.push(card);
      }
      return hand;

    case 'split':
      for (let i = 0; i < 52; i++) {
        let card = { suit: fullDeck[i].suit, value: fullDeck[i].value };
        i % 2 ? firstHalf.push(card) : secondHalf.push(card);
      }
      return [firstHalf, secondHalf];

    default:
      return fullDeck;
  }
}
