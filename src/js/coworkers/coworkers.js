var coworkers = {
    dude: '',
    initCoworkers: function(game) {
        this.dude = game.add.sprite(0, 0, 'dude');

        //  We need to enable physics on the player
        game.physics.arcade.enable(this.dude);

        //  Player physics properties. Give the little guy a slight bounce.
        this.dude.body.bounce.y = 0.2;
        this.dude.body.gravity.y = 600;
        this.dude.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.dude.animations.add('left', [0, 1, 2, 3], 10, true);
        this.dude.animations.add('right', [5, 6, 7, 8], 10, true);
    }
};

module.exports = coworkers;