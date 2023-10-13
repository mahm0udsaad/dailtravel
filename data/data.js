const destinations =
 {
    title : 'الوجهات السياحية الدولية',
    data: [

        'جورجيا',
        'المالديف',
        'ماليزيا',
        'سريلانكا',
        'تايلاند',
        'اندونيسيا',
        'تركيا',
        'شرم الشيخ',
        'رحلات كروز بحرية',
        'دول منطقة شنغن',
        'موريشيوس',
        'اذريبيجان',
        'البوسنة والهرسك',
        'الامارات العربية المتحدة',
        'البانيا',
        'لندن',
        'مصر'
    ]
 }


 const programs = [
  {
    id:222,
    name: "برنامج تركيا السياحي",
    image:'/New folder/georgia.jpg',
    date: "السفر 1 نوفمبر العودة 7 نوفمبر",
    duration: "قضاء 6 ليالي 7 ايام",
    hotels:[
      {
        name: "اسطنبول فندق 4 نجوم",
        duration: "قضاء 6 ليالي",
        description: "The Central Hotel غرفة دبل ستاندرد مع الفطور يشمل الخدمة والضريبة"
      }
    ],
    description: "البرنامج شامل الاتي الاقامه في الفنادق مع الافطار  سيارة خاصة للاستقبال و التوديع مع سائق خاص للاستمتاع بالخصوصية مع عائلتك و الجولات السياحية مع جروب شامل وجبة الغداء  شريحة جوال عند الوصول بها باقة انترنت محدودة دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا   اليوم الاول الاستقبال في المطار و التوصيل الي الفندق  بسيارة خاصة اليوم الثاني جولة سياحية في  السبانجا  مع جروب شامل وجبة الغداء  اليوم الثالث يوم حر  اليوم الرابع جولة سياحية في  البورصة مع ركوب التلفريك مع جروب شامل وجبة الغداء اليوم الخامس يوم حر  اليوم السادس جولة سياحية في اسطنبول بسيارة خاصة مع سائق خاص لمدة 10 ساعات اليوم السابع تسجيل الخروج من الفندق و الذهاب الي المطار للعودة الي المملكة في حفظ الله مع تمنيات الشركه برحلة عودة امنة", price: 3660,
    numbers: "للشخصين شامل الطيران الداخلي ",
  },
  {
    id:333,
    name: "ماليزيا",
    image:'/New folder/georgia.jpg',
    date: "تاريخ السفر 1 نوفمبر العودة 8 نوفمبر",
    duration: "قضاء 7 ليالي 8 ايام",
    description: "الطيران الداخلي الاقامة في الفنادق المذكوره اعلاه مع الافطار شريحة جوال عند الوصول بها باقة انترنت محدودة – الاستقبال والتوصيل و الجولات السياحية بسيارة خاصة مكيفة مع سائق خاص للاستمتاع بالخصوصية مع عائلتك دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا اليوم الاول الاستقبال في المطار و التوصيل الي الفندق في سلانجور بسيارة خاصة مع سائق خاص اليوم الثاني جولة سياحية في سلانجور بسيارة خاصة مع سائق خاص اليوم الثالث تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي لانكاوي + الاستقبال في مطار لانكاوي و التوصيل الي الفندق بسيارة خاصة اليوم الرابع جولة سياحية في جزيرة لانكاوي بسيارة خاصة مع سائق خاص اليوم الخامس يوم حر للاستمتاع بالفاعليات الموجودة علي الشاطئ اليوم السادس تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي كوالالمبور + الاستقبال في مطار كوالالمبور و التوصيل الي الفندق بسيارة خاصة اليوم السابع جولة سياحية في كوالالمبور بسيارة خاصة مع سائق خاص اليوم الثامن التوصيل من الفندق في بانكوك الي المطار للعوده للمملكه في حفظ الله مع تمنيات الشركه برحله عوده امنه العرض شامل الطيران الداخلي ذهاب و عودة"    ,
    hotels : [
      {
        name: "بانكوك فندق 4 نجوم",
        duration: "قضاء ليلة",
        description: "The Quarter Hualamphong by UHG",
        room: "غرفة ديولكس دبل كينغ اطلاله علي المدينة مع الافطار تشمل الخدمه والضريبه",
      },
      {
        name: "بوكيت منتجع 5 نجوم",
        duration: "قضاء 2 ليالي",
        description: "Namaka Resort Kamala",
        room: "غرفة دبل مطلة علي البحر مع الافطار تشمل الخدمه والضريبه",
      },
      {
        name: "بوكيت فيلا 5 نجوم",
        duration: "قضاء ليلتين",
        description: "Boutique Resort Private Pool Villa",
        room: "فيلا تحتوي علي غرفة نوم و غرفة معيشة و مسبح خاص مع الافطار تشمل الخدمة و الضريبة",
      },
      {
        name: "بانكوك فندق 4 نجوم",
        duration: "قضاء ليلتين",
        description: "The Quarter Hualamphong by UHG",
        room: "غرفة ديولكس دبل كينغ اطلاله علي المدينة مع الافطار تشمل الخدمه والضريبه",
      },
    ],
    price: 5450,
    numbers:'للشخصين'
  },
  {
    id:444,
    name: "برنامج تايلاند السياحي",
    image:'/New folder/georgia.jpg',
    date: "السفر يوم 1 نوفمبر العودة 6 نوفمبر",
    duration: "اقامه 5 ليالي 6 ايام",
    hotels : [
      {
        name: "بانكوك فندق 4 نجوم",
        duration: "قضاء ليلة",
        description: "The Quarter Hualamphong by UHG غرفة ديولكس دبل كينغ اطلاله على المدينة مع الإفطار تشمل الخدمة والضريبة"
      },
      {
        name: "بوكيت منتجع 5 نجوم",
        duration: "قضاء 2 ليالي",
        description: "Namaka Resort Kamala غرفة دبل مطلة على البحر مع الإفطار تشمل الخدمة والضريبة مواجهة للشاطىء"
      },
      {
        name: "بوكيت فيلا 5 نجوم",
        duration: "قضاء ليلتين",
        description: "Boutique Resort Private Pool Villa فيلا تحتوي على غرفة نوم و غرفة معيشة و مسبح خاص مع الإفطار تشمل الخدمة والضريبة"
      },
      {
        name: "بانكوك فندق 4 نجوم",
        duration: "قضاء ليلتين",
        description: "The Quarter Hualamphong by UHG غرفة ديولكس دبل كينغ اطلاله على المدينة مع الإفطار تشمل الخدمة والضريبة"
      }
    ],
    description:"البرنامج شامل الاتي الطيران الداخلي الاقامة في الفنادق المذكوره اعلاه مع الافطار شريحة جوال عند الوصول بها باقة انترنت محدودة – الاستقبال والتوصيل بسيارة خاصة مكيفة مع سائق خاص للاستمتاع بالخصوصية مع عائلتك دخول الفنادق الساعه 2 ضهرا و الخروج الساعه 12 ضهرا  اليوم الأول استقبال في مطار بانكوك و الذهاب  الي الفندق في بانكوك بسيارة خاصة مع سائق خاص اليوم الثاني تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي بوكيت + الاستقبال في مطار بوكيت و التوصيل الي الفندق بسيارة خاصة اليوم الثالث رحلة بحرية في جزيرة فاي فاي مع جروب شامل وجبة الغداء اليوم الرابع تسجيل الخروج من المنتجع و التوصيل الي الفيلا بسيارة خاصة مع سائق خاص اليوم الخامس جولة سياحية في بوكيت 8 ساعات بسيارة خاصة مع سائق خاص اليوم السادس تسجيل الخروج من الفندق و التوصيل الي المطار للسفر الي بوكيت + الاستقبال في مطار بوكيت و التوصيل الي الفندق بسيارة خاصة اليوم السابع جولة سياحية في بانكوك 8 ساعات بسيارة خاصة مع سائق خاص اليوم الثامن التوصيل من الفندق في بانكوك الي المطار للعوده للمملكه في حفظ الله مع تمنيات الشركه برحله عوده امنه العرض شامل الطيران الداخلي من بانكوك الي بوكيت و العكس",
    price: 3699,
    numbers:'للشخصين'
  },
];

 const Georgia = {
    image:'/New folder/georgia.jpg',
    title: "باكج جورجيا السياحي المميز 6 ليالي 7 ايام",
    description: "البرنامج يشمل علي زياره المدن و البلدات التاليه\n\nتبليسي انانوري – جوداوري – كازبيجي – متسخيتا – بورجومي – باتومي – مارتفيلي –كوتايسي – ساتابليا – بروميثيوس - اوكاتسي\nالاقامة سوف تكون كالتالي:\n\n2ليلة تبليسي – 2 ليلة باتومي – 1 ليلة كوتايسي – ليلة تبليسي\nالبرنامج يشتمل على التالي\n\nالاستقبال والتوديع من والى المطار.\nحجوزات الفنادق في تبليسي وباتومي و كوتايسي\nوجبة الافطار بوفية مفتوح فى الفنادق\nجولات سياحية يوميا حسب الجدول المذكور أعلاه\nجميع الانتقالات بسيارة سياحية خاصة بكم فقط لتستمتع بالخصوصية مع عائلتك او أصدقائك.\nالبترول.\nالسعر شامل كافة الضرائب.\nخط جورجي مع باقة انترنت لكل فرد.\nمتابع باللغة العربية طوال مدة الرحلة\nتذاكر دخول حديقة بوتانيكال تبليسي (هدية من الشركة)\n تذاكر تلفريك تبليسي (هدية من الشركة\nتامين السفر الدولي (هدية من الشركة)\nشنطة هدايا من الشركة",
    price: 3885,
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
    excludedItems: [
      "تذاكر الطيران.",
      "وجبة الغداء والعشاء. (تلتزم الشركة بتوصيلكم لاحد المطاعم التركية او العربية لتناول وجبة الغذاء والعشاء)",
      "تذاكر دخول الاماكن السياحية. (والتي تكلفتها لا تتعدى من نصف دولار الى ثلاث دولارات في اغلب الاماكن)"
    ]
  };

export { Georgia , programs }