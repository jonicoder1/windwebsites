import logo from "../images/wind_websites_light.png";
import Button from "../re-usables/button";

const Header = () => {
  return (
    <>
      <div className="text-center bg-neutral-800 text-white p-5">
        <div className="m-auto">
          <h2 className="h2-jon">Sign-Up for Our Newsletter</h2>
          <h3>
            Get Calisthenics Content, Offers, and News Straight to Your Inbox
          </h3>
          <input className="rounded-md mt-4" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
