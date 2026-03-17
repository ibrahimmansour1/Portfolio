/* ============================================
   Portfolio — Main Script
   Bilingual (EN/AR) + Filters + Detail Modal
   ============================================ */

// ==========================================
// TRANSLATIONS
// ==========================================
const translations = {
  // Navigation
  "nav-home": { en: "Home", ar: "الرئيسية" },
  "nav-about": { en: "About", ar: "عني" },
  "nav-skills": { en: "Skills", ar: "المهارات" },
  "nav-projects": { en: "Projects", ar: "المشاريع" },
  "nav-contact": { en: "Contact", ar: "تواصل" },

  // Hero
  "hero-status": { en: "Available for hire", ar: "متاح للعمل" },
  "hero-greeting": { en: "Hello, I'm", ar: "مرحباً، أنا" },
  "hero-name": { en: "Ibrahim Mansour", ar: "إبراهيم منصور" },
  "hero-desc": {
    en: "Building beautiful, high-performance mobile applications with Flutter. Turning ideas into pixel-perfect, cross-platform experiences.",
    ar: "أبني تطبيقات جوال عالية الأداء وجميلة التصميم باستخدام Flutter. أحوّل الأفكار إلى تجارب متعددة المنصات بدقة متناهية.",
  },
  "hero-cv": { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  "hero-touch": { en: "Get in Touch", ar: "تواصل معي" },

  // About
  "about-tag": { en: "Get to know me", ar: "تعرف عليّ" },
  "about-title-1": { en: "About ", ar: "عن " },
  "about-title-2": { en: "Me", ar: "نفسي" },
  "about-h3": {
    en: "Flutter Developer with 4+ Years of Experience",
    ar: "مطور Flutter بخبرة تتجاوز 4 سنوات",
  },
  "about-p1": {
    en: "I'm a passionate mobile developer based in Cairo, Egypt, specializing in building cross-platform applications using Flutter & Dart. I focus on creating clean, scalable code with modern architectures like Clean Architecture and MVVM.",
    ar: "أنا مطور تطبيقات جوال شغوف من القاهرة، مصر. متخصص في بناء تطبيقات متعددة المنصات باستخدام Flutter و Dart. أركز على كتابة كود نظيف وقابل للتوسع باستخدام أنماط معمارية حديثة مثل Clean Architecture و MVVM.",
  },
  "about-p2": {
    en: "I've delivered 40+ projects across diverse industries — from travel booking platforms and fintech apps to healthcare systems, e-commerce marketplaces, and Islamic educational tools. I thrive on challenging projects and always deliver high-quality, user-focused products.",
    ar: "قدمت أكثر من 40 مشروعاً في مختلف المجالات — من منصات حجز السفر وتطبيقات التكنولوجيا المالية إلى أنظمة الرعاية الصحية والأسواق الإلكترونية والتطبيقات التعليمية الإسلامية. أستمتع بالتحديات وأسعى دائماً لتقديم منتجات عالية الجودة.",
  },
  "stat-years": { en: "Years Experience", ar: "سنوات خبرة" },
  "stat-projects": { en: "Projects Delivered", ar: "مشروع تم تسليمه" },
  "stat-clients": { en: "Happy Clients", ar: "عميل سعيد" },

  // Skills
  "skills-tag": { en: "What I work with", ar: "ما أعمل به" },
  "skills-title-1": { en: "Skills & ", ar: "المهارات و" },
  "skills-title-2": { en: "Technologies", ar: "التقنيات" },
  "skill-flutter": { en: "Cross-platform mobile development", ar: "تطوير تطبيقات متعددة المنصات" },
  "skill-dart": { en: "Primary programming language", ar: "لغة البرمجة الأساسية" },
  "skill-firebase": { en: "Auth, Firestore, Cloud Messaging", ar: "المصادقة، قاعدة البيانات، الإشعارات" },
  "skill-api": { en: "Dio, Retrofit, HTTP integration", ar: "تكامل Dio و Retrofit و HTTP" },
  "skill-arch": { en: "Scalable, maintainable code", ar: "كود قابل للتوسع والصيانة" },
  "skill-state": { en: "Bloc, Cubit, Riverpod, GetX, Provider", ar: "Bloc, Cubit, Riverpod, GetX, Provider" },
  "skill-supabase": { en: "Backend & real-time database", ar: "الخادم وقاعدة البيانات الفورية" },
  "skill-ui": { en: "Responsive & adaptive design", ar: "تصميم متجاوب ومتكيف" },

  // Projects
  "projects-tag": { en: "My work", ar: "أعمالي" },
  "projects-title-1": { en: "Projects ", ar: "معرض " },
  "projects-title-2": { en: "Portfolio", ar: "المشاريع" },
  "projects-subtitle": { en: "25+ projects delivered across multiple industries", ar: "أكثر من 25 مشروع تم تسليمه في مختلف المجالات" },
  "filter-all": { en: "All", ar: "الكل" },
  "filter-travel": { en: "Travel & Real Estate", ar: "السفر والعقارات" },
  "filter-food": { en: "Food & Delivery", ar: "الطعام والتوصيل" },
  "filter-finance": { en: "Finance", ar: "المالية" },
  "filter-healthcare": { en: "Healthcare", ar: "الرعاية الصحية" },
  "filter-business": { en: "Business & HR", ar: "الأعمال والموارد البشرية" },
  "filter-ecommerce": { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  "filter-islamic": { en: "Islamic", ar: "إسلامي" },
  "filter-events": { en: "Events", ar: "الفعاليات" },
  "filter-services": { en: "Services", ar: "الخدمات" },
  "filter-social": { en: "Social & Charity", ar: "اجتماعي وخيري" },
  "showing": { en: "Showing", ar: "عرض" },
  "projects-word": { en: "projects", ar: "مشروع" },
  "view-github": { en: "View All on GitHub", ar: "عرض الكل على GitHub" },

  // Contact
  "contact-tag": { en: "Let's work together", ar: "لنعمل معاً" },
  "contact-title-1": { en: "Get in ", ar: "تواصل " },
  "contact-title-2": { en: "Touch", ar: "معي" },
  "contact-desc": {
    en: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to new opportunities and interesting projects.",
    ar: "هل لديك مشروع أو ترغب في التعاون؟ لا تتردد في التواصل. أنا دائماً منفتح على الفرص الجديدة والمشاريع المثيرة.",
  },
  "form-name": { en: "Your Name", ar: "اسمك" },
  "form-email": { en: "Your Email", ar: "بريدك الإلكتروني" },
  "form-subject": { en: "Subject", ar: "الموضوع" },
  "form-message": { en: "Your Message", ar: "رسالتك" },
  "form-send": { en: "Send Message", ar: "إرسال الرسالة" },

  // Contact labels
  "cl-email": { en: "Email", ar: "البريد الإلكتروني" },
  "cl-whatsapp": { en: "WhatsApp", ar: "واتساب" },
  "cl-linkedin": { en: "LinkedIn", ar: "لينكد إن" },
  "cl-linkedin-val": { en: "Ibrahim Mansour", ar: "إبراهيم منصور" },
  "cl-github": { en: "GitHub", ar: "جيت هب" },
  "cl-youtube": { en: "YouTube", ar: "يوتيوب" },
  "cl-youtube-val": { en: "Ibrahim Mansour", ar: "إبراهيم منصور" },

  // Footer
  "footer-copy": { en: "© 2026 Ibrahim Mansour. All rights reserved.", ar: "© 2026 إبراهيم منصور. جميع الحقوق محفوظة." },

  // Modal
  "modal-tech": { en: "TECH STACK", ar: "التقنيات المستخدمة" },
  "modal-features": { en: "KEY FEATURES", ar: "الميزات الرئيسية" },
};

// Project data with AR translations and features
const projectData = {
  onvaca: {
    name: { en: "Onvaca", ar: "أونفاكا" },
    badge: { en: "Travel", ar: "سفر" },
    desc: {
      en: "A comprehensive travel & vacation booking platform with real-time availability, secure Stripe payments, trip swaps, and personalized recommendations. Built with clean architecture and advanced search filters.",
      ar: "منصة شاملة لحجز السفر والإجازات مع توافر فوري، مدفوعات آمنة عبر Stripe، تبادل الرحلات، وتوصيات مخصصة. مبنية بهندسة نظيفة وفلاتر بحث متقدمة.",
    },
    features: {
      en: ["Real-time availability", "Stripe payments", "Trip swaps", "Search & filters", "Personalized recommendations", "Booking management"],
      ar: ["التوافر الفوري", "مدفوعات Stripe", "تبادل الرحلات", "بحث وفلاتر", "توصيات مخصصة", "إدارة الحجوزات"],
    },
  },
  ejary: {
    name: { en: "Ejary", ar: "إيجاري" },
    badge: { en: "Real Estate", ar: "عقارات" },
    desc: {
      en: "Rental property management app handling lease agreements, tenant onboarding, document management, file uploads, and payment tracking with Firebase backend.",
      ar: "تطبيق إدارة العقارات الإيجارية يتعامل مع عقود الإيجار، تسجيل المستأجرين، إدارة المستندات، رفع الملفات، وتتبع المدفوعات.",
    },
    features: {
      en: ["Lease management", "Tenant onboarding", "Document uploads", "Payment tracking", "Property listings", "Firebase backend"],
      ar: ["إدارة العقود", "تسجيل المستأجرين", "رفع المستندات", "تتبع المدفوعات", "قوائم العقارات", "خادم Firebase"],
    },
  },
  parotea: {
    name: { en: "Parotea", ar: "باروتيا" },
    badge: { en: "Property Mgmt", ar: "إدارة عقارات" },
    desc: {
      en: "Property & room management system with unit tracking, reservations calendar, visitor management, owner dashboards, and dual backend using Firebase and Supabase.",
      ar: "نظام إدارة العقارات والغرف مع تتبع الوحدات، تقويم الحجوزات، إدارة الزوار، لوحة تحكم المالك، وخادم مزدوج Firebase و Supabase.",
    },
    features: {
      en: ["Unit tracking", "Calendar reservations", "Visitor management", "Owner dashboards", "Firebase + Supabase", "Bloc state management"],
      ar: ["تتبع الوحدات", "تقويم الحجوزات", "إدارة الزوار", "لوحة تحكم المالك", "Firebase + Supabase", "إدارة الحالة Bloc"],
    },
  },
  rentall: {
    name: { en: "RentAll", ar: "رنت أول" },
    badge: { en: "Vacation Rentals", ar: "تأجير إجازات" },
    desc: {
      en: "Airbnb-style vacation rental marketplace with property listings, booking management, reviews, host dashboard, and native iOS experience built with Swift.",
      ar: "سوق تأجير إجازات بأسلوب Airbnb مع قوائم العقارات، إدارة الحجوزات، التقييمات، لوحة تحكم المضيف، وتجربة iOS أصلية مبنية بـ Swift.",
    },
    features: {
      en: ["Property listings", "Booking management", "User reviews", "Host dashboard", "Native iOS (Swift)", "Search & filters"],
      ar: ["قوائم العقارات", "إدارة الحجوزات", "تقييمات المستخدمين", "لوحة المضيف", "iOS أصلي (Swift)", "بحث وفلاتر"],
    },
  },
  forrera: {
    name: { en: "Forrera", ar: "فوريرا" },
    badge: { en: "Food Delivery", ar: "توصيل طعام" },
    desc: {
      en: "Food ordering & delivery platform with geolocation, Google sign-in, PDF receipts, push notifications, Sentry error tracking, and Supabase real-time backend.",
      ar: "منصة طلب وتوصيل الطعام مع تحديد الموقع الجغرافي، تسجيل دخول Google، إيصالات PDF، إشعارات فورية، تتبع الأخطاء، وخادم Supabase.",
    },
    features: {
      en: ["Geolocation", "Google Sign-in", "PDF receipts", "Push notifications", "Error tracking (Sentry)", "Supabase real-time"],
      ar: ["تحديد الموقع", "تسجيل دخول Google", "إيصالات PDF", "إشعارات فورية", "تتبع الأخطاء", "بيانات فورية"],
    },
  },
  greenz: {
    name: { en: "Greenz Ecosystem", ar: "منظومة جرينز" },
    badge: { en: "Grocery Ecosystem", ar: "منظومة بقالة" },
    desc: {
      en: "Full grocery platform with 3 interconnected apps: Customer app for product browsing, cart & ordering; Delivery app for drivers with route management & earnings tracking; and Pickup app for in-store order handling & inventory management.",
      ar: "منصة بقالة متكاملة من 3 تطبيقات مترابطة: تطبيق العملاء لتصفح المنتجات والسلة والطلب، تطبيق التوصيل للسائقين مع إدارة المسارات وتتبع الأرباح، وتطبيق الاستلام لإدارة الطلبات والمخزون داخل المتجر.",
    },
    features: {
      en: ["3 interconnected apps", "Product browsing & cart", "Driver route management", "Pickup order handling", "Real-time tracking", "Promo system"],
      ar: ["3 تطبيقات مترابطة", "تصفح المنتجات والسلة", "إدارة مسارات السائقين", "إدارة طلبات الاستلام", "تتبع فوري", "نظام ترويجي"],
    },
  },
  "greenz-delivery": {
    name: { en: "Greenz Delivery", ar: "جرينز - التوصيل" },
    badge: { en: "Logistics", ar: "لوجستيات" },
    desc: {
      en: "Driver companion app for the Greenz grocery platform with route management, order tracking, delivery status updates, and earnings dashboard.",
      ar: "تطبيق مرافق للسائقين في منصة جرينز مع إدارة المسارات، تتبع الطلبات، تحديث حالة التوصيل، ولوحة الأرباح.",
    },
    features: {
      en: ["Route management", "Order tracking", "Status updates", "Earnings dashboard", "Maps integration", "Push notifications"],
      ar: ["إدارة المسارات", "تتبع الطلبات", "تحديث الحالة", "لوحة الأرباح", "تكامل الخرائط", "إشعارات فورية"],
    },
  },
  "greenz-pickup": {
    name: { en: "Greenz Pickup", ar: "جرينز - الاستلام" },
    badge: { en: "Logistics", ar: "لوجستيات" },
    desc: {
      en: "Pickup order management app for the Greenz ecosystem, handling in-store pickup orders, inventory checks, and customer notifications.",
      ar: "تطبيق إدارة طلبات الاستلام لمنظومة جرينز، يتعامل مع طلبات الاستلام من المتجر، فحص المخزون، وإشعارات العملاء.",
    },
    features: {
      en: ["Pickup management", "Inventory tracking", "Customer notifications", "Order processing", "Real-time updates", "Store management"],
      ar: ["إدارة الاستلام", "تتبع المخزون", "إشعارات العملاء", "معالجة الطلبات", "تحديثات فورية", "إدارة المتجر"],
    },
  },
  almalek: {
    name: { en: "Almalek Exchange", ar: "المالك للصرافة" },
    badge: { en: "Fintech", ar: "تكنولوجيا مالية" },
    desc: {
      en: "Currency exchange & money transfer platform with live rate charts, OTP verification, transaction history, interactive analytics, Firebase auth, payment processing, and multi-currency conversion tools.",
      ar: "منصة تحويل العملات والأموال مع رسوم بيانية مباشرة، تحقق OTP، سجل المعاملات، تحليلات تفاعلية، مصادقة Firebase، معالجة المدفوعات، وأدوات تحويل متعددة العملات.",
    },
    features: {
      en: ["Live rate charts", "Money transfers", "OTP verification", "Firebase Auth", "Transaction tracking", "Interactive analytics"],
      ar: ["رسوم بيانية مباشرة", "تحويل الأموال", "تحقق OTP", "مصادقة Firebase", "تتبع المعاملات", "تحليلات تفاعلية"],
    },
  },
  mbex: {
    name: { en: "Money Basket (MBEX)", ar: "سلة الأموال (MBEX)" },
    badge: { en: "Fintech", ar: "تكنولوجيا مالية" },
    desc: {
      en: "Money transfer & remittance app with Firebase auth, interactive charts, payment processing, file downloads, countdown timers, and transaction tracking.",
      ar: "تطبيق تحويل الأموال مع مصادقة Firebase، رسوم بيانية تفاعلية، معالجة المدفوعات، تنزيل الملفات، ومؤقتات وتتبع المعاملات.",
    },
    features: {
      en: ["Money transfers", "Interactive charts", "Firebase Auth", "Payment processing", "Transaction tracking", "File downloads"],
      ar: ["تحويل الأموال", "رسوم بيانية تفاعلية", "مصادقة Firebase", "معالجة المدفوعات", "تتبع المعاملات", "تنزيل الملفات"],
    },
  },
  "care-hhc": {
    name: { en: "Care-HHC", ar: "كير - الرعاية المنزلية" },
    badge: { en: "Home Healthcare", ar: "رعاية صحية منزلية" },
    desc: {
      en: "Home healthcare management app for patient visits, caregiver scheduling, visit ratings, medical record tracking, and image uploads with clean architecture.",
      ar: "تطبيق إدارة الرعاية الصحية المنزلية لزيارات المرضى، جدولة مقدمي الرعاية، تقييم الزيارات، تتبع السجلات الطبية، ورفع الصور.",
    },
    features: {
      en: ["Patient visits", "Caregiver scheduling", "Visit ratings", "Medical records", "Image uploads", "Clean architecture"],
      ar: ["زيارات المرضى", "جدولة مقدمي الرعاية", "تقييم الزيارات", "سجلات طبية", "رفع الصور", "هندسة نظيفة"],
    },
  },
  medical: {
    name: { en: "Medical Healthcare", ar: "الرعاية الطبية" },
    badge: { en: "Medical", ar: "طبي" },
    desc: {
      en: "Medical platform with doctor appointments, patient-doctor messaging, scheduling system, and comprehensive health records management.",
      ar: "منصة طبية مع مواعيد الأطباء، المراسلة بين المريض والطبيب، نظام الجدولة، وإدارة شاملة للسجلات الصحية.",
    },
    features: {
      en: ["Doctor appointments", "Patient messaging", "Scheduling", "Health records", "Doctor profiles", "Notifications"],
      ar: ["مواعيد الأطباء", "مراسلة المرضى", "الجدولة", "سجلات صحية", "ملفات الأطباء", "إشعارات"],
    },
  },
  stanford: {
    name: { en: "Stanford-Binet", ar: "ستانفورد-بينيه" },
    badge: { en: "Psychology", ar: "علم نفس" },
    desc: {
      en: "IQ test administration app with child profiles, guided test sessions, PDF report generation, audio prompts, digital signatures, and Firebase cloud storage.",
      ar: "تطبيق إدارة اختبارات الذكاء مع ملفات الأطفال، جلسات اختبار موجهة، توليد تقارير PDF، تنبيهات صوتية، توقيعات رقمية، وتخزين سحابي.",
    },
    features: {
      en: ["Child profiles", "Guided test sessions", "PDF reports", "Audio prompts", "Digital signatures", "Cloud storage"],
      ar: ["ملفات الأطفال", "جلسات اختبار موجهة", "تقارير PDF", "تنبيهات صوتية", "توقيعات رقمية", "تخزين سحابي"],
    },
  },
  fait: {
    name: { en: "Fait", ar: "فيت" },
    badge: { en: "Fitness", ar: "لياقة بدنية" },
    desc: {
      en: "AI-powered fitness trainer app with progress charts, body measurements tracking, image-based progress monitoring, and personalized workout plans.",
      ar: "تطبيق مدرب لياقة بالذكاء الاصطناعي مع رسوم بيانية للتقدم، تتبع قياسات الجسم، مراقبة التقدم بالصور، وخطط تمارين مخصصة.",
    },
    features: {
      en: ["AI trainer", "Progress charts", "Body tracking", "Image monitoring", "Workout plans", "Analytics"],
      ar: ["مدرب ذكي", "رسوم التقدم", "تتبع الجسم", "مراقبة بالصور", "خطط تمارين", "تحليلات"],
    },
  },
  creen: {
    name: { en: "Creen", ar: "كرين" },
    badge: { en: "Wellness", ar: "صحة" },
    desc: {
      en: "Health & wellness platform with doctor consultations, health screenings, weight loss tracking, image-based progress uploads, and ratings system.",
      ar: "منصة صحة وعافية مع استشارات الأطباء، فحوصات صحية، تتبع فقدان الوزن، رفع صور التقدم، ونظام تقييمات.",
    },
    features: {
      en: ["Doctor consultations", "Health screenings", "Weight tracking", "Progress photos", "Ratings", "Health reports"],
      ar: ["استشارات الأطباء", "فحوصات صحية", "تتبع الوزن", "صور التقدم", "تقييمات", "تقارير صحية"],
    },
  },
  bsma: {
    name: { en: "BSMA HR", ar: "بسمة - الموارد البشرية" },
    badge: { en: "HR", ar: "موارد بشرية" },
    desc: {
      en: "HR management system with attendance tracking, leave management, payroll processing, expense reports, employee deductions, and clean architecture.",
      ar: "نظام إدارة الموارد البشرية مع تتبع الحضور، إدارة الإجازات، معالجة الرواتب، تقارير المصروفات، والخصومات.",
    },
    features: {
      en: ["Attendance tracking", "Leave management", "Payroll", "Expense reports", "Deductions", "Clean architecture"],
      ar: ["تتبع الحضور", "إدارة الإجازات", "الرواتب", "تقارير المصروفات", "الخصومات", "هندسة نظيفة"],
    },
  },
  margins: {
    name: { en: "Margins Mobile", ar: "مارجنز" },
    badge: { en: "Project Mgmt", ar: "إدارة مشاريع" },
    desc: {
      en: "Internal project management app for Margins Development with tickets, units tracking, company news feed, and push notifications via Firebase.",
      ar: "تطبيق إدارة مشاريع داخلي لشركة Margins Development مع التذاكر، تتبع الوحدات، أخبار الشركة، وإشعارات فورية عبر Firebase.",
    },
    features: {
      en: ["Ticket system", "Unit tracking", "News feed", "Push notifications", "Firebase Messaging", "Multi-language"],
      ar: ["نظام التذاكر", "تتبع الوحدات", "الأخبار", "إشعارات فورية", "رسائل Firebase", "متعدد اللغات"],
    },
  },
  nibni: {
    name: { en: "Nibni System", ar: "نظام نبني" },
    badge: { en: "Construction", ar: "بناء" },
    desc: {
      en: "Construction & building management system with maps integration, document management, progress tracking, push notifications, and GoRouter navigation.",
      ar: "نظام إدارة البناء والتشييد مع تكامل الخرائط، إدارة المستندات، تتبع التقدم، إشعارات فورية، وتنقل GoRouter.",
    },
    features: {
      en: ["Maps integration", "Document management", "Progress tracking", "Push notifications", "Bloc + Freezed", "GoRouter"],
      ar: ["تكامل الخرائط", "إدارة المستندات", "تتبع التقدم", "إشعارات فورية", "Bloc + Freezed", "GoRouter"],
    },
  },
  tawabeq: {
    name: { en: "Tawabeq", ar: "طوابق" },
    badge: { en: "Document Mgmt", ar: "إدارة مستندات" },
    desc: {
      en: "Document management app with file browsing, image handling, pagination, organized document categorization, and Provider state management.",
      ar: "تطبيق إدارة المستندات مع تصفح الملفات، معالجة الصور، التصفح المرقم، تصنيف المستندات، وإدارة الحالة Provider.",
    },
    features: {
      en: ["File browsing", "Image handling", "Pagination", "Categorization", "Firebase backend", "Provider state"],
      ar: ["تصفح الملفات", "معالجة الصور", "التصفح المرقم", "التصنيف", "خادم Firebase", "حالة Provider"],
    },
  },
  pos: {
    name: { en: "POS App", ar: "نقطة البيع" },
    badge: { en: "Retail", ar: "تجزئة" },
    desc: {
      en: "Point-of-sale system for retail businesses with inventory management, sales tracking, receipt generation, and business analytics.",
      ar: "نظام نقطة بيع للأعمال التجارية مع إدارة المخزون، تتبع المبيعات، إنشاء الإيصالات، وتحليلات الأعمال.",
    },
    features: {
      en: ["Inventory management", "Sales tracking", "Receipt generation", "Analytics", "Product catalog", "Fast checkout"],
      ar: ["إدارة المخزون", "تتبع المبيعات", "إنشاء الإيصالات", "تحليلات", "كتالوج المنتجات", "دفع سريع"],
    },
  },
  artstation: {
    name: { en: "Art Station", ar: "محطة الفن" },
    badge: { en: "Art", ar: "فن" },
    desc: {
      en: "Art marketplace with browsing, cart, in-app chat, favorites, search, QR scanning, and user profiles for artists & collectors.",
      ar: "سوق فني مع التصفح، السلة، محادثة داخلية، المفضلة، البحث، مسح QR، وملفات شخصية للفنانين والجامعين.",
    },
    features: {
      en: ["Art browsing", "Shopping cart", "In-app chat", "QR scanning", "User profiles", "Favorites & search"],
      ar: ["تصفح الفن", "سلة التسوق", "محادثة داخلية", "مسح QR", "ملفات شخصية", "مفضلة وبحث"],
    },
  },
  edafa: {
    name: { en: "Edafa", ar: "إضافة" },
    badge: { en: "Marketplace", ar: "سوق" },
    desc: {
      en: "Marketplace aggregator with multi-store categories, product search, favorites, notifications, ratings, and store discovery features.",
      ar: "تجميع أسواق مع تصنيفات متعددة المتاجر، بحث المنتجات، المفضلة، الإشعارات، التقييمات، واكتشاف المتاجر.",
    },
    features: {
      en: ["Multi-store", "Product search", "Favorites", "Notifications", "Ratings", "Store discovery"],
      ar: ["متعدد المتاجر", "بحث المنتجات", "المفضلة", "إشعارات", "تقييمات", "اكتشاف المتاجر"],
    },
  },
  freshmart: {
    name: { en: "Fresh Mart", ar: "فريش مارت" },
    badge: { en: "Grocery", ar: "بقالة" },
    desc: {
      en: "Full-featured grocery e-commerce app with product browsing, cart management, order tracking, and seamless checkout experience.",
      ar: "تطبيق بقالة إلكتروني متكامل مع تصفح المنتجات، إدارة السلة، تتبع الطلبات، وتجربة دفع سلسة.",
    },
    features: {
      en: ["Product browsing", "Cart management", "Order tracking", "Seamless checkout", "Categories", "Search"],
      ar: ["تصفح المنتجات", "إدارة السلة", "تتبع الطلبات", "دفع سلس", "تصنيفات", "بحث"],
    },
  },
  odoo: {
    name: { en: "Odoo E-Commerce", ar: "أودو - التجارة الإلكترونية" },
    badge: { en: "ERP", ar: "تخطيط موارد" },
    desc: {
      en: "E-commerce mobile app integrated with Odoo ERP backend for inventory sync, order management, WebView integration, and business operations.",
      ar: "تطبيق تجارة إلكترونية متكامل مع خادم Odoo ERP لمزامنة المخزون، إدارة الطلبات، تكامل WebView، وعمليات الأعمال.",
    },
    features: {
      en: ["Odoo ERP integration", "Inventory sync", "Order management", "WebView", "Bloc state", "Dio HTTP"],
      ar: ["تكامل Odoo ERP", "مزامنة المخزون", "إدارة الطلبات", "WebView", "حالة Bloc", "Dio HTTP"],
    },
  },
  hezmah: {
    name: { en: "Hezmah", ar: "حزمة" },
    badge: { en: "Services", ar: "خدمات" },
    desc: {
      en: "Service marketplace with cart, search, QR codes, ClickPay payment integration, Firebase Dynamic Links, and real-time Firestore backend.",
      ar: "سوق خدمات مع سلة، بحث، رموز QR، تكامل دفع ClickPay، روابط Firebase الديناميكية، وخادم Firestore الفوري.",
    },
    features: {
      en: ["Cart & search", "QR codes", "ClickPay payment", "Dynamic Links", "Firestore real-time", "GetX state"],
      ar: ["سلة وبحث", "رموز QR", "دفع ClickPay", "روابط ديناميكية", "Firestore فوري", "حالة GetX"],
    },
  },
  bayan: {
    name: { en: "Bayan (Quran App)", ar: "بيان (تطبيق القرآن)" },
    badge: { en: "Quran", ar: "القرآن" },
    desc: {
      en: "Quran reading app with Madani Mushaf rendering using QCF fonts, Surah navigation, bookmarks, and full RTL support with beautiful typography.",
      ar: "تطبيق قراءة القرآن الكريم بعرض المصحف المدني باستخدام خطوط QCF، تنقل السور، علامات مرجعية، ودعم كامل للعربية.",
    },
    features: {
      en: ["Madani Mushaf", "QCF fonts", "Surah navigation", "Bookmarks", "RTL support", "Beautiful typography"],
      ar: ["المصحف المدني", "خطوط QCF", "تنقل السور", "علامات مرجعية", "دعم العربية", "خط جميل"],
    },
  },
  zad: {
    name: { en: "Zad Al-Da'ia", ar: "زاد الداعية" },
    badge: { en: "Education", ar: "تعليم" },
    desc: {
      en: "Islamic educational platform with structured learning resources, multimedia content, progress tracking for students of knowledge, and Firebase backend.",
      ar: "منصة تعليمية إسلامية مع موارد تعليمية منظمة، محتوى متعدد الوسائط، تتبع تقدم طلاب العلم، وخادم Firebase.",
    },
    features: {
      en: ["Structured learning", "Multimedia content", "Progress tracking", "Student profiles", "Firebase", "Offline support"],
      ar: ["تعلم منظم", "محتوى متعدد الوسائط", "تتبع التقدم", "ملفات الطلاب", "Firebase", "دعم بدون إنترنت"],
    },
  },
  elmensaje: {
    name: { en: "El Mensaje Eterno", ar: "الرسالة الأبدية" },
    badge: { en: "Da'wah", ar: "دعوة" },
    desc: {
      en: "Islamic education app in Spanish with prayer tutorials, Quran recitation, prayer times (Adhan), Qibla compass, video lessons, and PDF resources.",
      ar: "تطبيق تعليم إسلامي بالإسبانية مع دروس الصلاة، تلاوة القرآن، مواقيت الصلاة (الأذان)، بوصلة القبلة، دروس فيديو، وموارد PDF.",
    },
    features: {
      en: ["Prayer tutorials", "Quran recitation", "Adhan times", "Qibla compass", "Video lessons", "PDF resources"],
      ar: ["دروس الصلاة", "تلاوة القرآن", "مواقيت الأذان", "بوصلة القبلة", "دروس فيديو", "موارد PDF"],
    },
  },
  hesn: {
    name: { en: "Hesn Al Muslim", ar: "حصن المسلم" },
    badge: { en: "Da'wah", ar: "دعوة" },
    desc: {
      en: "Islamic Q&A app presenting Islam to Spanish speakers with 50+ questions, Arabic/Spanish bilingual support, dark mode, and published on Google Play.",
      ar: "تطبيق أسئلة وأجوبة إسلامي لتقديم الإسلام للناطقين بالإسبانية مع 50+ سؤال، دعم ثنائي اللغة، الوضع الداكن، ومنشور على Google Play.",
    },
    features: {
      en: ["50+ Q&A", "Arabic/Spanish", "Dark mode", "Google Play", "Offline support", "Share feature"],
      ar: ["50+ سؤال وجواب", "عربي/إسباني", "وضع داكن", "Google Play", "بدون إنترنت", "ميزة المشاركة"],
    },
  },
  q4k: {
    name: { en: "Q4K (Quran for Kids)", ar: "Q4K (القرآن للأطفال)" },
    badge: { en: "Kids", ar: "أطفال" },
    desc: {
      en: "Interactive Islamic content app for children with audio Quran, hadith collection, categorized lessons, PDF resources, and Firebase backend.",
      ar: "تطبيق محتوى إسلامي تفاعلي للأطفال مع قرآن صوتي، مجموعة أحاديث، دروس مصنفة، موارد PDF، وخادم Firebase.",
    },
    features: {
      en: ["Audio Quran", "Hadith collection", "Lessons", "PDF resources", "Firebase", "Kid-friendly UI"],
      ar: ["قرآن صوتي", "مجموعة أحاديث", "دروس", "موارد PDF", "Firebase", "واجهة للأطفال"],
    },
  },
  da3wa: {
    name: { en: "Da3wa", ar: "دعوة" },
    badge: { en: "Da'wah", ar: "دعوة" },
    desc: {
      en: "Islamic da'wah app with curated religious content, shareable resources, and tools for spreading Islamic knowledge and awareness.",
      ar: "تطبيق دعوة إسلامية مع محتوى ديني منتقى، موارد قابلة للمشاركة، وأدوات لنشر المعرفة الإسلامية والتوعية.",
    },
    features: {
      en: ["Curated content", "Share resources", "Daily reminders", "Categories", "Offline access", "Beautiful UI"],
      ar: ["محتوى منتقى", "مشاركة الموارد", "تذكيرات يومية", "تصنيفات", "بدون إنترنت", "واجهة جميلة"],
    },
  },
  fares: {
    name: { en: "Fares", ar: "فارس" },
    badge: { en: "Offline/BLE", ar: "بلوتوث/أوفلاين" },
    desc: {
      en: "Innovative offline event communication app using Bridgefy BLE mesh networking — works without internet via Bluetooth peer-to-peer connections with audio playback.",
      ar: "تطبيق تواصل مبتكر للفعاليات يعمل بدون إنترنت عبر شبكة Bluetooth mesh باستخدام Bridgefy SDK مع تشغيل صوتي.",
    },
    features: {
      en: ["BLE mesh networking", "No internet needed", "Bridgefy SDK", "Audio playback", "Localization", "Lottie animations"],
      ar: ["شبكة BLE mesh", "بدون إنترنت", "Bridgefy SDK", "تشغيل صوتي", "متعدد اللغات", "رسوم Lottie"],
    },
  },
  "fares-admin": {
    name: { en: "Fares Admin", ar: "فارس - الإدارة" },
    badge: { en: "Admin", ar: "إدارة" },
    desc: {
      en: "Admin panel for the Fares platform with content management, media uploads, carousel management, analytics dashboards, and Lottie animations.",
      ar: "لوحة إدارة لمنصة فارس مع إدارة المحتوى، رفع الوسائط، إدارة الشرائح، لوحات التحليلات، ورسوم Lottie.",
    },
    features: {
      en: ["Content management", "Media uploads", "Carousel editor", "Analytics", "Dio networking", "Lottie animations"],
      ar: ["إدارة المحتوى", "رفع الوسائط", "محرر الشرائح", "تحليلات", "شبكة Dio", "رسوم Lottie"],
    },
  },
  "fares-client": {
    name: { en: "Fares Client", ar: "فارس - العميل" },
    badge: { en: "Client", ar: "عميل" },
    desc: {
      en: "Client-facing app for the Fares platform with event browsing, intro screens, carousels, sharing functionality, and interactive content.",
      ar: "تطبيق العميل لمنصة فارس مع تصفح الفعاليات، شاشات ترحيبية، شرائح، مشاركة، ومحتوى تفاعلي.",
    },
    features: {
      en: ["Event browsing", "Intro screens", "Carousels", "Sharing", "Interactive content", "Caching"],
      ar: ["تصفح الفعاليات", "شاشات ترحيبية", "شرائح", "مشاركة", "محتوى تفاعلي", "تخزين مؤقت"],
    },
  },
  "fares-visitors": {
    name: { en: "Fares Visitors", ar: "فارس - الزوار" },
    badge: { en: "Check-in", ar: "تسجيل دخول" },
    desc: {
      en: "Visitor registration & check-in system with camera preview, digital signature capture, attendee information forms, and event management.",
      ar: "نظام تسجيل الزوار مع معاينة الكاميرا، التقاط التوقيع الرقمي، نماذج معلومات الحضور، وإدارة الفعاليات.",
    },
    features: {
      en: ["Camera preview", "Digital signature", "Registration forms", "QR check-in", "Attendee list", "Event management"],
      ar: ["معاينة الكاميرا", "توقيع رقمي", "نماذج التسجيل", "تسجيل QR", "قائمة الحضور", "إدارة الفعاليات"],
    },
  },
  yahalaa: {
    name: { en: "YaHalaa", ar: "يا هلا" },
    badge: { en: "Conference", ar: "مؤتمر" },
    desc: {
      en: "Conference & event app with agenda, sessions, speakers, video streaming, scheduling, QR scanning, and organizer features with Firebase backend.",
      ar: "تطبيق مؤتمرات وفعاليات مع الجدول، الجلسات، المتحدثين، بث الفيديو، الجدولة، مسح QR، وميزات المنظمين.",
    },
    features: {
      en: ["Agenda & sessions", "Speaker profiles", "Video streaming", "QR scanning", "Scheduling", "Firebase"],
      ar: ["الجدول والجلسات", "ملفات المتحدثين", "بث الفيديو", "مسح QR", "الجدولة", "Firebase"],
    },
  },
  inviting: {
    name: { en: "Inviting", ar: "دعوات" },
    badge: { en: "Invitations", ar: "دعوات" },
    desc: {
      en: "Smart event invitation management with digital cards, RSVP tracking, guest list management, and real-time notifications.",
      ar: "إدارة دعوات الفعاليات الذكية مع بطاقات رقمية، تتبع الردود، إدارة قوائم الضيوف، وإشعارات فورية.",
    },
    features: {
      en: ["Digital cards", "RSVP tracking", "Guest management", "Notifications", "Event details", "Sharing"],
      ar: ["بطاقات رقمية", "تتبع الردود", "إدارة الضيوف", "إشعارات", "تفاصيل الفعالية", "مشاركة"],
    },
  },
  mulhm: {
    name: { en: "Mulhm", ar: "ملهم" },
    badge: { en: "Booking", ar: "حجوزات" },
    desc: {
      en: "Service booking platform with calendar integration, Google Maps, contacts management, PDF generation, and location-based services.",
      ar: "منصة حجز خدمات مع تكامل التقويم، خرائط Google، إدارة جهات الاتصال، توليد PDF، وخدمات قائمة على الموقع.",
    },
    features: {
      en: ["Calendar booking", "Google Maps", "PDF generation", "Location services", "Contact management", "Riverpod state"],
      ar: ["حجز بالتقويم", "خرائط Google", "توليد PDF", "خدمات الموقع", "إدارة جهات الاتصال", "حالة Riverpod"],
    },
  },
  murafiq: {
    name: { en: "Murafiq", ar: "مرافق" },
    badge: { en: "On-demand", ar: "عند الطلب" },
    desc: {
      en: "On-demand companion service app connecting customers with sitters & delegates — with chat, Apple/Google Pay, maps, live tracking, and search.",
      ar: "تطبيق خدمة مرافقين عند الطلب يربط العملاء بالجليسات والمندوبين — مع محادثة، Apple/Google Pay، خرائط، تتبع مباشر، وبحث.",
    },
    features: {
      en: ["In-app chat", "Apple/Google Pay", "Live tracking", "Google Maps", "Search & filter", "Bloc architecture"],
      ar: ["محادثة داخلية", "Apple/Google Pay", "تتبع مباشر", "خرائط Google", "بحث وفلتر", "هندسة Bloc"],
    },
  },
  homy: {
    name: { en: "HomyFlutter", ar: "هومي" },
    badge: { en: "Home Services", ar: "خدمات منزلية" },
    desc: {
      en: "Home services app connecting homeowners with service providers — with service categories, booking, cart, and user profiles.",
      ar: "تطبيق خدمات منزلية يربط أصحاب المنازل بمقدمي الخدمات — مع تصنيفات الخدمات، الحجز، السلة، وملفات المستخدمين.",
    },
    features: {
      en: ["Service categories", "Booking system", "Cart", "User profiles", "Provider listings", "Firebase"],
      ar: ["تصنيفات الخدمات", "نظام الحجز", "السلة", "ملفات المستخدمين", "قوائم مقدمي الخدمات", "Firebase"],
    },
  },
  ehtewaa: {
    name: { en: "Ehtewaa", ar: "احتواء" },
    badge: { en: "Content", ar: "محتوى" },
    desc: {
      en: "Service & video content platform with payment integration, video streaming, kiosk mode support, HTML content rendering, and GetX state management.",
      ar: "منصة خدمات ومحتوى فيديو مع تكامل الدفع، بث الفيديو، دعم وضع الكشك، عرض محتوى HTML، وإدارة حالة GetX.",
    },
    features: {
      en: ["Video streaming", "Payment integration", "Kiosk mode", "HTML rendering", "GetX state", "Service listing"],
      ar: ["بث الفيديو", "تكامل الدفع", "وضع الكشك", "عرض HTML", "حالة GetX", "قائمة الخدمات"],
    },
  },
  uzbek: {
    name: { en: "Uzbek Dictionary", ar: "قاموس أوزبكي" },
    badge: { en: "Language", ar: "لغة" },
    desc: {
      en: "Bilingual dictionary app for translating between Uzbek and Arabic with offline support, bookmarks, search history, and fast lookup.",
      ar: "تطبيق قاموس ثنائي اللغة للترجمة بين الأوزبكية والعربية مع دعم بدون إنترنت، علامات مرجعية، سجل البحث، وبحث سريع.",
    },
    features: {
      en: ["Offline support", "Bookmarks", "Search history", "Fast lookup", "Uzbek-Arabic", "SQLite database"],
      ar: ["بدون إنترنت", "علامات مرجعية", "سجل البحث", "بحث سريع", "أوزبكي-عربي", "قاعدة بيانات SQLite"],
    },
  },
  wa3i: {
    name: { en: "Wa3i", ar: "وعي" },
    badge: { en: "Family", ar: "عائلة" },
    desc: {
      en: "Family protection & awareness app with educational cards, interactive ratings, JWT authentication, local push notifications, and GetX state management.",
      ar: "تطبيق حماية الأسرة والتوعية مع بطاقات تعليمية، تقييمات تفاعلية، مصادقة JWT، إشعارات محلية، وإدارة حالة GetX.",
    },
    features: {
      en: ["Educational cards", "Interactive ratings", "JWT auth", "Push notifications", "Swipe cards", "Family tools"],
      ar: ["بطاقات تعليمية", "تقييمات تفاعلية", "مصادقة JWT", "إشعارات", "بطاقات سحب", "أدوات عائلية"],
    },
  },
  albir: {
    name: { en: "AlBir Association", ar: "جمعية البر" },
    badge: { en: "Charity", ar: "خيري" },
    desc: {
      en: "Charity organization app for Al-Bir International Association with donation management, service listings, secure payments, and secure storage.",
      ar: "تطبيق منظمة خيرية لجمعية البر الدولية مع إدارة التبرعات، قوائم الخدمات، مدفوعات آمنة، وتخزين آمن.",
    },
    features: {
      en: ["Donation management", "Service listings", "Secure payments", "User auth", "Secure storage", "GetX state"],
      ar: ["إدارة التبرعات", "قوائم الخدمات", "مدفوعات آمنة", "مصادقة المستخدم", "تخزين آمن", "حالة GetX"],
    },
  },
  alamana: {
    name: { en: "Alamana Erasyl", ar: "أمانة إرسال" },
    badge: { en: "Nonprofit", ar: "غير ربحي" },
    desc: {
      en: "Charitable donation platform with PayPal payment integration, Firebase authentication, secure storage, GoRouter navigation, and donor management.",
      ar: "منصة تبرعات خيرية مع تكامل دفع PayPal، مصادقة Firebase، تخزين آمن، تنقل GoRouter، وإدارة المتبرعين.",
    },
    features: {
      en: ["PayPal integration", "Firebase Auth", "Secure storage", "GoRouter", "Donor management", "Provider state"],
      ar: ["تكامل PayPal", "مصادقة Firebase", "تخزين آمن", "GoRouter", "إدارة المتبرعين", "حالة Provider"],
    },
  },
};

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================
let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const body = document.body;

  if (lang === "ar") {
    body.classList.add("rtl");
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    body.classList.remove("rtl");
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", "en");
  }

  // Update all translatable elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[key][lang];
      } else {
        el.textContent = translations[key][lang];
      }
    }
  });

  // Update project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    const id = card.getAttribute("data-project-id");
    if (projectData[id]) {
      const data = projectData[id];
      const h3 = card.querySelector(".project-info h3");
      const p = card.querySelector(".project-info p");
      const badge = card.querySelector(".project-badge");
      if (h3) h3.textContent = data.name[lang];
      if (p) p.textContent = data.desc[lang];
      if (badge) badge.textContent = data.badge[lang];
    }
  });

  // Update language toggle buttons
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Restart typed.js
  initTyped();

  // Update visible count
  updateVisibleCount();
}

