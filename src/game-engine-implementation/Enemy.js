import Character from './Character';
import { Config } from './GamePlay';

export default class Enemy extends Character {
    constructor(level) {
        super();
        super.init("enemy", level);
    }
}
