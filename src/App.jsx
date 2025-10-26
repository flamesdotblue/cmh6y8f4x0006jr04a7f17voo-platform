import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'ar'

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const t = useMemo(() => {
    const en = {
      tagline: 'ENERGIZE THE FUTURE',
      nav: {
        home: 'Home',
        about: 'About',
        products: 'Solar Lamps',
        gallery: 'Project Gallery',
        technology: 'Technology',
        faq: 'FAQ',
        contact: 'Contact',
      },
      contactBar: {
        catalog: 'Catalog',
        phone: '+973 3434 8234',
        email: 'info@kp-energy.com',
      },
      heroCTA: 'Your partner in solar lighting',
      award: 'WINNER - GERMAN DESIGN AWARD 2019',
      keyOfferings: {
        planning: 'Light Planning',
        lamps: 'Solar Lamps',
        management: 'Light Management',
        openProducts: 'Open Products',
      },
      intro: 'We are the leading manufacturer of solar lamps in Bahrain.',
      latestProjects: 'Our Latest Projects',
      stats: {
        projects: 'Finished Projects',
        lights: 'Installed Lights',
        kw: 'Saved Kilowatts KW',
      },
      aboutHeader: 'We offer smart solar technologies for street lighting and power production.',
      about: {
        us: 'About Us',
        usText: 'KP Smart Energy W.L.L. partners with photinus (Austria) to deliver premium, reliable solar lighting and power solutions tailored to the GCC climate.',
        team: 'Our Team',
        teamText: 'A multidisciplinary team of engineers and project managers delivering end-to-end solutions from design to commissioning.',
        innovation: 'Innovation',
        innovationText: 'Continuous R&D ensures maximum efficiency, durability, and aesthetics through advanced materials and smart control systems.',
        quality: 'Quality',
        qualityText: 'European engineering standards, rigorous testing, and lifecycle focus for exceptional reliability.',
        solutions: 'Solutions',
        solutionsText: 'Economically efficient systems: reduced CAPEX and OPEX with rapid payback and minimal maintenance.',
        goal: 'Goal',
        goalText: 'To energize the future with sustainable, CO2-free lighting and power systems.',
        competence: 'Competence',
        competenceText: 'Years of expertise in solar optics, battery management, and wireless control deliver top-tier performance.',
        environment: 'Environment',
        environmentText: 'CO2-free operation, reduced light pollution, and responsible sourcing for a cleaner future.',
        solarPower: 'Solar Power Solutions',
        solarPowerText: 'From off-grid lighting to hybrid power systems, we ensure continuous operation and high energy yield.',
      },
      productsHeader: 'Solar Lamps',
      products: {
        featuresTitle: 'Key Features',
        features: [
          'Extended-life lithium batteries with intelligent BMS',
          'Anti-theft foundation & robust construction',
          'Centralized control and monitoring system',
          '2-night battery backup for reliable autonomy',
        ],
        goTo: 'Go to Product Page',
        lines: [
          'ATHENA', 'TITANIA', 'MERKUR', 'ARON', 'PROTOS', 'LUNA', 'ALARA', 'HERA', 'JUNO', 'MARA'
        ],
      },
      technology: {
        title: 'Technology',
        highLevel: 'Solar lights on the highest level: efficiency and reliability for demanding environments.',
        optics: 'The right optics for every lighting scenario: precise beam patterns for streets, paths, and open areas.',
        tower: '360° construction of the solar tower: uninterrupted absorption and unique design.',
        components: 'Components',
        componentsList: [
          'High performance solar modules (22% efficiency)',
          'LED engines up to 200 lm/W',
          'Smart controller with adaptive dimming',
          'High-cycle lithium battery pack',
          'Low-maintenance design',
          'Wireless technology for remote management',
          'Integrated motion detector',
        ],
        co2: 'CO2-free and cost-saving: zero trenching, zero cabling, predictable TCO.',
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { q: 'How long is the autonomy?', a: 'Systems provide up to 2-night autonomy with intelligent power management for extended resilience.' },
          { q: 'Do you offer light planning?', a: 'Yes. We deliver complete lighting design, simulations, and photometric studies tailored to your site.' },
          { q: 'Are these lights suitable for GCC climate?', a: 'Yes. Components are selected and tested for high temperatures, sand, and humidity typical of the region.' },
          { q: 'Can I monitor my lights remotely?', a: 'Our wireless platform enables centralized monitoring, configuration, and maintenance insights.' },
        ],
      },
      contact: {
        title: 'Contact Us',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        clear: 'Clear',
        address: 'Office: Bahrain',
      },
      footer: {
        products: 'Products',
        foundations: 'Foundations',
        lightManagement: 'Light Management',
        lightPlanning: 'Light Planning',
        downloads: 'Downloads',
        catalog: 'Catalog',
        rights: '© KP ENERGY - BAHRAIN 2020 | All Rights reserved.',
      }
    };

    const ar = {
      tagline: 'طاقة للمستقبل',
      nav: {
        home: 'الرئيسية',
        about: 'عنّا',
        products: 'مصابيح الطاقة الشمسية',
        gallery: 'معرض المشاريع',
        technology: 'التقنية',
        faq: 'الأسئلة الشائعة',
        contact: 'اتصل بنا',
      },
      contactBar: {
        catalog: 'الكتالوج',
        phone: '+973 3434 8234',
        email: 'info@kp-energy.com',
      },
      heroCTA: 'شريكك في إضاءة الطاقة الشمسية',
      award: 'الفائز - جائزة التصميم الألماني 2019',
      keyOfferings: {
        planning: 'تخطيط الإضاءة',
        lamps: 'مصابيح شمسية',
        management: 'إدارة الإضاءة',
        openProducts: 'عرض المنتجات',
      },
      intro: 'نحن المصنع الرائد للمصابيح الشمسية في البحرين.',
      latestProjects: 'أحدث مشاريعنا',
      stats: {
        projects: 'مشاريع منجزة',
        lights: 'مصابيح مركبة',
        kw: 'كيلوواط تم توفيرها',
      },
      aboutHeader: 'نقدّم تقنيات شمسية ذكية لإنارة الشوارع وإنتاج الطاقة.',
      about: {
        us: 'من نحن',
        usText: 'شركة KP Smart Energy W.L.L. شريك photinus (النمسا) لتقديم حلول إضاءة وطاقة شمسية عالية الاعتمادية مخصصة لمناخ الخليج.',
        team: 'فريقنا',
        teamText: 'فريق متعدد التخصصات من المهندسين ومديري المشاريع يقدم حلولاً شاملة من التصميم حتى التشغيل.',
        innovation: 'الابتكار',
        innovationText: 'بحث وتطوير مستمر لضمان أعلى كفاءة ومتانة وجماليات عبر المواد المتقدمة وأنظمة التحكم الذكية.',
        quality: 'الجودة',
        qualityText: 'معايير هندسية أوروبية واختبارات صارمة وتركيز على دورة الحياة لأعلى موثوقية.',
        solutions: 'الحلول',
        solutionsText: 'أنظمة عالية الجدوى: تقليل التكاليف الاستثمارية والتشغيلية مع صيانة قليلة وعائد سريع.',
        goal: 'الهدف',
        goalText: 'تمكين المستقبل بأنظمة إضاءة وطاقة مستدامة وخالية من انبعاثات الكربون.',
        competence: 'الكفاءة',
        competenceText: 'سنوات من الخبرة في البصريات الشمسية وإدارة البطاريات والتحكم اللاسلكي لتحقيق أداء رائد.',
        environment: 'البيئة',
        environmentText: 'تشغيل خالٍ من الانبعاثات وتقليل التلوث الضوئي ومصادر مسؤولة لبيئة أنظف.',
        solarPower: 'حلول الطاقة الشمسية',
        solarPowerText: 'من الإضاءة خارج الشبكة إلى الأنظمة الهجينة، نضمن التشغيل المستمر وعائد طاقة مرتفع.',
      },
      productsHeader: 'مصابيح الطاقة الشمسية',
      products: {
        featuresTitle: 'المزايا الرئيسية',
        features: [
          'بطاريات ليثيوم طويلة العمر مع إدارة ذكية',
          'قواعد مضادة للسرقة وبناء متين',
          'نظام تحكم ومراقبة مركزي',
          'احتياطي بطارية لليلتين لضمان الاستقلالية',
        ],
        goTo: 'الانتقال إلى صفحة المنتج',
        lines: [
          'ATHENA', 'TITANIA', 'MERKUR', 'ARON', 'PROTOS', 'LUNA', 'ALARA', 'HERA', 'JUNO', 'MARA'
        ],
      },
      technology: {
        title: 'التقنية',
        highLevel: 'إضاءة شمسية بمستوى عالٍ: كفاءة وموثوقية للبيئات الصعبة.',
        optics: 'البصريات المناسبة لكل سيناريو إضاءة: أنماط ضوئية دقيقة للشوارع والممرات والساحات.',
        tower: 'بناء البرج الشمسي بزاوية 360°: امتصاص مستمر وتصميم فريد.',
        components: 'المكوّنات',
        componentsList: [
          'ألواح شمسية عالية الأداء (كفاءة 22%)',
          'مصادر إضاءة LED حتى 200 لومن/واط',
          'متحكم ذكي مع تعتيم تكيفي',
          'حزمة بطاريات ليثيوم عالية الدورات',
          'تصميم قليل الصيانة',
          'تقنية لاسلكية للإدارة عن بُعد',
          'حساس حركة مدمج',
        ],
        co2: 'خالية من الانبعاثات وموفرة للتكلفة: بدون حفر أو تمديد كابلات وتكلفة كلية متوقعة.',
      },
      faq: {
        title: 'الأسئلة الشائعة',
        items: [
          { q: 'كم مدة الاستقلالية؟', a: 'توفر الأنظمة استقلالية تصل إلى ليلتين مع إدارة طاقة ذكية لمرونة أعلى.' },
          { q: 'هل تقدمون تخطيط الإضاءة؟', a: 'نعم، نقدم تصميمات كاملة ومحاكاة ضوئية ودراسات فوتومترية حسب موقعك.' },
          { q: 'هل تناسب أنواركم مناخ الخليج؟', a: 'نعم، المكونات مختارة ومختبرة لدرجات الحرارة العالية والرطوبة والرمال.' },
          { q: 'هل يمكنني المراقبة عن بُعد؟', a: 'منصتنا اللاسلكية تمكّن المراقبة المركزية والتهيئة ورؤى الصيانة.' },
        ],
      },
      contact: {
        title: 'اتصل بنا',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال',
        clear: 'مسح',
        address: 'المكتب: البحرين',
      },
      footer: {
        products: 'المنتجات',
        foundations: 'الأسس',
        lightManagement: 'إدارة الإضاءة',
        lightPlanning: 'تخطيط الإضاءة',
        downloads: 'التنزيلات',
        catalog: 'الكتالوج',
        rights: '© KP ENERGY - BAHRAIN 2020 | جميع الحقوق محفوظة.',
      }
    };
    return lang === 'ar' ? ar : en;
  }, [lang]);

  return (
    <div className="min-h-screen bg-black text-white" dir={dir}>
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="relative">
        <Hero t={t} lang={lang} />
        <Sections t={t} lang={lang} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
