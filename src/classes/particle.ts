import { Effect } from './effect'

interface ParticleProps {
  effect: Effect
  x: number
  y: number
}

export interface Particle {
  effect: Effect
  originX: number
  originY: number
  x: number
  y: number
  size: number
  vx: number
  vy: number
  ease: number
  dx: number
  dy: number
  distance: number
  force: number
  angle: number
  friction: number
}

export class Particle implements Particle {
  constructor({ effect, x, y }: ParticleProps) {
    this.effect = effect
    this.originX = Math.floor(x)
    this.originY = Math.floor(y)
    this.x = x
    this.y = y
    this.size = this.effect.gap
    this.vx = 0
    this.vy = 0
    this.ease = effect.ease
    this.dx = 0
    this.dy = 0
    this.distance = 0
    this.force = 0
    this.angle = 0
    this.friction = effect.friction
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'white'
    ctx.fillRect(this.x, this.y, this.size, this.size)
  }

  update() {
    this.dx = this.effect.mouse.x! - this.x
    this.dy = this.effect.mouse.y! - this.y
    this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy)

    if (this.distance < this.effect.mouse.radius) {
      this.force = (-this.effect.mouse.radius! / this.distance) * this.effect.force
      this.angle = Math.atan2(this.dy, this.dx)

      this.vx += this.force * Math.cos(this.angle)
      this.vy += this.force * Math.sin(this.angle)
    }

    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
  }
}
