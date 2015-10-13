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