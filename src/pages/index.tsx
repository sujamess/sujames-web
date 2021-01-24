const IndexPage = () => {
  return (
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
              <button className="inline-flex items-center bg-facebook border-0 py-3 px-5 hover:bg-facebook-dark rounded-lg justify-center">
                <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
                <p className="text-white">Facebook</p>
              </button>
              <button className="inline-flex items-center bg-twitter border-0 py-3 px-5 hover:bg-twitter-dark rounded-lg justify-center">
                <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
                <p className="text-white">Twitter</p>
              </button>
              <button className="inline-flex bg-gradient-to-tr from-instagram-1 via-instagram-2 via-instagram-3 via-instagram-4 to-instagram-5 hover:from-instagram-1-dark hover:via-instagram-2-dark hover:via-instagram-3-dark hover:via-instagram-4-dark hover:to-instagram-5-dark items-center border-0 py-3 px-5 rounded-lg justify-center">
                <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
                <p className="text-white">Instagram</p>
              </button>
              <button className="inline-flex items-center bg-linkedin border-0 py-3 px-5 hover:bg-linkedin-dark rounded-lg justify-center">
                <svg fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" stroke="none" />
                </svg>
                <p className="text-white">LinkedIn</p>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default IndexPage;
