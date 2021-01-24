const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-10/12">
        {children}
      </div>
    </div>
  );
};

export default Layout;
