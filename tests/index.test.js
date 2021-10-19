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
