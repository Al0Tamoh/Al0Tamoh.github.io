import { useState, useEffect } from 'react';
import { Tag, ShoppingCart, Search, Filter, Star, X, Percent, BookOpen, Bookmark, Award, Sparkles } from 'lucide-react';

interface Book {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  author?: string;
  discount?: number;
}

const Books = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [booksToShow, setBooksToShow] = useState(8);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    'الكل',
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
    // Special Offers - Books with discounts
    // ========================================
    {
      id: 25,
      title: "فن اللامبالاة - عرض خاص",
      category: "عروض خاصة",
      description: "دليل متمرد للعيش حياة تخالف المألوف - خصم خاص لفترة محدودة",
      price: 180,
      originalPrice: 250,
      discount: 28,
      image: "./book-images/book1.jpg",
      author: "مارك مانسون"
    },
    {
      id: 26,
      title: "الذكاء العاطفي - خصم 35%",
      category: "عروض خاصة",
      description: "لماذا قد يكون أهم من حاصل الذكاء - عرض مميز",
      price: 27,
      originalPrice: 42,
      discount: 35,
      image: "./book-images/book5.jpg",
      author: "دانيال جولمان"
    },
    {
      id: 27,
      title: "العادات السبع - عرض محدود",
      category: "عروض خاصة",
      description: "العادات السبع للناس الأكثر فعالية - خصم استثنائي",
      price: 32,
      originalPrice: 48,
      discount: 33,
      image: "./book-images/book11.jpg",
      author: "ستيفن كوفي"
    },
    {
      id: 28,
      title: "مئة عام من العزلة - خصم 40%",
      category: "عروض خاصة",
      description: "رائعة غابرييل غارسيا ماركيز بسعر مخفض",
      price: 31,
      originalPrice: 52,
      discount: 40,
      image: "./book-images/book12.jpg",
      author: "غابرييل غارسيا ماركيز"
    },

    // Dar Al-Tumooh Publications
    // ========================================
    {
      id: 29,
      title: "رحلة نحو النجاح",
      category: "إصدارات دار الطموح",
      description: "دليلك الشامل لتحقيق الأهداف والطموحات - إصدار حصري من دار الطموح",
      price: 45,
      image: "./book-images/book21.jpg",
      author: "د. عبدالله الشامي"
    },
    {
      id: 30,
      title: "أسرار الريادة الحديثة",
      category: "إصدارات دار الطموح",
      description: "كيف تبني مشروعك الناجح في العصر الرقمي - من منشورات دار الطموح",
      price: 50,
      image: "./book-images/book22.jpg",
      author: "أحمد الريادي"
    },
    {
      id: 31,
      title: "فن الإبداع والابتكار",
      category: "إصدارات دار الطموح",
      description: "طور قدراتك الإبداعية وحقق التميز - إصدار خاص من دار الطموح",
      price: 42,
      image: "./book-images/book23.jpg",
      author: "سارة المبدعة"
    },
    {
      id: 32,
      title: "قوة التفكير الإيجابي",
      category: "إصدارات دار الطموح",
      description: "غير حياتك بقوة الأفكار الإيجابية - منشورات دار الطموح المتميزة",
      price: 38,
      image: "./book-images/book24.jpg",
      author: "د. محمد الإيجابي"
    },
    // Original books
    // ========================================
    // all books + all categories

    // Self-Devo book category :
    {
      id: 1,
      title: "فن اللامبالاة",
      category: "تنمية ذاتية",
      description: "دليل متمرد للعيش حياة تخالف المألوف",
      price: 250,
      image: "./book-images/book1.jpg",
      author: "مارك مانسون"
    },
    {
      id: 8,
      title: "الذكاء العاطفي",
      category: "تنمية ذاتية",
      description: "لماذا قد يكون أهم من حاصل الذكاء",
      price: 42,
      image: "./book-images/book5.jpg",
      author: "دانيال جولمان"
    },
    {
      id: 12,
      title: "كيف تكسب الأصدقاء وتؤثر في الناس",
      category: "تنمية ذاتية",
      description: "الدليل الكامل للتأثير الإيجابي",
      price: 40,
      image: "./book-images/book8.jpg",
      author: "ديل كارنيجي"
    },
    {
      id: 15,
      title: "العادات السبع للناس الأكثر فعالية",
      category: "تنمية ذاتية",
      description: "دروس قوية في التغيير الشخصي",
      price: 48,
      image: "./book-images/book11.jpg",
      author: "ستيفن كوفي"
    },

    // ========================================

    // Diin book category
    {
      id: 5,
      title: "الرحيق المختوم",
      category: "دينية",
      description: "السيرة النبوية العطرة بأسلوب شائق",
      price: 50,
      image: "./book-images/book2.jpg",
      author: "صفي الرحمن المباركفوري"
    },
    {
      id: 13,
      title: "القرآن الكريم - مصحف الحرمين",
      category: "دينية",
      description: "المصحف الشريف بخط واضح ومريح للقراءة",
      price: 25,
      image: "./book-images/book9.jpg",
      author: "الحرمين الشريفين"
    },
    {
      id: 17,
      title: "تفسير ابن كثير",
      category: "دينية",
      description: "تفسير القرآن العظيم",
      price: 85,
      image: "./book-images/book13.jpg",
      author: "ابن كثير"
    },

    // ========================================

    // History book category
    {
      id: 6,
      title: "تاريخ الطبري",
      category: "تاريخية",
      description: "تاريخ الرسل والملوك",
      price: 55,
      image: "./book-images/book3.jpg",
      author: "محمد بن جرير الطبري"
    },
    {
      id: 20,
      title: "الحضارة الإسلامية",
      category: "تاريخية",
      description: "قصة نهضة وازدهار الحضارة الإسلامية",
      price: 62,
      image: "./book-images/book16.jpg",
      author: "د. راغب السرجاني"
    },

    // ========================================

    // Novels book category
    {
      id: 7,
      title: "الأسود يليق بك",
      category: "روايات",
      description: "رواية عن الأناقة والثقة بالنفس",
      price: 38,
      image: "./book-images/book4.jpg",
      author: "أحلام مستغانمي"
    },
    {
      id: 16,
      title: "مئة عام من العزلة",
      category: "روايات",
      description: "رائعة غابرييل غارسيا ماركيز",
      price: 52,
      image: "./book-images/book12.jpg",
      author: "غابرييل غارسيا ماركيز"
    },

    // ========================================

    // Science book category
    {
      id: 9,
      title: "الكيمياء الحديثة",
      category: "علمية",
      description: "مقدمة شاملة في علم الكيمياء",
      price: 60,
      image: "./book-images/book6.jpg",
      author: "رايموند تشانغ"
    },
    {
      id: 19,
      title: "فيزياء الكم المبسطة",
      category: "علمية",
      description: "مقدمة سهلة لعالم الكم المذهل",
      price: 58,
      image: "./book-images/book15.jpg",
      author: "د. أحمد زكي"
    },

    // ========================================

    // Poetry book category
      {
      id: 10,
      title: "ديوان المتنبي",
      category: "شعر",
      description: "أشعار أبي الطيب المتنبي",
      price: 35,
      image: "./book-images/book7.jpg",
      author: "أبو الطيب المتنبي"
    },
    {
      id: 22,
      title: "ديوان الشافعي",
      category: "شعر",
      description: "أشعار الإمام الشافعي رحمه الله",
      price: 32,
      image: "./book-images/book18.jpg",
      author: "الإمام الشافعي"
    },

    // ========================================

    // World Literature book category
    {
      id: 14,
      title: "ألف ليلة وليلة",
      category: "أدب عالمي",
      description: "من أشهر مجموعات الحكايات الشعبية",
      price: 65,
      image: "./book-images/book10.jpg",
      author: "مجهول"
    },

    // ========================================

    // Children book category
    {
      id: 18,
      title: "الأسرار السبعة للتربية المثلى",
      category: "أطفال",
      description: "دليل الآباء لتربية أطفال سعداء",
      price: 35,
      image: "./book-images/book14.jpg",
      author: "د. محمد راتب النابلسي"
    },

    // ========================================

    // Philosophy book category
    {
      id: 21,
      title: "فلسفة الحياة",
      category: "فكر وفلسفة",
      description: "تأملات في معنى الوجود والحياة",
      price: 44,
      image: "./book-images/book17.jpg",
      author: "د. مصطفى محمود"
    },

    // ========================================

    // Culture book category
    {
      id: 23,
      title: "الثقافة العامة للجميع",
      category: "ثقافية",
      description: "معلومات عامة مفيدة في شتى المجالات",
      price: 38,
      image: "./book-images/book19.jpg",
      author: "د. أحمد أمين"
    },

    // ========================================

    // Education book category
    {
      id: 24,
      title: "أساسيات الرياضيات",
      category: "تعليمية",
      description: "مرجع شامل لأساسيات علم الرياضيات",
      price: 55,
      image: "./book-images/book20.jpg",
      author: "د. فاروق الدسوقي"
    }
  ];
  
  // Function to shuffle array randomly
  const shuffleArray = (array: Book[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const filteredBooks = (() => {
    const filtered = books.filter(book => {
      const matchesCategory = activeCategory === 'الكل' || book.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });

    // If showing all books, shuffle them randomly
    if (activeCategory === 'الكل') {
      return shuffleArray(filtered);
    }
    
    return filtered;
  })();

  // Get books to display based on booksToShow state
  const displayedBooks = filteredBooks.slice(0, booksToShow);
  
  // Check if showing all books
  const showingAllBooks = booksToShow >= filteredBooks.length;

  // Handle Show More button
  const handleShowMore = () => {
    setBooksToShow(prev => prev + 12);
  };

  // Handle Show Less button
  const handleShowLess = () => {
    setBooksToShow(8);
  };

  // Reset books to show when category or search changes
  useEffect(() => {
    setBooksToShow(8);
  }, [activeCategory, searchTerm]);

  const orderBook = (book: Book) => {
    const message = `السلام عليكم، أرغب في طلب كتاب: "${book.title}" – تصنيف: ${book.category}`;
    window.open(`https://wa.me/905376791661?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="books" className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-gray-900 from-[#f4f7fb] via-[#f7f9fb] to-[#ffffff] transition-all duration-500">
      
      {/* Animated Background Grid - Same as Hero */}
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
        {[...Array(8)].map((_, i) => (
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

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br dark:from-orange-400/30 dark:via-orange-500/30 dark:to-yellow-400/20 from-orange-400/20 via-orange-500/20 to-yellow-400/15 rounded-full blur-2xl animate-pulse transition-all duration-500"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br dark:from-gray-300/10 dark:to-gray-500/10 from-blue-200/8 to-blue-400/8 rounded-full blur-3xl transition-all duration-500"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br dark:from-orange-500/25 dark:via-orange-400/25 from-orange-500/18 via-orange-400/18 to-transparent rounded-full blur-xl animate-bounce transition-all duration-500" style={{animationDuration: '3s'}}></div>
      
      {/* Additional Orange and Light-Gray Blobs */}
      <div className="absolute bottom-32 left-32 w-48 h-48 bg-gradient-to-br dark:from-gray-200/12 dark:to-gray-400/12 from-blue-200/10 to-blue-300/10 rounded-full blur-3xl animate-pulse transition-all duration-500" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
      <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-gradient-to-br dark:from-orange-400/25 dark:via-orange-500/25 dark:to-orange-600/20 from-orange-400/18 via-orange-500/18 to-orange-600/15 rounded-full blur-3xl animate-bounce transition-all duration-500" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-gradient-to-br dark:from-gray-300/10 dark:to-gray-500/10 from-blue-200/8 to-blue-400/8 rounded-full blur-2xl animate-pulse transition-all duration-500" style={{animationDelay: '3s'}}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Simplified Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Simple Badge */}
          <div className="inline-flex items-center px-5 py-3 rounded-full dark:bg-slate-800/40 bg-white/60 backdrop-blur-sm dark:border-orange-400/20 border-orange-400/30 mb-6 gap-2 transition-all duration-500">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-base dark:text-orange-200 text-orange-600 transition-colors duration-500">مجموعة مختارة بعناية</span>
          </div>

          {/* Simple Title */}
          <h2 className="text-5xl md:text-6xl font-bold dark:text-white text-[#1d2d50] mb-6 transition-colors duration-500">
            مكتبة <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">الطموح</span>
          </h2>

          {/* Simple Subtitle */}
          <p className="text-xl dark:text-slate-300 text-[#6c7a89] max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            اكتشف عالمًا من المعرفة والإلهام مع مجموعتنا المتنوعة من الكتب
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative max-w-2xl w-full">
            {/* Search Icon */}
            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
              <Search className="dark:text-orange-400 text-orange-500 h-6 w-6" strokeWidth={2.5} />
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="ابحث عن كتاب أو مؤلف..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-16 pl-14 py-5 dark:bg-slate-800/80 bg-white/90 backdrop-blur-sm dark:border-slate-600/60 border-blue-300/50 border-2 rounded-2xl dark:text-white text-[#1d2d50] dark:placeholder-slate-400 placeholder-[#6c7a89] focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 dark:focus:bg-slate-800/90 focus:bg-white transition-all duration-500 text-lg shadow-lg hover:shadow-xl"
            />
            
            {/* Clear Search Button */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 dark:text-slate-400 text-[#6c7a89] hover:text-orange-500 transition-colors duration-300 z-10 p-2 rounded-full hover:bg-orange-500/10"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Categories */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-3 rounded-full text-base font-medium transition-all duration-500 backdrop-blur-sm border ${
                activeCategory === category 
                  ? category === 'عروض خاصة'
                    ? 'bg-gradient-to-r from-blue-900 to-blue-800 dark:from-sky-400 dark:to-sky-500 text-white shadow-lg shadow-blue-500/25 border-blue-600 dark:border-sky-400' 
                    : category === 'إصدارات دار الطموح'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 border-green-500'
                    : 'bg-orange-500 text-white shadow-lg shadow-orange-500/25 border-orange-500'
                  : 'dark:bg-slate-800/40 bg-white/60 dark:text-slate-300 text-[#6c7a89] dark:hover:bg-slate-700/60 hover:bg-white/80 dark:border-slate-700/30 border-blue-200/30'
              } ${
                category === 'عروض خاصة' && activeCategory !== category
                  ? 'hover:bg-blue-50 hover:text-blue-900 hover:border-blue-300 dark:hover:bg-sky-900/20 dark:hover:text-sky-400 dark:hover:border-sky-400/30'
                  : category === 'إصدارات دار الطموح' && activeCategory !== category
                  ? 'hover:bg-green-50 hover:text-green-600 hover:border-green-200'
                  : ''
              }`}
            >
              {category === 'عروض خاصة' && (
                <>
                  <Percent className="inline-block w-4 h-4 mr-2" />
                  {/* Enhanced smaller animated offer indicator with better effects */}
                  <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center">
                    {/* Main glowing circle - smaller */}
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-sky-400 dark:via-sky-500 dark:to-sky-600 rounded-full shadow-lg animate-glow"></div>
                    {/* Outer ping effect - smaller */}
                    <div className="absolute w-4 h-4 bg-blue-400 dark:bg-sky-400 rounded-full animate-ping opacity-60"></div>
                    {/* Inner shine effect - smaller */}
                    <div className="absolute w-3 h-3 bg-gradient-to-br from-white/50 via-white/30 to-transparent rounded-full animate-shine-fast"></div>
                    {/* Tiny sparkle center */}
                    <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-sparkle"></div>
                  </div>
                </>
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Books Library Display - Bigger Cards */}
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Library Shelves Grid - Made more spacious */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {displayedBooks.map((book) => (
              <div 
                key={book.id} 
                className="group relative transition-all duration-500 hover:scale-105"
              >
                {/* Enhanced Book Card - Made bigger */}
                <div className={`relative dark:bg-slate-800/60 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl`}>
                  
                  {/* Enhanced Book Spine */}
                  <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-orange-400 to-orange-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Enhanced Book Cover Area - Made bigger */}
                  <div className="relative h-80 dark:bg-slate-700/20 bg-blue-50/30 p-6 flex items-center justify-center transition-colors duration-500">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="h-64 w-40 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/200x300/1e293b/10b981?text=${encodeURIComponent(book.title)}`;
                      }}
                    />
                    
                    {/* Enhanced Price Badge */}
                    <div className={`absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-bold shadow-lg text-white ${
                      book.discount ? 'bg-blue-900 dark:bg-sky-500' : 'bg-orange-500'
                    }`}>
                      {book.price} ₺
                    </div>

                    {/* Enhanced Discount Badge */}
                    {book.discount && (
                      <div className="absolute top-4 left-4 bg-blue-900 dark:bg-sky-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg animate-pulse">
                        -{book.discount}%
                      </div>
                    )}

                    {/* Enhanced Category Badge */}
                    {book.category === 'إصدارات دار الطموح' && (
                      <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                        دار الطموح
                      </div>
                    )}
                  </div>
                  
                  {/* Enhanced Book Information - Made bigger */}
                  <div className="p-6 space-y-4">
                    {/* Enhanced Category */}
                    <span className={`inline-flex items-center gap-2 text-sm backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-500 ${
                      book.category === 'عروض خاصة' 
                        ? 'text-blue-900 dark:text-sky-400 dark:bg-sky-400/10 bg-blue-900/15'
                        : book.category === 'إصدارات دار الطموح'
                        ? 'text-green-400 dark:bg-green-400/10 bg-green-400/15'
                        : 'text-orange-400 dark:bg-orange-400/10 bg-orange-400/15'
                    }`}>
                      <Tag className="h-4 w-4" />
                      {book.category}
                    </span>
                    
                    {/* Enhanced Title */}
                    <h3 className="text-lg font-bold dark:text-white text-[#1d2d50] transition-colors duration-500 line-clamp-2 leading-relaxed">
                      {book.title}
                    </h3>
                    
                    {/* Enhanced Author */}
                    {book.author && (
                      <p className="dark:text-slate-400 text-[#6c7a89] text-sm transition-colors duration-500 font-medium">
                        بقلم: {book.author}
                      </p>
                    )}

                    {/* Enhanced Price Section */}
                    {book.originalPrice && (
                      <div className="flex items-center gap-3">
                        <span className="text-blue-900 dark:text-sky-400 font-bold text-xl">{book.price} ₺</span>
                        <span className="text-slate-400 line-through text-sm">{book.originalPrice} ₺</span>
                        <span className="bg-blue-100 dark:bg-sky-400/10 text-blue-900 dark:text-sky-400 px-3 py-1 rounded-lg text-xs font-bold">
                          وفر {book.originalPrice - book.price} ₺
                        </span>
                      </div>
                    )}
                    
                    {/* Enhanced Description */}
                    <p className="dark:text-slate-300 text-[#6c7a89] text-sm transition-colors duration-500 line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>
                    
                    {/* Enhanced Order Button */}
                    <button 
                      onClick={() => orderBook(book)}
                      className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                        book.category === 'عروض خاصة'
                          ? 'bg-gradient-to-r from-blue-900 to-blue-800 hover:from-blue-800 hover:to-blue-900 dark:from-sky-500 dark:to-sky-600 dark:hover:from-sky-400 dark:hover:to-sky-500 text-white'
                          : book.category === 'إصدارات دار الطموح'
                          ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white'
                          : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                      } hover:scale-105`}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      {book.category === 'عروض خاصة' ? 'احصل على العرض' : 'اطلب الآن'}
                    </button>
                  </div>

                  {/* Enhanced Book Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Show More / Show Less */}
        {filteredBooks.length > 8 && (
          <div className="flex justify-center mt-16">
            {!showingAllBooks ? (
              <button 
                onClick={handleShowMore}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                عرض المزيد من الكتب
              </button>
            ) : (
              <button 
                onClick={handleShowLess}
                className="px-10 py-5 bg-gradient-to-r dark:from-slate-600/80 dark:to-slate-700/80 from-blue-500/80 to-blue-600/80 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500"
              >
                عرض أقل
              </button>
            )}
          </div>
        )}

        {/* Enhanced Books Count Info */}
        {filteredBooks.length > 0 && (
          <div className="text-center mt-10">
            <p className="dark:text-slate-400 text-[#6c7a89] text-base transition-colors duration-500 leading-relaxed">
              عرض {displayedBooks.length} من {filteredBooks.length} كتاب
              {activeCategory !== 'الكل' && ` في تصنيف "${activeCategory}"`}
              {activeCategory === 'عروض خاصة' && (
                <span className="text-blue-900 dark:text-sky-400 font-semibold"> - عروض محدودة الوقت!</span>
              )}
            </p>
          </div>
        )}

        {/* Enhanced Special Offers Banner */}
        {activeCategory === 'عروض خاصة' && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-blue-900/20 to-blue-800/20 dark:from-sky-400/20 dark:to-sky-500/20 backdrop-blur-sm border border-blue-900/30 dark:border-sky-400/30 rounded-2xl">
              <Percent className="h-7 w-7 text-blue-900 dark:text-sky-400 animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-blue-900 dark:text-sky-400 font-bold text-xl">عروض خاصة لفترة محدودة - لا تفوت الفرصة!</span>
              <Percent className="h-7 w-7 text-blue-900 dark:text-sky-400 animate-spin" style={{animationDuration: '3s', animationDirection: 'reverse'}} />
            </div>
          </div>
        )}

        {/* Enhanced Dar Al-Tumooh Banner */}
        {activeCategory === 'إصدارات دار الطموح' && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-2xl">
              <Star className="h-7 w-7 text-green-400 animate-pulse" />
              <span className="text-green-400 font-bold text-xl">إصدارات حصرية من دار الطموح للنشر والتوزيع</span>
              <Star className="h-7 w-7 text-green-400 animate-pulse" />
            </div>
          </div>
        )}

        {/* Enhanced No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              {/* Enhanced Empty Library Illustration */}
              <div className="w-28 h-28 dark:bg-slate-700/50 bg-blue-100/80 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Search className="h-14 w-14 dark:text-slate-500 text-[#6c7a89] transition-colors duration-500" />
              </div>
              
              <h3 className="dark:text-slate-300 text-[#6c7a89] text-3xl font-bold mb-6 transition-colors duration-500">
                لم نجد ما تبحث عنه
              </h3>
              <p className="dark:text-slate-500 text-[#6c7a89] mb-10 text-xl leading-relaxed transition-colors duration-500">
                جرب البحث بكلمات مختلفة أو استكشف أقسامنا المتنوعة لاكتشاف كتب جديدة
              </p>
              
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('الكل');
                }}
                className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-2xl text-xl font-semibold transition-all duration-500 shadow-xl hover:shadow-orange-500/30 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6" />
                  <span>عودة إلى المكتبة</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Seamless continuation to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b dark:from-transparent dark:via-gray-900/50 dark:to-gray-900 from-transparent via-[#f7f9fb]/50 to-[#f7f9fb] pointer-events-none transition-all duration-500"></div>

      {/* Enhanced Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
          }
          
          @keyframes rotate-y-12 {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(12deg); }
          }
          
          @keyframes pulse-glow-blue {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(30, 64, 175, 0.1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(30, 64, 175, 0.2);
            }
          }
          
          @keyframes pulse-glow-sky {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(14, 165, 233, 0.1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(14, 165, 233, 0.2);
            }
          }
          
          @keyframes pulse-glow-green {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(34, 197, 94, 0.2);
            }
          }
          
          .animate-pulse-glow-blue {
            animation: pulse-glow-blue 2s ease-in-out infinite;
          }
          
          .animate-pulse-glow-sky {
            animation: pulse-glow-sky 2s ease-in-out infinite;
          }
          
          .animate-pulse-glow-green {
            animation: pulse-glow-green 2s ease-in-out infinite;
          }
          
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          
          .group:hover .transform {
            transform: perspective(1000px) rotateY(5deg);
          }
          
          /* Enhanced animated effects for offers indicator */
          @keyframes shine-fast {
            0% { 
              transform: translateX(-150%) translateY(-150%) rotate(45deg); 
              opacity: 0;
            }
            20% { 
              opacity: 1; 
            }
            80% { 
              opacity: 1; 
            }
            100% { 
              transform: translateX(150%) translateY(150%) rotate(45deg); 
              opacity: 0;
            }
          }
          
          @keyframes glow {
            0%, 100% { 
              box-shadow: 0 0 8px rgba(59, 130, 246, 0.4), 0 0 12px rgba(59, 130, 246, 0.2);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 16px rgba(59, 130, 246, 0.6), 0 0 24px rgba(59, 130, 246, 0.3);
              transform: scale(1.1);
            }
          }
          
          @keyframes sparkle {
            0%, 100% { 
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
            25% { 
              opacity: 0.7;
              transform: scale(0.8) rotate(90deg);
            }
            50% { 
              opacity: 1;
              transform: scale(1.2) rotate(180deg);
            }
            75% { 
              opacity: 0.7;
              transform: scale(0.9) rotate(270deg);
            }
          }
          
          .animate-shine-fast {
            animation: shine-fast 1.5s ease-in-out infinite;
            animation-delay: 0.3s;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          
          .animate-sparkle {
            animation: sparkle 2.5s ease-in-out infinite;
            animation-delay: 0.8s;
          }
          .group:hover img {
            filter: brightness(1.1) contrast(1.05);
          }
          
          /* Smooth transitions for all interactive elements */
          button, .group, input {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Enhanced shadow effects */
          .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }
        `
      }} />
    </section>
  );
};

export default Books;
