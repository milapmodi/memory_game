# Memory Game Project

The Matching card game is purely based on HTML, CSS and Javascript.

The game logic is divided in 5 major parts

* Start Game
* Shuffle
* Matching Cards

## Start Game

At the start of the game shuffle function is called to resset the layout of the cards, so each time card position will be replaced and player will be presented with new game from the given deck of card. Move counter will be set to 0. and timer also need to be set to 0.

## Shuffle

This is a simple logic to shuffle array items from he given numbers of cards.

## Matching Cards

This functionality has been divided in multiple parts.

* openBox
* checkMatching
* matchingMoveCount
* gameTimer
* gameResult
* reloadGame

###### openBox
Upon click event the card will be opened and pushed to respective array.

###### checkMatching
Based on css class I have tried to match the cards so if the cards are matching the they will be attached with open enable class so if player successfully matches the card both cards will be attached with enable class and both cards will kept open as a result. If the cards are different then cards will be attached with unmatched class and evnet will close both the cards for next turn.

Upon each event of click the move counter will be incremented.

Once all the cards and enabled player will be presented with End game popup with information of total time taken and total number of moves player took to complete the game. 

Based on total number of moves player will be given star rating within the modal popup.

# Enjoy !!
