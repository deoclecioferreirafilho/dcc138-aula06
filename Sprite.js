function Sprite(params = {}) {
    var exemplo = {
        x: 10,
        y: 100,
        h: 20,
        w: 10,
        vx: 0,
        vy: 0,
        color: "blue",
        imune: 0,
        atirando: 0,
        comportar: undefined
    }
    Object.assign(this, exemplo, params);
}

Sprite.prototype = new Sprite({});
Sprite.prototype.constructor = Sprite;

Sprite.prototype.desenhar = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.strokeRect(this.x, this.y, this.w, this.h);
};

Sprite.prototype.mover = function (dt) {
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}

