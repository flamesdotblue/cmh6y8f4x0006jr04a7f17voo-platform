import { useEffect, useMemo, useState } from 'react';
import { ChevronRight, Layers, Sun, Lightbulb, Cpu, Battery, Zap, MapPin, Send, Trash2 } from 'lucide-react';

function StatCounter({ end, label }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end]);
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-semibold text-amber-300">{value.toLocaleString()}</div>
      <div className="text-white/70 text-sm md:text-base mt-1">{label}</div>
    </div>
  );
}

export default function Sections({ t, lang }) {
  const isRTL = useMemo(() => lang === 'ar', [lang]);

  const products = t.products.lines;

  return (
    <div className="container mx-auto px-4 space-y-16 py-16">
      {/* Key Offerings */}
      <section className="grid md:grid-cols-3 gap-5" aria-labelledby="offerings">
        <h2 id="offerings" className="sr-only">Offerings</h2>
        {[{
          icon: <Layers />, title: t.keyOfferings.planning, desc: lang === 'ar' ? 'تحليل متكامل وتخطيط ضوئي دقيق.' : 'Integrated analysis and precise lighting plans.'
        }, {
          icon: <Sun />, title: t.keyOfferings.lamps, desc: lang === 'ar' ? 'مصابيح شمسية عالية الكفاءة والاعتمادية.' : 'High-efficiency, reliable solar luminaires.'
        }, {
          icon: <Lightbulb />, title: t.keyOfferings.management, desc: lang === 'ar' ? 'تحكم مركزي وإدارة ذكية للإضاءة.' : 'Centralized control and smart light management.'
        }].map((card, i) => (
          <div key={i} className="relative rounded-3xl p-6 bg-white/10 border border-white/20 shadow-xl backdrop-blur hover:bg-white/15 transition">
            <div className="text-amber-300">{card.icon}</div>
            <div className="mt-3 font-semibold text-lg">{card.title}</div>
            <p className="text-white/70 text-sm mt-1">{card.desc}</p>
            {i === 1 && (
              <a href="#products" className="mt-4 inline-flex items-center gap-2 text-amber-300 font-medium">
                {t.keyOfferings.openProducts} <ChevronRight size={16} />
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Intro and Projects */}
      <section className="grid lg:grid-cols-2 gap-6 items-start">
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20 backdrop-blur">
          <h3 className="font-semibold text-xl">KP Smart Energy</h3>
          <p className="text-white/80 mt-2">{t.intro}</p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <StatCounter end={1216} label={t.stats.projects} />
            <StatCounter end={10320} label={t.stats.lights} />
            <StatCounter end={58580} label={t.stats.kw} />
          </div>
        </div>
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20 backdrop-blur">
          <h3 className="font-semibold text-xl">{t.latestProjects}</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-200/10 border border-white/10" />
            ))}
          </div>
          <a href="#gallery" className="mt-4 inline-flex items-center gap-2 text-amber-300 font-medium">
            {lang === 'ar' ? 'عرض المعرض' : 'View Gallery'} <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="space-y-6">
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20 backdrop-blur">
          <h3 className="font-semibold text-2xl">{t.aboutHeader}</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[{ title: t.about.us, text: t.about.usText },
            { title: t.about.team, text: t.about.teamText },
            { title: t.about.innovation, text: t.about.innovationText },
            { title: t.about.quality, text: t.about.qualityText },
            { title: t.about.solutions, text: t.about.solutionsText },
            { title: t.about.goal, text: t.about.goalText },
            { title: t.about.competence, text: t.about.competenceText },
            { title: t.about.environment, text: t.about.environmentText },
            { title: t.about.solarPower, text: t.about.solarPowerText },
          ].map((a, i) => (
            <div key={i} className="rounded-3xl p-5 bg-white/10 border border-white/20">
              <div className="font-semibold">{a.title}</div>
              <p className="text-white/70 text-sm mt-1 leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-2xl">{t.productsHeader}</h3>
          <a href="#catalog" className="px-4 py-2 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black font-medium shadow-[0_0_30px_rgba(251,191,36,0.25)]">
            {lang === 'ar' ? 'تحميل الكتالوج' : 'Download Catalog'}
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((name) => (
            <div key={name} className="rounded-3xl p-5 bg-white/10 border border-white/20 hover:bg-white/15 transition">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{name}</div>
                <div className="text-amber-300"><Lightbulb size={18} /></div>
              </div>
              <p className="text-white/70 text-sm mt-1">{lang === 'ar' ? 'مصباح شمسي بمستوى متميز.' : 'Premium-grade solar luminaire.'}</p>
              <a href={`#product-${name.toLowerCase()}`} className="mt-3 inline-flex items-center gap-2 text-amber-300 font-medium">
                {t.products.goTo} <ChevronRight size={16} />
              </a>
            </div>
          ))}
        </div>
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20">
          <div className="font-semibold mb-3 flex items-center gap-2"><Cpu size={18} className="text-amber-300" /> {t.products.featuresTitle}</div>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-white/80">
            {t.products.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-amber-300">•</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" className="space-y-6">
        <h3 className="font-semibold text-2xl">{t.technology.title}</h3>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="rounded-3xl p-5 bg-white/10 border border-white/20">
            <div className="font-semibold flex items-center gap-2"><Zap size={18} className="text-amber-300" /> {t.technology.highLevel}</div>
          </div>
          <div className="rounded-3xl p-5 bg-white/10 border border-white/20">
            <div className="font-semibold flex items-center gap-2"><MapPin size={18} className="text-amber-300" /> {t.technology.optics}</div>
          </div>
          <div className="rounded-3xl p-5 bg-white/10 border border-white/20">
            <div className="font-semibold flex items-center gap-2"><Battery size={18} className="text-amber-300" /> {t.technology.tower}</div>
          </div>
        </div>
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20">
          <div className="font-semibold mb-3">{t.technology.components}</div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-white/80">
            {t.technology.componentsList.map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-amber-300">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-white/80">{t.technology.co2}</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="space-y-4">
        <h3 className="font-semibold text-2xl">{t.faq.title}</h3>
        <div className="grid gap-3">
          {t.faq.items.map((item, idx) => (
            <details key={idx} className="group rounded-2xl p-4 bg-white/10 border border-white/20">
              <summary className="cursor-pointer font-medium select-none">{item.q}</summary>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20">
          <h3 className="font-semibold text-2xl">{t.contact.title}</h3>
          <form className={`mt-4 grid gap-3 ${isRTL ? 'text-right' : 'text-left'}`} onSubmit={(e) => e.preventDefault()}>
            <input required type="text" placeholder={t.contact.name} className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-amber-400 placeholder:text-white/60" />
            <input required type="email" placeholder={t.contact.email} className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-amber-400 placeholder:text-white/60" />
            <textarea required rows="5" placeholder={t.contact.message} className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 focus:outline-none focus:border-amber-400 placeholder:text-white/60" />
            <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} items-center gap-3`}>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black font-medium shadow-[0_0_30px_rgba(251,191,36,0.25)]">
                <Send size={18} /> {t.contact.send}
              </button>
              <button type="reset" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20">
                <Trash2 size={18} /> {t.contact.clear}
              </button>
            </div>
          </form>
        </div>
        <div className="rounded-3xl p-6 bg-white/10 border border-white/20">
          <h4 className="font-semibold text-xl">KP Smart Energy W.L.L.</h4>
          <div className="mt-3 text-white/80">
            <p>{t.contact.address}</p>
            <p className="mt-2"><span className="text-white/60">Phone:</span> +973 3434 8234</p>
            <p className="mt-1"><span className="text-white/60">Email:</span> info@kp-energy.com</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-amber-500/30 to-amber-200/10 border border-white/10" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
