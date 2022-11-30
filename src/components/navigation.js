import logo from "../images/wind_websites_light.png";
import { NavLink } from "react-router-dom";

const Head = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around bg-black text-white">
      <div>
        <img className="w-32 mx-auto" src={logo} alt="wind websiteslogo" />
      </div>
      <div className="my-auto">
        <div className="flex flex-wrap justify-around lg:justify-center">
          <NavLink className="p-4" activeClassName="is-active" to="/" exact>
            Home
          </NavLink>
          <NavLink
            className="p-4"
            activeClassName="is-active"
            to="/services"
            exact
          >
            Services
          </NavLink>
          <NavLink className="p-4" activeClassName="is-active" to="/shop" exact>
            Shop
          </NavLink>
          <div className="p-4">
            <a href="mailto: windowlightmedia@gmail.com">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