// ==========================================
// MOBILE NAVIGATION
// ==========================================
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// ==========================================
// ACTIVE LINK ON SCROLL
// ==========================================
const sections = document.querySelectorAll("section");

function updateActiveLink() {
  const scrollY = window.scrollY + 200;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  const selectors = [
    ".hero-content", ".hero-visual", ".section-header",
    ".about-image", ".about-text", ".skill-card",
    ".project-card", ".contact-info", ".contact-form", ".stat-item",
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.classList.add("fade-in");
      el.style.transitionDelay = `${Math.min(index * 0.08, 0.5)}s`;
      observer.observe(el);
    });
  });
}

initScrollReveal();

// ==========================================
// TYPED.JS
// ==========================================
let typedInstance = null;

function initTyped() {
  if (typedInstance) typedInstance.destroy();

  const strings =
    currentLang === "ar"
      ? ["مطور Flutter", "مهندس تطبيقات", "مطور واجهات", "مستقل"]
      : ["Flutter Developer", "Mobile App Engineer", "UI/UX Enthusiast", "Freelancer"];

  if (typeof Typed !== "undefined") {
    typedInstance = new Typed(".typed-text", {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });
  }
}

initTyped();

// ==========================================
// PROJECT FILTERING
// ==========================================
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

function updateVisibleCount() {
  const visible = document.querySelectorAll(".project-card:not(.hidden)").length;
  const countEl = document.getElementById("visible-count");
  if (countEl) countEl.textContent = visible;
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach((card, index) => {
      const category = card.getAttribute("data-category");
      const show = filter === "all" || category === filter;
      card.classList.toggle("hidden", !show);

      if (show) {
        card.style.transitionDelay = `${index * 0.03}s`;
      }
    });

    updateVisibleCount();
  });
});

