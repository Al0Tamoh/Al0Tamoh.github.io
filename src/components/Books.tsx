import { useState, useEffect, useRef } from 'react';
import { Tag, ShoppingCart, Search, ChevronLeft, ChevronRight, Package, Star, TrendingUp, Sparkles, Grid3X3, BookOpen, Heart } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number; // For discounted books
  image: string;
  author?: string;
  discount?: number; // Discount percentage
  isBestseller?: boolean;
  isRecommended?: boolean;
}

const Books = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAllCategory, setSelectedAllCategory] = useState<string | null>(null);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    'عروض خاصة',
    'إصدارات دار الطموح',
    'دينية',
    'أطفال',
    'روايات',
    'تنمية ذاتية',
    'تعليمية',
    'ثقافية',
    'تاريخية',
    'علمية',
    'أدب عالمي',
    'شعر',
    'فكر وفلسفة'
  ];

  const books: Book[] = [
    // العروض الخاصة
    {
      id: 1,
      title: "مجموعة كتب التنمية الذاتية الكاملة",
      category: "عروض خاصة",
      description: "احصل على 3 كتب في التنمية الذاتية بسعر مخفض",
      price: 150,
      originalPrice: 210,
      discount: 29,
      image: "/book-images/offer1.jpg",
      author: "مجموعة مؤلفين"
    },
    {
      id: 2,
      title: "مكتبة الطفل التعليمية المصورة",
      category: "عروض خاصة",
      description: "6 كتب تعليمية مصورة للأطفال",
      price: 120,
      originalPrice: 180,
      discount: 33,
      image: "/book-images/offer2.jpg",
      author: "فريق التأليف التعليمي"
    },
    {
      id: 3,
      title: "موسوعة الأدب العربي الكاملة",
      category: "عروض خاصة",
      description: "5 مجلدات في موسوعة الأدب العربي",
      price: 200,
      originalPrice: 300,
      discount: 33,
      image: "/book-images/offer3.jpg",
      author: "مجموعة من الأدباء"
    },
    {
      id: 4,
      title: "مجموعة الكتب الدينية الأساسية",
      category: "عروض خاصة",
      description: "4 كتب أساسية في الثقافة الإسلامية",
      price: 90,
      originalPrice: 140,
      discount: 36,
      image: "/book-images/offer4.jpg",
      author: "علماء مختارون"
    },
    {
      id: 5,
      title: "مكتبة الروايات العالمية",
      category: "عروض خاصة",
      description: "7 روايات عالمية مترجمة",
      price: 180,
      originalPrice: 250,
      discount: 28,
      image: "/book-images/offer5.jpg",
      author: "كتاب عالميون"
    },
    {
      id: 6,
      title: "مجموعة كتب التاريخ الإسلامي",
      category: "عروض خاصة",
      description: "مجموعة شاملة عن تاريخ الحضارة الإسلامية",
      price: 160,
      originalPrice: 220,
      discount: 27,
      image: "/book-images/offer6.jpg",
      author: "مؤرخون متخصصون"
    },
    {
      id: 7,
      title: "كتب الطب والصحة العامة",
      category: "عروض خاصة",
      description: "دليل شامل للصحة والطب الوقائي",
      price: 110,
      originalPrice: 165,
      discount: 33,
      image: "/book-images/offer7.jpg",
      author: "أطباء متخصصون"
    },
    {
      id: 8,
      title: "مجموعة كتب علم النفس",
      category: "عروض خاصة",
      description: "فهم النفس البشرية والسلوك",
      price: 140,
      originalPrice: 200,
      discount: 30,
      image: "/book-images/offer8.jpg",
      author: "علماء نفس"
    },
    {
      id: 9,
      title: "كتب الفلسفة والمنطق",
      category: "عروض خاصة",
      description: "رحلة في عالم الفكر والفلسفة",
      price: 130,
      originalPrice: 190,
      discount: 32,
      image: "/book-images/offer9.jpg",
      author: "فلاسفة معاصرون"
    },
    {
      id: 10,
      title: "مكتبة الشعر العربي الكاملة",
      category: "عروض خاصة",
      description: "أجمل قصائد الشعر العربي عبر العصور",
      price: 170,
      originalPrice: 240,
      discount: 29,
      image: "/book-images/offer10.jpg",
      author: "شعراء العرب"
    },
    {
      id: 11,
      title: "مجموعة كتب الطبخ العربي",
      category: "عروض خاصة",
      description: "أشهى الوصفات من المطبخ العربي",
      price: 95,
      originalPrice: 140,
      discount: 32,
      image: "/book-images/offer11.jpg",
      author: "طهاة مختصون"
    },
    {
      id: 12,
      title: "كتب الرياضة والصحة البدنية",
      category: "عروض خاصة",
      description: "دليل شامل للياقة البدنية والرياضة",
      price: 85,
      originalPrice: 125,
      discount: 32,
      image: "/book-images/offer12.jpg",
      author: "مدربون رياضيون"
    },

    // إصدارات دار الطموح
    {
      id: 13,
      title: "نحو القمة",
      category: "إصدارات دار الطموح",
      description: "رحلة الإنسان نحو تحقيق أحلامه",
      price: 45,
      image: "/book-images/ambition1.jpg",
      author: "د. أحمد محمد",
      isBestseller: true
    },
    {
      id: 14,
      title: "أسرار النجاح",
      category: "إصدارات دار الطموح",
      description: "كيف تصبح ناجحاً في حياتك المهنية",
      price: 40,
      image: "/book-images/ambition2.jpg",
      author: "سارة أحمد",
      isRecommended: true
    },
    {
      id: 15,
      title: "فن القيادة",
      category: "إصدارات دار الطموح",
      description: "دليل القائد الناجح في العصر الحديث",
      price: 50,
      image: "/book-images/ambition3.jpg",
      author: "د. محمد علي",
      isBestseller: true
    },
    {
      id: 16,
      title: "طريق الإبداع",
      category: "إصدارات دار الطموح",
      description: "كيف تطلق إبداعك وتحقق التميز",
      price: 42,
      image: "/book-images/ambition4.jpg",
      author: "فاطمة الزهراء"
    },
    {
      id: 17,
      title: "بناء الشخصية",
      category: "إصدارات دار الطموح",
      description: "أسس بناء شخصية قوية ومؤثرة",
      price: 38,
      image: "/book-images/ambition5.jpg",
      author: "د. عبد الله محمد",
      isRecommended: true
    },
    {
      id: 18,
      title: "الذكاء الاجتماعي",
      category: "إصدارات دار الطموح",
      description: "فن التعامل مع الآخرين بذكاء",
      price: 44,
      image: "/book-images/ambition6.jpg",
      author: "ليلى حسن"
    },
    {
      id: 19,
      title: "إدارة الوقت",
      category: "إصدارات دار الطموح",
      description: "كيف تدير وقتك بفعالية أكبر",
      price: 35,
      image: "/book-images/ambition7.jpg",
      author: "د. يوسف أحمد",
      isBestseller: true
    },
    {
      id: 20,
      title: "التفكير الإيجابي",
      category: "إصدارات دار الطموح",
      description: "قوة التفكير الإيجابي في تغيير حياتك",
      price: 39,
      image: "/book-images/ambition8.jpg",
      author: "منى سالم",
      isRecommended: true
    },
    {
      id: 21,
      title: "فن التفاوض",
      category: "إصدارات دار الطموح",
      description: "استراتيجيات التفاوض الناجح",
      price: 47,
      image: "/book-images/ambition9.jpg",
      author: "د. أحمد سليم"
    },
    {
      id: 22,
      title: "بناء الثقة بالنفس",
      category: "إصدارات دار الطموح",
      description: "خطوات عملية لتعزيز الثقة بالنفس",
      price: 41,
      image: "/book-images/ambition10.jpg",
      author: "نورا محمد",
      isBestseller: true
    },
    {
      id: 23,
      title: "الذكاء العاطفي",
      category: "إصدارات دار الطموح",
      description: "تطوير المهارات العاطفية والاجتماعية",
      price: 43,
      image: "/book-images/ambition11.jpg",
      author: "د. سعد الدين",
      isRecommended: true
    },
    {
      id: 24,
      title: "استراتيجيات التعلم",
      category: "إصدارات دار الطموح",
      description: "طرق فعالة للتعلم والاستذكار",
      price: 36,
      image: "/book-images/ambition12.jpg",
      author: "هدى عبد الرحمن"
    },

    // الروايات
    {
      id: 25,
      title: "مئة عام من العزلة",
      category: "روايات",
      description: "رائعة غابرييل غارسيا ماركيز",
      price: 52,
      image: "/book-images/novel1.jpg",
      author: "غابرييل غارسيا ماركيز",
      isBestseller: true
    },
    {
      id: 26,
      title: "الأسود يليق بك",
      category: "روايات",
      description: "رواية عن الأناقة والثقة بالنفس",
      price: 38,
      image: "/book-images/novel2.jpg",
      author: "أحلام مستغانمي",
      isRecommended: true
    },
    {
      id: 27,
      title: "مدن الملح",
      category: "روايات",
      description: "خماسية عبد الرحمن منيف الشهيرة",
      price: 65,
      image: "/book-images/novel3.jpg",
      author: "عبد الرحمن منيف",
      isBestseller: true
    },
    {
      id: 28,
      title: "رجال في الشمس",
      category: "روايات",
      description: "رواية غسان كنفاني الخالدة",
      price: 35,
      image: "/book-images/novel4.jpg",
      author: "غسان كنفاني",
      isRecommended: true
    },
    {
      id: 29,
      title: "الطنطورية",
      category: "روايات",
      description: "رواية رضوى عاشور عن فلسطين",
      price: 42,
      image: "/book-images/novel5.jpg",
      author: "رضوى عاشور"
    },
    {
      id: 30,
      title: "خان الخليلي",
      category: "روايات",
      description: "رواية نجيب محفوظ الشهيرة",
      price: 40,
      image: "/book-images/novel6.jpg",
      author: "نجيب محفوظ",
      isBestseller: true
    },
    {
      id: 31,
      title: "الخبز الحافي",
      category: "روايات",
      description: "رواية محمد شكري الصادمة",
      price: 45,
      image: "/book-images/novel7.jpg",
      author: "محمد شكري"
    },
    {
      id: 32,
      title: "امرأتان",
      category: "روايات",
      description: "رواية نوال السعداوي القوية",
      price: 37,
      image: "/book-images/novel8.jpg",
      author: "نوال السعداوي",
      isRecommended: true
    },
    {
      id: 33,
      title: "تحت أقدام الأم",
      category: "روايات",
      description: "رواية مصطفى لطفي المنفلوطي",
      price: 32,
      image: "/book-images/novel9.jpg",
      author: "مصطفى لطفي المنفلوطي"
    },
    {
      id: 34,
      title: "الزيني بركات",
      category: "روايات",
      description: "رواية جمال الغيطاني التاريخية",
      price: 48,
      image: "/book-images/novel10.jpg",
      author: "جمال الغيطاني",
      isBestseller: true
    },
    {
      id: 35,
      title: "الحب في زمن الكوليرا",
      category: "روايات",
      description: "رواية غابرييل غارسيا ماركيز الرومانسية",
      price: 50,
      image: "/book-images/novel11.jpg",
      author: "غابرييل غارسيا ماركيز",
      isRecommended: true
    },
    {
      id: 36,
      title: "البحث عن وليد مسعود",
      category: "روايات",
      description: "رواية جبرا إبراهيم جبرا",
      price: 44,
      image: "/book-images/novel12.jpg",
      author: "جبرا إبراهيم جبرا"
    },

    // الأكثر مبيعاً (من التصنيفات المختلفة)
    {
      id: 37,
      title: "فن اللامبالاة",
      category: "تنمية ذاتية",
      description: "دليل متمرد للعيش حياة تخالف المألوف",
      price: 180,
      originalPrice: 250,
      discount: 28,
      image: "/book-images/bestseller1.jpg",
      author: "مارك مانسون",
      isBestseller: true
    },
    {
      id: 38,
      title: "الرحيق المختوم",
      category: "دينية",
      description: "السيرة النبوية العطرة بأسلوب شائق",
      price: 50,
      image: "/book-images/bestseller2.jpg",
      author: "صفي الرحمن المباركفوري",
      isBestseller: true
    },
    {
      id: 39,
      title: "الذكاء العاطفي",
      category: "تنمية ذاتية",
      description: "لماذا قد يكون أهم من حاصل الذكاء",
      price: 27,
      originalPrice: 42,
      discount: 36,
      image: "/book-images/bestseller3.jpg",
      author: "دانيال جولمان",
      isBestseller: true
    },
    {
      id: 40,
      title: "كيف تكسب الأصدقاء وتؤثر في الناس",
      category: "تنمية ذاتية",
      description: "الدليل الكامل للتأثير الإيجابي",
      price: 40,
      image: "/book-images/bestseller4.jpg",
      author: "ديل كارنيجي",
      isBestseller: true
    },
    {
      id: 41,
      title: "العادات السبع للناس الأكثر فعالية",
      category: "تنمية ذاتية",
      description: "دروس قوية في التغيير الشخصي",
      price: 32,
      originalPrice: 48,
      discount: 33,
      image: "/book-images/bestseller5.jpg",
      author: "ستيفن كوفي",
      isBestseller: true
    },
    {
      id: 42,
      title: "البخاري الشريف",
      category: "دينية",
      description: "صحيح البخاري - أصح كتاب بعد القرآن",
      price: 75,
      image: "/book-images/bestseller6.jpg",
      author: "الإمام البخاري",
      isBestseller: true
    },
    {
      id: 43,
      title: "تفسير ابن كثير",
      category: "دينية",
      description: "تفسير القرآن العظيم",
      price: 85,
      image: "/book-images/bestseller7.jpg",
      author: "ابن كثير",
      isBestseller: true
    },
    {
      id: 44,
      title: "الطريق إلى النجاح",
      category: "تنمية ذاتية",
      description: "خارطة طريق لتحقيق الأهداف",
      price: 35,
      image: "/book-images/bestseller8.jpg",
      author: "د. إبراهيم الفقي",
      isBestseller: true
    },
    {
      id: 45,
      title: "قوة التحكم في الذات",
      category: "تنمية ذاتية",
      description: "كيف تتحكم في حياتك وتحقق أهدافك",
      price: 38,
      image: "/book-images/bestseller9.jpg",
      author: "د. إبراهيم الفقي",
      isBestseller: true
    },
    {
      id: 46,
      title: "الثقة والاعتزاز بالنفس",
      category: "تنمية ذاتية",
      description: "بناء الثقة بالنفس خطوة بخطوة",
      price: 33,
      image: "/book-images/bestseller10.jpg",
      author: "د. إبراهيم الفقي",
      isBestseller: true
    },
    {
      id: 47,
      title: "صحيح مسلم",
      category: "دينية",
      description: "مجموعة الأحاديث الصحيحة",
      price: 70,
      image: "/book-images/bestseller11.jpg",
      author: "الإمام مسلم",
      isBestseller: true
    },
    {
      id: 48,
      title: "التخطيط للمستقبل",
      category: "تنمية ذاتية",
      description: "كيف تخطط لمستقبل ناجح",
      price: 36,
      image: "/book-images/bestseller12.jpg",
      author: "د. صلاح الراشد",
      isBestseller: true
    },

    // ترشيحات المكتبة
    {
      id: 49,
      title: "تاريخ الطبري",
      category: "تاريخية",
      description: "تاريخ الرسل والملوك",
      price: 55,
      image: "/book-images/recommended1.jpg",
      author: "محمد بن جرير الطبري",
      isRecommended: true
    },
    {
      id: 50,
      title: "الكيمياء الحديثة",
      category: "علمية",
      description: "مقدمة شاملة في علم الكيمياء",
      price: 60,
      image: "/book-images/recommended2.jpg",
      author: "رايموند تشانغ",
      isRecommended: true
    },
    {
      id: 51,
      title: "ديوان المتنبي",
      category: "شعر",
      description: "أشعار أبي الطيب المتنبي",
      price: 35,
      image: "/book-images/recommended3.jpg",
      author: "أبو الطيب المتنبي",
      isRecommended: true
    },
    {
      id: 52,
      title: "ألف ليلة وليلة",
      category: "أدب عالمي",
      description: "من أشهر مجموعات الحكايات الشعبية",
      price: 65,
      image: "/book-images/recommended4.jpg",
      author: "مجهول",
      isRecommended: true
    },
    {
      id: 53,
      title: "الأسرار السبعة للتربية المثلى",
      category: "أطفال",
      description: "دليل الآباء لتربية أطفال سعداء",
      price: 35,
      image: "/book-images/recommended5.jpg",
      author: "شيرلي هيرولد",
      isRecommended: true
    },
    {
      id: 54,
      title: "الحضارة الإسلامية",
      category: "تاريخية",
      description: "قصة نهضة وازدهار الحضارة الإسلامية",
      price: 62,
      image: "/book-images/recommended6.jpg",
      author: "د. راغب السرجاني",
      isRecommended: true
    },
    {
      id: 55,
      title: "لغز الحياة",
      category: "فكر وفلسفة",
      description: "تأملات في معنى الوجود والحياة",
      price: 44,
      image: "/book-images/recommended7.jpg",
      author: "د. مصطفى محمود",
      isRecommended: true
    },
    {
      id: 56,
      title: "ديوان الشافعي",
      category: "شعر",
      description: "أشعار الإمام الشافعي رحمه الله",
      price: 32,
      image: "/book-images/recommended8.jpg",
      author: "الإمام الشافعي",
      isRecommended: true
    },
    {
      id: 57,
      title: "فيزياء الكم",
      category: "علمية",
      description: "مدخل إلى عالم الفيزياء الحديثة",
      price: 68,
      image: "/book-images/recommended9.jpg",
      author: "د. أحمد فؤاد باشا",
      isRecommended: true
    },
    {
      id: 58,
      title: "البلاغة العربية",
      category: "ثقافية",
      description: "دروس في البلاغة والبيان",
      price: 45,
      image: "/book-images/recommended10.jpg",
      author: "د. عبد الرحمن حبنكة",
      isRecommended: true
    },
    {
      id: 59,
      title: "النحو الواضح",
      category: "تعليمية",
      description: "قواعد النحو العربي بأسلوب مبسط",
      price: 38,
      image: "/book-images/recommended11.jpg",
      author: "علي الجارم",
      isRecommended: true
    },
    {
      id: 60,
      title: "أطلس التاريخ الإسلامي",
      category: "تاريخية",
      description: "خرائط ومعلومات تاريخية شاملة",
      price: 75,
      image: "/book-images/recommended12.jpg",
      author: "د. شوقي أبو خليل",
      isRecommended: true
    },

    // كتب أخرى للتصنيفات المختلفة
    {
      id: 61,
      title: "القرآن الكريم - مصحف الحرمين",
      category: "دينية",
      description: "المصحف الشريف بخط واضح ومريح للقراءة",
      price: 25,
      image: "/book-images/quran.jpg",
      author: "الحرمين الشريفين"
    }
  ];

  // Filter books with search
  const filteredBooks = books.filter(book => {
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  // Get bestseller books
  const bestsellerBooks = filteredBooks.filter(book => book.isBestseller);

  // Get recommended books
  const recommendedBooks = filteredBooks.filter(book => book.isRecommended);

  // Get books by category
  const getBooksByCategory = (category: string) => {
    return filteredBooks.filter(book => book.category === category);
  };

  // Section scroll functions
  const scrollSection = (sectionRef: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (sectionRef.current) {
      const scrollAmount = 300;
      const currentScroll = sectionRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      sectionRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Create refs for each section
  const bestsellerRef = useRef<HTMLDivElement>(null);
  const recommendedRef = useRef<HTMLDivElement>(null);
  const ambitionRef = useRef<HTMLDivElement>(null);
  const novelsRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  const orderBook = (book: Book) => {
    const message = `السلام عليكم، أرغب في طلب كتاب: "${book.title}" – تصنيف: ${book.category}`;
    window.open(`https://wa.me/905376791661?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Book Card Component
  const BookCard = ({ book }: { book: Book }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700 flex-shrink-0 w-64">
      {/* Book Image */}
      <div className="relative h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center p-2">
        <img 
          src={book.image} 
          alt={book.title}
          className="h-40 w-28 object-cover rounded shadow-sm"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/200x300/1e293b/10b981?text=${encodeURIComponent(book.title)}`;
          }}
        />
        
        {/* Price Badge */}
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
          €{book.price}
        </div>

        {/* Discount Badge */}
        {book.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            -{book.discount}%
          </div>
        )}

        {/* Special Category Badges */}
        {book.category === 'عروض خاصة' && (
          <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
            عرض خاص
          </div>
        )}
      </div>
      
      {/* Book Content */}
      <div className="p-3">
        {/* Category */}
        <div className="text-xs text-orange-500 font-medium mb-1">{book.category}</div>
        
        {/* Title */}
        <h4 className="text-sm font-bold dark:text-white text-gray-900 mb-1 line-clamp-2 leading-tight">
          {book.title}
        </h4>
        
        {/* Author */}
        {book.author && (
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-2">{book.author}</p>
        )}

        {/* Price Section */}
        {book.originalPrice && (
          <div className="flex items-center gap-1 mb-2">
            <span className="text-red-500 font-bold text-sm">€{book.price}</span>
            <span className="text-gray-400 line-through text-xs">€{book.originalPrice}</span>
          </div>
        )}
        
        {/* Status Label */}
        <div className="text-center mb-2">
          <span className="text-green-600 font-medium text-xs">متوفر</span>
        </div>
        
        {/* Order Button */}
        <button 
          onClick={() => orderBook(book)}
          className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-medium transition-colors duration-300"
        >
          اطلب الآن
        </button>
      </div>
    </div>
  );

  // Section Header Component
  const SectionHeader = ({ title, icon, showViewAll = false }: { 
    title: string, 
    icon?: any, 
    showViewAll?: boolean
  }) => (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-2xl font-bold dark:text-white text-[#1d2d50]">{title}</h3>
      </div>
      {showViewAll && (
        <button className="text-orange-500 hover:text-orange-600 text-sm font-medium transition-colors duration-300">
          عرض الكل
        </button>
      )}
    </div>
  );

  // Scrollable Section Component
  const ScrollableSection = ({ 
    title, 
    icon, 
    books, 
    sectionRef 
  }: { 
    title: string, 
    icon: any, 
    books: Book[], 
    sectionRef: React.RefObject<HTMLDivElement> 
  }) => {
    if (books.length === 0) return null;
    
    return (
      <div className="mb-16">
        <SectionHeader title={title} icon={icon} showViewAll={true} />
        
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scrollSection(sectionRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 border border-gray-200 dark:border-slate-600"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scrollSection(sectionRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-300 border border-gray-200 dark:border-slate-600"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Books Container */}
          <div 
            ref={sectionRef}
            className="overflow-x-auto scrollbar-hide mx-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-4 py-2" style={{ width: 'max-content' }}>
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="books" className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-gray-900 from-[#f4f7fb] via-[#f7f9fb] to-[#ffffff] transition-all duration-500">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 166, 0, 0.27) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 166, 0, 0.29) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 dark:bg-orange-400/30 bg-orange-500/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br dark:from-orange-400/30 dark:via-orange-500/30 dark:to-yellow-400/20 from-orange-400/20 via-orange-500/20 to-yellow-400/15 rounded-full blur-2xl animate-pulse transition-all duration-500"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br dark:from-gray-300/10 dark:to-gray-500/10 from-blue-200/8 to-blue-400/8 rounded-full blur-3xl transition-all duration-500"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-5 py-3 rounded-full dark:bg-slate-800/40 bg-white/60 backdrop-blur-sm dark:border-orange-400/20 border-orange-400/30 mb-5 gap-2 transition-all duration-500">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-base dark:text-orange-200 text-orange-600 transition-colors duration-500">مجموعة مختارة بعناية</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold dark:text-white text-[#1d2d50] mb-5 transition-colors duration-500">
            مكتبتنا <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">المتنوعة</span>
          </h2>

          <p className="text-xl dark:text-slate-300 text-[#6c7a89] max-w-2xl mx-auto transition-colors duration-500">
            اكتشف عالمًا من المعرفة والإلهام مع مجموعتنا المتنوعة من الكتب
          </p>
        </div>

        {/* Search Bar */}
        <div className={`flex justify-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-xl w-full">
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
              <Search className="dark:text-orange-400 text-orange-500 h-6 w-6" strokeWidth={2.5} />
            </div>
            
            <input
              type="text"
              placeholder="ابحث عن كتاب أو مؤلف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-14 pl-12 py-4 dark:bg-slate-800/80 bg-white/90 backdrop-blur-sm dark:border-slate-600/60 border-blue-300/50 border-2 rounded-xl dark:text-white text-[#1d2d50] dark:placeholder-slate-400 placeholder-[#6c7a89] focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-500 text-lg shadow-lg"
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Featured Sections */}
          <ScrollableSection 
            title="الأكثر مبيعاً" 
            icon={<TrendingUp className="w-6 h-6 text-red-500" />}
            books={bestsellerBooks}
            sectionRef={bestsellerRef}
          />

          <ScrollableSection 
            title="ترشيحات المكتبة" 
            icon={<Sparkles className="w-6 h-6 text-purple-500" />}
            books={recommendedBooks}
            sectionRef={recommendedRef}
          />

          <ScrollableSection 
            title="إصدارات دار الطموح" 
            icon={<Star className="w-6 h-6 text-blue-500" />}
            books={getBooksByCategory('إصدارات دار الطموح')}
            sectionRef={ambitionRef}
          />

          <ScrollableSection 
            title="الروايات" 
            icon={<BookOpen className="w-6 h-6 text-green-500" />}
            books={getBooksByCategory('روايات')}
            sectionRef={novelsRef}
          />

          <ScrollableSection 
            title="العروض الخاصة" 
            icon={<Package className="w-6 h-6 text-green-600" />}
            books={getBooksByCategory('عروض خاصة')}
            sectionRef={offersRef}
          />

          {/* All Categories Section */}
          <div className="mb-16">
            <SectionHeader 
              title="جميع التصنيفات" 
              icon={<Grid3X3 className="w-6 h-6 text-gray-600" />}
            />
            
            {/* Categories without arrows - centered */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 py-2">
                {categories.map((category) => {
                  const categoryBooks = getBooksByCategory(category);
                  if (categoryBooks.length === 0) return null;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedAllCategory(selectedAllCategory === category ? null : category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                        selectedAllCategory === category
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-orange-400'
                      }`}
                    >
                      {category}
                      <span className="mr-2 text-xs opacity-70">({categoryBooks.length})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Category Books */}
            {selectedAllCategory && (
              <div>
                <h4 className="text-lg font-semibold dark:text-white text-gray-900 mb-4">
                  كتب {selectedAllCategory}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {getBooksByCategory(selectedAllCategory).map((book) => (
                    <div key={book.id} className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
                      {/* Book Image */}
                      <div className="relative h-48 bg-gray-100 dark:bg-slate-700 flex items-center justify-center p-2">
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="h-40 w-28 object-cover rounded shadow-sm"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/200x300/1e293b/10b981?text=${encodeURIComponent(book.title)}`;
                          }}
                        />
                        
                        {/* Price Badge */}
                        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
                          €{book.price}
                        </div>

                        {/* Discount Badge */}
                        {book.discount && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                            -{book.discount}%
                          </div>
                        )}

                        {/* Special Category Badges */}
                        {book.category === 'عروض خاصة' && (
                          <div className="absolute bottom-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                            عرض خاص
                          </div>
                        )}
                      </div>
                      
                      {/* Book Content */}
                      <div className="p-3">
                        {/* Category */}
                        <div className="text-xs text-orange-500 font-medium mb-1">{book.category}</div>
                        
                        {/* Title */}
                        <h4 className="text-sm font-bold dark:text-white text-gray-900 mb-1 line-clamp-2 leading-tight">
                          {book.title}
                        </h4>
                        
                        {/* Author */}
                        {book.author && (
                          <p className="text-xs text-gray-500 dark:text-slate-400 mb-2">{book.author}</p>
                        )}

                        {/* Price Section */}
                        {book.originalPrice && (
                          <div className="flex items-center gap-1 mb-2">
                            <span className="text-red-500 font-bold text-sm">€{book.price}</span>
                            <span className="text-gray-400 line-through text-xs">€{book.originalPrice}</span>
                          </div>
                        )}
                        
                        {/* Status Label */}
                        <div className="text-center mb-2">
                          <span className="text-green-600 font-medium text-xs">متوفر</span>
                        </div>
                        
                        {/* Order Button */}
                        <button 
                          onClick={() => orderBook(book)}
                          className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs font-medium transition-colors duration-300"
                        >
                          اطلب الآن
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message when no category selected */}
            {!selectedAllCategory && (
              <div className="text-center py-12 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                <Grid3X3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-slate-400 text-lg">
                  اختر تصنيفاً لعرض الكتب المتاحة
                </p>
              </div>
            )}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 dark:text-slate-500 text-[#6c7a89] mx-auto mb-4" />
              <div className="dark:text-slate-400 text-[#6c7a89] text-lg mb-2">لا توجد كتب تطابق البحث</div>
              <p className="dark:text-slate-500 text-[#6c7a89] mb-4">جرب البحث بكلمات مختلفة</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-sm transition-colors duration-500 shadow-lg"
              >
                إعادة تعيين البحث
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
        `
      }} />
    </section>
  );
};

export default Books;