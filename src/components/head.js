import logo from "../images/wind_websites_light.png";

const Head = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-black text-white">
      <div>
        <img className="w-32 mx-auto" src={logo} alt="wind websiteslogo" />
      </div>
      <div className="my-auto">
        <ul className="flex flex-wrap justify-around lg:justify-center">
          <li className="p-4">
            <a href="/">Home</a>
          </li>
          <li className="p-4">
            <a href="#services">Services</a>
          </li>
          <li className="p-4">
            <a href="#shop">Shop</a>
          </li>
          <li className="p-4">
            <a href="mailto: windowlightmedia@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
