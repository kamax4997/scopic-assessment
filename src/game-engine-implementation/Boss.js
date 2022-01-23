import Character from './Character';
import { Config } from './GamePlay';

export default class Boss extends Character {
    constructor(level) {
        super();
        this.maxHealth = level * Config.boss.maxHealth;
        this.health = this.maxHealth;
        this.level = level;
        this.hitDamage = level * Config.boss.hitDamage;
    }
}
