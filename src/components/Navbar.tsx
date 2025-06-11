'use client';

import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="p-4 bg-gray-100 flex gap-4">
      <Link href={pathname} locale="en">
        English
      </Link>
      <Link href={pathname} locale="ta">
        தமிழ்
      </Link>
    </nav>
  );
}
