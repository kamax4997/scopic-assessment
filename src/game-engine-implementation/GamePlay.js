import Hero from './Hero';
import Enemy from './Enemy';
import Boss from './Boss';

export const Config = {
    hero: {
        maxHealth: 100,
        hitDamage: 50,
        experienceToNextLevel: 150
    },
    enemy: {
        maxHealth: 30,
        hitDamage: 15,
        experienceGiven: 50
    },
    boss: {
        maxHealth: 130,
        hitDamage: 70,
        experienceGiven: 100
    }
}

export default class GamePlay {
    static fight(firstCharacter, secondCharacter) {
        if (firstCharacter?.lifes === 2 || secondCharacter?.lifes === 2) {
            console.log("-", firstCharacter.health, secondCharacter.health);
            let i = 0;
            while (firstCharacter.health > 0 && secondCharacter.health > 0) {
                console.log("--", firstCharacter.health, secondCharacter.health);
                if (i % 2 === 0) {
                    firstCharacter.attack(secondCharacter);
                } else {
                    secondCharacter.attack(firstCharacter);
                }
                console.log(i, firstCharacter.health, secondCharacter.health);
                i++;
            }
        }
    }
}
