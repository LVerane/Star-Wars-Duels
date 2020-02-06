# Star-Wars-Duels

## Getting Started

### Installation

Clone the repo

```sh
git clone https://github.com/LVerane/Star-Wars-Duels.git
```

Or use the deployed page

[https://lverane.github.io/Star-Wars-Duels](https://lverane.github.io/Star-Wars-Duels)

#

## Functionality & Rules

There are four characters to choose from, each having their own attack, counter attack and health. You see the health of the characters as you select them and the attacks/counters are technically hidden, but you can math them out if you want. Here's how it works:

- You select a character to be your hero. You will then see it's name, picture and current health under "Selected Hero"
- You select a character to be your (first) enemy. You will then see it's name, picture and current health under "Selected Enemy"
- You attack, dealing you attack damage to your enemy's health. Your enemy counters, dealing his counter attack damage to your health
- The catch: Your attack damage increases by its base value every time you attack, while the enemy's counter will not increase
- You defeat an enemy when their life reaches 0. You are defeated if your life reaches 0

#

## The Goal

Defeat all three enemies without being defeated yourself. Pretty simple, right?

#

## Additional Information

Here's some additional information about the page

- It keeps track of your wins and losses since you started playing
- You can click the "Restart" button at any time to cancel the current game and start a new one. That will not affect the win/loss count
- In case you didn't read this or forgot what you should be doing there are basic instructions at the top of the page with what you should do next

#

## Tips

Order matters. Starting against enemies with lower counter attack damage is easier than taking on the big hitters first
