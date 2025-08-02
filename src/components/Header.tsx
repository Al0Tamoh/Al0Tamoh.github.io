import React from 'react';
import { Phone, Home, Book, Users, Mail, ChevronDown, Truck, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = React.useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // تحديد ما إذا كانت الصفحة قد تم تمريرها
      setIsScrolled(currentScrollY > 50);
      
      // تحديد اتجاه التمرير
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Toggle Dark/Light Mode and apply to document
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a'; // slate-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // slate-50
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/905376791661?text=السلام عليكم، أرغب في الاستفسار عن الكتب المتاحة', '_blank');
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: <Home className="h-4 w-4" /> },
    { id: 'books', label: 'الكتب', icon: <Book className="h-4 w-4" /> },
    { id: 'delivery', label: 'خدماتنا', icon: <Truck className="h-4 w-4" /> },
    { id: 'about', label: 'من نحن', icon: <Users className="h-4 w-4" /> },
    { id: 'contact', label: 'تواصل معنا', icon: <Mail className="h-4 w-4" /> }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-white/85 backdrop-blur-sm shadow-lg border-b border-gray-200/15' 
            : 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/20'
          : isDarkMode
            ? 'bg-white/75 backdrop-blur-sm shadow-sm border-b border-gray-200/10'
            : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200/15'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo with clean image display */}
          <div className="flex items-center space-x-3 space-x-reverse group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className={`flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'w-10 h-10' : 'w-14 h-14'
            }`}>
              <img 
                src="logos/logo14.png" 
                alt="مكتبة الطموح" 
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <span className={`font-bold transition-all duration-300 ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              } ${isDarkMode ? 'text-slate-800' : 'text-slate-800'}`}>
                مكتبة <span className="text-orange-600">الطموح</span>
              </span>
              <div className={`font-medium -mt-1 transition-all duration-300 ${
                isScrolled ? 'text-xs opacity-70' : 'text-xs'
              } ${isDarkMode ? 'text-slate-500' : 'text-slate-600'}`}>كتب . معرفة . طموح</div>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDarkMode 
                ? 'bg-slate-100/10 hover:bg-slate-100/20 text-slate-700 hover:text-orange-600' 
                : 'bg-slate-800/10 hover:bg-slate-800/20 text-slate-600 hover:text-orange-600'
            }`}
            title={isDarkMode ? 'التبديل إلى الوضع المضيء' : 'التبديل إلى الوضع المظلم'}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10 space-x-reverse">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative px-4 py-2 font-medium transition-all duration-300 flex items-center space-x-2 space-x-reverse ${
                  activeSection === item.id 
                    ? 'text-orange-600' 
                    : isDarkMode 
                      ? 'text-slate-700 hover:text-orange-500'
                      : 'text-slate-700 hover:text-orange-500'
                } ${isScrolled ? 'text-sm' : 'text-base'}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode 
                ? 'text-slate-700 hover:bg-gray-100/50'
                : 'text-slate-700 hover:bg-gray-100/50'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* CTA Button */}
          <button 
            onClick={openWhatsApp}
            className={`hidden sm:flex group relative bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center space-x-2 space-x-reverse font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-green-500/20 ${
              isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
            }`}
          >
            <Phone className="h-4 w-4" />
            <span>طلب كتاب</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden backdrop-blur-sm border-t py-4 px-6 animate-in slide-in-from-top-2 duration-300 ${
            isDarkMode 
              ? 'bg-white/80 border-gray-200/15'
              : 'bg-white/95 border-gray-200/25'
          }`}>
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-orange-50/80 text-orange-600'
                      : isDarkMode
                        ? 'text-slate-700 hover:bg-gray-50/50'
                        : 'text-slate-700 hover:bg-gray-50/70'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              <button 
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 space-x-reverse font-medium transition-all duration-300 shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>طلب كتاب</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;