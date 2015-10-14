var tables = {
    items: {},
    initTables: function(game) {
        var tables = game.add.group();
        tables.enableBody = true;

        var table = tables.create(80, 150, 'table');
        table.anchor.setTo(0.5, 0.5);
        table.angle = 90;
        table.body.immovable = true;

        var table = tables.create(0, 320, 'table');
        table.body.immovable = true;

        var table = tables.create(game.world.width - 500, 80, 'table');
        table.anchor.setTo(0.5, 0.5);
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width - 325, 80, 'table');
        table.anchor.setTo(0.5, 0.5);
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width - table.width/2, 80, 'table');
        table.anchor.setTo(0.5, 0.5);
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width - table.width, game.world.height - table.height, 'table');
        table.body.immovable = true;

        var table = tables.create(game.world.width - 400, game.world.height - table.height, 'table');
        table.body.immovable = true;

        this.items = tables;
    }
};

module.exports = tables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmdXJuaXR1cmUvdGFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0YWJsZXMgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGluaXRUYWJsZXM6IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAgICAgdmFyIHRhYmxlcyA9IGdhbWUuYWRkLmdyb3VwKCk7XG4gICAgICAgIHRhYmxlcy5lbmFibGVCb2R5ID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0YWJsZXMuY3JlYXRlKDgwLCAxNTAsICd0YWJsZScpO1xuICAgICAgICB0YWJsZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0YWJsZS5hbmdsZSA9IDkwO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZSgwLCAzMjAsICd0YWJsZScpO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZShnYW1lLndvcmxkLndpZHRoIC0gNTAwLCA4MCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRhYmxlLmFuZ2xlID0gMTgwO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZShnYW1lLndvcmxkLndpZHRoIC0gMzI1LCA4MCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmFuY2hvci5zZXRUbygwLjUsIDAuNSk7XG4gICAgICAgIHRhYmxlLmFuZ2xlID0gMTgwO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZShnYW1lLndvcmxkLndpZHRoIC0gdGFibGUud2lkdGgvMiwgODAsICd0YWJsZScpO1xuICAgICAgICB0YWJsZS5hbmNob3Iuc2V0VG8oMC41LCAwLjUpO1xuICAgICAgICB0YWJsZS5hbmdsZSA9IDE4MDtcbiAgICAgICAgdGFibGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciB0YWJsZSA9IHRhYmxlcy5jcmVhdGUoZ2FtZS53b3JsZC53aWR0aCAtIHRhYmxlLndpZHRoLCBnYW1lLndvcmxkLmhlaWdodCAtIHRhYmxlLmhlaWdodCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0YWJsZXMuY3JlYXRlKGdhbWUud29ybGQud2lkdGggLSA0MDAsIGdhbWUud29ybGQuaGVpZ2h0IC0gdGFibGUuaGVpZ2h0LCAndGFibGUnKTtcbiAgICAgICAgdGFibGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaXRlbXMgPSB0YWJsZXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0YWJsZXM7Il0sImZpbGUiOiJmdXJuaXR1cmUvdGFibGVzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
