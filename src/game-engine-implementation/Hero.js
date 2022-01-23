import Character from './Character';
import { Config } from './GamePlay';

export default class Hero extends Character {
    experience;
    lifes;

    constructor(level) {
        super();
        this.level = level;
        this.maxHealth = this.level * Config.hero.maxHealth;
        this.hitDamage = this.level * Config.hero.hitDamage;
        this.health = this.maxHealth;
        this.lifes = 2;
    }

    die() {
        super.die();
        if (this.lifes > 0) {
            this.health = this.maxHealth * 0.7;
            this.isDead = false;
            this.lifes -= 1;
        }
    }

    win(character) {
        super.win();
        if (character.lifes === 0) {
            this.experience += character.experience * 0.5;
        } else {
            if (character.experienceGiven === 100) {
                this.lifes += 1;
            }

            this.experience += character.level * character.experienceGiven;
        }
        
        if (this.experience >= Config.hero.experienceToNextLevel * this.level) {
            this.levelUp();
            this.experience -= Config.hero.experienceToNextLevel * this.level;
        }
    }

    levelUp() {
        this.level += 1;
        this.maxHealth = level * Config.hero.maxHealth;
        this.hitDamage = level * Config.hero.hitDamage;
    }
}
