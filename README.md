# Cards game for two players

## How to run and test the application

- Install dependencies by running `npm install` in project directory
- Run the tests by running `npm run test`
- Start the game by running `npm run play`

## Notes
It was a very open ended problem and could have been designed in different ways. I thought of making it a console application where a user will need to interact for every round of the game but I went ahead with a more simpler approach. When you run the application, it starts the game and displays the result of every round on the console without any user interaction. At the end, it displays the overall winner of the game on the console.

You can use `src/config/config.ts` to update the number of players in the game or number of cards in a deck and the application will automatically pick up the changes given that cards can be equally divided among all the players.

If you make any config changes, please run `npm run build` before starting the game with `npm run play`