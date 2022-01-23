import { Config } from "./GamePlay";

export default class Character {
    health;
    level;
    hitDamage;
    maxHealth;
    isDead;

    constructor(level) {
        this.isDead = false;
    }

    init(type, level) {
        this.level = level;
        this.maxHealth = this.level * Config[type].maxHealth;
        this.hitDamage = this.level * Config[type].hitDamage;
        this.health = this.maxHealth;
    }

    attack(character) {
        character.takeAHit(this.hitDamage);
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