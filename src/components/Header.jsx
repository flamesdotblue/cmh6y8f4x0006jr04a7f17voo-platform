import { useState } from 'react';
import { Globe, Mail, Phone, Download, Search, Menu } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'products', label: t.nav.products },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'technology', label: t.nav.technology },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
  ];

  const switchLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      {/* Contact Bar */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-8 py-2 text-sm">
        <div className="flex items-center gap-4 opacity-90">
          <a href="#catalog" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:bg-white/15 transition">
            <Download size={16} />
            <span>{t.contactBar.catalog}</span>
          </a>
          <a href="tel:+97334348234" className="inline-flex items-center gap-2 hover:text-amber-400"><Phone size={16} />{t.contactBar.phone}</a>
          <a href="mailto:info@kp-energy.com" className="inline-flex items-center gap-2 hover:text-amber-400"><Mail size={16} />{t.contactBar.email}</a>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <Search className="absolute top-1/2 -translate-y-1/2 start-3 text-white/60" size={16} />
            <input
              type="text"
              placeholder={lang === 'ar' ? 'بحث' : 'Search'}
              className="ps-9 pe-3 py-1.5 rounded-full bg-white/10 border border-white/20 focus:outline-none focus:border-amber-400 placeholder:text-white/50"
            />
          </div>
          <button onClick={switchLang} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 hover:bg-white/15">
            <Globe size={16} /> {lang === 'ar' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.35)]" />
          <div className="font-semibold tracking-wide">KP Smart Energy W.L.L.</div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm hover:text-amber-400 transition">
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <Menu />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="grid gap-2 p-3 rounded-2xl bg-white/10 border border-white/20">
            <div className="flex items-center gap-2">
              <button onClick={() => setOpen(false)} className="ms-auto text-sm px-3 py-1 rounded-full bg-white/10 border border-white/20">Close</button>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={switchLang} className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20">
                <Globe size={16} /> {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
            <div className="relative">
              <Search className="absolute top-1/2 -translate-y-1/2 start-3 text-white/60" size={16} />
              <input type="text" placeholder={lang === 'ar' ? 'بحث' : 'Search'} className="w-full ps-9 pe-3 py-2 rounded-xl bg-white/10 border border-white/20 placeholder:text-white/50" />
            </div>
            <div className="h-px bg-white/10" />
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10">
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              <a href="#catalog" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20"><Download size={16} />{t.contactBar.catalog}</a>
              <a href="tel:+97334348234" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20"><Phone size={16} />{t.contactBar.phone}</a>
              <a href="mailto:info@kp-energy.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 border border-white/20"><Mail size={16} />{t.contactBar.email}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
