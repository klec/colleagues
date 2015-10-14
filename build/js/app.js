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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhYmxlcyA9IHJlcXVpcmUoJy4vZnVybml0dXJlL3RhYmxlcycpO1xudmFyIHNvZmEgPSByZXF1aXJlKCcuL2Z1cm5pdHVyZS9zb2ZhJyk7XG52YXIgY293b3JrZXJzID0gcmVxdWlyZSgnLi9jb3dvcmtlcnMvY293b3JrZXJzJyk7XG5cbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xuXG5mdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIGdhbWUubG9hZC5pbWFnZSgnZmxvb3InLCAnLi4vaW1nL2Zsb29yLmpwZycpO1xuICAgIGdhbWUubG9hZC5pbWFnZSgndGFibGUnLCAnLi4vaW1nL2Z1cm5pdHVyZS9kZXNjLnBuZycpO1xuICAgIGdhbWUubG9hZC5pbWFnZSgnc29mYScsICcuLi9pbWcvZnVybml0dXJlL3NvZmEucG5nJyk7XG4gICAgZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkdWRlJywgJy4uL2ltZy9kdWRlLnBuZycsIDY3LCAxMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgZ2FtZS5hZGQudGlsZVNwcml0ZSgwLCAwLCBnYW1lLndvcmxkLndpZHRoLCBnYW1lLndvcmxkLmhlaWdodCwgJ2Zsb29yJyk7XG5cbiAgICB0YWJsZXMuaW5pdFRhYmxlcyhnYW1lKTtcbiAgICBzb2ZhLmluaXRTb2ZhKGdhbWUpO1xuICAgIGNvd29ya2Vycy5pbml0Q293b3JrZXJzKGdhbWUpO1xuXG4gICAgY3Vyc29ycyA9IGdhbWUuaW5wdXQua2V5Ym9hcmQuY3JlYXRlQ3Vyc29yS2V5cygpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZ2FtZS5waHlzaWNzLmFyY2FkZS5jb2xsaWRlKGNvd29ya2Vycy5pdGVtcywgdGFibGVzLml0ZW1zKTtcblxuICAgIGNvd29ya2Vycy5pdGVtcy5ib2R5LnZlbG9jaXR5LnggPSAwO1xuXG4gICAgaWYgKGN1cnNvcnMubGVmdC5pc0Rvd24pXG4gICAge1xuICAgICAgICAvLyAgTW92ZSB0byB0aGUgbGVmdFxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYm9keS52ZWxvY2l0eS54ID0gLTEwMDtcblxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuYW5pbWF0aW9ucy5wbGF5KCdsZWZ0Jyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnNvcnMucmlnaHQuaXNEb3duKVxuICAgIHtcbiAgICAgICAgLy8gIE1vdmUgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5ib2R5LnZlbG9jaXR5LnggPSAxMDA7XG5cbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmFuaW1hdGlvbnMucGxheSgncmlnaHQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3Vyc29ycy51cC5pc0Rvd24pXG4gICAge1xuICAgICAgICAvLyAgTW92ZSB0byB0aGUgcmlnaHRcbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmJvZHkudmVsb2NpdHkueSA9IC0xMDA7XG5cbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmFuaW1hdGlvbnMucGxheSgnbGVmdCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjdXJzb3JzLmRvd24uaXNEb3duKVxuICAgIHtcbiAgICAgICAgLy8gIE1vdmUgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5ib2R5LnZlbG9jaXR5LnkgPSAxMDA7XG5cbiAgICAgICAgY293b3JrZXJzLml0ZW1zLmFuaW1hdGlvbnMucGxheSgncmlnaHQnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgLy8gIFN0YW5kIHN0aWxsXG4gICAgICAgIGNvd29ya2Vycy5pdGVtcy5hbmltYXRpb25zLnN0b3AoKTtcblxuICAgICAgICBjb3dvcmtlcnMuaXRlbXMuZnJhbWUgPSAxO1xuICAgIH1cbn0iXSwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