// ==========================================
// PROJECT DETAIL MODAL
// ==========================================
const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const lang = currentLang;
  const card = document.querySelector(`[data-project-id="${projectId}"]`);
  const gradient = card?.querySelector(".project-card-header")?.style.getPropertyValue("--gradient") || "linear-gradient(135deg, #6366f1, #8b5cf6)";
  const iconClass = card?.querySelector(".project-card-header i")?.className || "bx bx-code-alt";
  const techSpans = card?.querySelectorAll(".project-tech span") || [];
  const techList = Array.from(techSpans).map((s) => s.textContent);

  // Build modal content
  document.getElementById("modal-header").style.background = gradient;
  document.getElementById("modal-icon").className = iconClass + " modal-icon";
  document.getElementById("modal-badge").textContent = data.badge[lang];
  document.getElementById("modal-title").textContent = data.name[lang];
  document.getElementById("modal-desc").textContent = data.desc[lang];
  document.getElementById("modal-tech-title").textContent = translations["modal-tech"][lang];
  document.getElementById("modal-features-title").textContent = translations["modal-features"][lang];

  // Tech list
  const techContainer = document.getElementById("modal-tech-list");
  techContainer.innerHTML = techList.map((t) => `<span>${t}</span>`).join("");

  // Features list
  const featuresContainer = document.getElementById("modal-features-list");
  const features = data.features[lang] || [];
  featuresContainer.innerHTML = features
    .map((f) => `<li><i class="bx bx-check-circle"></i> ${f}</li>`)
    .join("");

  // Show
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Card click handlers
projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-project-id");
    openModal(id);
  });
});

// Close modal
document.getElementById("modal-close").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ==========================================
// LANGUAGE TOGGLE
// ==========================================
document.querySelectorAll(".lang-toggle button").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
  });
});

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================
const scrollProgress = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + "%";
});

// ==========================================
// ANIMATED COUNTER
// ==========================================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "true";
          const text = entry.target.textContent;
          const target = parseInt(text);
          const suffix = text.replace(/[0-9]/g, "");
          let current = 0;
          const duration = 1500;
          const step = target / (duration / 16);

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            entry.target.textContent = Math.floor(current) + suffix;
          }, 16);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

animateCounters();

// Initialize
updateVisibleCount();
