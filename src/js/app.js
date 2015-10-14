var tables = require('./furniture/tables');
var sofa = require('./furniture/sofa');
var coworkers = require('./coworkers/coworkers');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('floor', '../img/floor.jpg');
    game.load.image('table', '../img/furniture/desc.png');
    game.load.image('sofa', '../img/furniture/sofa.png');
    game.load.spritesheet('dude', '../img/dude.png', 67, 100);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, game.world.width, game.world.height, 'floor');

    tables.initTables(game);
    sofa.initSofa(game);
    coworkers.initCoworkers(game);

    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    game.physics.arcade.collide(coworkers.items, tables.items);

    coworkers.items.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        coworkers.items.body.velocity.x = -100;

        coworkers.items.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.x = 100;

        coworkers.items.animations.play('right');
    }
    else if (cursors.up.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.y = -100;

        coworkers.items.animations.play('left');
    }
    else if (cursors.down.isDown)
    {
        //  Move to the right
        coworkers.items.body.velocity.y = 100;

        coworkers.items.animations.play('right');
    }
    else
    {
        //  Stand still
        coworkers.items.animations.stop();

        coworkers.items.frame = 1;
    }
}