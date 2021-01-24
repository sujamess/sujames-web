import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-10/12 py-12">
        {/* <Navbar /> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
