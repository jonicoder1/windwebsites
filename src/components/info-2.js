import Button from "../re-usables/button";
import blogger from "../images/blogger-browsing.jpg";

const Info1 = () => {
  return (
    <div>
      <div className="bg-black text-white py-5 px-20 lg:px-36">
        <h2 className="h2-jon text-center">Your Calisthenics Site</h2>
        <h3 className="text-2xl text-center">We Can Build It</h3>
        <br />
        <p>
          You now need to have your own website to make your business stand-out.
          Our artistic, kind, and caring designers and developers can build your
          calisthenics site that will attract calisthenic enthusiasts. Click the
          link below to learn more
        </p>
        <Button>Learn More</Button>
      </div>
      <div
        className="w-2/4 bg-center bg-cover"
        style={{ backgroundImage: "url(" + blogger + ")" }}
      />
    </div>
  );
};

export default Info1;
