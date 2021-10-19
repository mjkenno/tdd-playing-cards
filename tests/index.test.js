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

