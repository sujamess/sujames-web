import Head from 'next/head'
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import APP_CONFIG from 'src/shared/config/app.config';

interface ISEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO: React.FC<ISEOProps> = ({ title, description, image, children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Sujames's Empire 🔥</title>

        <meta name="title" content="Sujames's Empire 🔥" />
        <meta name="description" content={description || `Sujames's Empire 🔥 eager to learn · try new things`} />

        <script data-ad-client={APP_CONFIG.GOOGLE.ADSENSE.CLIENT_ID} async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

        <link rel="icon" href="/icon.png" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={router.asPath} />
        <meta property="og:title" content="Sujames" />
        <meta property="og:description" content={description} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={router.asPath} />
        <meta property="twitter:title" content="Sujames" />
        <meta property="twitter:description" content={description} />

        <meta property="og:image" content={image} />
        <meta property="twitter:image" content={image} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&display=swap"
        />

        {children}
      </Head>
    </>
  );
};

export default SEO;
