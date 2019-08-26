function Scene(params) {
    var exemplo = {
        sprites: [],
        ctx: null
    }
    Object.assign(this, exemplo, params);

}

Scene.prototype = new Scene();
Scene.prototype.constructor = Scene;

Scene.prototype.adicionar = function (sprite) {
    this.sprites.push(sprite);

}

Scene.prototype.desenhar = function () {
    for (var i = 0; i < this.sprites.length; i++)
        this.sprites[i].desenhar(this.ctx);

}

Scene.prototype.mover = function (dt) {
    for (var i = 0; i < this.sprites.length; i++)
        this.sprites[i].mover(dt);

}