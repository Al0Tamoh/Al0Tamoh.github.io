import { useState, useEffect } from 'react';
import { Tag, ShoppingCart, Search, Filter, Star, X, Percent, BookOpen, Bookmark, Award, Sparkles, Plus, Minus, MessageCircle, Send, Trash2, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';

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

interface CartItem extends Book {
  quantity: number;
}

const Books = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [shuffledBooks, setShuffledBooks] = useState<Book[]>([]);
  const [expandedBooks, setExpandedBooks] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Initialize shuffled books only once
  useEffect(() => {
    setShuffledBooks(shuffleArray([...books]));
  }, []);

  const books: Book[] = [
    {
      id: 1,
      title: "القضية الشائكة 511",
      category: "تحقيق و جريمة",
      description: "هذا الكتاب يستكشف جذور الحب والكراهية وتأثيرهما على الإنسان، ويتناول تطور المشاعر من الطفولة حتى الكهولة، بالإضافة إلى علاقة الحب بالرغبة الجنسية والأمومة.",
      price: 160,
      image: "/book-images/hard_cases.jpeg",
      author: "دار الطموح"
    },
    {
      id: 2,
      title: "دليل استخدام الإنسان",
      category: "فلسفة و علم نفس",
      description: "هو عمل أدبي مميز يتناول قضايا نفسية واجتماعية عميقة، مع تركيز خاص على العلاقات العاطفية والصراعات الداخلية التي يعيشها الإنسان . يهدف الكتاب إلى مساعدة القراء على فهم أنفسهم بشكل أفضل، وتحسين علاقاتهم مع الآخرين، من خلال طرح مشاكل نفسية وأزمات عاطفية يحتاج كل شخص إلى معرفتها.",
      price: 450,
      image: "/book-images/human_guide.jpeg",
      author: "دار الطموح"
    },
    {
      id: 3,
      title: "فلسفة اللذة والألم",
      category: "فلسفة وعلم نفس",
      description: "وتُنْسب بدايات هذا المذهب إلى الفيلسوف اليوناني «أبيقور» الذي كان يقول بأن اللذة هي غاية الحياة، وأن المعرفة لا تتحقق إلا بالحواس، وقد انشغل «إسماعيل مظهر» بتأليف هذا الكتاب مدة أربع سنوات كاملة، تابع خلالها أصول هذه المدرسة الفلسفية وتطوُّرها عبر التاريخ.",
      price: 352,
      image: "/book-images/joy_and_pain.jpeg",
      author: "دار الطموح"
    },
    {
      id: 4,
      title: "الحب و الكراهية",
      category: "فلسفة وعلم نفس",
      description: "إنه كتابٌ يبحث في أعماق النفس البشرية عن أصل الحب والكراهية وبواعثهما، وتأثيراتهما على حياة الإنسان، ويأخذنا في رحلةٍ متسلسلة عبر عِلم النفس، ومراحل نمو المشاعر من الطفولة إلى الشباب والكهولة، وعِلم الحياة الذي يُعنَى بحفظ الفرد والنوع منذ انقسام الخلية والتناسُل، وعلاقةِ الحب بالرغبة الجنسية والأمومة والحمل والرضاعة",
      price: 160,
      image: "/book-images/love_and_hate.jpeg",
      author: "دار الطموح"
    },
    {
      id: 5,
      title: "ماجدولين",
      category: "أدب",
      description: "تدور قصة حب طاهرة بين الشاب والفتاة، ترك هذا الحب العذري آثاره على أشجار ومقاعد حديقة المنزل، الذي عاش فيه بطل هذه القصة وذلك بعد أن استأجر استيفن غرفة كانت فارغة في الطابق العلوي في منزل والد ماجدولين.",
      price: 320,
      image: "/book-images/magdoline.jpeg",
      author: "دار الطموح"
    },
    {
      id: 6,
      title: "حديث القمر",
      category: "أدب",
      description: "في كتاب حديث القمر يُبدع الأديب مصطفى صادق الرافعي في تجسيد شخص حبيبته اللبنانية في القمر الذي في السماء، فكان الرافعي يتخيل القمر محبوبته التي يتناجى معها ويتبادل معها الأحاديث والوجد والمشاعر.",
      price: 200,
      image: "/book-images/moon_story.jpeg",
      author: "دار الطموح"
    },
    {
      id: 7,
      title: "السحاب الأحمر",
      category: "أدب",
      description: "السحاب الأحمر كتاب يجمع بين جمال الكلمة ورنين العبارة، بلغة الماضي الصافية كالحق المنزهة عن الريب كالواقع، يعبر كاتبه عن مشاعره وأحاسيسه، على صفحات كتابه مرآة نفسه، بقلم يئن في يديه وكلامٍ يَحنّ لديه.",
      price: 240,
      image: "/book-images/red_clouds.jpeg",
      author: "دار الطموح"
    },
    {
      id: 8,
      title: "رسائل الأحزان",
      category: "أدب",
      description: "رسائل الأحزان هو كتاب مُعْجِز في بيانه لفلسفة الحب والجمال، وهو مجموعة من الرسائل التي كان يمدُّ بها الرافعي جسورًا من أفَانِيْنِ وَجْدِه لمحبوبته؛ ليرسلها إلى صديقه محمود أبي رية ليشاطره وَجْده بها، وقد برع الرافعي في تقسيم فلسفة الجمال؛ فقسَّم الجمال في كتابه إلى أقسامٍ ثلاثة: جمال تُحِسُّه، وجمال",
      price: 208,
      image: "/book-images/sorrow_messages.jpeg",
      author: "د. خالد المتحدث"
    },
    {
      id: 9,
      title: "دليلك للنجاح في حياتك الشخصية",
      category: "إصدارات دار الطموح",
      description: "هل تشعر أنك غير قادر على تحقيق أهدافك؟ هل تشعر أنك غير قادر على التأثير على العالم من حولك؟ إذا كان الأمر كذلك، فأنت لست وحدك. كثير من الناس يشعرون بنفس الشعور -- لكن الخبر السار هو أن هناك طريقة لتغيير ذلك. يمكنك أن تصبح شخصية ناجحة.",
      price: 280,
      image: "/book-images/succ_pers.jpeg",
      author: "د. مريم العاطفة"
    },
    {
      id: 10,
      title: "الأمير",
      category: "مقالات أدبية",
      description: "يتناول الكتاب الصفات التي يجب أن يتحلى بها الحاكم، والطرق والوسائل التي يمكن أن يلجأ إليها لاستغلال المواطنين والبقاء في الحكم، والانتصار على الأعداء، كما يتطرق إلى مفاهيم الحرب والسلام وأهمية وحدة البلاد، وينتقد الكنيسة. ينصح مكيافيلي الأمراء بالنظر إلى الأشياء والحقائق كما هي في الواقع وليس كما ينبغي أن تكون.",
      price: 256,
      image: "/book-images/the_prince.jpeg",
      author: "عمر الريادي"
    },
    {
      id: 11,
      title: "بحر المحابر",
      category: "مقالات أدبية",
      description: "كتاب يطل على بعض من خبايا البشر وقليل من أفكارهم",
      price: 240,
      image: "/book-images/sea_of_inks.jpeg",
      author: "عمر الريادي"
    },
    {
      id: 12,
      title: "أوراق الورد",
      category: "أدب",
      description: "على أوراق الورد ينثرُ الرافعيُ في كتابه قطرات من ندى العشق الممزوج بعطر جمالِ محبوبتيه في صورة طائفة من الخواطر المنثورة في فلسفة الحب والجمال التي أنشأها؛ ليصف حالةً من حالاته ويثبت تاريخًا جديدًا في سطور حياته عنوانه رسائل من محبٍ إلى محبوبتيه، وقد أشار الرافعي أنه لم يُفْرِد هذه",
      price: 280,
      image: "/book-images/rose_leaves.jpeg",
      author: "عمر الريادي"
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

  const filteredBooks = shuffledBooks;

  // Get all books to display
  const displayedBooks = filteredBooks;

  // Cart Functions
  const addToCart = (book: Book) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (bookId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(bookId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === bookId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const generateOrderMessage = () => {
    let message = "السلام عليكم، أرغب في طلب الكتب التالية:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title}\n`;
      message += `   - المؤلف: ${item.author || 'غير محدد'}\n`;
      message += `   - السعر: ${item.price} ₺\n`;
      message += `   - الكمية: ${item.quantity}\n`;
      message += `   - المجموع: ${item.price * item.quantity} ₺\n\n`;
    });
    
    message += `إجمالي الطلب: ${getTotalPrice()} ₺\n`;
    message += `عدد الكتب: ${getTotalItems()} كتاب\n\n`;
    message += "أرجو تأكيد الطلب وإعلامي بتفاصيل التوصيل والدفع.";
    
    return message;
  };

  const sendToWhatsApp = () => {
    const message = generateOrderMessage();
    window.open(`https://wa.me/905376791661?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendToTelegram = () => {
    const message = generateOrderMessage();
    window.open(`https://t.me/tamouh_book_store=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleDescription = (bookId: number) => {
    setExpandedBooks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(bookId)) {
        newSet.delete(bookId);
      } else {
        newSet.add(bookId);
      }
      return newSet;
    });
  };

  const isDescriptionExpanded = (bookId: number) => {
    return expandedBooks.has(bookId);
  };

  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength);
  };

  return (
    <section id="books" className="relative py-20 min-h-screen overflow-hidden bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-gray-900 from-[#f4f7fb] via-[#f7f9fb] to-[#ffffff] transition-all duration-500">
      
      {/* Animated Background Grid */}
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

      {/* Cart Button - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110"
        >
          <ShoppingBag className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
              {getTotalItems()}
            </div>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-96 bg-gradient-to-b dark:from-slate-800 dark:via-slate-900 dark:to-gray-900 from-[#f4f7fb] via-[#f7f9fb] to-[#ffffff] shadow-2xl transform transition-transform duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Cart Header */}
          <div className="flex items-center justify-between p-6 border-b dark:border-slate-700/50 border-orange-200/30 bg-gradient-to-r dark:from-slate-800/80 dark:to-slate-700/80 from-white/90 to-orange-50/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold dark:text-white text-[#1d2d50] flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              سلة التسوق
            </h3>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-orange-100 dark:hover:bg-slate-700/50 rounded-full transition-colors duration-300 hover:scale-110"
            >
              <X className="h-5 w-5 dark:text-slate-400 text-[#6c7a89] hover:text-orange-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-1">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br dark:from-slate-700/50 dark:to-slate-800/50 from-orange-100/80 to-orange-200/60 rounded-3xl flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 dark:text-slate-500 text-orange-400" />
                </div>
                <p className="dark:text-slate-300 text-[#1d2d50] text-lg font-semibold mb-2">سلة التسوق فارغة</p>
                <p className="dark:text-slate-500 text-[#6c7a89] text-sm">أضف بعض الكتب لتبدأ التسوق</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="group relative">
                    {/* Cart Item Card */}
                    <div className="flex items-center gap-4 p-4 dark:bg-slate-800/60 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-slate-700/30 border-orange-200/30">
                      {/* Book Image */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/200x300/f97316/ffffff?text=${encodeURIComponent(item.title)}`;
                          }}
                        />
                        {/* Orange accent */}
                        <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                      </div>
                      
                      {/* Book Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold dark:text-white text-[#1d2d50] text-sm line-clamp-2 leading-relaxed mb-1">
                          {item.title}
                        </h4>
                        {item.author && (
                          <p className="dark:text-slate-400 text-[#6c7a89] text-xs mb-2 font-medium">
                            {item.author}
                          </p>
                        )}
                        
                        {/* Price Display */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">
                            {item.price} ₺
                          </span>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1 bg-gradient-to-r dark:from-slate-700/50 dark:to-slate-600/50 from-orange-50/80 to-orange-100/60 rounded-xl p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 hover:bg-orange-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 group"
                            >
                              <Minus className="h-3 w-3 dark:text-slate-300 text-[#6c7a89] group-hover:text-orange-600" />
                            </button>
                            <span className="px-3 py-1 dark:bg-slate-800 bg-white rounded-lg text-sm font-semibold dark:text-white text-[#1d2d50] min-w-[2.5rem] text-center shadow-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 hover:bg-orange-200 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 group"
                            >
                              <Plus className="h-3 w-3 dark:text-slate-300 text-[#6c7a89] group-hover:text-orange-600" />
                            </button>
                          </div>
                          
                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1.5 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg text-red-500 hover:text-red-600 transition-all duration-200 hover:scale-110"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Subtotal */}
                        <div className="mt-2 text-right">
                          <span className="text-xs dark:text-slate-400 text-[#6c7a89]">المجموع: </span>
                          <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                            {item.price * item.quantity} ₺
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="border-t dark:border-slate-700/50 border-orange-200/30 p-6 space-y-4 bg-gradient-to-r dark:from-slate-800/80 dark:to-slate-700/80 from-white/95 to-orange-50/60 backdrop-blur-sm">
              {/* Total Section */}
              <div className="bg-gradient-to-r dark:from-slate-700/60 dark:to-slate-600/60 from-orange-50/80 to-orange-100/60 rounded-2xl p-4 border dark:border-slate-600/30 border-orange-200/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="dark:text-slate-300 text-[#6c7a89] font-medium">عدد الكتب:</span>
                  <span className="dark:text-white text-[#1d2d50] font-bold">{getTotalItems()} كتاب</span>
                </div>
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="dark:text-white text-[#1d2d50]">المجموع:</span>
                  <span className="text-orange-600 dark:text-orange-400 bg-gradient-to-r from-orange-500/10 to-orange-600/10 px-4 py-2 rounded-xl">
                    {getTotalPrice()} ₺
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={sendToWhatsApp}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    واتساب
                  </button>
                  <button
                    onClick={sendToTelegram}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    تيليجرام
                  </button>
                </div>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gradient-to-r dark:from-slate-600/80 dark:to-slate-700/80 from-orange-200/60 to-orange-300/60 hover:from-orange-300/80 hover:to-orange-400/80 dark:hover:from-slate-600 dark:hover:to-slate-700 dark:text-slate-300 text-[#1d2d50] py-3 px-4 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Trash2 className="h-4 w-4" />
                  إفراغ السلة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overlay when cart is open */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-3 rounded-full dark:bg-slate-800/40 bg-white/60 backdrop-blur-sm dark:border-orange-400/20 border-orange-400/30 mb-6 gap-2 transition-all duration-500">
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse flex-shrink-0" />
            <span className="text-base dark:text-orange-200 text-orange-600 transition-colors duration-500">إصدارات حصرية ومتميزة</span>
          </div>

          {/* Title */}
          <h2 className="text-5xl md:text-6xl font-bold dark:text-white text-[#1d2d50] mb-6 transition-colors duration-500">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">دار الطموح</span> للنشر
          </h2>

          {/* Subtitle */}
          <p className="text-xl dark:text-slate-300 text-[#6c7a89] max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            مجموعة متنوعة من الإصدارات الحصرية والمتميزة من دار الطموح للنشر والتوزيع
          </p>
        </div>

        {/* Books Library Display */}
        <div className={`transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        {/* Library Shelves Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
            {displayedBooks.map((book, index) => (
              <div 
                key={book.id} 
                className={`group relative transition-all duration-500 hover:scale-105 ${
                  displayedBooks.length === 10 && index === 8 ? 'md:col-start-1 lg:col-start-2 xl:col-start-2' : 
                  displayedBooks.length === 10 && index === 9 ? 'md:col-start-2 lg:col-start-3 xl:col-start-3' : ''
                }`}
              >
                {/* Book Card */}
                <div className="relative dark:bg-slate-800/60 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
                  
                {/* Book Spine */}
                <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-green-400 to-green-600 opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                {/* Book Cover Area */}
                <div className="relative h-96 dark:bg-slate-700/20 bg-green-50/30 p-4 flex items-center justify-center transition-colors duration-500">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="h-80 w-56 object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/200x300/f97316/ffffff?text=${encodeURIComponent(book.title)}`;
                      }}
                    />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-bold shadow-lg text-white bg-orange-500">
                      {book.price} ₺
                    </div>

                    {/* Dar Al-Tumooh Badge */}
                    <div className="absolute bottom-4 left-4 bg-orange-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                      دار الطموح
                    </div>
                  </div>
                  
                  {/* Book Information */}
                  <div className="p-6 space-y-4">
                    {/* Category */}
                    <span className="inline-flex items-center gap-2 text-sm backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-500 text-orange-400 dark:bg-orange-400/10 bg-orange-400/15">
                      <Star className="h-4 w-4" />
                      {book.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold dark:text-white text-[#1d2d50] transition-colors duration-500 line-clamp-2 leading-relaxed">
                      {book.title}
                    </h3>
                    
                    {/* Author */}
                    {book.author && (
                      <p className="dark:text-slate-400 text-[#6c7a89] text-sm transition-colors duration-500 font-medium">
                        بقلم: {book.author}
                      </p>
                    )}
                    
                    {/* Description with Read More */}
                    <div className="space-y-2">
                      <p className="dark:text-slate-300 text-[#6c7a89] text-sm transition-colors duration-500 leading-relaxed">
                        {isDescriptionExpanded(book.id) 
                          ? book.description 
                          : `${truncateText(book.description, 100)}${book.description.length > 100 ? '...' : ''}`
                        }
                      </p>
                      
                      {book.description.length > 100 && (
                        <button
                          onClick={() => toggleDescription(book.id)}
                          className="flex items-center gap-1 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 text-sm font-medium transition-colors duration-300 hover:scale-105"
                        >
                          {isDescriptionExpanded(book.id) ? (
                            <>
                              <span>اقرأ أقل</span>
                              <ChevronUp className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              <span>اقرأ المزيد</span>
                              <ChevronDown className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={() => addToCart(book)}
                      className="w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:scale-105"
                    >
                      <Plus className="h-5 w-5" />
                      أضف إلى السلة
                    </button>
                  </div>

                  {/* Book Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Count Info */}
        {filteredBooks.length > 0 && (
          <div className="text-center mt-10">
            <p className="dark:text-slate-400 text-[#6c7a89] text-base transition-colors duration-500 leading-relaxed">
              عرض {displayedBooks.length} كتاب من إصدارات دار الطموح
            </p>
          </div>
        )}

        {/* Dar Al-Tumooh Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl">
            <Star className="h-7 w-7 text-orange-400 animate-pulse" />
            <span className="text-orange-400 font-bold text-xl">إصدارات حصرية من دار الطموح للنشر والتوزيع</span>
            <Star className="h-7 w-7 text-orange-400 animate-pulse" />
          </div>
        </div>

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-24">
            <div className="max-w-lg mx-auto">
              {/* Empty Library Illustration */}
              <div className="w-28 h-28 dark:bg-slate-700/50 bg-orange-100/80 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <BookOpen className="h-14 w-14 dark:text-slate-500 text-[#6c7a89] transition-colors duration-500" />
              </div>
              
              <h3 className="dark:text-slate-300 text-[#6c7a89] text-3xl font-bold mb-6 transition-colors duration-500">
                مجموعة الكتب غير متوفرة حالياً
              </h3>
              <p className="dark:text-slate-500 text-[#6c7a89] mb-10 text-xl leading-relaxed transition-colors duration-500">
                استكشف مجموعتنا المتنوعة من إصدارات دار الطموح قريباً
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Seamless continuation to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b dark:from-transparent dark:via-gray-900/50 dark:to-gray-900 from-transparent via-[#f7f9fb]/50 to-[#f7f9fb] pointer-events-none transition-all duration-500"></div>

      {/* Custom Styles */}
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


