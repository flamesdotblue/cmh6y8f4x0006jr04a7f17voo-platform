import Spline from '@splinetool/react-spline';
import { Award } from 'lucide-react';

export default function Hero({ t, lang }) {
  return (
    <section id="home" className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 shadow backdrop-blur">
          <Award size={16} className="text-amber-400" />
          <span className="text-xs sm:text-sm">{t.award}</span>
        </div>
        <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          KP Smart Energy W.L.L.
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl">
          {t.heroCTA}
        </p>
        <div className="mt-6 inline-flex items-center gap-3">
          <a href="#products" className="px-5 py-2.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 text-black font-medium shadow-[0_0_40px_rgba(251,191,36,0.35)]">
            {lang === 'ar' ? 'استكشف المنتجات' : 'Explore Products'}
          </a>
          <a href="#contact" className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15">
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </a>
        </div>
        <div className="mt-6 text-amber-300/90 text-xs sm:text-sm tracking-wide">
          {t.tagline}
        </div>
      </div>
    </section>
  );
}
