var tables = {
    initTables: function(game) {
        tables = game.add.group();
        tables.enableBody = true;

        var table = tables.create(158, 130, 'table');
        table.angle = 90;
        table.body.immovable = true;

        var table = tables.create(0, 320, 'table');
        table.body.immovable = true;

        var table = tables.create(game.world.width - 450, 150, 'table');
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width - 250, 150, 'table');
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width, 150, 'table');
        table.angle = 180;
        table.body.immovable = true;

        var table = tables.create(game.world.width - table.width, game.world.height - table.height, 'table');
        table.body.immovable = true;

        var table = tables.create(game.world.width - 400, game.world.height - table.height, 'table');
        table.body.immovable = true;
    }
};

module.exports = tables;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmdXJuaXR1cmUvdGFibGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0YWJsZXMgPSB7XG4gICAgaW5pdFRhYmxlczogZnVuY3Rpb24oZ2FtZSkge1xuICAgICAgICB0YWJsZXMgPSBnYW1lLmFkZC5ncm91cCgpO1xuICAgICAgICB0YWJsZXMuZW5hYmxlQm9keSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZSgxNTgsIDEzMCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmFuZ2xlID0gOTA7XG4gICAgICAgIHRhYmxlLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0YWJsZXMuY3JlYXRlKDAsIDMyMCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0YWJsZXMuY3JlYXRlKGdhbWUud29ybGQud2lkdGggLSA0NTAsIDE1MCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmFuZ2xlID0gMTgwO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZShnYW1lLndvcmxkLndpZHRoIC0gMjUwLCAxNTAsICd0YWJsZScpO1xuICAgICAgICB0YWJsZS5hbmdsZSA9IDE4MDtcbiAgICAgICAgdGFibGUuYm9keS5pbW1vdmFibGUgPSB0cnVlO1xuXG4gICAgICAgIHZhciB0YWJsZSA9IHRhYmxlcy5jcmVhdGUoZ2FtZS53b3JsZC53aWR0aCwgMTUwLCAndGFibGUnKTtcbiAgICAgICAgdGFibGUuYW5nbGUgPSAxODA7XG4gICAgICAgIHRhYmxlLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcblxuICAgICAgICB2YXIgdGFibGUgPSB0YWJsZXMuY3JlYXRlKGdhbWUud29ybGQud2lkdGggLSB0YWJsZS53aWR0aCwgZ2FtZS53b3JsZC5oZWlnaHQgLSB0YWJsZS5oZWlnaHQsICd0YWJsZScpO1xuICAgICAgICB0YWJsZS5ib2R5LmltbW92YWJsZSA9IHRydWU7XG5cbiAgICAgICAgdmFyIHRhYmxlID0gdGFibGVzLmNyZWF0ZShnYW1lLndvcmxkLndpZHRoIC0gNDAwLCBnYW1lLndvcmxkLmhlaWdodCAtIHRhYmxlLmhlaWdodCwgJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlLmJvZHkuaW1tb3ZhYmxlID0gdHJ1ZTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlczsiXSwiZmlsZSI6ImZ1cm5pdHVyZS90YWJsZXMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
