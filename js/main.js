document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const menu = document.getElementById('navMenu');
  document.querySelectorAll('#navMenu .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (menu && menu.classList.contains('show') && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
  const translations = {
    'دنيا سعد':'Donia Saad',
    'نبذة عني':'About Me','المهارات':'Skills','الأعمال':'Projects','الخبرات':'Experience','تواصل معي':'Contact',
    'لنتحدث عن مشروعك':'Let’s Discuss Your Project',
    'متاحة لفرص عمل ومشروعات جديدة':'Open to New Opportunities',
    'أحوّل الأفكار إلى':'I turn ideas into',
    'حلول رقمية عملية.':'Practical Digital Solutions.',
    'مرحبًا، أنا ':'Hello, I’m ','، مهتمة بتطوير الويب وبناء واجهات سهلة الاستخدام وحلول رقمية تساعد على تنظيم العمل والبيانات.':', a web development enthusiast who builds user-friendly interfaces and digital solutions that organize work and data.',
    'استكشفي أعمالي ←':'Explore My Work ←','تعرّفي عليّ':'About Me','واجهات ويب':'Web Interfaces','تصميم متجاوب':'Responsive Design','بيانات وتقارير':'Data & Reports',
    'اكتشفي المزيد ↓':'Discover More ↓',
    'نبذة مختصرة':'A Short Introduction','الجمع بين التقنية ':'Connecting Technology with ','واحتياج العمل.':'Business Needs.',
    'أهتم بأن يكون كل مشروع واضح الهدف، سهل الاستخدام، وقابلًا للصيانة والتطوير.':'I believe every project should have a clear purpose, be easy to use, and remain maintainable.',
    'من الفكرة إلى التنفيذ':'From Idea to Execution',
    'أحب تحويل الأفكار إلى تجارب رقمية منظمة، مع الاهتمام بالتفاصيل وسهولة الاستخدام والتوافق مع مختلف أحجام الشاشات. أعمل على تطوير صفحات الويب وتنظيم المعلومات وتقديمها بصورة واضحة.':'I enjoy turning ideas into organized digital experiences, focusing on detail, usability, and responsiveness across screen sizes. I build web pages and present information clearly.',
    'يمكن تعديل هذه النبذة وإضافة تفاصيل الدراسة والخبرة الفعلية قبل نشر الموقع.':'Update this introduction with your actual education and experience before publishing.',
    'تواصلي معي ↗':'Contact Me ↗','تصميم واضح':'Clear Design','تجربة استخدام مريحة ومنظمة':'A smooth, organized user experience','كود منظم':'Organized Code','قابل للتعديل والتطوير':'Easy to maintain and extend','حلول عملية':'Practical Solutions','تركيز على احتياج المشروع':'Focused on project needs',
    'الأدوات التي أستخدمها':'Tools I Use','المهارات ':'Skills & ','والتقنيات.':'Technologies.','قائمة قابلة للتحديث وفق المهارات والخبرات الفعلية.':'Update this list to reflect your actual skills and experience.',
    'هيكلة صفحات الويب':'Web page structure','تنسيق الواجهات':'Interface styling','البيانات والتقارير':'Data and reporting',
    'نماذج من الأعمال':'Selected Work','مشروعات ':'Selected ','مختارة.':'Projects.','استبدلي النماذج التالية بمشروعاتك الحقيقية وروابط العرض والكود.':'Replace these sample items with your real projects, demos, and code links.',
    'موقع تعريفي متجاوب':'Responsive Portfolio Website','واجهة تعرض المعلومات والخدمات بشكل أنيق على الهاتف والكمبيوتر.':'A polished interface that presents information and services on mobile and desktop.',
    'أداة تقارير وبيانات':'Reporting and Data Tool','تنظيم البيانات وتسهيل مراجعتها وعرض النتائج بطريقة واضحة.':'Organizes data, simplifies review, and presents results clearly.',
    'لوحة متابعة تفاعلية':'Interactive Dashboard','عرض المؤشرات والبيانات في لوحة بسيطة وسهلة القراءة.':'Displays metrics and data in a simple, readable dashboard.',
    'المسار المهني':'Career Path','الخبرات ':'Experience & ','والتعليم.':'Education.','عدّلي هذا القسم لإضافة الوظائف والمؤهلات والتواريخ الصحيحة.':'Edit this section to add your real roles, qualifications, and dates.',
    'الخبرة الأحدث':'Latest Experience','تطوير صفحات الويب':'Web Page Development','عمل مستقل / مشروعات شخصية':'Freelance / Personal Projects','إنشاء صفحات ويب متجاوبة والاهتمام بتنسيق المحتوى وتجربة المستخدم.':'Building responsive web pages with attention to content layout and user experience.',
    'مشروعات تطبيقية':'Practical Projects','تنظيم البيانات وإعداد التقارير':'Data Organization and Reporting','مشروعات عملية':'Hands-on Projects','ترتيب البيانات وتحسين طريقة عرضها واستخدام أدوات مناسبة لتسهيل المتابعة.':'Organizing data, improving presentation, and using tools to make tracking easier.',
    'التعليم':'Education','المؤهل الدراسي':'Academic Qualification','اسم المؤسسة التعليمية':'Institution Name','أضيفي المؤهل وسنة التخرج والدورات والشهادات ذات الصلة.':'Add your qualification, graduation year, courses, and relevant certificates.',
    'لنتواصل':'Get in Touch','لديك مشروع في ذهنك؟':'Have a project in mind?','دعينا نتحدث عنه.':'Let’s talk about it.','يسعدني التواصل لمناقشة فرص العمل أو المشروعات التقنية.':'I’d be happy to discuss job opportunities or technical projects.',
    'راسليني عبر البريد ↗':'Email Me ↗','استبدلي البريد الإلكتروني والرابط ببيانات التواصل الخاصة بك.':'Replace the email and link with your own contact details.',
    'جميع الحقوق محفوظة':'All rights reserved','العودة للأعلى ↑':'Back to top ↑'
  };
  const originalTexts = new Map();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const value = node.nodeValue.trim();
    if (value && translations[value]) originalTexts.set(node, value);
  }
  const toggle = document.getElementById('languageToggle');
  const label = document.getElementById('languageLabel');
  let currentLang = 'ar';
  function setLanguage(lang) {
    currentLang = lang;
    originalTexts.forEach((arabic, textNode) => {
      textNode.nodeValue = lang === 'en' ? textNode.nodeValue.replace(textNode.nodeValue.trim(), translations[arabic]) : textNode.nodeValue.replace(textNode.nodeValue.trim(), arabic);
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('english-mode', lang === 'en');
    if (label) label.textContent = lang === 'ar' ? 'EN' : 'عربي';
    if (toggle) toggle.title = lang === 'ar' ? 'Switch to English' : 'التغيير إلى العربية';
    document.title = lang === 'ar' ? 'دنيا سعد | Portfolio' : 'Donia Saad | Portfolio';
  }
  if (toggle) toggle.addEventListener('click', () => setLanguage(currentLang === 'ar' ? 'en' : 'ar'));
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', function () {
    let current = 'home';
    sections.forEach(function (section) { if (window.scrollY >= section.offsetTop - 140) current = section.id; });
    links.forEach(function (link) { link.classList.toggle('active', link.getAttribute('href') === '#' + current); });
  }, { passive: true });
});
