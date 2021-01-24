const Navbar = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center">
      {/* <Link href="/">
        <a className="text-gray-600 hover:text-blue-600 text-lg sm:text-xl lg:text-3xl">
          <span>{LOGO_TEXT}</span>
        </a>
      </Link> */}
      
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-blue-600" href="https://blog.sujames.com">
          <p className="text-lg">Blog</p>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
