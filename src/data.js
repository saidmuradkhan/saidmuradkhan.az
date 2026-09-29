// Bütün məzmun burada — saytı yeniləmək üçün yalnız bu faylı redaktə et.

export const links = {
  email: 'saidmuradkhan414@gmail.com',
  github: 'https://github.com/saidmuradkhan',
  gitlab: 'https://gitlab.com/saidmuradkhan414',
  // TODO: öz LinkedIn profil linkini yaz
  linkedin: 'https://www.linkedin.com/in/said-muradkhan-0103a2350/',
  cv: '/Said_Muradkhan_CV.pdf',
}

export const marquee = [
  'PHP', 'Laravel', 'React', 'JavaScript', 'Node.js', 'Express', 'MySQL',
  'PostgreSQL', 'REST API', 'Tailwind CSS', 'Docker', 'GitLab CI/CD',
]

export const skillGroups = [
  { key: 'backend', items: ['PHP', 'Laravel', 'Node.js', 'Express', 'REST APIs', 'MVC'] },
  { key: 'frontend', items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'i18next'] },
  { key: 'data', items: ['MySQL', 'PostgreSQL', 'SQL'] },
  { key: 'devops', items: ['Git', 'GitHub', 'GitLab', 'CI/CD', 'Docker', 'Composer', 'npm'] },
  { key: 'other', items: ['Python', 'C++', 'Java'] },
]

