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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3dvcmtlcnMvY293b3JrZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjb3dvcmtlcnMgPSB7XG4gICAgZHVkZTogJycsXG4gICAgaW5pdENvd29ya2VyczogZnVuY3Rpb24oZ2FtZSkge1xuICAgICAgICB0aGlzLmR1ZGUgPSBnYW1lLmFkZC5zcHJpdGUoMCwgMCwgJ2R1ZGUnKTtcblxuICAgICAgICAvLyAgV2UgbmVlZCB0byBlbmFibGUgcGh5c2ljcyBvbiB0aGUgcGxheWVyXG4gICAgICAgIGdhbWUucGh5c2ljcy5hcmNhZGUuZW5hYmxlKHRoaXMuZHVkZSk7XG5cbiAgICAgICAgLy8gIFBsYXllciBwaHlzaWNzIHByb3BlcnRpZXMuIEdpdmUgdGhlIGxpdHRsZSBndXkgYSBzbGlnaHQgYm91bmNlLlxuICAgICAgICB0aGlzLmR1ZGUuYm9keS5ib3VuY2UueSA9IDAuMjtcbiAgICAgICAgdGhpcy5kdWRlLmJvZHkuZ3Jhdml0eS55ID0gNjAwO1xuICAgICAgICB0aGlzLmR1ZGUuYm9keS5jb2xsaWRlV29ybGRCb3VuZHMgPSB0cnVlO1xuXG4gICAgICAgIC8vICBPdXIgdHdvIGFuaW1hdGlvbnMsIHdhbGtpbmcgbGVmdCBhbmQgcmlnaHQuXG4gICAgICAgIHRoaXMuZHVkZS5hbmltYXRpb25zLmFkZCgnbGVmdCcsIFswLCAxLCAyLCAzXSwgMTAsIHRydWUpO1xuICAgICAgICB0aGlzLmR1ZGUuYW5pbWF0aW9ucy5hZGQoJ3JpZ2h0JywgWzUsIDYsIDcsIDhdLCAxMCwgdHJ1ZSk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3dvcmtlcnM7Il0sImZpbGUiOiJjb3dvcmtlcnMvY293b3JrZXJzLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
