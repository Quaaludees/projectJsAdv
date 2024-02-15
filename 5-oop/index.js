const Hero = function (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
    this.sayMyName = function () {
        console.log(`Мое имя ${this.name} и я говорю на ${this.lang}`)
    }
};

const Ork = function (name, weapon) {
    this.weapon = weapon;
    this.__proto__ = new Hero('орк', name, 'оркский');
    this.hit = function () {
        console.log(`${this.name} наносит удар с помощью ${this.weapon}`)
    }
}

const ork = new Ork('Рокфор', 'кулак');


const Elf = function (name, spell) {
    this.spell = spell;
    this.__proto__ = new Hero('эльф', name, 'эльфячий');
    this.createSpell = function () {
        console.log(`${this.name} наносит удар с помощью заклинания ${this.spell}`)
    }
}

const elf = new Elf('Люмистрель', 'огненный-шар');
ork.sayMyName()
elf.sayMyName()
ork.hit()
elf.createSpell()















//
// class Hero {
//     constructor(race, name, lang) {
//         this.race = race;
//         this.name = name;
//         this.lang = lang;
//     }
//     sayMyName () {
//         console.log(`Мое имя ${this.name} и я говорю на ${this.lang}`)
//     }
// }
//
// class Ork extends Hero {
//     constructor(name, weapon) {
//         super('Орк', name, 'оркский');
//         this.weapon  = weapon;
//     }
//     hit () {
//         console.log(`${this.name} наносит удар с помощью ${this.weapon}`)
//     }
// }
//
// const rok = new Ork('Рокфор', 'Кулак');
// rok.sayMyName();
// rok.hit();
//
//
// class Elf extends Hero {
//     constructor(name, spell) {
//         super('Эльф', name, 'эльфячий');
//         this.spell  = spell;
//     }
//     createSpell () {
//         console.log(`${this.name} начинает атаку с ${this.spell}`)
//     }
// }
//
// const elf = new Elf('Люмистрель', 'файер-болл');
// elf.sayMyName();
// elf.createSpell();
// console.log(rok)
// console.log(elf)