const az = {
  nav: { about: 'Haqqımda', work: 'Təcrübə', projects: 'Layihələr', skills: 'Bacarıqlar', contact: 'Əlaqə' },
  loading: 'Yüklənir',
  hero: {
    eyebrow: 'Full-Stack Developer · Bakı',
    roles: ['Full-Stack Developer', 'Laravel & React', 'Problem həll edən'],
    lead: 'Etibarlı veb tətbiqlər və komandaların hər gün istifadə etdiyi daxili idarəetmə sistemləri qururam — interfeysdən verilənlər bazasına qədər.',
    ctaWork: 'Layihələrə bax',
    ctaCv: 'CV yüklə',
    available: 'Yeni imkanlara açığam',
    scroll: 'Aşağı sürüşdür',
  },
  about: {
    index: '01',
    title: 'Haqqımda',
    big: 'Kodu yalnız işləsin deyə yox, <em>illərlə</em> işləsin deyə yazıram.',
    p1: 'Xəzər Universitetində Kompüter Elmləri tələbəsiyəm və Leops-da Full-Stack Developer kimi çalışıram. Real şirkət əməliyyatlarını idarə edən sistemlər üzərində işləyirəm — legacy kodun refaktorundan tutmuş, yeni məhsulun sıfırdan qurulmasına qədər.',
    p2: 'Həm frontend, həm backend tərəfində rahatam: PHP, Laravel, JavaScript, React, SQL və Git. Serverin konfiqurasiyası və deploy da işimin bir hissəsidir.',
    stats: [
      { n: 5, s: '', label: 'real layihə' },
      { n: 3, s: '', label: 'productionda sistem' },
      { n: 20, s: '+', label: 'texnologiya' },
      { n: 5, s: '', label: 'dil' },
    ],
    terminalHint: 'Terminalı yoxla — "help" yaz',
  },
  work: {
    index: '02',
    title: 'Təcrübə',
    company: 'Leops',
    role: 'Full Stack Developer',
    period: 'Yanvar 2026 — İndi',
    place: 'Bakı, Azərbaycan',
    also: { label: 'Həmçinin', name: 'Memorise', role: 'Developer', note: 'Komanda üzvü', url: 'https://memorise.az/team' },
    items: [
      {
        name: 'Spec-Taxi',
        tag: 'Daxili idarəetmə sistemi',
        url: 'https://db.spec.taxi',
        date: 'İyun 2026 — İndi',
        points: [
          'Komanda ilə platformanın yeni versiyasını dizayn etdik, qurduq və buraxdıq.',
          'Əməliyyat komandasının tələblərinə əsasən frontend və backend funksiyaları hazırladım.',
          'Legacy kodu refaktor edib kritik baqları düzəltdim — sistem daha sürətli və etibarlı oldu.',
        ],
      },
      {
        name: 'Assetra',
        tag: 'Aktiv və inventar idarəetməsi',
        date: 'İyul 2026 — İndi',
        points: [
          'Şirkət üçün yeni inventar idarəetmə məhsulu — React frontend və Laravel backend.',
          'Komanda layihəsi, aktiv inkişaf mərhələsində.',
        ],
      },
      {
        name: 'leops.az',
        tag: 'Korporativ veb sayt',
        url: 'https://leops.az',
        date: 'Yanvar 2026 — İndi',
        points: [
          'Saytı başdan-sona qurub deploy etdim: responsiv UI, backend məntiqi və dinamik məzmun.',
          'Productionda dəstək: performans optimizasiyası, baq düzəlişləri və təhlükəsizlik yeniləmələri.',
        ],
      },
    ],
    across: 'Bütün layihələrdə: REST API inteqrasiyası, yavaş SQL sorğularının optimizasiyası, server deploy-ları, mühit konfiqurasiyası və production problemlərinin həlli.',
  },
  projects: {
    index: '03',
    title: 'Seçilmiş layihələr',
    sub: 'Real məhsullardan ilhamlanaraq sıfırdan qurduğum şəxsi layihələr.',
    view: 'GitHub-da bax',
    vis: { stage: 'SƏHNƏ', car: 'Avto', ship: 'daşınma', baku: 'Bakı' },
    items: [
      {
        name: 'iTicket',
        kind: 'Bilet platforması',
        year: '2026',
        desc: 'iTicket.az əsasında tədbir bileti platforması: axtarış və filtrlər, interaktiv oturacaq xəritəsi, geri sayımlı səbət, bilet, sifariş, cüzdan və geri qaytarma ilə istifadəçi profili. Payriff API ilə real kart ödənişləri — gizli açar Node.js/Express servisində qalır və ödəniş statusu serverdə yoxlanılır. Google ilə giriş, çoxdilli UI və qaranlıq rejim.',
        stack: ['React', 'React Router', 'Context API', 'Node.js', 'Express', 'Payriff'],
        url: 'https://github.com/saidmuradkhan/Iticket',
        features: ['Oturacaq xəritəsi', 'Real ödəniş', 'Google Auth'],
      },
      {
        name: 'Carify',
        kind: 'Avtomobil idxalı',
        year: '2026',
        desc: 'carify-global.com əsasında avtomobil idxalı və daşınma saytı: avtomobil kataloqu, daşınma xərci kalkulyatoru, Google Maps ilə yük izləmə, istək siyahısı, autentifikasiya və çoxdilli dəstək.',
        stack: ['React', 'React Router', 'i18next', 'Axios', 'Google Maps API'],
        url: 'https://github.com/saidmuradkhan/Carify',
        features: ['Xərc kalkulyatoru', 'Canlı izləmə', 'i18n'],
      },
    ],
  },
  skills: {
    index: '04',
    title: 'Alətlər və bacarıqlar',
    groups: { backend: 'Backend', frontend: 'Frontend', data: 'Verilənlər bazası', devops: 'DevOps & alətlər', other: 'Digər dillər' },
    langTitle: 'Danışdığım dillər',
    langs: [
      { name: 'Azərbaycan', level: 'Ana dili', v: 100 },
      { name: 'Türk', level: 'C2', v: 95 },
      { name: 'İngilis', level: 'B2', v: 70 },
      { name: 'Rus', level: 'A2', v: 30 },
      { name: 'Alman', level: 'A1', v: 15 },
    ],
  },
  edu: {
    index: '05',
    title: 'Təhsil',
    items: [
      { when: '2024 — İndi', what: 'Kompüter Elmləri', where: 'Xəzər Universiteti', note: 'Bakalavr (EQF 6)' },
      { when: '2025 — İndi', what: 'Full Stack Web Development', where: 'Div Academy', note: 'React, Tailwind, PHP, Laravel, Node.js, REST API dizaynı' },
    ],
  },
  contact: {
    index: '06',
    kicker: 'Növbəti layihə',
    title1: 'Gəl birlikdə',
    title2: 'nəsə quraq.',
    text: 'İş təklifi, layihə ideyası, ya da sadəcə salam — məktubun cavabsız qalmayacaq.',
    copy: 'Kopyala',
    copied: 'Kopyalandı!',
    send: 'Məktub yaz',
    local: 'Bakı vaxtı',
    built: 'Sevgi və çoxlu kofe ilə hazırlanıb',
    top: 'Yuxarı',
  },
  term: {
    welcome: 'said@portfolio:~$ Xoş gəldin! Əmrləri görmək üçün "help" yaz.',
    help: 'Əmrlər: whoami · skills · projects · contact · hire · clear',
    whoami: 'Said Muradkhan — Full-Stack Developer @ Leops. Bakı. Laravel + React sevir.',
    skills: 'PHP, Laravel, JavaScript, React, Node.js, Express, MySQL, PostgreSQL, Docker, Git',
    projects: 'Spec-Taxi · Assetra · leops.az · iTicket · Carify',
    contact: 'saidmuradkhan414@gmail.com',
    hire: 'Əla seçim 😄 Əlaqə bölməsinə keçirəm...',
    unknown: 'Əmr tapılmadı: ',
  },
}

