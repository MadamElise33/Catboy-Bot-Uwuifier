import { getElement } from '../utils';
import { Uwuifier } from '../index';
import { Seed } from '../seed';

const uwuifier = new Uwuifier({
  spaces: { faces: 0.3, actions: 0.05, stutters: 0.1 },
  words: 1,
  exclamations: 0
});

const senteces = [
  'I had to get a tetanus vaccine when i stabbed my foot by accident',
  'When you say tonight, at what time approximately do you mean',
  'I need someone to go through the coop thing with me',
  "I'm really struggling to put this story toghether, you we're chilling with a dude who has decided that woman sucks",
  'No there has been this lockdown in the Netherlands so check out this site: https://www.who.int/health-topics',
  "Wow you're old as fuck, you're basically my grandpa you know!"
];
const words = ['Stabbed', 'Tonight', 'Through', 'Struggling', 'Netherlands', 'Grandpa'];

console.log(`Please take a look if these senteces look uwuified:`);

test(`Uwufy a word`, () => {
  const normalWord = getElement(words);
  const uwuifiedWord = uwuifier.uwuifyWords(normalWord);

  console.log(`\nNormal word 📔: ${normalWord}`);
  console.log(`\nUwuified word 📘: ${uwuifiedWord}`);

  expect(typeof uwuifiedWord).toBe('string');
  expect(uwuifiedWord.length).toBeGreaterThanOrEqual(normalWord.length);
});

test('Uwufy a sentence', () => {
  const normalSentence = getElement(senteces);
  const uwufiedSentence = uwuifier.uwuifySentence(normalSentence);

  console.log(`\nNormal sentence 📔: ${normalSentence}`);
  console.log(`\nUwuified sentence 📘: ${uwufiedSentence}`);

  expect(typeof uwufiedSentence).toBe('string');
  expect(uwufiedSentence.length).toBeGreaterThanOrEqual(normalSentence.length);
});

test('Check consistency of number generator', () => {
  const firstSeed = new Seed('test');
  const firstRandom = firstSeed.random();

  const secondSeed = new Seed('test');
  const secondRandom = secondSeed.random();

  expect(firstRandom).toEqual(secondRandom);
});

test('Check consistency of uwuified sentence', () => {
  const normalSentence = getElement(senteces);
  const firstSentence = uwuifier.uwuifySentence(normalSentence);
  const secondSentence = uwuifier.uwuifySentence(normalSentence);

  expect(firstSentence).toEqual(secondSentence);
});
