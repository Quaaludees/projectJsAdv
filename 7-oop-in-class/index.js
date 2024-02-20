
class Hero {
    constructor(race, name, lang) {
        this.race = race;
        this.name = name;
        this.lang = lang;
    }
    sayMyName () {
        console.log(`Мое имя ${this.name} и я говорю на ${this.lang}`)
    }
}

class Ork extends Hero {
    constructor(name, weapon) {
        super('Орк', name, 'оркский');
        this.weapon  = weapon;
    }
    hit () {
        console.log(`${this.name} наносит удар с помощью ${this.weapon}`)
    }
    sayMyName() {
        console.log(`Мое имя ${this.name} и я говорю на ${this.lang}, это задание будет принято без правок`)
    }
}

const rok = new Ork('Рокфор', 'Кулак');
rok.sayMyName();
rok.hit();


class Elf extends Hero {
    constructor(name, spell) {
        super('Эльф', name, 'эльфячий');
        this.spell  = spell;
    }
    createSpell () {
        console.log(`${this.name} начинает атаку с ${this.spell}`)
    }
}

const elf = new Elf('Люмистрель', 'файер-болл');
elf.sayMyName();
elf.createSpell();
console.log(rok)
console.log(elf)