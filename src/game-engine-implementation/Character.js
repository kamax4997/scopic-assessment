import { Config } from "./GamePlay";

export default class Character {
    health;
    level;
    hitDamage;
    maxHealth;
    isDead;

    constructor(level) {
        this.level = level;
        this.health = this.maxHealth;
        this.isDead = false;
    }

    attack(character) {
        character.takeAHit(this.hitDamage);
        // if (character.health <= 0 && character.lifes === 0) {
        //     this.win(character);
        // }
    }

    takeAHit(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.isDead = true;
        this.health = 0;
    }

    win() {
        // Do nothing if character is Enemy or Boss
    }
}