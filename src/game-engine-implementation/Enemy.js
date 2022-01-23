import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        super();
        this.maxHealth = level * Config.enemy.maxHealth;
        this.health = this.maxHealth;
        this.level = level;
        this.hitDamage = level * Config.enemy.hitDamage;
    }
}
