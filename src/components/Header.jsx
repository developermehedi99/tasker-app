import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">
            <img
              className="h-[65px] w-full"
              src={logo}
              alt="Lws"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
