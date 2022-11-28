import Button from "../re-usables/button";
import siteGraphics from "../images/site_graphics.png";

const Advanced = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-black flex-wrap xl:px-72">
      <div className="bg-center bg-cover mx-auto ">
        <img
          src={siteGraphics}
          alt="site graphics"
          className="mx-auto w-48 md:w-80"
        />
      </div>
      <div className="bg-black text-white px-10 py-10 ">
        <h2 className="h2-jon sm:text-center md:text-left">
          Advanced Custom Website
        </h2>
        <h3 className="text-2xl sm:text-center md:text-left">
          Available with Advanced Service
        </h3>
        <br />
        <p>
          Our sites are more customizable than most drag-and-drop websites. We
          build our advanced sites with code which means you don’t have too many
          restrictions as to how much you can customize it. Recommended for
          medium to large sized businesses
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
};

export default Advanced;
