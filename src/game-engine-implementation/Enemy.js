import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        super();
        this.level = level;
        this.maxHealth = this.level * Config.enemy.maxHealth;
        this.hitDamage = this.level * Config.enemy.hitDamage;
        this.health = this.maxHealth;
    }
}
