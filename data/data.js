 const programs = [
  {
    id:222,
    name: "برنامج تركيا السياحي",
    image:'/New folder/turkey.jpg',
    date: "السفر 1 نوفمبر العودة 7 نوفمبر",
    date: "قضاء 6 ليالي 7 ايام",
    hotels:[
      {
        name: "اسطنبول فندق 4 نجوم",
        date: "قضاء 6 ليالي",
        description: "The Central Hotel غرفة دبل ستاندرد مع الفطور يشمل الخدمة والضريبة"
      }
    ],
    description: "البرنامج شامل الاتي الاقامه في الفنادق مع الافطار  سيارة خاصة للاستقبال و التوديع مع سائق خاص للاستمتاع بالخصوصية مع عائلتك و الجولات السياحية مع جروب شامل وجبة الغداء  شريحة جوال عند الوصول بها باقة انترنت محدودة دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا   اليوم الاول الاستقبال في المطار و التوصيل الي الفندق  بسيارة خاصة اليوم الثاني جولة سياحية في  السبانجا  مع جروب شامل وجبة الغداء  اليوم الثالث يوم حر  اليوم الرابع جولة سياحية في  البورصة مع ركوب التلفريك مع جروب شامل وجبة الغداء اليوم الخامس يوم حر  اليوم السادس جولة سياحية في اسطنبول بسيارة خاصة مع سائق خاص لمدة 10 ساعات اليوم السابع تسجيل الخروج من الفندق و الذهاب الي المطار للعودة الي المملكة في حفظ الله مع تمنيات الشركه برحلة عودة امنة", price: 3660,
    numbers: "للشخصين شامل الطيران الداخلي ",
  },
  {
    id:333,
    name: "ماليزيا",
    image:'/New folder/malisya.jpg',
    date: "تاريخ السفر 1 نوفمبر العودة 8 نوفمبر",
    date: "قضاء 7 ليالي 8 ايام",
    description: "الطيران الداخلي الاقامة في الفنادق المذكوره اعلاه مع الافطار شريحة جوال عند الوصول بها باقة انترنت محدودة – الاستقبال والتوصيل و الجولات السياحية بسيارة خاصة مكيفة مع سائق خاص للاستمتاع بالخصوصية مع عائلتك دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا اليوم الاول الاستقبال في المطار و التوصيل الي الفندق في سلانجور بسيارة خاصة مع سائق خاص اليوم الثاني جولة سياحية في سلانجور بسيارة خاصة مع سائق خاص اليوم الثالث تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي لانكاوي + الاستقبال في مطار لانكاوي و التوصيل الي الفندق بسيارة خاصة اليوم الرابع جولة سياحية في جزيرة لانكاوي بسيارة خاصة مع سائق خاص اليوم الخامس يوم حر للاستمتاع بالفاعليات الموجودة علي الشاطئ اليوم السادس تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي كوالالمبور + الاستقبال في مطار كوالالمبور و التوصيل الي الفندق بسيارة خاصة اليوم السابع جولة سياحية في كوالالمبور بسيارة خاصة مع سائق خاص اليوم الثامن التوصيل من الفندق في بانكوك الي المطار للعوده للمملكه في حفظ الله مع تمنيات الشركه برحله عوده امنه العرض شامل الطيران الداخلي ذهاب و عودة"    ,
    hotels : [
      {
        name: "بانكوك فندق 4 نجوم",
        date: "قضاء ليلة",
        description: "The Quarter Hualamphong by UHG",
        room: "غرفة ديولكس دبل كينغ اطلاله علي المدينة مع الافطار تشمل الخدمه والضريبه",
      },
      {
        name: "بوكيت منتجع 5 نجوم",
        date: "قضاء 2 ليالي",
        description: "Namaka Resort Kamala",
        room: "غرفة دبل مطلة علي البحر مع الافطار تشمل الخدمه والضريبه",
      },
      {
        name: "بوكيت فيلا 5 نجوم",
        date: "قضاء ليلتين",
        description: "Boutique Resort Private Pool Villa",
        room: "فيلا تحتوي علي غرفة نوم و غرفة معيشة و مسبح خاص مع الافطار تشمل الخدمة و الضريبة",
      },
      {
        name: "بانكوك فندق 4 نجوم",
        date: "قضاء ليلتين",
        description: "The Quarter Hualamphong by UHG",
        room: "غرفة ديولكس دبل كينغ اطلاله علي المدينة مع الافطار تشمل الخدمه والضريبه",
      },
    ],
    price: 5450,
    numbers:'للشخصين'
  },
  {
    image:'/New folder/georgia.jpg',
    title: "باكج جورجيا السياحي المميز 6 ليالي 7 ايام",
    description: "البرنامج يشمل علي زياره المدن و البلدات التاليه\n\nتبليسي انانوري – جوداوري – كازبيجي – متسخيتا – بورجومي – باتومي – مارتفيلي –كوتايسي – ساتابليا – بروميثيوس - اوكاتسي\nالاقامة سوف تكون كالتالي:\n\n2ليلة تبليسي – 2 ليلة باتومي – 1 ليلة كوتايسي – ليلة تبليسي\nالبرنامج يشتمل على التالي\n\nالاستقبال والتوديع من والى المطار.\nحجوزات الفنادق في تبليسي وباتومي و كوتايسي\nوجبة الافطار بوفية مفتوح فى الفنادق\nجولات سياحية يوميا حسب الجدول المذكور أعلاه\nجميع الانتقالات بسيارة سياحية خاصة بكم فقط لتستمتع بالخصوصية مع عائلتك او أصدقائك.\nالبترول.\nالسعر شامل كافة الضرائب.\nخط جورجي مع باقة انترنت لكل فرد.\nمتابع باللغة العربية طوال مدة الرحلة\nتذاكر دخول حديقة بوتانيكال تبليسي (هدية من الشركة)\n تذاكر تلفريك تبليسي (هدية من الشركة\nتامين السفر الدولي (هدية من الشركة)\nشنطة هدايا من الشركة",
    price4Stars: 3640, 
    price5Stars: 4050,
    people:'سعر العرض للشخصين',
    hotels: [
      {
        name: "ريزيدنس بلازا 4 نجوم تبليسي",
        description: "اكوا (اطلالة على البحر)"
      },
      {
        name: "4 نجوم باتومي",
        description: "اولد تاون"
      },
      {
        name: "4 نجوم كوتايسي",
        description: "ايبيسود"
      },
      {
        name: "4 نجوم تبليسي",
        description: "الاقامة الثانية"
      }
    ],
    included: [
      "تذاكر الطيران.",
      "وجبة الغداء والعشاء. (تلتزم الشركة بتوصيلكم لاحد المطاعم التركية او العربية لتناول وجبة الغذاء والعشاء)",
      "تذاكر دخول الاماكن السياحية. (والتي تكلفتها لا تتعدى من نصف دولار الى ثلاث دولارات في اغلب الاماكن)"
    ]
  },
  {
    id: 460, // Generated ID
    image:'/New folder/bosna.jpg',
    name: "برنامج اذربيجان السياحي",
    price: 3700,
    date: "7 ليالى 8 أيام",
    availableDates: "متاح من 1 يونيو حتى 31 اغسطس 2023",
    citiesAndTowns: [
      "باكو",
      "قلعة العذراء",
      "البوليفارد",
      "مركز حيدر عليف",
      "جبل النار",
      "مسجدي الجمعة وسكينة خانوم",
      "شلالات قبالا",
      "بحيرة نوهور",
      "قبالا لاند"
    ],
    accommodation: [
      { name: "باكو", date: "2 ليلة" },
      { name: "قبالا", date: "2 ليلة" },
      { name: "باكو", date: "1 ليلة" },
      { name: "قوبا", date: "1 ليلة" },
      { name: "باكو", date: "1 ليلة" }
    ],
    included: [
      "الاستقبال والتوديع من والى المطار",
      "حجوزات الفنادق لكامل المدة",
      "وجبة الأفطار بوفية مفتوح في الفنادق",
      "جولات سياحية يوميا حسب الجدول المذكور أعلاه",
      "جميع الانتقالات بسيارة سياحية خاصة بكم",
      "البترول",
      "السعر شامل كافة الضرائب",
      "خط اذربيجاني مع باقة انترنت لكل فرد"
    ],
    excludes: [
      "تذاكر الطيران",
      "وجبة الغداء والعشاء",
      "تذاكر دخول الاماكن السياحية"
    ],
    prices: [
      {
        type: "4 نجوم",
        price: 3700,
        description: "لشخصين"
      },
      {
        type: "5 نجوم",
        price: 4015,
        description: "لشخصين"
      }
    ],
    description:
      "استمتع ببرنامج اذربيجان السياحي المميز الذي يمتد لمدة 7 ليالي و8 أيام. اكتشف أماكن رائعة مثل باكو، قلعة العذراء، مركز حيدر عليف، والمزيد. البرنامج يشمل العديد من الخدمات والانتقالات لضمان تجربة رائعة."
  },
  {
    id:444,
    name: "برنامج تايلاند السياحي",
    image:'/New folder/tailand.jpg',
    date: "السفر يوم 1 نوفمبر العودة 6 نوفمبر",
    date: "اقامه 5 ليالي 6 ايام",
    hotels : [
      {
        name: "بانكوك فندق 4 نجوم",
        date: "قضاء ليلة",
        description: "The Quarter Hualamphong by UHG غرفة ديولكس دبل كينغ اطلاله على المدينة مع الإفطار تشمل الخدمة والضريبة"
      },
      {
        name: "بوكيت منتجع 5 نجوم",
        date: "قضاء 2 ليالي",
        description: "Namaka Resort Kamala غرفة دبل مطلة على البحر مع الإفطار تشمل الخدمة والضريبة مواجهة للشاطىء"
      },
      {
        name: "بوكيت فيلا 5 نجوم",
        date: "قضاء ليلتين",
        description: "Boutique Resort Private Pool Villa فيلا تحتوي على غرفة نوم و غرفة معيشة و مسبح خاص مع الإفطار تشمل الخدمة والضريبة"
      },
      {
        name: "بانكوك فندق 4 نجوم",
        date: "قضاء ليلتين",
        description: "The Quarter Hualamphong by UHG غرفة ديولكس دبل كينغ اطلاله على المدينة مع الإفطار تشمل الخدمة والضريبة"
      }
    ],
    description:"البرنامج شامل الاتي الطيران الداخلي الاقامة في الفنادق المذكوره اعلاه مع الافطار شريحة جوال عند الوصول بها باقة انترنت محدودة – الاستقبال والتوصيل بسيارة خاصة مكيفة مع سائق خاص للاستمتاع بالخصوصية مع عائلتك دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا  اليوم الأول استقبال في مطار بانكوك و الذهاب  الي الفندق في بانكوك بسيارة خاصة مع سائق خاص اليوم الثاني تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي بوكيت + الاستقبال في مطار بوكيت و التوصيل الي الفندق بسيارة خاصة اليوم الثالث رحلة بحرية في جزيرة فاي فاي مع جروب شامل وجبة الغداء اليوم الرابع تسجيل الخروج من المنتجع و التوصيل الي الفيلا بسيارة خاصة مع سائق خاص اليوم الخامس جولة سياحية في بوكيت 8 ساعات بسيارة خاصة مع سائق خاص اليوم السادس تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي بوكيت + الاستقبال في مطار بوكيت و التوصيل الي الفندق بسيارة خاصة اليوم السابع جولة سياحية في بانكوك 8 ساعات بسيارة خاصة مع سائق خاص اليوم الثامن التوصيل من الفندق في بانكوك الي المطار للعوده للمملكه في حفظ الله مع تمنيات الشركه برحله عوده امنه العرض شامل الطيران الداخلي من بانكوك الي بوكيت و العكس",
    price: 3699,
    numbers:'للشخصين'
  },
  {
    id: 456, // Generated ID
    name: "النمسا",
    image: '/New folder/ausria.jpg',
    date: "٤ ليالي ٥ ايام",
    price:3400,
    numbers:"السعر للفرد الواحد في الغرفه المزدوجه",
    hotels: [
      {
        name: "فندق ميركيور فيينا فيرست",
        date: "الاقامه في الفندق مع الفطور",
        description: "٣٥٠ متر من محطة المترو"
      }
    ],
    description: "السعر يشمل: الاقامه في فندق ميركيور فيينا فيرست مع الفطور والانتقالات من المطار للفندق والعكس."
  },
  {
    id: 457, // Generated ID
    name: "امستردام",
    image: '/New folder/amesterdam.jpg',
    date: "٤ ليالي ٥ ايام",
    price: 3800,
    numbers:"السعر للفرد الواحد في الغرفه المزدوجه",
    hotels: [
      {
        name: "فندق أيبيس امستردام سنتر",
        date: "الاقامه في الفندق مع الفطور",
        description: "الانتقالات من المطار الي الفندق والعكس"
      }
    ],
    description: "السعر يشمل: الاقامه في فندق أيبيس امستردام سنتر مع الفطور والانتقالات من المطار الي الفندق والعكس."
  },
  {
    id: 458,
    image:'/New folder/bosna.jpg',
    name: "عرض البوسنه المتميز",
    special:true,
    date: "8 ايام 7 ليالي",
    price: 5780,
    numbers: "للشخصين شامل الطيران الداخلي",
    hotels: [
      {
        name: "فندق ايبيس 4*",
        date: "سراييفو 3 ليالي"
      },
      {
        name: "فندق هولوود 4*",
        date: "سراييفو 3 ليالي"
      },
      {
        name: "فندق سافير 4*",
        date: "بيهاتش ليلتين"
      },
      {
        name: "فندق امبوريوم 4*",
        date: "بيهاتش ليلتين"
      },
      {
        name: "فندق ايبيس 4*",
        date: "سراييفو ليلتين"
      },
      {
        name: "فندق هولوود 4*",
        date: "سراييفو ليلتين"
      }
    ],
    includes: [
      "السكن في فنادق مذكورة",
      "وجبة األفطار في كل فندق",
      "نقل من والى المطار ورحالت سياحية بسيارة خاصة",
      "أطفال في هولوود : 5-0 سنوات مجانا في السرير مع الوالدان, 12-6 سنوات 15 يورو في اليوم",
      "أطفال في سافير : 2-0 سنوات مجانا, 12-3 سنوات 30 يورو في اليوم"
    ],
    description:
      "البرنامج السياحي 8 ايام 7 ليالي يتضمن زيارات مميزة وإقامة في فنادق 4 نجوم. استمتع برحلة سياحية رائعة في البوسنة واكتشف أماكن سياحية مذهلة."
  },
  {
    id: 459,
    image:'/New folder/azribegan.jpg',
    name: "البوسنه 4 و 5 نجوم",
    date: "8 ايام 7 ليالي",
    price: 6312,
    numbers: "سعر العرض لشخصين",
    hotels: [
      {
        name: "فندق مالك ريغينسي 5*",
        date: "سراييفو 3 ليالي"
      },
      {
        name: "فندق بريزيدينت في المدينة القديمة 4*",
        date: "سراييفو 3 ليالي"
      },
      {
        name: "فندق كوستيلسكي بوك 4*",
        date: "بيهاتش ليلتين"
      },
      {
        name: "فندق اوبال 4*",
        date: "بيهاتش ليلتين"
      },
      {
        name: "فندق مالك ريغينسي 5*",
        date: "سراييفو ليلتين"
      },
      {
        name: "فندق بريزيدينت في المدينة القديمة 4*",
        date: "سراييفو ليلتين"
      }
    ],
    description:
      "البرنامج السياحي 8 ايام 7 ليالي يتضمن زيارات مميزة وإقامة في فنادق 4 نجوم و 5 نجوم. استمتع برحلة سياحية رائعة في البوسنة واكتشف أماكن سياحية مذهلة."
  },
  {
    id: 461,
    price:"$750",
    image:'/New folder/philipens.jpg',
    name: "برنامج فليبين السياحي",
    date: "7 ليالى 8 أيام",
    availableDates: "متاح من 1 يونيو حتى 31 اغسطس 2023",
    citiesAndTowns: [
      "باكو",
      "قلعة العذراء",
      "البوليفارد",
      "مركز حيدر عليف",
      "جبل النار",
      "مسجدي الجمعة وسكينة خانوم",
      "شلالات قبالا",
      "بحيرة نوهور",
      "قبالا لاند"
    ],
    itinerary: [
      "2 ليلة باكو",
      "2 ليلة قبالا",
      "1 ليلة باكو",
      "1 ليلة قوبا",
      "1 ليلة باكو"
    ],
    included: [
      "الاستقبال والتوديع من والى المطار",
      "حجوزات الفنادق لكامل المدة",
      "وجبة الأفطار بوفية مفتوح في الفنادق",
      "جولات سياحية يوميا حسب الجدول المذكور أعلاه",
      "جميع الانتقالات بسيارة سياحية خاصة بكم فقط لتستمتع بالخصوصية مع عائلتك أو أصدقائك",
      "البترول",
      "السعر شامل كافة الضرائب",
      "خط فليبيني مع باقة انترنت لكل فرد"
    ],
    notIncluded: [
      "تذاكر الطيران",
      "وجبة الغداء والعشاء",
      "تذاكر دخول الأماكن السياحية"
    ],
    numbers: "لشخصين"
  },
  {
    name: "برنامج جورجيا 7 ايام 6 ليالى",
    image:'/New folder/georgia.jpg',
    date: "1 ليلة تبليسي – 2 ليلة باكورياني – 2 ليالي باتومي - 1 ليلة تبليسي",
    itinerary: [
      "اليوم الاول: استقبال من المطار- توصيل الى الفندق – جولة لزيارة معالم تبليسي (حديقة حيدر علييف – مسجد تبليسي – الحمامات الكبريتية – شلال الغابة – بوتانيكال جاردن – التلفريك – قلعة ناريكالا – شارع روستافيلي – منتزه الأوروبيين – شارديني) – مبيت في تبليسي",
      "اليوم الثاني: بعد الافطار التوجه الى متسخيتا (العاصمة القديمة) – حديقة بورجومي الوطنية – حمامات الكبريتية – تلفريك – مبيت في بورجومي او باكورياني",
      "اليوم الثالث: اخالتسيخا – قلعة الرباط – كهوف فاردزيا – مبيت في بورجومي او باكورياني",
      "اليوم الرابع: باتومي – ميدان انجيلا ميركل – برج الحروف الابجدية – تمثال علي و نينو – بوليفارد – مبيت في باتومي",
      "اليوم الخامس: بوتانيكال جاردن باتومي – تلفريك – مبيت في باتومي",
      "اليوم السادس: وادي مارتفيلي – العودة لتبليسي – مبيت في تبليسي",
      "اليوم السابع: بعد تناول وجبة الإفطار سوف نتوجه الى مطار تبليسي الدولي مع تمنياتنا لكم برحلة عودة سعيدة",
    ],
    included: [
      "الاستقبال والتوديع من والى المطار.",
      "حجوزات الفنادق في تبليسي و باكورياني وباتومي",
      "وجبة الافطار بوفية مفتوح في الفنادق",
      "جولات سياحية يوميا حسب الجدول المذكور أعلاه",
      "جميع الانتقالات بسيارة سياحية خاصة بكم فقط لتستمتع بالخصوصية مع عائلتك او أصدقائك.",
      "البترول.",
      "السعر شامل كافة الضرائب.",
      "خط جورجي مع باقة انترنت لكل فرد.",
      "متابع باللغة العربية طوال مدة الرحلة",
      "تذاكر دخول حديقة بوتانيكال تبليسي (هدية من الشركة)",
      "تذاكر تلفريك تبليسي (هدية من الشركة)",
      "تأمين السفر الدولي (هدية من الشركة)",
      "شنطة هدايا من الشركة",
    ],
    notIncluded: [
      "تذاكر الطيران.",
      "وجبة الغداء والعشاء. (تلتزم الشركة بتوصيلكم لأحد المطاعم التركية او العربية لتناول وجبة الغذاء والعشاء)",
      "تذاكر دخول الأماكن السياحية. (والتي تكلفتها لا تتعدى من نصف دولار الى ثلاث دولارات في أغلب الأماكن)",
    ],
    price4Stars: 3640,
    price5Stars: 4050,
    people: "سعر الفردين لمستوى فنادق 04 نجوم",
  }
];
const visaRequirements = [
  {
    visaType: "تاشيرة الشنجن",
    price:'تواصل لمعرفه الاسعار',
    image:'/New folder/europ-flag.jpg',
    included: [
      "كشف حساب انجليزي مختوم من البنك اخر ثلاث شهور يوجد به رصيد لا يقل عن 20 الف ريال .",
      "خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب والمسمي الوظيفي وتاريخ بداية العمل ( مصدق من الغرفة التجارية اذا كان العمل فى القطاع الخاص ) .",
      "عدد 2 صورة شخصية خلفية بيضاء مقاس 6x4 مكشوف الرأس للرجال ( بالنسبة للنساء معظم الوجه ظاهر )  ملاحظة : خاص بالمانيا الصور مقاس 6x4 و الزووم 90 .",
      "تامين طبي ( اذا وجد خطاب من شركة التامين موجة الى السفارة ) او تامين سفر  . ( خاص بالمانيا تامين كورونا لكل المسافرين )",
      "صورة الهوية الوطنية وصوره كارت العائلة و صور من التاشيرات السابقة ان وجد . ( يتم ترجمة الاحوال وكرت العائلة لمعظم السفارات )",
      "الجواز الأصل صالح لمدة 6 اشهر  من تاريخ السفر .",
      "بالنسبة للجواز الدبلوماسي و الخاص ( مطلوب توصية من الخارجية ) و لا يتطلب كشف حساب .",
      "لغير السعودين : كل الطلبات السابق ذكرها + صورة من الخروج والعودة إنجليزي وكشف الحساب اخر 6 شهور بدلا من 3 شهور."
    ]
  },
  {
    visaType: "تأشيرة الامريكية",
    price:'تواصل لمعرفه الاسعار',
    image:'/New folder/usa-flag.jpg',
    included: [
      "الجواز الأصل صالح لمدة 7 اشهر علي الأقل",
      "2 صورة شخصية حديثة خلفية بيضاء مقاس 5 في 5 مكشوف الرأس للرجال.",
      "خطاب تعريف من العمل باللغة الإنجليزية موضح بة الراتب والمسمي الوظيفي وتاريخ بداية العمل .",
      "كشف حساب بنكي لاخر 3 شهور بالانجليزيه ويكون فيه رصيد لا يقل عن 15 الف ريال.",
      "صورة الهوية الوطنية وصوره كارت العائلة."
    ]
  },
  {
    visaType: "تأشيرة البوسنة",
    price:'تواصل لمعرفه الاسعار',
    image:'/New folder/flag-bosnia-herzegovina.jpg',
    included: [
      "الجواز الأصل صالح لمدة 7 اشهر علي الأقل",
      "2 صورة شخصية حديثة خلفية بيضاء مقاس 3.5 في 4.5 مكشوف الرأس للرجال.",
      "خطاب تعريف من العمل باللغة الإنجليزية او العربية موضح بة الراتب والمسمي الوظيفي  او كشف حساب بنكي لاخر 3 شهور بالانجليزيه.",
      "صورة الهوية الوطنية وصوره كارت العائلة."
    ]
  }
];
const travelArticles =[
  {
    image:'/New folder/turkey.jpg',
    title: "كيف تقضي 5 أيام رائعة في إسطنبول؟",
    subtitle: "هناك الكثير مما يمكن مشاهدته في أكبر مدينة في تركيا، لدرجة أن حتى أولئك الذين عاشوا فيها لسنوات يقولون إنهم يكتشفون اكتشافات جديدة كل يوم، ومع ذلك يمكنك البدء بشكل جيد للغاية مع برنامج مدته خمسة أيام للتعرف على جميع الميزات الجذابة لإسطنبول، على النحو التالي نقدم دليل يساعدك على تحقيق أقصى استفادة من وقتك في إسطنبول.",
    content: [
      {
        day: "اليوم الأول",
        subtitle: "تعرّف على جولات العبّارات واختر المُناسب لك",
        content: [
          "كما ذكرنا سابقًا، إسطنبول مدينة كبيرة جدًا، لذلك سيكون من الجيد التعرف على مناطقها العديدة.",
          "تمر العديد من القوارب السياحية على مضيق البوسفور بجانب قصر دولما بهجة.",
          "تتمثل إحدى أفضل الطرق للقيام بذلك في الانضمام إلى رحلات البوسفور الطويلة."
        ]
      },
      {
        day: "اليوم الثاني",
        subtitle: "اكتشف منطقة السلطان أحمد",
        content: [
          "الآن بعد أن أصبح لديك فهم جيد لما تبدو عليه اسطنبول، حان الوقت لاستكشاف مناطق الجذب السياحي الرئيسية، ابدأ من ساحة السلطان أحمد وقم بزيارة آيا صوفيا والمسجد الأزرق وكاتدرائية الصهريج.",
          "تشمل مناطق الجذب السياحي الرئيسية الأخرى قصر توبكابي والبازار الكبير، وإذا كنت تحب المتاحف، يمكنك زيارة متحف الآثار ومتحف الفنون التركية والإسلامية.",
          "بعد ذلك توّجه إلى كنيسة Chora لالتقاط الأنفاس وتناول وجبة خفيفة في مطعم Asitane Restaurant الأكثر شهرة للمأكولات العثمانية في إسطنبول."
        ]
      }
    ]
  },
  {
    image:'/New folder/maldives.jpg',
    title: "أفضل الأنشطة السياحية في بالي",
    subtitle:"بالي هي واحدة من الجزر الإندونيسية الجميلة المعروفة بشواطئها الرملية البيضاء والمناظر الطبيعية الساحرة. إذا كنت تخطط لزيارة بالي، فستجد العديد من الأنشطة السياحية المثيرة للاستمتاع بها خلال إقامتك.",
    content: [
      {
        subtitle: "قم بزيارة معبد أولوواتو وتنسيق الروح",
        content: "معبد أولوواتو هو معبد بالي الشهير والذي يقدم تجربة روحية فريدة. يتيح للزوار الاستمتاع بالمناظر البانورامية للمحيط والمناظر الطبيعية الجميلة من أعلى منحدراته. يمكنك الاسترخاء وتنسيق روحك في هذا الموقع المقدس.",
      },
      {
        subtitle: "الاستمتاع بالشواطئ الرملية",
        content: "تضم بالي العديد من الشواطئ الرملية الخلابة. شاطئ كوتا هو واحد من أشهرها ويعتبر مكانًا رائعًا للاسترخاء وممارسة الأنشطة المائية مثل ركوب الأمواج. يمكنك أيضًا زيارة شاطئ بالانغان للاستمتاع بالشروق والغروب الرائعين.",
      },
      {
        subtitle: "استكشاف ثقافة بالي التقليدية",
        content: "بالي تشتهر بتراثها الثقافي الغني. يمكنك حضور عروض الرقص التقليدية والموسيقى البالية في العديد من المسارح والمهرجانات المحلية. كما يمكنك زيارة القرى التقليدية والتعرف على الصناعات اليدوية المحلية.",
      },
      {
        subtitle: "استكشاف الحدائق والمنتزهات",
        content: "بالي توفر العديد من الحدائق والمناطق الخضراء الجميلة. قم بزيارة حديقة تيرغانغا وتسلق التلال الخضراء واستمتع بإطلالات رائعة. يمكنك أيضًا زيارة حديقة بوتان للاستمتاع بالورود والنباتات الاستوائية.",
      },
      {
        subtitle: "ركوب الدراجات في الجبال",
        content: "إذا كنت من محبي المغامرات، يمكنك استئجار دراجة واستكشاف مسارات الجبال في بالي. ستجد العديد من المسارات المثيرة والمناظر الطبيعية الخلابة أثناء رحلتك على الدراجة.",
      },
    ],
  },
  {
    image:'/New folder/albania.jpg',
    title: "تعرف على أجمل الأنشطة السياحية الممتعة في أنطاليا، تركيا",
    subtitle:"تعتبر بوابة ساحل الفيروز، أنطاليا مليئة بالمعالم التاريخية والثقافية والطبيعية. يعود تاريخ أنطاليا الغني إلى عام 200 قبل الميلاد، مما يجعلها واحدة من أقدم المدن في تركيا ووجهة رائعة لمحبي التاريخ. من العمارة العثمانية إلى أطلال العصر الروماني، سوف يستغرق الأمر أسابيع لاستكشاف كل ما تقدمه أنطاليا. إذا كنت تبحث عن مناطق جذب طبيعية، فستجد أن هناك الكثير من الأشياء التي يمكنك القيام بها في أنطاليا أيضًا. تقع المدينة على خلفية جبال طوروس، وتوفر سهولة الوصول إلى الكثير من المناظر الطبيعية الجميلة، بما في ذلك الشواطئ الذهبية والشلالات القوية والأودية العميقة.",
    content: [
      {
        subtitle: "بوابة هادريان التاريخية",
        content: [
          "تم بناء بوابة هادريان تكريما للإمبراطور الروماني هادريان بعد أن زار أنطاليا عام 130 بعد الميلاد. تم بناؤه كجزء من الأسوار التي تحيط بالمدينة، وهو البوابة الوحيدة التي بقيت قائمة.",
          "تعد بوابة هادريان، التي يبلغ ارتفاعها 26 قدمًا وتتكون من ثلاثة أقواك دخول مع نقوش وردية، مشهدًا مذهلاً. لا يزال بإمكانك المشي تحتها اليوم، باتباع ممر العصر الروماني الأصلي. على الجانب الآخر، ستجد الهندسة المعمارية الجميلة من الحقبة العثمانية، والشوارع المتعرجة المرصوفة بالحصى، والمقاهي الرائعة.",
        ]
      },
      {
        subtitle: "منطقة الكوبرولو كانيون",
        content: [
          "جرب إثارة التجديف في كوبرولو كانيون ليست بعيدة عن أنطاليا، منتزه كوبرولو كانيون الوطني هو الوجهة المثالية لمحبي المغامرة. تخلق المياه الصافية للوادي منحدرات مثيرة يمكن لكل من المبتدئين وذوي الخبرة الاستمتاع بها تحت إشراف مدربين خبراء.",
          "بالإضافة إلى التجديف، يقدم Koprulu Canyon أنشطة ضخ الأدرينالين الأخرى. يمكنك تجربة الانزلاق عبر الوادي للحصول على منظر شامل أو زيارة الأجزاء الأكثر هدوءًا من النهر للتجديف بالكاياك أو مغامرات التجديف.",
        ]
      },
      {
        subtitle: "المدينة القديمة",
        content: [
          "من أفضل الأشياء التي يمكنك القيام بها في أنطاليا استكشاف منطقة كاليسي التاريخية بمبانيها المحفوظة جيدًا والتي تعود إلى الحقبة العثمانية. يوفر Kaleiçi، قسم البلدة القديمة في أنطاليا، فرصة للهروب إلى ماضي المدينة التاريخي الغني. هنا، تصطف المنازل الحجرية الملونة من العصر العثماني في الشوارع الضيقة المرصوفة بالحصى.",
          "استمر في المشي عبر بازار المدينة القديمة وستصل إلى مرسى كاليسي، الذي يوفر إطلالات خلابة على البحر الفيروزي. لا تتسرع في التجول في البازار، فهو المكان المثالي للتسوق لشراء المصنوعات اليدوية والتوابل والمنسوجات المحلية.",
        ]
      },
      {
        subtitle: "رحلة نهرية إلى بيرج",
        content: [
          "إذا كنت تبحث عن مساحة خضراء منعشة في أنطاليا حيث يمكنك قضاء بضع ساعات، فأنت محظوظ – فالمدينة بها الكثير من المتنزهات الجميلة التي ترحب بالزوار. حديقة كاراليوغلو هي أكبر حديقة حضرية في أنطاليا.",
          "تصطف الزهور الملونة وأشجار النخيل الشاهقة، وتطل الحديقة على البحر الأبيض المتوسط وهي مكان رائع للاسترخاء في فترة ما بعد الظهيرة في الصيف الحار. يقع كل من برج Hidirlik من العصر الروماني ومسرح Municipal City Theatre هنا.",
        ]
      },
      {
        subtitle: "أنطاليا أكواريوم",
        content: [
          "يعد أنطاليا أكواريوم واحدًا من أكبر مجمعات الأحياء المائية في العالم، ويغطي مساحة تقل قليلاً عن 13000 قدم مربع. في الداخل، توفر مجموعة متنوعة من المعارض التفاعلية العملية ومناطق الحيوانات الكثير من الترفيه لساعات.",
          "أنطاليا أكواريوم هو موطن لأكبر حوض مائي نفق في العالم، بطول 430 قدمًا وعرض 10 أقدام. يمكن للزوار المشي تحت الماء محاطين بالأسماك الملونة وأسماك القرش وأسماك الراي اللساع. تشتمل أكثر من 40 حوضًا مائيًا موضوعيًا على Tropical Reef وFossil Cave، ويمكن للزوار أيضًا الاستمتاع بجولة افتراضية متعددة الأبعاد تحت الأمواج.",
        ]
      },
      {
        subtitle: "Face 2 Face Wax Museum",
        content: [
          "يتميز هذا الجذب المناسب للعائلة بأكثر من 60 منحوتة من الشمع تمثل المشاهير والشخصيات التاريخية والشخصيات من جميع أنحاء العالم.",
          "تم تعيين الشخصيات في بيئة معينة – يمكنك الانضمام إلى ديب خلف عجلة القيادة لسفينة قرصنة أو الوقوف بجوار ستيفن هوكينغ في مكتبه. سوف تقابل رؤساء وملكات وحتى هاري بوتر.",
        ]
      }
    ]
  },
  {
    image:'/New folder/malisya.jpg',
    title: "اهم الاماكن السياحية في ماليزيا",
   content: [
      {
        subtitle: "كوالالمبور",
        content:
          "عاصمة ماليزيا وواجهة البلاد الحضارية، حيث تمتاز ببرجيها التوأمين وكهوف باتو الساحرة ومراكز التسوق الكبرى.",
      },
      {
        subtitle: "لنكاوي",
        content:
          "جزيرة ماليزية تتميز بشواطئها الساحرة وجسرها الزجاجي المعلق ورحلات التلفريك الجبلي.",
      },
      {
        subtitle: "سيلانجور",
        content:
          "مدينة تعبر عن النهضة الاقتصادية في ماليزيا، تحتضن مدينة الألعاب المائية الكبيرة صنواي لاجون ومزيد من الوجهات الممتعة.",
      },
      {
        subtitle: "بينانج",
        content:
          "جزيرة بينانج تعتبر لؤلؤة الشرق مع شواطئها الرملية والمياه الزرقاء، وتضم أماكن تراثية رائعة.",
      },
      {
        subtitle: "كاميرون هيلاند",
        content:
          "مرتفعات هيلاند تقدم مناظر رائعة ومعالم مشهورة مثل شلال اسكندر وشلال روبنسون بالإضافة إلى مزارع الشاي والفراولة.",
      },
      {
        subtitle: "جنتنج هايلاند",
        content:
          "جنتنج هايلاند تجذب بجوها البارد ومناظرها الخلّابة، وتحتضن مزارع الشاي والفراولة بالإضافة إلى مراكز الترفيه والغابات المطيرة.",
      },
    ],
  },
  {
    image:'/New folder/europe.jpg',
    title:'أجمل الدول السياحية في شرق أوروبا',
    subtitle: "تعرف أوروبا الشرقية على أنها الدول التي يحدها بحر البلطيق وبارنتس في الشمال، وبحر الأسود وبحر قزوين وجبال القوقاز في الجنوب. تُستخدم للإشارة إلى دول شرق أوروبا التي كانت تحكمها الأنظمة الشيوعية سابقًا.",
    content: [
      {
        subtitle: "جمهورية التشيك",
        content:
          "تقع في وسط أوروبا وتحدها بولندا من الشمال والشمال الشرقي، سلوفاكيا من الشرق، والنمسا من الجنوب، وألمانيا إلى الغرب والشمال الغربي. تعد دولة غير ساحلية وتتمتع بمناخ متنوع.",
      },
      {
        subtitle: "البوسنة والهرسك",
        content:
          "تقع في غرب شبه جزيرة البلقان في أوروبا وتحدها كرواتيا من الشمال والغرب وصربيا من الشرق. تتمتع بمناخ متوسطي ومناظر طبيعية متنوعة.",
      },
      {
        subtitle: "سلوفاكيا",
        content:
          "بلد غير ساحلي في وسط أوروبا، تجاور التشيك من الشمال الغربي، وبولندا من الشمال، وأوكرانيا من الشرق، والمجر من الجنوب. تتميز بمناخها المعتدل.",
      },
      {
        subtitle: "مولدوفا",
        content:
          "بلد غير ساحلي يحده رومانيا وأوكرانيا. كانت جزءًا من الإمبراطورية العثمانية ثم احتلتها الاتحاد السوفياتي. أعلنت استقلالها في عام 1991.",
      },
    ],
  }
]
const tableData = [
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [2430, 1845, 1550, 1365, 1035, 850, 750],
    hotels: "ريجال انن 4 نجوم باكو + جولد 4 نجوم قوبا + وايت بوتيك 4 نجوم قبالا",
    offer: "العرض المخفض",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [2700, 2060, 1720, 1515, 1140, 935, 820],
    hotels: "باركواي انن & سبا 4 نجوم باكو + المباجي 4 نجوم قوبا + وايت بوتيك 4 نجوم قبالا",
    offer: "العرض الاقتصادي",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [2920, 2245, 1865, 1650, 1230, 1010, 870],
    hotels: "فولجا 5 نجوم باكو + ماكيرا ريزورت 4 نجوم قوبا + يدي جوزيل 4 نجوم قبالا",
    offer: "العرض المميز",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [3150, 2430, 1985, 1775, 1295, 1085, 940],
    hotels: "بريميوم بارك 4 نجوم باكو + الك انن 5 نجوم قوبا + كوخ كبالاكا : نجوم قبالا",
    offer: "العرض المميز2",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [3535, 2710, 2185, 1965, 1400, 1180, 1040],
    hotels: "ميدواي 4 نجوم باكو + زام زام 4 نجوم قوبا + تيرمال هوتل 5 نجوم قبالا",
    offer: "العرض الذهبي",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [3740, 2875, 2420, 2070, 1580, 1235, 1090],
    hotels: "اكسلسوار 5 نجوم باكو + ليك بارك 5 نجوم قوبا + جاردن هوتل 5 نجوم قبالا",
    offer: "العرض VIP",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [4195, 3215, 2575, 2310, 1630, 1360, 1215],
    hotels: "برومينيد 5 نجوم باكو + ليك بارك 5 نجوم قوبا + جاردن هوتل 5 نجوم قبالا",
    offer: "العرض TOP VIP",
  },
  {
    title: "4 باكو 1 قوبا 2 قبالا",
    prices: [5335, 4105, 3220, 2910, 1985, 1670, 1490],
    hotels: "سافير سيتي 5 نجوم باكو + قوبا بالاس 5 نجوم قوبا + ريفرسايد 5 نجوم قبالا",
    offer: "العرض ULTRA TOP VIP",
  },
];
const hotel = {
  price:'تواصل لمعرفه الاسعار',
  name: "حجز فنادق",
  image:'/New folder/hotel.jpg',
  number: "+966546077002 واتساب",
  description: "احصل على أفضل الأسعار لإقامتك الفندقية مع خدمة مساعدة على مدار الساعة مع مستشاري السفر. احجز في أكثر من 2 مليون فندق بدون رسوم حجز. ضمان أفضل الأسعار",
  included: [
    "لدينا حجز الفنادق لجميع الدول بارخص الاسعار",
    "نرجو ارسال علي هذه البيانات علي الوتساب",
    "المدينة",
    "التاريخ",
    "عدد الليالي",
    "عدد الاشخاص",
  ],

}
const tickets = {
  price:'تواصل لمعرفه الاسعار',
  name: "حجز طيران",
  image:'/New folder/airplan.jpg',
  number: "+966546077002 واتساب",
  description:" لدينا حجز طيران لجميع الدول.",
  included: [
    "نرجو ارسال البيانات علي الوتساب:",
    "المدينة الاقلاع",
    "مدينه الوصول ",
    "تاريخ الذهاب والعوده ",
    "عدد الاشخاص",
  ],

}
const carRental = {
  price:'تواصل لمعرفه الاسعار',
  name: "تأجير سيارات",
  image:'/New folder/car-rent.jpg',
  number: "+966546077002 واتساب",
  description: "لدينا ايجار سيارات لكافة دول العالم.",
  included: [
    "نرجو ارسال علي الارقام التاليه",
    "المدينة الاقلاع",
    "مدينه الوصول ",
    "تاريخ الذهاب والعوده ",
    "عدد الايام",
  ],
};
const internationalDrivingLicense = {
  name: "رخصة القيادة الدولية",
  image:'/New folder/driving-licence.jpg',
  number: "+966546077002 واتساب",
  description: "هي وثيقة دولية تم تشريعها من قبل الأمم المتحدة طبقًا للاتفاقيات الدولية الخاصة بتنظيم السير على الطرق وهي تسمح لحاملها القيادة خارج دولته المقيم فيها حيث أنها تصدر بناءً على رخصة القيادة التي تؤهل حاملها القيادة، وهي غير صالحة للقيادة في السعودية.",
  included: [
    "صورة جواز السفر",
    "صورة رخصة القيادة (من أي دولة في العالم) سارية المفعول.",
    "1 صور شخصية.",
  ],
};

const services = [
  hotel,
  tickets,
  carRental,
  internationalDrivingLicense
]

const shuffledPrograms = [...programs].sort(() => Math.random() - 0.5);

// Select the first four elements (randomly shuffled)
const randomPrograms = shuffledPrograms.slice(0, 4);









export { travelArticles , programs , tableData ,visaRequirements , hotel , services , randomPrograms}