import Button from "../re-usables/button";
import blogger from "../images/blogger-browsing.jpg";

const Info1 = () => {
  return (
    <div>
      <div className="bg-black text-white py-5 px-20 lg:px-36 xl:px-72">
        <h2 className="h2-jon text-center">Your Calisthenics Site</h2>
        <h3 className="text-2xl text-center">We Can Build It</h3>
        <br />
        <p>
          We believe in supporting calisthenics professionals who are working
          hard to make a living from their practice. That is why we are creating
          a customizable calisthenics website for you to build your reputation
          and help others learn about the benefits of bodyweight workouts.
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
