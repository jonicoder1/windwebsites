import logo from "../images/wind_websites_light.png";
import Button from "../re-usables/button";

const Head = () => {
  return (
    <>
      <div className="flex justify-around bg-black text-white">
        <div>
          <img className="w-32" src={logo} alt="wind websites logo" />
        </div>
        <div className="my-auto ">
          <ul className="flex">
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
      <div className="text-center bg-teal-500 p-72 text-white">
        <h1 className="text-4xl font-bold">Calisthenics Website</h1>
        <h2 className="text-2xl">A Site For You</h2>
        <Button>Contact</Button>
      </div>
    </>
  );
};

export default Head;
