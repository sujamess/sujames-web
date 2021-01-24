import Head from 'next/head'
import { useRouter } from 'next/router';
import APP_CONFIG from 'src/shared/config/app.config';

const TITLE = `Sujames's Empire 🔥`
const DESCRIPTION = `Eager to learn · Try new things`


const SEO: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{TITLE}</title>

        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />

        <script data-ad-client={APP_CONFIG.GOOGLE.ADSENSE.CLIENT_ID} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

        <link rel="icon" href="/icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={router.asPath} />
        <meta property="twitter:title" content={TITLE} />
        <meta property="twitter:description" content={DESCRIPTION} />

        {children}
      </Head>
    </>
  );
};

export default SEO;
