# Cards game for two players

## How to run and test the application

- Install dependencies by running `npm install` in project directory
- Run the tests by running `npm run test`
- Start the game by running `npm run play`

## Notes
It was a very open ended problem and could have been designed in different ways. I thought of making it a console application where a user will need to interact for every round of the game but I went ahead with a more simpler approach. When you run the application, it starts the game and displays the result of every round on the console without any user interaction. At the end, it displays the overall winner of the game on the console.

You can use `src/config/config.ts` to update the number of players in the game or number of cards in a deck and the application will automatically pick up the changes given that cards can be equally divided among all the players.

## Structure
The project code is available under the `src` directory:

- lib/shuffle.ts - shuffle function using Fisher-Yates shuffle algorithm but can easily be replaced with any other method
- Deck.ts - Deck class
    - I wanted to make `shuffleCards` method private and use it in `splitCards` methods internally without exposing it but I kept in public and separate since these two don't relate together and maybe we need `shuffleCards` separately when we extend the game
- Player.ts - Player class
- Game.ts - Game class

- Index.ts - Combines all the classes to construct and play the game