const en = {
  nav: { about: 'About', work: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
  loading: 'Loading',
  hero: {
    eyebrow: 'Full-Stack Developer · Baku',
    roles: ['Full-Stack Developer', 'Laravel & React', 'Problem solver'],
    lead: 'I build reliable web applications and the internal tools teams rely on every day — from the interface all the way down to the database.',
    ctaWork: 'See my work',
    ctaCv: 'Download CV',
    available: 'Open to new opportunities',
    scroll: 'Scroll down',
  },
  about: {
    index: '01',
    title: 'About',
    big: 'I write code not just to work, but to keep working <em>for years</em>.',
    p1: 'I\'m a Computer Science student at Khazar University and a Full-Stack Developer at Leops. I work on systems that run real company operations — from refactoring legacy code to building new products from scratch.',
    p2: 'I\'m comfortable on both sides of the stack: PHP, Laravel, JavaScript, React, SQL and Git. Server configuration and deployment are part of the job too.',
    stats: [
      { n: 5, s: '', label: 'real projects' },
      { n: 3, s: '', label: 'systems in production' },
      { n: 20, s: '+', label: 'technologies' },
      { n: 5, s: '', label: 'languages' },
    ],
    terminalHint: 'Try the terminal — type "help"',
  },
  work: {
    index: '02',
    title: 'Experience',
    company: 'Leops',
    role: 'Full Stack Developer',
    period: 'Jan 2026 — Present',
    place: 'Baku, Azerbaijan',
    also: { label: 'Also', name: 'Memorise', role: 'Developer', note: 'Team member', url: 'https://memorise.az/team' },
    items: [
      {
        name: 'Spec-Taxi',
        tag: 'Internal management system',
        url: 'https://db.spec.taxi',
        date: 'Jun 2026 — Present',
        points: [
          'Worked with the engineering team to design, build and release the new version of the platform.',
          'Developed front-end and back-end features based on requirements from the operations team.',
          'Refactored legacy code and fixed critical bugs, making the system faster and more reliable.',
        ],
      },
      {
        name: 'Assetra',
        tag: 'Asset & inventory management',
        date: 'Jul 2026 — Present',
        points: [
          'A new inventory management product for the company — React front end, Laravel back end.',
          'Team project, in active development.',
        ],
      },
      {
        name: 'leops.az',
        tag: 'Corporate website',
        url: 'https://leops.az',
        date: 'Jan 2026 — Present',
        points: [
          'Built and deployed the site end to end: responsive UI, back-end logic and dynamic content.',
          'Maintain it in production: performance optimization, bug fixes and security updates.',
        ],
      },
    ],
    across: 'Across projects: REST API integrations, slow SQL query optimization, server deployments, environment configuration and production troubleshooting.',
  },
  projects: {
    index: '03',
    title: 'Selected projects',
    sub: 'Personal projects built from scratch, modelled on real products.',
    view: 'View on GitHub',
    vis: { stage: 'STAGE', car: 'Car', ship: 'shipping', baku: 'Baku' },
    items: [
      {
        name: 'iTicket',
        kind: 'Ticketing platform',
        year: '2026',
        desc: 'An event ticketing platform modelled on iTicket.az: event search and filters, an interactive seat map, a cart with countdown timer and a user profile with tickets, orders, wallet and refunds. Real card payments via the Payriff API through a Node.js/Express service that keeps the secret key server-side and verifies payment status. Google sign-in, multi-language UI and dark mode.',
        stack: ['React', 'React Router', 'Context API', 'Node.js', 'Express', 'Payriff'],
        url: 'https://github.com/saidmuradkhan/Iticket',
        features: ['Seat map', 'Real payments', 'Google Auth'],
      },
      {
        name: 'Carify',
        kind: 'Car import',
        year: '2026',
        desc: 'A car import and shipping site modelled on carify-global.com: car catalog, shipping cost calculator, shipment tracking with Google Maps, wishlist, authentication and multi-language support.',
        stack: ['React', 'React Router', 'i18next', 'Axios', 'Google Maps API'],
        url: 'https://github.com/saidmuradkhan/Carify',
        features: ['Cost calculator', 'Live tracking', 'i18n'],
      },
    ],
  },
  skills: {
    index: '04',
    title: 'Tools & skills',
    groups: { backend: 'Backend', frontend: 'Frontend', data: 'Databases', devops: 'DevOps & tools', other: 'Other languages' },
    langTitle: 'Languages I speak',
    langs: [
      { name: 'Azerbaijani', level: 'Native', v: 100 },
      { name: 'Turkish', level: 'C2', v: 95 },
      { name: 'English', level: 'B2', v: 70 },
      { name: 'Russian', level: 'A2', v: 30 },
      { name: 'German', level: 'A1', v: 15 },
    ],
  },
  edu: {
    index: '05',
    title: 'Education',
    items: [
      { when: '2024 — Now', what: 'Computer Science', where: 'Khazar University', note: 'Bachelor\'s (EQF 6)' },
      { when: '2025 — Now', what: 'Full Stack Web Development', where: 'Div Academy', note: 'React, Tailwind, PHP, Laravel, Node.js, REST API design' },
    ],
  },
  contact: {
    index: '06',
    kicker: 'Next project',
    title1: 'Let\'s build',
    title2: 'something.',
    text: 'A job offer, a project idea or just a hello — your message won\'t go unanswered.',
    copy: 'Copy',
    copied: 'Copied!',
    send: 'Write an email',
    local: 'Baku time',
    built: 'Built with love and lots of coffee',
    top: 'Back to top',
  },
  term: {
    welcome: 'said@portfolio:~$ Welcome! Type "help" to see the commands.',
    help: 'Commands: whoami · skills · projects · contact · hire · clear',
    whoami: 'Said Muradkhan — Full-Stack Developer @ Leops. Baku. Loves Laravel + React.',
    skills: 'PHP, Laravel, JavaScript, React, Node.js, Express, MySQL, PostgreSQL, Docker, Git',
    projects: 'Spec-Taxi · Assetra · leops.az · iTicket · Carify',
    contact: 'saidmuradkhan414@gmail.com',
    hire: 'Great choice 😄 Taking you to the contact section...',
    unknown: 'Command not found: ',
  },
}

export const content = { az, en }
