'use client';

import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link href={pathname} locale="en" className='text-black'>
        English
      </Link>
      <Link href={pathname} locale="ta" className='text-black'>
        தமிழ்
      </Link>
    </nav>
  );
}
