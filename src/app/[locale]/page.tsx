import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Navbar from '@/components/Navbar';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
        <Navbar/>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}