import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { NextIntlProvider } from 'next-intl';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname === '/404') return <Component {...pageProps} />;

  return (
    <>
      <NextSeo
        title='MERET'
        titleTemplate='MERET MARKETPLACE'
        description='MERET MARKETPLACE FOR NFT'
      />
      <NextIntlProvider locale={router.locale} messages={pageProps.messages}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextIntlProvider>
    </>
  );
}
