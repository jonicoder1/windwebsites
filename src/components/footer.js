import logo from "../images/wind_websites_light.png";
import Button from "../re-usables/button";

const Header = () => {
  return (
    <>
      <div className="text-center bg-neutral-900 text-white">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center p-12">
          <div className="flex flex-col">
            <h3 className="h3-jon">Company</h3>
            <a href="">FAQ</a>
            <a href="">Terms of Condition</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact</a>
          </div>
          <div className="flex flex-col">
            <h3 className="h3-jon">Contact Info</h3>
            <h4 className="font-bold">Address:</h4>
            <a href="">356 Bengham St, California</a>
            <h4 className="font-bold">Phone: </h4>
            <a href="">(707) 356-4533</a>
            <h4 className="font-bold">Email:</h4>
            <a href="">theemail@gmail.com</a>
          </div>
          <div className="flex flex-col">
            <h3 className="h3-jon">Follow</h3>
            <a href="">Twitter</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
          </div>
          <div className="flex flex-col">
            <h3 className="h3-jon">About Us</h3>
            <p>
              We are a calisthenics brand focused on helping people build strong
              and capable body
            </p>
            <a href="">Scroll Up ⬆</a>
          </div>
        </div>
        <p className="p-4">©jonicoder</p>
      </div>
      <div className="p-4 bg-neutral-700 text-white text-center">Home</div>
    </>
  );
};

export default Header;
