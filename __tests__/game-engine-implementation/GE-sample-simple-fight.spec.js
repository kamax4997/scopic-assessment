const { describe, test, expect } = global;
import GamePlay, { Config } from '../../src/game-engine-implementation/GamePlay';
import Hero from '../../src/game-engine-implementation/Hero';
import Enemy from '../../src/game-engine-implementation/Enemy';
import Boss from '../../src/game-engine-implementation/Boss';

describe('GE-sample-simple-fight', function () {

    test('If hero will take damage and defeat the enemy', () => {
        const hero = new Hero(2);
        const enemy = new Enemy(4);

        GamePlay.fight(hero, enemy);

        expect(hero.health).toBe(140);
        expect(enemy.health).toBe(0);
    });

    test('If hero has more than one life, hero revives, No level up', () => {
        const hero = new Hero(2);
        const boss = new Boss(2);
        
        GamePlay.fight(hero, boss);

        expect(hero.health).toBe(140);
        expect(boss.health).toBe(0);
        expect(hero.lifes).toBe(1);
        expect(hero.level).toBe(2);
    });

});
