'use client';

import { useState } from 'react';
// import { usePathname } from 'next-intl/client';
import { usePathname } from 'next/navigation';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { ChevronDown, Globe } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600"> Lanugage Convertion</h1>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          <Globe className="w-5 h-5" />
          {languages.find((l) => l.code === currentLocale)?.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <ul className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10 animate-fadeIn">
            {languages
              .filter((lang) => lang.code !== currentLocale)
              .map((lang) => (
                <li key={lang.code}>
                  <Link
                    href={pathname}
                    locale={lang.code}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
