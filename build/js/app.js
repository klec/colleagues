var tables = require('./furniture/tables');
var sofa = require('./furniture/sofa');
var coworkers = require('./coworkers/coworkers');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('floor', '../img/floor.jpg');
    game.load.image('table', '../img/furniture/desc.png');
    game.load.image('sofa', '../img/furniture/sofa.png');
    game.load.spritesheet('dude', '../img/dude.png', 60, 100);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.tileSprite(0, 0, game.world.width, game.world.height, 'floor');

    tables.initTables(game);
    sofa.initSofa(game);
    coworkers.initCoworkers(game);
}

function update() {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhYmxlcyA9IHJlcXVpcmUoJy4vZnVybml0dXJlL3RhYmxlcycpO1xudmFyIHNvZmEgPSByZXF1aXJlKCcuL2Z1cm5pdHVyZS9zb2ZhJyk7XG52YXIgY293b3JrZXJzID0gcmVxdWlyZSgnLi9jb3dvcmtlcnMvY293b3JrZXJzJyk7XG5cbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xuXG5mdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIGdhbWUubG9hZC5pbWFnZSgnZmxvb3InLCAnLi4vaW1nL2Zsb29yLmpwZycpO1xuICAgIGdhbWUubG9hZC5pbWFnZSgndGFibGUnLCAnLi4vaW1nL2Z1cm5pdHVyZS9kZXNjLnBuZycpO1xuICAgIGdhbWUubG9hZC5pbWFnZSgnc29mYScsICcuLi9pbWcvZnVybml0dXJlL3NvZmEucG5nJyk7XG4gICAgZ2FtZS5sb2FkLnNwcml0ZXNoZWV0KCdkdWRlJywgJy4uL2ltZy9kdWRlLnBuZycsIDYwLCAxMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gICAgZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLkFSQ0FERSk7XG4gICAgZ2FtZS5hZGQudGlsZVNwcml0ZSgwLCAwLCBnYW1lLndvcmxkLndpZHRoLCBnYW1lLndvcmxkLmhlaWdodCwgJ2Zsb29yJyk7XG5cbiAgICB0YWJsZXMuaW5pdFRhYmxlcyhnYW1lKTtcbiAgICBzb2ZhLmluaXRTb2ZhKGdhbWUpO1xuICAgIGNvd29ya2Vycy5pbml0Q293b3JrZXJzKGdhbWUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG59Il0sImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
