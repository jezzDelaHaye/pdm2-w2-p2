function preload()
{
    //const brian = new Animal("Brian", 95, 10);
    //const pete = new FurryAnimal("Peter", 50, 3, color(255, 0, 0),);
    //const paul = new Parrot('paul', 50, 10, color(255, 255, 0))
}

function setup() 
{
    createCanvas(500, 500);

    console.log(brian.call());
    console.log(pete.call());
}


/**
 * Represents an Animal
 */
class Animal 
{
    #name;
    #healthLevel;
    #age;
    #posX;
    #posY;
    #img;


    /**
     * Creates a new Animal
     * @param {string} name 
     * @param {number} health A number between 0 and 100
     * @param {number} age 
     */
    constructor(name, health, age, img) 
    {
        this.#name = name;
        this.#healthLevel = health;
        this.#age = age;
        this.#img = img;
        // This line uses JavaScript methods in place of p5.js round() and random()
        this.#posX = Math.round(Math.random() * 600);
        this.#posY = Math.round(Math.random() * 500);
    }


    /**
     * Gets the animal's x coordinate
     * @returns {number}
     */
    getX() 
    {
        return this.#posX;
    }


    /**
     * Gets the animal's y coordinate
     * @returns {number}
     */
    getY() 
    {
        return this.#posY;
    }


    /**
     * Returns the animal's health level.
     * @returns {number}
     */
    getHealthLevel() 
    {
        return this.#healthLevel;
    }


    /**
     * Decreases the animal's health. The health level cannot fall below 0.
     */
    decreaseHealth() 
    {
        this.#healthLevel = Math.max(0, this.#healthLevel - 1);
    }


    /**
     * Gets the animal's age
     * @returns {number}
     */
    getAge() 
    {
        return this.#age;
    }


    /**
     * Returns a message from the animal
     * @returns {string}
     */
    call() 
    {
        return `Hello, my name is ${this.#name}`;
    }


    /**
     * Move the animal to the given x position
     * @param {number} newPosX The new x position
     */
    moveX(newPosX) 
    {
        this.#posX = newPosX;
    }


    /**
     * Move the animal to the given y position
     * @param {number} newPosY The new y position
     */
    moveY(newPosY) 
    {
        this.#posY = newPosY;
    }

    display()
    {
        if (this.#img)
        {
            image(this.#img, this.#posX, this.#posY);
        }
    }
}


/**
 * A subclass representing animals with fur
 */
class FurryAnimal extends Animal 
{
    #furColour;

    constructor(name, health, age, colour, img) 
    {
        super(name, health, age, img);
        this.#furColour = colour;
    }


    /**
     * Gets the animal's fur colour.
     * @returns {Color}
     */
    getFurColour() 
    {
        return this.#furColour;
    }
}

class Bird extends Animal
{
    #beakType;

    constructor(name, health, age, type, img)
    {
        super(name, health, age, img)
        this.#beakType = type;
    }

    getBeakType()
    {
        return this.#beakType;
    }

    decreaseHealth() 
    {
        super.decreaseHealth()
        super.decreaseHealth()
        super.decreaseHealth()
        super.decreaseHealth()
        super.decreaseHealth()

    }
}

class Cat extends FurryAnimal
{
    constructor(name, health, age, colour, img)
    {
        super(name, health, age, colour, img)
    }

    jumpAt(bird)
    {
        this.moveX(bird.getX()) 
        this.moveY(bird.getY()) 
        bird.decreaseHealth()
    }

    call()
    {
        return `meow`;
    }
}

class Dog extends FurryAnimal
{
    constructor(name, health, age, colour, img)
    {
        super(name, health, age, colour, img)
    }

    barkAt(cat)
    {
        if (cat.posX === Dog.posX && cat.posY === Dog.posY) 
        {
            return 'Woof!'
        }
    }
}

class Parrot extends Bird
{
    #phrases 
    constructor(name, health, age, type, img)
    {
        super(name, health, age, type, img)
        this.#phrases = ["Squawk!"]
    }

    mimic(animal)
    {
        this.#phrases.push(animal.call())
    }

    call()
    {
        for (let i = 0; i < this.#phrases.length; i++)
        {
            return (this.#phrases[i])
        }
    }
}
