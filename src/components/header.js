import logo from "../images/wind_websites_light.png";
import Button from "../re-usables/button";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-around bg-black text-white">
        <div>
          <img className="w-32 mx-auto" src={logo} alt="wind websiteslogo" />
        </div>
        <div className="my-auto">
          <ul className="flex flex-wrap justify-around lg:justify-center">
            <li className="p-4">
              <a href="#">Home</a>
            </li>
            <li className="p-4">
              <a href="#about">About</a>
            </li>
            <li className="p-4">
              <a href="#services">Services</a>
            </li>
            <li className="p-4">
              <a href="#shop">Shop</a>
            </li>
            <li className="p-4">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-teal-500 text-white">
        <div className="m-auto py-20">
          <h1 className="h1-jon">Calisthenics Website</h1>
          <h2 className="text-2xl">A Site For You</h2>
          <Button>Contact</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
