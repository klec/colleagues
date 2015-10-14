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