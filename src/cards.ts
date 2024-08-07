// const CLUBS = '♣️'
// const DIAMONDS = '♦️'
// const HEARTS = '♥️'
// const SPADES = '♠️'
const CLUBS = Symbol('c')
const DIAMONDS = Symbol('d')
const HEARTS = Symbol('h')
const SPADES = Symbol('s')

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const VALUES = [
  'King',
  'Ace',
  'Deuce',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Jack',
  'Queen',
]
console.log(VALUES.length)
const SHORT_VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

let deck: Array<bigint> = new Array(52)
// initialize the deck with the cards in order
for (let i = 1; i < 53; i++) {
  deck[i - 1] = BigInt(i)
}
console.log(deck.length)

function shuffle(deck: number[]) {
  for (let i = 52; i > 0; --i) {
    console.log('i is ' + i)
    let randomIndex = Math.floor(Math.random() * (i + 1))
    console.log('randomIndex is ' + randomIndex)
    console.log('type of the card is ' + typeof deck[i])
    let randomCard = deck[randomIndex]
    let cardToSwap = deck[i]
    deck[i] = randomCard;
    deck[randomIndex] = cardToSwap
  }
}

function cardFullName(card: bigint) {
  let value = VALUES[card % 13n]
  let suit = SUITS[Math.floor((card - 1) / 13)]
  return value + ' of ' + suit
}

function printDeck() {
  for (let card of deck) {
    console.log(cardFullName(card))
  }
}

console.log(deck)
printDeck()

shuffle(deck)
console.log('Deck is now shuffled!')
console.log(deck)
let sortedDeck = deck.slice()
sortedDeck.sort()
console.log(sortedDeck)
printDeck()
