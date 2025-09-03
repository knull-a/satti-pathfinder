import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ru' | 'en' | 'kz';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header
    'nav.about': 'О платформе',
    'nav.forWhom': 'Для кого',
    'nav.students': 'Подросткам и студентам',
    'nav.universities': 'Учебным заведениям',
    'nav.employers': 'Работодателям',
    'nav.news': 'Новости, курсы',
    'nav.try': 'Попробовать',
    
    // Hero
    'hero.title': 'Открываем подросткам путь к будущей карьере',
    'hero.subtitle': 'Платформа объединяет подростков, наставников и работодателей для создания безопасной экосистемы профориентации и карьерного развития',
    'hero.cta': 'Начать путешествие',
    
    // Audience Section
    'audience.title': 'Для кого создана платформа',
    'audience.students.title': 'Подросткам и студентам',
    'audience.students.desc': 'Пройди профориентационное тестирование, найди наставника и получи возможности для карьерного развития',
    'audience.universities.title': 'Университетам и работодателям',
    'audience.universities.desc': 'Привлекайте талантливых студентов и создавайте программы для развития будущих специалистов',
    'audience.mentors.title': 'Для менторов',
    'audience.mentors.desc': 'Делитесь опытом, помогайте молодежи найти свой путь и развивайте следующее поколение профессионалов',
    
    // Features
    'features.badge': 'Для подростков и студентов',
    'features.title': 'Все для успешного старта карьеры',
    'features.subtitle': 'Пройди тестирование, найди наставника и получи первые возможности для развития в интересующей сфере',
    'features.testing.title': 'Профориентационное тестирование',
    'features.testing.desc': 'Узнай свои сильные стороны и найди подходящее направление развития',
    'features.mentoring.title': 'Персональное наставничество',
    'features.mentoring.desc': 'Получи поддержку от опытных профессионалов в своей области',
    'features.opportunities.title': 'Карьерные возможности',
    'features.opportunities.desc': 'Участвуй в стажировках, проектах и других программах развития',
    'features.networking.title': 'Нетворкинг',
    'features.networking.desc': 'Знакомься с единомышленниками и расширяй профессиональные связи',
    
    // Activities
    'activities.title': 'Разнообразные форматы погружения в профессию',
    'activities.subtitle': 'От наблюдения до практических проектов',
    'activities.shadowing.title': 'Job Shadowing',
    'activities.shadowing.desc': 'Наблюдай за работой профессионалов в реальной рабочей среде',
    'activities.meetup.title': 'Meetup',
    'activities.meetup.desc': 'Участвуй в встречах с экспертами и обменивайся опытом',
    'activities.project.title': 'Project Based',
    'activities.project.desc': 'Работай над реальными проектами под руководством наставников',
    'activities.form.title': 'Хочешь участвовать? Оставь контакты, и мы пришлём приглашения в новые активности',
    'activities.form.name': 'Имя',
    'activities.form.email': 'Email',
    'activities.form.phone': 'Телефон',
    'activities.form.submit': 'Отправить заявку',
    
    // Universities
    'universities.badge': 'Для колледжей и университетов',
    'universities.title': 'Развивайте студентов с нами',
    'universities.subtitle': 'Интегрируйте нашу платформу в образовательный процесс и помогайте студентам найти свой путь в карьере',
    'universities.connect': 'Подключить учебное заведение',
    
    // Employers
    'employers.badge': 'Для работодателей',
    'employers.title': 'Привлекайте талантливую молодежь',
    'employers.subtitle': 'Инвестируйте в свое будущее: формируйте профессиональную культуру и создавайте кадровый резерв для долгосрочного успеха компании',
    'employers.partner': 'Стать партнёром',
    
    // News
    'news.title': 'Актуальные возможности для развития',
    'news.newsletter.title': 'Подписаться на новости, события нашей платформы. Будьте в курсе о полезных для вас новых возможностях и обновлениях нашей платформы',
    'news.newsletter.name': 'Имя',
    'news.newsletter.email': 'Email',
    'news.newsletter.submit': 'Подписаться',
    'news.bala.title': 'BALA STORE — предпринимательство для подростков',
    'news.bala.desc': 'Первая в Казахстане офлайн- и онлайн-платформа, где подростки могут зарабатывать и развивать предпринимательское мышление.',
    'news.bala.read': 'Читать далее',
    
    // Footer
    'footer.company': 'О компании',
    'footer.students': 'Подросткам',
    'footer.employers': 'Работодателям',
    'footer.universities': 'Университетам',
    'footer.support': 'Поддержка',
    'footer.help': 'Помощь',
    'footer.contact': 'Контакты',
    'footer.legal': 'Правовая информация',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.rights': 'Все права защищены',
    
    // Marquee texts
    'marquee.development': 'Развитие',
    'marquee.leadership': 'Лидерство',
    'marquee.future': 'Будущее',
    'marquee.partnership': 'Партнёрство',
    'marquee.career': 'Карьерa',
    'marquee.innovations': 'Инновации',
    'marquee.education': 'Образование',
    'marquee.ecosystem': 'Экосистема',
    'marquee.opportunities': 'Возможности',
    'marquee.success': 'Успех',
    'marquee.develop': 'Развивайся здесь!',
    'marquee.build': 'Строй будущее!',
    'marquee.start': 'Начни карьеру!',
    'marquee.lead': 'Стань лидером!',
    'marquee.open': 'Открой возможности!',
    'marquee.create': 'Создавай успех!',
    'marquee.achieve': 'Достигай большего!',
    'marquee.choose': 'Выбирай развитие!',
    'marquee.grow': 'Расти вместе!',
    'marquee.leadToday': 'Лидируй сегодня!'
  },
  en: {
    // Header
    'nav.about': 'About Platform',
    'nav.forWhom': 'For Whom',
    'nav.students': 'For Students',
    'nav.universities': 'For Universities',
    'nav.employers': 'For Employers',
    'nav.news': 'News & Courses',
    'nav.try': 'Try Now',
    
    // Hero
    'hero.title': 'Opening career paths for teenagers',
    'hero.subtitle': 'Platform connects teenagers, mentors and employers to create a safe ecosystem for career guidance and development',
    'hero.cta': 'Start Journey',
    
    // Audience Section
    'audience.title': 'Who is the platform for',
    'audience.students.title': 'For Students & Teenagers',
    'audience.students.desc': 'Take career orientation tests, find a mentor and get opportunities for career development',
    'audience.universities.title': 'For Universities & Employers',
    'audience.universities.desc': 'Attract talented students and create programs for developing future specialists',
    'audience.mentors.title': 'For Mentors',
    'audience.mentors.desc': 'Share experience, help youth find their path and develop the next generation of professionals',
    
    // Features
    'features.badge': 'For Students & Teenagers',
    'features.title': 'Everything for a successful career start',
    'features.subtitle': 'Take tests, find a mentor and get first opportunities for development in your field of interest',
    'features.testing.title': 'Career Orientation Testing',
    'features.testing.desc': 'Discover your strengths and find the right direction for development',
    'features.mentoring.title': 'Personal Mentoring',
    'features.mentoring.desc': 'Get support from experienced professionals in your field',
    'features.opportunities.title': 'Career Opportunities',
    'features.opportunities.desc': 'Participate in internships, projects and other development programs',
    'features.networking.title': 'Networking',
    'features.networking.desc': 'Meet like-minded people and expand your professional connections',
    
    // Activities
    'activities.title': 'Diverse formats of professional immersion',
    'activities.subtitle': 'From observation to practical projects',
    'activities.shadowing.title': 'Job Shadowing',
    'activities.shadowing.desc': 'Observe professionals at work in real work environment',
    'activities.meetup.title': 'Meetup',
    'activities.meetup.desc': 'Participate in expert meetings and exchange experiences',
    'activities.project.title': 'Project Based',
    'activities.project.desc': 'Work on real projects under mentor guidance',
    'activities.form.title': 'Want to participate? Leave your contacts and we will send invitations to new activities',
    'activities.form.name': 'Name',
    'activities.form.email': 'Email',
    'activities.form.phone': 'Phone',
    'activities.form.submit': 'Submit Application',
    
    // Universities
    'universities.badge': 'For Colleges & Universities',
    'universities.title': 'Develop students with us',
    'universities.subtitle': 'Integrate our platform into the educational process and help students find their career path',
    'universities.connect': 'Connect Educational Institution',
    
    // Employers
    'employers.badge': 'For Employers',
    'employers.title': 'Attract talented youth',
    'employers.subtitle': 'Invest in your future: form professional culture and create talent pool for long-term company success',
    'employers.partner': 'Become Partner',
    
    // News
    'news.title': 'Current development opportunities',
    'news.newsletter.title': 'Subscribe to platform news and events. Stay informed about new opportunities and platform updates that are useful for you',
    'news.newsletter.name': 'Name',
    'news.newsletter.email': 'Email',
    'news.newsletter.submit': 'Subscribe',
    'news.bala.title': 'BALA STORE — entrepreneurship for teenagers',
    'news.bala.desc': 'First offline and online platform in Kazakhstan where teenagers can earn and develop entrepreneurial thinking.',
    'news.bala.read': 'Read More',
    
    // Footer
    'footer.company': 'Company',
    'footer.students': 'For Students',
    'footer.employers': 'For Employers',
    'footer.universities': 'For Universities',
    'footer.support': 'Support',
    'footer.help': 'Help',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved',
    
    // Marquee texts
    'marquee.development': 'Development',
    'marquee.leadership': 'Leadership',
    'marquee.future': 'Future',
    'marquee.partnership': 'Partnership',
    'marquee.career': 'Career',
    'marquee.innovations': 'Innovations',
    'marquee.education': 'Education',
    'marquee.ecosystem': 'Ecosystem',
    'marquee.opportunities': 'Opportunities',
    'marquee.success': 'Success',
    'marquee.develop': 'Develop here!',
    'marquee.build': 'Build future!',
    'marquee.start': 'Start career!',
    'marquee.lead': 'Become leader!',
    'marquee.open': 'Open opportunities!',
    'marquee.create': 'Create success!',
    'marquee.achieve': 'Achieve more!',
    'marquee.choose': 'Choose development!',
    'marquee.grow': 'Grow together!',
    'marquee.leadToday': 'Lead today!'
  },
  kz: {
    // Header
    'nav.about': 'Платформа туралы',
    'nav.forWhom': 'Кімге арналған',
    'nav.students': 'Жасөспірімдер мен студенттерге',
    'nav.universities': 'Оқу орындарына',
    'nav.employers': 'Жұмыс берушілерге',
    'nav.news': 'Жаңалықтар, курстар',
    'nav.try': 'Сынап көру',
    
    // Hero
    'hero.title': 'Жасөспірімдерге болашақ мансапқа жол ашамыз',
    'hero.subtitle': 'Платформа жасөспірімдер, тәлімгерлер мен жұмыс берушілерді біріктіреді, мамандық бағдарлау мен мансап дамытудың қауіпсіз экожүйесін құрады',
    'hero.cta': 'Саяхатты бастау',
    
    // Audience Section
    'audience.title': 'Платформа кімге арналған',
    'audience.students.title': 'Жасөспірімдер мен студенттерге',
    'audience.students.desc': 'Мамандық бағдарлау тестінен өт, тәлімгер тап және мансап дамыту мүмкіндіктерін ал',
    'audience.universities.title': 'Университеттер мен жұмыс берушілерге',
    'audience.universities.desc': 'Талантты студенттерді тартыңыз және болашақ мамандарды дамыту бағдарламаларын жасаңыз',
    'audience.mentors.title': 'Тәлімгерлерге',
    'audience.mentors.desc': 'Тәжірибемен бөлісіңіз, жастарға өз жолын табуға көмектесіңіз және келесі буын мамандарын дамытыңыз',
    
    // Features
    'features.badge': 'Жасөспірімдер мен студенттерге',
    'features.title': 'Мансаптың сәтті басталуы үшін бәрі',
    'features.subtitle': 'Тестілеуден өт, тәлімгер тап және қызықтыратын салада дамуға алғашқы мүмкіндіктерді ал',
    'features.testing.title': 'Мамандық бағдарлау тестілеуі',
    'features.testing.desc': 'Күшті жақтарыңды біл және дамудың дұрыс бағытын тап',
    'features.mentoring.title': 'Жеке тәлімгерлік',
    'features.mentoring.desc': 'Өз саласындағы тәжірибелі мамандардан қолдау ал',
    'features.opportunities.title': 'Мансап мүмкіндіктері',
    'features.opportunities.desc': 'Тағылымдамада, жобаларда және басқа дамыту бағдарламаларында қатыс',
    'features.networking.title': 'Желілесу',
    'features.networking.desc': 'Ұқсас ойлы адамдармен танысып, кәсіби байланыстарды кеңейт',
    
    // Activities
    'activities.title': 'Мамандыққа сіңірудің әртүрлі форматтары',
    'activities.subtitle': 'Бақылаудан практикалық жобаларға дейін',
    'activities.shadowing.title': 'Жұмыстағы көлеңке',
    'activities.shadowing.desc': 'Нақты жұмыс ортасында мамандардың жұмысын бақыла',
    'activities.meetup.title': 'Кездесу',
    'activities.meetup.desc': 'Сарапшылармен кездесулерге қатыс және тәжірибемен алмас',
    'activities.project.title': 'Жобаға негізделген',
    'activities.project.desc': 'Тәлімгерлердің басшылығымен нақты жобалармен жұмыс жаса',
    'activities.form.title': 'Қатысқың келе ме? Байланыс мәліметтерін қалдыр, біз жаңа белсенділіктерге шақырулар жібереміз',
    'activities.form.name': 'Аты',
    'activities.form.email': 'Email',
    'activities.form.phone': 'Телефон',
    'activities.form.submit': 'Өтінім жіберу',
    
    // Universities
    'universities.badge': 'Колледждер мен университеттерге',
    'universities.title': 'Бізбен бірге студенттерді дамытыңыз',
    'universities.subtitle': 'Біздің платформаны білім беру процесіне біріктіріңіз және студенттерге мансап жолын табуға көмектесіңіз',
    'universities.connect': 'Оқу орнын қосу',
    
    // Employers
    'employers.badge': 'Жұмыс берушілерге',
    'employers.title': 'Талантты жастарды тартыңыз',
    'employers.subtitle': 'Болашағыңызға инвестиция салыңыз: кәсіби мәдениет қалыптастырыңыз және компанияның ұзақ мерзімді табысы үшін кадр резервін құрыңыз',
    'employers.partner': 'Серіктес болу',
    
    // News
    'news.title': 'Дамуға арналған өзекті мүмкіндіктер',
    'news.newsletter.title': 'Платформа жаңалықтары мен оқиғаларына жазылыңыз. Сізге пайдалы жаңа мүмкіндіктер мен платформа жаңартулары туралы хабардар болыңыз',
    'news.newsletter.name': 'Аты',
    'news.newsletter.email': 'Email',
    'news.newsletter.submit': 'Жазылу',
    'news.bala.title': 'BALA STORE — жасөспірімдерге арналған кәсіпкерлік',
    'news.bala.desc': 'Қазақстандағы алғашқы офлайн және онлайн платформа, мұнда жасөспірімдер табыс табып, кәсіпкерлік ойлауды дамыта алады.',
    'news.bala.read': 'Толығырақ оқу',
    
    // Footer
    'footer.company': 'Компания туралы',
    'footer.students': 'Жасөспірімдерге',
    'footer.employers': 'Жұмыс берушілерге',
    'footer.universities': 'Университеттерге',
    'footer.support': 'Қолдау',
    'footer.help': 'Көмек',
    'footer.contact': 'Байланыс',
    'footer.legal': 'Құқықтық ақпарат',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.terms': 'Пайдалану шарттары',
    'footer.rights': 'Барлық құқықтар қорғалған',
    
    // Marquee texts
    'marquee.development': 'Даму',
    'marquee.leadership': 'Көшбасшылық',
    'marquee.future': 'Болашақ',
    'marquee.partnership': 'Серіктестік',
    'marquee.career': 'Мансап',
    'marquee.innovations': 'Инновациялар',
    'marquee.education': 'Білім',
    'marquee.ecosystem': 'Экожүйе',
    'marquee.opportunities': 'Мүмкіндіктер',
    'marquee.success': 'Сәттілік',
    'marquee.develop': 'Мұнда дамы!',
    'marquee.build': 'Болашақ құр!',
    'marquee.start': 'Мансап баста!',
    'marquee.lead': 'Көшбасшы бол!',
    'marquee.open': 'Мүмкіндіктер аш!',
    'marquee.create': 'Табыс жаса!',
    'marquee.achieve': 'Көбірек жет!',
    'marquee.choose': 'Дамуды таңда!',
    'marquee.grow': 'Бірге өс!',
    'marquee.leadToday': 'Бүгін көшбасшылық ет!'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};