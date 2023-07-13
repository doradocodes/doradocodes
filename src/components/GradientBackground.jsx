const COLORS = [
    '253,170,136',
    '224,33,64',
    '234,210,146',
    '126,177,168'
];

export default class Gradient {
    constructor(canvas) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'gradient';
        // document.body.appendChild(this.canvas);
        document.querySelector('.background').appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;
        this.totalParticles = 10;
        this.particles = [];
        this.maxRadius = window.innerWidth > window.innerHeight ? window.innerWidth / 2 : window.innerHeight / 2;
        this.speed = 5;

        // document.body.style = `background: rgb(${COLORS[getRandomArbitrary(0, COLORS.length - 1)]})`;

        window.addEventListener('resize', () => this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
    }

    createParticles() {
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            this.particles.push(new Particle(this.ctx, getRandomArbitrary(0, this.stageWidth), getRandomArbitrary(0, this.stageHeight), this.maxRadius, COLORS[getRandomArbitrary(0, COLORS.length - 1)]));
            this.particles[i].draw();
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].draw();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            // console.log('x', this.particles[i].x, 'y', this.particles[i].y)
            if (this.particles[i].x >= window.innerWidth ) {
                this.particles[i].xDirection = -1;
            } else if (this.particles[i].x <= 0) {
                this.particles[i].xDirection = 1;
            }

            if (this.particles[i].y >= window.innerHeight) {
                this.particles[i].yDirection = -1;
            } else if (this.particles[i].y <= 0) {
                this.particles[i].yDirection = 1;
            }

            this.particles[i].x += this.speed * this.particles[i].xDirection;
            this.particles[i].y += this.speed * this.particles[i].yDirection;
            this.particles[i].draw();
        }


        // window.requestAnimationFrame(() => this.animate());
    }

}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Particle {
    constructor(ctx, x, y, r, color) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = r;
        this.color = color;
        this.xDirection = 1;
        this.yDirection = 1;
    }

    draw() {
        this.ctx.beginPath();
        const g = this.ctx.createRadialGradient(this.x, this.y, this.radius * 0.01, this.x, this.y, this.radius);
        g.addColorStop(0, `rgba(${this.color}, 1)`);
        g.addColorStop(1, `rgba(${this.color}, 0)`);
        this.ctx.fillStyle = g;
        // this.ctx.fillStyle = `rgba(${this.color}, 1)`;
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fill();

    }
}