export default function Footer({ t, lang }) {
  const products = ['ATHENA','TITANIA','MERKUR','ARON','PROTOS','LUNA','ALARA','HERA','JUNO','MARA'];
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 shadow-[0_0_40px_rgba(251,191,36,0.35)]" />
            <div className="font-semibold">KP Smart Energy W.L.L.</div>
          </div>
          <p className="mt-3 text-white/70 text-sm max-w-sm">
            {lang === 'ar' ? 'حلول إنارة وطاقة شمسية موثوقة للمشاريع الحضرية والصناعية.' : 'Reliable solar lighting and power solutions for urban and industrial projects.'}
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">{t.footer.products}</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
            {products.map((p) => (
              <a href={`#product-${p.toLowerCase()}`} key={p} className="hover:text-amber-300">{p}</a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">{t.footer.foundations}</div>
          <div className="grid gap-2 text-sm text-white/80">
            <a href="#" className="hover:text-amber-300">{t.footer.lightManagement}</a>
            <a href="#" className="hover:text-amber-300">{t.footer.lightPlanning}</a>
            <a href="#" className="hover:text-amber-300">{t.footer.downloads}</a>
            <a href="#catalog" className="hover:text-amber-300">{t.footer.catalog}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-amber-300">FB</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-amber-300">IN</a>
            <a href="#" aria-label="Instagram" className="hover:text-amber-300">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
