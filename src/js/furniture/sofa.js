var sofa = {
    initSofa: function(game) {
        var sofa = game.add.sprite(game.world.width - 130, 170, 'sofa');
        sofa.scale.setTo(2, 2);
        sofa.immovable = true;
    }
};

module.exports = sofa;