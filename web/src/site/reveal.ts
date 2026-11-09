import type { Directive } from 'vue'

/** v-reveal: элемент проявляется, когда доходит до экрана; v-reveal="2" — задержка ступенью 90 мс. */
const io = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in')
        io?.unobserve(e.target)
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
  : null

export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('rv')
    if (binding.value) el.style.setProperty('--rv', `${binding.value * 90}ms`)
    if (io) io.observe(el)
    else el.classList.add('in')
  },
  unmounted(el) {
    io?.unobserve(el)
  },
}
