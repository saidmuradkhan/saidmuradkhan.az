import { useEffect, useRef } from 'react'
import { isTouch, reducedMotion } from '../hooks.jsx'

// A grid of dots that bulge away from the pointer and light up in the accent color.
export default function DotField() {
  const canvas = useRef(null)

  useEffect(() => {
    const c = canvas.current
    const ctx = c.getContext('2d')
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    let w, h, dpr, dots = [], raf, colors
    const GAP = 28

    const readColors = () => {
      const s = getComputedStyle(document.documentElement)
      colors = { base: s.getPropertyValue('--dot').trim(), accent: s.getPropertyValue('--accent').trim() }
    }
    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2)
      w = c.clientWidth; h = c.clientHeight
      c.width = w * dpr; c.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      for (let y = GAP / 2; y < h; y += GAP) for (let x = GAP / 2; x < w; x += GAP) dots.push({ x, y })
    }
    const draw = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.12
      mouse.y += (mouse.ty - mouse.y) * 0.12
      ctx.clearRect(0, 0, w, h)
      const R = 150
      for (const d of dots) {
        const dx = d.x - mouse.x, dy = d.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const f = Math.max(0, 1 - dist / R)
        const push = f * f * 22
        const x = d.x + (dx / (dist || 1)) * push
        const y = d.y + (dy / (dist || 1)) * push
        ctx.globalAlpha = 0.35 + f * 0.65
        ctx.fillStyle = f > 0.05 ? colors.accent : colors.base
        ctx.beginPath()
        ctx.arc(x, y, 1.1 + f * 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      if (animate && visible) raf = requestAnimationFrame(draw)
    }
    const onMove = (e) => {
      const r = c.getBoundingClientRect()
      mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top
    }
    const onLeave = () => { mouse.tx = -9999; mouse.ty = -9999 }

    // No pointer to follow on touch screens: draw a static grid once instead of looping.
    const animate = !isTouch() && !reducedMotion()
    let visible = true
    const redraw = () => { cancelAnimationFrame(raf); draw() }
    // Mobile browsers fire resize when the address bar hides mid-scroll; only rebuild on width changes.
    let lastW = 0
    const onResize = () => { if (c.clientWidth !== lastW) { lastW = c.clientWidth; resize(); redraw() } }

    readColors(); resize(); lastW = c.clientWidth
    const themeObs = new MutationObserver(() => { readColors(); redraw() })
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    // Stop the loop entirely while the hero is scrolled out of view.
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) redraw() })
    io.observe(c)
    window.addEventListener('resize', onResize)
    if (animate) {
      window.addEventListener('pointermove', onMove)
      document.addEventListener('mouseleave', onLeave)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      themeObs.disconnect()
      io.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvas} className="dotfield" aria-hidden="true" />
}
