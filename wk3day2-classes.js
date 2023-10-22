// Classes
class Cat{
    legs = 4;
    hasWhiskers = true;
    family = 'felidae';

    meow() {
        console.log('meow');
    }
    purr() {
        console.log('*purrs*');
    }
    walk() {
        console.log('walking...');
    }
}

const Mittens = new Cat;
const Whiskers = new Cat;

console.log(Mittens);
console.log(Whiskers);

Mittens.meow();
Mittens.purr();
Mittens.walk();

Whiskers.meow();
Whiskers.purr();
Whiskers.walk();

// Constructors
class Pirate {
    constructor(name, crackers, hasScurvy) {
        this.name = name;
        this.crackers = crackers;
        this.hasScurvy = hasScurvy;
    }
    call() {
        console.log("Yo-ho-ho!")
    }
    eatOrange() {
        this.hasScurvy = false;
    }
    feedPolly() {
        crackers -= 1;
    }
}

const Alf = new Pirate('Alf', 5, false);
const Rolf = new Pirate('Rolf', 0, false);
const Trelf = new Pirate('Trelf', 4, false);
const jollyRoger = [Alf, Rolf, Trelf];

const Dave = new Pirate('Dave', 9, true);
const Jonas = new Pirate('Jonas', 4, false);
const Lockheed = new Pirate('Lockheed', 6, true);
const blackPearl = [Dave, Jonas, Lockheed];

console.log('-- Jolly Roger: -- ');
jollyRoger.forEach(pirate => {
    console.log(pirate.name);
    console.log(pirate.crackers);
    console.log(pirate.hasScurvy);
});
console.log('-- Black Pearl: --');
blackPearl.forEach(pirate => {
    console.log(pirate.name);
    console.log(pirate.crackers);
    console.log(pirate.hasScurvy);
});
