import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Menu, MoveUpRight, X } from 'lucide-react'
import { useState } from 'react'


const projects = [
  {
    no: '01',
    title: 'GEKI Academy',
    type: 'Education / Digital',
    text: 'A modern learning platform built around karate, coaching and sports science.',
    link: 'https://github.com/saitech-1/geki-academy'
  },
  {
    no: '02',
    title: 'GEKI BOT',
    type: 'Product / Community',
    text: 'A Discord-based progression system connecting fighters, profiles and dojo culture.',
    link: 'https://github.com/saitech-1/GEKI-BOT'
  },
  {
    no: '03',
    title: 'Kougeki',
    type: 'Coaching / Performance',
    text: 'A training ecosystem combining Kyokushin, strength & conditioning and athlete development.',
    link: 'https://www.facebook.com/share/1917GbQCae/?mibextid=wwXIfr'
  },
]

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <main className="relative overflow-hidden">
      <div className="grain" />

      <header className="fixed top-0 left-0 right-0 z-40 px-5 md:px-10">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between border-b border-white/10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-white/20 text-[10px] font-bold tracking-widest transition group-hover:border-red-500 group-hover:text-red-400">SZ</span>
            <span className="text-xs font-semibold uppercase tracking-[.28em]">Sai Zay</span>
          </a>

          <nav className="hidden items-center gap-9 text-[10px] font-medium uppercase tracking-[.24em] text-white/55 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <button onClick={() => setMenu(!menu)} className="md:hidden" aria-label="Menu">
            {menu ? <X size={19}/> : <Menu size={19}/>}
          </button>
        </div>

        {menu && (
          <div className="glass absolute left-5 right-5 top-20 p-6 md:hidden">
            <div className="grid gap-5 text-xs uppercase tracking-[.2em]">
              <a onClick={() => setMenu(false)} href="#about">About</a>
              <a onClick={() => setMenu(false)} href="#work">Work</a>
              <a onClick={() => setMenu(false)} href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <section id="top" className="relative min-h-[820px] h-screen max-h-[1050px] overflow-hidden px-5 md:px-10">
        <img
          src="/hero-kyokushin.png"
          alt="Kyokushin karate athletes"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(190,20,28,.16),transparent_30%),radial-gradient(circle_at_35%_70%,rgba(255,255,255,.04),transparent_28%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end pb-12 md:pb-14">
          <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="vertical text-[10px] uppercase tracking-[.45em] text-white/25">Kyokushin · Myanmar · 2nd Dan</div>
          </div>

          <div className="max-w-4xl reveal">
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[.32em] text-white/45">
              <span className="h-px w-9 bg-red-500" />
              Athlete / Builder / Coach
            </div>

            <h1 className="display text-[clamp(5rem,15vw,13.5rem)] font-black uppercase leading-[.72] text-white">
              Sai<br /><span className="ml-[.12em] text-white/15">Zay</span>
            </h1>

            <div className="mt-9 flex max-w-2xl flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
                I build strength, discipline and digital experiences — from the dojo floor to the screen.
              </p>
              <a href="#about" className="group flex w-fit items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/70">
                Explore
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition group-hover:border-red-500 group-hover:bg-red-500">
                  <ArrowDownRight size={15}/>
                </span>
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[.25em] text-white/35 md:grid-cols-4">
            <div>Based in<br/><span className="mt-2 block text-white/70">Myanmar</span></div>
            <div>Discipline<br/><span className="mt-2 block text-white/70">Kyokushin Karate</span></div>
            <div>Rank<br/><span className="mt-2 block text-white/70">2nd Dan</span></div>
            <div>Focus<br/><span className="mt-2 block text-white/70">Performance × Tech</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-red-500">01 / About</p>
            <p className="mt-6 max-w-xs text-xs leading-6 text-white/35">
              Discipline is not a personality. It is a practice.
            </p>
          </div>

          <div>
            <h2 className="display max-w-5xl text-4xl font-bold leading-[.95] tracking-tight text-white md:text-7xl">
              A fighter who likes to <span className="text-white/25">build things.</span>
            </h2>
            <p className="mt-10 max-w-2xl text-base leading-8 text-white/50">
              I’m Sai Zay — a Kyokushin karate athlete, coach and digital builder from Myanmar.
              My work sits between high-performance training and technology: helping people learn,
              train and improve while creating products that feel simple, useful and human.
            </p>

            <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                ['01', 'Athlete', 'Competition, technique, strength & conditioning.'],
                ['02', 'Coach', 'Teaching karate with modern performance principles.'],
                ['03', 'Builder', 'Web products, communities and education systems.'],
              ].map(([n, title, body]) => (
                <div key={n}>
                  <div className="text-[9px] tracking-[.3em] text-white/25">{n}</div>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-[.16em]">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/35">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10 px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[.3em] text-red-500">02 / Selected work</p>
              <h2 className="display mt-5 text-5xl font-bold md:text-7xl">Things I’m building.</h2>
            </div>
            <span className="hidden text-[9px] uppercase tracking-[.25em] text-white/25 md:block">2025 — 2026</span>
          </div>

          <div className="border-t border-white/10">
            {projects.map((project) => (
              <a
                key={project.no}
                href={project.link}
                className="group grid gap-6 border-b border-white/10 py-9 transition hover:px-3 md:grid-cols-[70px_1fr_1fr_50px] md:items-center"
                aria-label={`Open ${project.title}`}
              >
                <span className="text-[10px] tracking-[.25em] text-white/25">{project.no}</span>
                <h3 className="display text-3xl font-bold uppercase md:text-5xl">{project.title}</h3>
                <div>
                  <div className="text-[9px] uppercase tracking-[.25em] text-red-500">{project.type}</div>
                  <p className="mt-3 max-w-md text-xs leading-6 text-white/35">{project.text}</p>
                </div>
                <MoveUpRight className="text-white/25 transition group-hover:text-red-500" size={20}/>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 px-5 py-32 md:px-10 md:py-44">
        <div className="absolute right-[-10rem] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-red-500/10" />
        <div className="absolute right-[-5rem] top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full border border-red-500/10" />

        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-[.3em] text-red-500">03 / Contact</p>
          <h2 className="display mt-7 max-w-5xl text-6xl font-black uppercase leading-[.78] md:text-[9rem]">
            Let’s make<br/><span className="text-white/20">something.</span>
          </h2>

          <div className="mt-14 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <a href="mailto:saizaybhonehlawn@gmail.com" className="group flex items-center gap-4 text-sm text-white/65 transition hover:text-white">
              <Mail size={17}/>
              saizaybhonehlawn@gmail.com
              <ArrowUpRight size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </a>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/sayar_sai?stkn=N25vbGwzNXhuN3Vu&utm_source=qr" aria-label="Instagram" className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:border-red-500">
                <Instagram size={16}/>
              </a>
              <a href="https://www.tiktok.com/@sayar_sai?_r=1&_t=ZS-99pQKag5TAz" aria-label="TikTok" className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:border-red-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.15V2h-3.8v13.67a2.91 2.91 0 1 1-2.91-2.91c.3 0 .6.05.87.13V9.03a6.72 6.72 0 0 0-.87-.06A6.71 6.71 0 1 0 15.82 15V8.42a8.55 8.55 0 0 0 3.77.88V6.69Z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCvn7NP41j6T8ZTvK5IB3Flg" aria-label="YouTube" className="glass flex h-11 w-11 items-center justify-center rounded-full transition hover:border-red-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M23.5 6.19a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.57A3 3 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3 3 0 0 0 2.11 2.12c1.87.57 9.39.57 9.39.57s7.52 0 9.39-.57a3 3 0 0 0 2.11-2.12A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81ZM9.55 15.5v-7L15.82 12l-6.27 3.5Z"/>
                </svg>
              </a>
              <a href="#top" className="glass flex h-11 items-center gap-3 rounded-full px-5 text-[9px] uppercase tracking-[.2em] text-white/55 transition hover:text-white">
                Back to top <ArrowUpRight size={14}/>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-7 md:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between text-[9px] uppercase tracking-[.25em] text-white/25">
          <span>© 2026 Sai Zay</span>
          <span>Built with React + Three.js</span>
        </div>
      </footer>
    </main>
  )
}

export default App
