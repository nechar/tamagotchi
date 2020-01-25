# Code Challenge

## What's a Tamagotchi?

A Tamagotchi was a virtual pet created in the 90's. You interacted and raised it through various activities including eating, playing, and making it sleep. Tamagotchis went through several life cycles (egg, teen, adult, elderly) and could die from lack of attention or old age. (ref: http://en.wikipedia.org/wiki/Tamagotchi)

## Challenge Brief

Using create-react-app, create a basic Tamagotchi game.

- Minimum requirements, the Tamagotchi must be:
- Capable of going to sleep on its own, losing health from hunger and pooping on its own without prompting
- Capable of being fed
- Capable of being put to bed
- Capable of aging from birth through to death

Git should be used for submission and for version control. The app should be tested.

We don't expect you to be a designer, we are more interested in how you design, structure and write code. Animations are not required.

# Solution

## Instructions to run

`git clone https://github.com/nechar/tamagotchi.git` to clone the repo

`cd tamagotchi` to get into the directory

`yarn install` OR `npm install` to install the dependencies

`yarn start` OR `npm run start` to run the development server

`http://localhost:3000/` to view the project

You may want to change the value of `ONE_TOMAGOTCHI_HOUR` from `config.js` file based on what you like test.
(I recommend speeding up only to test the `death-by-age` feature)
