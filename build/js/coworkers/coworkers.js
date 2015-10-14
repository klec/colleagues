var coworkers = {
    items: {},
    initCoworkers: function(game) {
        var dude = game.add.sprite(0, game.world.height - 100, 'dude');

        //  We need to enable physics on the player
        game.physics.arcade.enable(dude);

        //  Player physics properties. Give the little guy a slight bounce.
        dude.body.bounce.y = 0;
        dude.body.gravity.y = 0;
        dude.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        dude.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
        dude.animations.add('right', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);

        this.items = dude;
    }
};

module.exports = coworkers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3dvcmtlcnMvY293b3JrZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb3dvcmtlcnMgPSB7XG4gICAgaXRlbXM6IHt9LFxuICAgIGluaXRDb3dvcmtlcnM6IGZ1bmN0aW9uKGdhbWUpIHtcbiAgICAgICAgdmFyIGR1ZGUgPSBnYW1lLmFkZC5zcHJpdGUoMCwgZ2FtZS53b3JsZC5oZWlnaHQgLSAxMDAsICdkdWRlJyk7XG5cbiAgICAgICAgLy8gIFdlIG5lZWQgdG8gZW5hYmxlIHBoeXNpY3Mgb24gdGhlIHBsYXllclxuICAgICAgICBnYW1lLnBoeXNpY3MuYXJjYWRlLmVuYWJsZShkdWRlKTtcblxuICAgICAgICAvLyAgUGxheWVyIHBoeXNpY3MgcHJvcGVydGllcy4gR2l2ZSB0aGUgbGl0dGxlIGd1eSBhIHNsaWdodCBib3VuY2UuXG4gICAgICAgIGR1ZGUuYm9keS5ib3VuY2UueSA9IDA7XG4gICAgICAgIGR1ZGUuYm9keS5ncmF2aXR5LnkgPSAwO1xuICAgICAgICBkdWRlLmJvZHkuY29sbGlkZVdvcmxkQm91bmRzID0gdHJ1ZTtcblxuICAgICAgICAvLyAgT3VyIHR3byBhbmltYXRpb25zLCB3YWxraW5nIGxlZnQgYW5kIHJpZ2h0LlxuICAgICAgICBkdWRlLmFuaW1hdGlvbnMuYWRkKCdsZWZ0JywgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLCAxMCwgdHJ1ZSk7XG4gICAgICAgIGR1ZGUuYW5pbWF0aW9ucy5hZGQoJ3JpZ2h0JywgWzksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxN10sIDEwLCB0cnVlKTtcblxuICAgICAgICB0aGlzLml0ZW1zID0gZHVkZTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvd29ya2VyczsiXSwiZmlsZSI6ImNvd29ya2Vycy9jb3dvcmtlcnMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
