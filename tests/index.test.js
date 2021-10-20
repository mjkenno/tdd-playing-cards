const { getCards } = require('../deck');
const deck = require('../deck');

test('test setup working', () => {
  expect(true).toBeTruthy();
});

test('returns a card', () => {
  const amount = 1;
  const expected = 'Ace of Spades';
  const actual = deck.getCards(amount);
  expect(actual).toBe(expected);
});

test('gets all the cards', () => {
  const amount = 52;
  const expected = 52;
  const hand = deck.getCards(amount);
  const actual = hand.length;
  expect(actual).toBe(expected);
});

test('get 5 random cards', () => {
  const amount = 5;
  const expected = 5;
  const hand = deck.getCards(amount);
  actual = hand.length;
  expect(actual).toBe(expected);
});

test('no two cards are the same', () => {
  // const firstHalf = deck.getCards('split 1');
  // const secondHalf = deck.getCards('split 2');

  const [firstHalf, secondHalf] = deck.getCards('split');
  const deckChecker = (deck1, deck2) => {
    return deck1.every((val, ind) => val === deck2[ind]);
  };

  expected = false;
  actual = deckChecker(firstHalf, secondHalf);

  expect(actual).toBe(expected);
});
