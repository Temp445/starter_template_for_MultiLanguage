import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {

  extend: {
  animation: {
    fadeIn: 'fadeIn 0.2s ease-out'
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(-5px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' }
    }
  }
}

};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);