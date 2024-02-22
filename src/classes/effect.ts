import { Particle } from './particle'

const IMAGE_WIDTH = 450
const IMAGE_HEIGHT = 450

interface EffectProps {
  canvas: HTMLCanvasElement
  width: number
  height: number
  context: CanvasRenderingContext2D
  image: HTMLImageElement
  gap: number
  ease: number
  radius: number
  force: number
  friction: number
}

export interface Effect {
  width: number
  height: number
  particles: Particle[]
  image: HTMLImageElement
  centerX: number
  centerY: number
  x: number
  y: number
  friction: number
  ctx: CanvasRenderingContext2D
  gap: number
  ease: number
  force: number
  rect: Record<string, any>
  mouse: {
    radius: number
    x: number | undefined
    y: number | undefined
  }
}

export class Effect implements Effect {
  constructor({ canvas, width, height, context, image, gap, radius, ease, force, friction }: EffectProps) {
    this.width = width
    this.height = height
    this.ctx = context
    this.image = image
    this.centerX = this.width / 2
    this.centerY = this.height / 2
    this.x = this.centerX - IMAGE_WIDTH / 2
    this.y = this.centerY - IMAGE_HEIGHT / 2
    this.particles = []
    this.ease = ease
    this.gap = gap
    this.force = force
    this.friction = friction
    this.rect = canvas.getBoundingClientRect()
    this.mouse = {
      radius: radius,
      x: undefined,
      y: undefined,
    }
    this.init()
    canvas.addEventListener('mousemove', (e) => this.onMouseMove(e))
  }

  onMouseMove(e: MouseEvent) {
    // added rect for the coordinats of canvas
    this.mouse.x = e.pageX - this.rect.left
    this.mouse.y = e.pageY - 66.4
  }

  init() {
    this.ctx.drawImage(this.image, this.x, this.y, IMAGE_WIDTH, IMAGE_HEIGHT)
    const { data: pixels } = this.ctx.getImageData(0, 0, this.width, this.height)
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        // Multiplies per 4 cause each pixel in the array is made by four indexes RGB + opacity so you need to skip 4 indexs to go to the next pixel
        const index = (y * this.width + x) * 4
        const alpha = pixels[index + 3]

        if (alpha) {
          this.particles.push(new Particle({ effect: this, x: x + 80, y }))
        }
      }
    }
  }

  draw() {
    this.particles.forEach((particle) => particle.draw(this.ctx))
  }

  update() {
    this.particles.forEach((particle) => particle.update())
  }
}
