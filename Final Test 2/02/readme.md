# Test 02

Build a dice tossing game. Each player has two dices which he tosses at the same time.

The user (player 1) plays the game against the browser (player 2).

Each round the user tosses first by clicking on the toss button. At the same time, player 2 (browser) tosses his dices. Each round ends after two players tossed the dices. Print the number of the current round in html (round-number).

After each round, update the scoreboard in html. 

Before starting the implementation, read through all the rules!

Rules:

- The numbers on the dices are added up after each round. If the player 1 gets for instance 4 and 5 his round result is 9. If the player 2 (browser) gets 2 and 3 his round result is 5.
In this round player 1 wins and he gets 1 point on the scoreboard.
  
- If a player gets the same number of both dices he gets 1 extra point even if he looses the round. This rule has one exception. If the user gets twice the number 1 (on both dices number 1), he loses 1 point.

- If a player gets twice number 6 (on both dices number 6) he gets 2 extra points.

- If the players get the same sum number on their dices, everyone gets 1 point (it has to be the same sum, not the same numbers on the dices). Be careful, if both users get twice 6 (6 on each dice), they don't get 2 extra points, they just get 1 point each. Also, if both of the players get twice 1 (on both dices number 1), they get one point each and don't loose any points.

- The game ends when one player reaches 10 points by the end of the round. If both players reach 10 points in the same round, they play an extra round. The winner of the next round wins the game. Repeat that till a game has a winner.

Additional instructions:
- The dices are just two numbers that should be printed in each player game board
