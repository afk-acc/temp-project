<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import SplitiLogo from '@/brand/SplitiLogo.vue'
import IsoTower from './components/IsoTower.vue'
import Shot from './components/Shot.vue'
import InquiryForm from './components/InquiryForm.vue'
import { apiAsset } from '@/api/client'
import { failed, lang, load, setLang, site, t } from './i18n'
import { vReveal } from './reveal'

const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 12)
const demoUrl = computed(() => site.value?.demo_url || './')
const crmUrl = computed(() => site.value?.crm_url || null)
onMounted(() => {
  void load()
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
const year = new Date().getFullYear()
</script>

<template>
  <div v-if="!site" class="boot" :class="{ failed }">
    <SplitiLogo :height="30" />
    <p v-if="failed" class="mono">Сайт временно недоступен · Sayt vaqtincha ishlamayapti</p>
    <button v-if="failed" class="btn small" @click="load()">↻</button>
  </div>
  <template v-else>
  <header class="hdr" :class="{ scrolled }">
    <div class="wrap row">
      <a href="#top" class="logo" aria-label="Spliti"><SplitiLogo :height="26" /></a>
      <nav class="nav">
        <a href="#product">{{ t.nav.product }}</a>
        <a href="#crm">{{ t.nav.crm }}</a>
        <a href="#process">{{ t.nav.process }}</a>
        <a href="#faq">{{ t.nav.faq }}</a>
      </nav>
      <div class="side">
        <div v-if="site.langs.length > 1" class="lang mono" role="group" aria-label="Язык / Til">
          <button v-for="l in site.langs" :key="l" :class="{ on: lang === l }" @click="setLang(l)">{{ l.toUpperCase() }}</button>
        </div>
        <a v-if="crmUrl" :href="crmUrl" class="login" :title="t.nav.loginHint" :aria-label="t.nav.loginHint">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-5" /><path d="M4 12h10M10.5 8.5 14 12l-3.5 3.5" /></svg>
          <span>{{ t.nav.login }}</span>
        </a>
        <a href="#contact" class="btn small">{{ t.nav.cta }}</a>
      </div>
    </div>
  </header>

  <main id="top">
    <!-- первый экран -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <p class="eyebrow mono">{{ t.hero.eyebrow }}</p>
          <h1><span class="l1">{{ t.hero.title1 }}</span> <em class="l2">{{ t.hero.title2 }}</em></h1>
          <p class="lead">{{ t.hero.lead }}</p>
          <div class="cta">
            <a :href="demoUrl" class="btn primary" target="_blank" rel="noopener">{{ t.hero.demo }} <span aria-hidden="true">↗</span></a>
            <a href="#contact" class="btn ghost">{{ t.hero.talk }}</a>
          </div>
          <p class="note mono">{{ t.hero.note }}</p>
        </div>
        <IsoTower class="hero-art" />
      </div>
      <div class="wrap">
        <ul class="proof">
          <li v-for="(p, i) in t.proof" :key="i" v-reveal="i"><b>{{ p.n }}</b><span>{{ p.t }}</span></li>
        </ul>
      </div>
    </section>

    <!-- продукт -->
    <section id="product" class="sec">
      <div class="wrap">
        <div class="head" v-reveal>
          <p class="eyebrow mono">{{ t.features.eyebrow }}</p>
          <h2>{{ t.features.title }}</h2>
        </div>
        <div class="bento">
          <article v-for="(f, i) in t.features.items" :key="f.k" class="card" :class="`c-${f.k}`" v-reveal="i % 3">
            <Shot :src="apiAsset(f.image)" :alt="f.t" :fig="f.fig" :position="f.k === 'floor' ? '100% 50%' : f.k === 'walk' ? '60% 50%' : undefined" />
            <div class="txt"><h3>{{ f.t }}</h3><p>{{ f.d }}</p></div>
          </article>
          <article class="card c-lead" v-reveal>
            <div class="txt">
              <h3>{{ t.features.lead.t }}</h3>
              <p>{{ t.features.lead.d }}</p>
              <div class="toast">
                <i class="dot" />
                <div><b>{{ t.features.lead.status }} · {{ t.features.lead.name }}</b><span>{{ t.features.lead.where }}</span></div>
                <em class="mono">{{ t.features.lead.ago }}</em>
              </div>
            </div>
            <div class="phone"><img :src="apiAsset(t.features.lead.image)" alt="" loading="lazy" /></div>
          </article>
        </div>
      </div>
    </section>

    <!-- новое в демо: сезоны, паркинг, путь солнца, ремонт, живые статусы + призыв записаться на показ -->
    <section v-if="t.more" id="more" class="sec more">
      <div class="wrap">
        <div class="head" v-reveal>
          <p class="eyebrow mono">{{ t.more.eyebrow }}</p>
          <h2>{{ t.more.title }}</h2>
        </div>
        <div class="bento">
          <article v-for="(f, i) in t.more.items" :key="f.k" class="card" :class="`c-${f.k}`" v-reveal="i">
            <Shot :src="apiAsset(f.image)" :alt="f.t" :fig="f.fig" />
            <div class="txt"><h3>{{ f.t }}</h3><p>{{ f.d }}</p></div>
          </article>
        </div>
        <ul class="more-list">
          <li v-for="(x, i) in t.more.list" :key="i" v-reveal="i"><span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span><h3>{{ x.t }}</h3><p>{{ x.d }}</p></li>
        </ul>
        <div class="more-cta" v-reveal>
          <div><h3>{{ t.more.cta.t }}</h3><p>{{ t.more.cta.d }}</p></div>
          <div class="cta-btns">
            <a href="#contact" class="btn primary">{{ t.more.cta.btn }} <span aria-hidden="true">→</span></a>
            <a :href="demoUrl" class="btn ghost" target="_blank" rel="noopener">{{ t.hero.demo }} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>

    <!-- откуда начинаем -->
    <section class="sec open">
      <div class="wrap open-grid" v-reveal>
        <p class="eyebrow mono">{{ t.open.eyebrow }}</p>
        <h2 class="display">{{ t.open.title }}</h2>
        <p class="lead">{{ t.open.text }}</p>
        <ul class="sources mono"><li v-for="s in t.open.sources" :key="s">{{ s }}</li></ul>
      </div>
    </section>

    <!-- CRM -->
    <section id="crm" class="sec crm">
      <div class="wrap crm-grid">
        <div class="crm-text" v-reveal>
          <p class="eyebrow mono">{{ t.crm.eyebrow }}</p>
          <h2>{{ t.crm.title }}</h2>
          <p class="lead">{{ t.crm.lead }}</p>
          <ol class="ticks">
            <li v-for="(x, i) in t.crm.items" :key="i"><span class="mono">{{ String(i + 1).padStart(2, '0') }}</span>{{ x }}</li>
          </ol>
        </div>
        <div class="crm-shot" v-reveal="1">
          <Shot :src="apiAsset(t.crm.image)" alt="CRM Spliti" :fig="t.crm.fig" />
        </div>
      </div>
    </section>

    <!-- как работаем -->
    <section id="process" class="sec">
      <div class="wrap">
        <div class="head" v-reveal>
          <p class="eyebrow mono">{{ t.process.eyebrow }}</p>
          <h2>{{ t.process.title }}</h2>
        </div>
        <ol class="steps">
          <li v-for="(s, i) in t.process.steps" :key="i" v-reveal="i">
            <span class="n mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ s.t }}</h3>
            <p>{{ s.d }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- кому -->
    <section class="sec aud">
      <div class="wrap">
        <p class="eyebrow mono" v-reveal>{{ t.audience.eyebrow }}</p>
        <div class="aud-grid">
          <div v-for="(a, i) in t.audience.items" :key="i" v-reveal="i"><h3>{{ a.t }}</h3><p>{{ a.d }}</p></div>
        </div>
      </div>
    </section>

    <!-- вопросы -->
    <section id="faq" class="sec">
      <div class="wrap faq-grid">
        <div v-reveal><p class="eyebrow mono">{{ t.faq.eyebrow }}</p></div>
        <div class="faq">
          <details v-for="(q, i) in t.faq.items" :key="i" v-reveal="i">
            <summary><span>{{ q.q }}</span><i aria-hidden="true" /></summary>
            <p>{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- форма -->
    <section id="contact" class="sec contact">
      <div class="wrap contact-grid">
        <div v-reveal>
          <p class="eyebrow mono">{{ t.form.eyebrow }}</p>
          <h2 class="display">{{ t.form.title }}</h2>
          <p class="lead">{{ t.form.text }}</p>
        </div>
        <InquiryForm v-reveal="1" />
      </div>
    </section>
  </main>

  <footer class="ftr">
    <div class="wrap ftr-grid">
      <div><SplitiLogo :height="30" /><p class="muted">{{ t.footer.name }}</p></div>
      <p class="disc">{{ t.footer.disc }}</p>
      <p class="mono copy">© {{ year }} Spliti · {{ t.footer.city }}</p>
    </div>
  </footer>
  </template>
</template>
