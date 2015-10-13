var tables = require('./furniture/tables');
var sofa = require('./furniture/sofa');
var coworkers = require('./coworkers/coworkers');

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('floor', '../img/floor.jpg');
    game.load.image('table', '../img/desc.png');
    game.load.image('sofa', '../img/sofa.png');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhYmxlcyA9IHJlcXVpcmUoJy4vZnVybml0dXJlL3RhYmxlcycpO1xudmFyIHNvZmEgPSByZXF1aXJlKCcuL2Z1cm5pdHVyZS9zb2ZhJyk7XG52YXIgY293b3JrZXJzID0gcmVxdWlyZSgnLi9jb3dvcmtlcnMvY293b3JrZXJzJyk7XG5cbnZhciBnYW1lID0gbmV3IFBoYXNlci5HYW1lKDgwMCwgNjAwLCBQaGFzZXIuQVVUTywgJycsIHsgcHJlbG9hZDogcHJlbG9hZCwgY3JlYXRlOiBjcmVhdGUsIHVwZGF0ZTogdXBkYXRlIH0pO1xuXG5mdW5jdGlvbiBwcmVsb2FkKCkge1xuICAgIGdhbWUubG9hZC5pbWFnZSgnZmxvb3InLCAnLi4vaW1nL2Zsb29yLmpwZycpO1xuICAgIGdhbWUubG9hZC5pbWFnZSgndGFibGUnLCAnLi4vaW1nL2Rlc2MucG5nJyk7XG4gICAgZ2FtZS5sb2FkLmltYWdlKCdzb2ZhJywgJy4uL2ltZy9zb2ZhLnBuZycpO1xuICAgIGdhbWUubG9hZC5zcHJpdGVzaGVldCgnZHVkZScsICcuLi9pbWcvZHVkZS5wbmcnLCA2MCwgMTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICAgIGdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5BUkNBREUpO1xuICAgIGdhbWUuYWRkLnRpbGVTcHJpdGUoMCwgMCwgZ2FtZS53b3JsZC53aWR0aCwgZ2FtZS53b3JsZC5oZWlnaHQsICdmbG9vcicpO1xuXG4gICAgdGFibGVzLmluaXRUYWJsZXMoZ2FtZSk7XG4gICAgc29mYS5pbml0U29mYShnYW1lKTtcbiAgICBjb3dvcmtlcnMuaW5pdENvd29ya2VycyhnYW1lKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlKCkge1xufSJdLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
