import SEO from "src/components/SEO";
import { FACEBOOK_USERNAME, GITHUB_USERNAME, INSTAGRAM_USERNAME, LINKEDIN_USERNAME, TWITTER_USERNAME } from "src/shared/constants/info.constant";

const IndexPage = () => {
  return (
    <>
      <SEO />
      <div className="h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div>
            <div className="mb-8">
              <p className="text-gray-600 text-4xl sm:text-5xl lg:text-7xl">Hi,</p>
              <p className="text-gray-600 text-4xl sm:text-5xl lg:text-7xl">I'm Surarerk</p>
              <p className="text-gray-500 text-xl sm:text-2xl lg:text-4xl">Software Engineer</p>
            </div>

            <div>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-3xl">Based in Thailand</p>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-3xl">I'm a software engineer who eager to learn and</p>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-3xl">try new things</p>
            </div>
          </div>

          <div>
            <div className="mb-2 lg:mb-8">
              <p className="text-gray-600 text-xl sm:text-2xl lg:text-4xl">Want to know me more?</p>
            </div>
            <div>
              <p className="text-gray-500 text-lg sm:text-xl lg:text-3xl mb-4">You can follow me on</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xl:gap-3">
                <a
                  className="inline-flex items-center bg-facebook border-0 py-3 px-5 hover:bg-facebook-dark rounded-lg justify-center"
                  href={`https://facebook.com/${FACEBOOK_USERNAME}`}
                >
                  <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  <p className="text-white">Facebook</p>
                </a>
                <a
                  className="inline-flex items-center bg-twitter border-0 py-3 px-5 hover:bg-twitter-dark rounded-lg justify-center"
                  href={`https://twitter.com/${TWITTER_USERNAME}`}
                >
                  <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  <p className="text-white">Twitter</p>
                </a>
                <a
                  className="inline-flex bg-gradient-to-tr from-instagram-1 via-instagram-2 via-instagram-3 via-instagram-4 to-instagram-5 hover:from-instagram-1-dark hover:via-instagram-2-dark hover:via-instagram-3-dark hover:via-instagram-4-dark hover:to-instagram-5-dark items-center border-0 py-3 px-5 rounded-lg justify-center"
                  href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
                >
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                  <p className="text-white">Instagram</p>
                </a>
                <a
                  className="inline-flex items-center bg-linkedin border-0 py-3 px-5 hover:bg-linkedin-dark rounded-lg justify-center"
                  href={`https://linkedin.com/in/${LINKEDIN_USERNAME}`}
                >
                  <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" stroke="none" />
                  </svg>
                  <p className="text-white">LinkedIn</p>
                </a>
                <a
                  className="inline-flex items-center bg-gray-800 border-0 py-3 px-5 hover:bg-gray-900 rounded-lg justify-center"
                  href={`https://github.com/${GITHUB_USERNAME}`}
                >
                  <svg fill="white" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <p className="text-white">GitHub</p>
                </a>
                <a
                  className="inline-flex items-center bg-cyan-600 border-0 py-3 px-5 hover:bg-cyan-700 rounded-lg justify-center hover:text-blue-200"
                  href="https://blog.sujames.com"
                >
                  <svg fill="white" width="24" height="24" viewBox="0 0 24 24" className="w-5 h-5 mr-2">
                    <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z"/>
                  </svg>
                  <p className="text-white">My Blog</p>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
