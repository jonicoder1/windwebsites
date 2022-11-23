import Button from "../re-usables/button";
import image1 from "../images/calisthenics-image1.jpg";
import image2 from "../images/calisthenics-image2.jpg";
import image3 from "../images/calisthenics-image3.jpg";
import image4 from "../images/calisthenics-image4.jpg";

const Gallery = () => {
  return (
    <div className="bg-black text-center p-5">
      <h2 className="h2-jon">Gallery</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 container text-white mt-12 mx-auto xl:px-48">
        <img
          src={image1}
          alt="calisthenics"
          className="rounded-2xl object-cover h-48 w-96 justify-self-center"
        />
        <img
          src={image2}
          alt="calisthenics"
          className="rounded-2xl object-cover h-48 w-96 justify-self-center"
        />
        <img
          src={image3}
          alt="calisthenics"
          className="rounded-2xl object-cover h-48 w-96 justify-self-center"
        />
        <img
          src={image4}
          alt="calisthenics"
          className="rounded-2xl object-cover h-48 w-96 justify-self-center"
        />
      </div>
      <Button>More</Button>
    </div>
  );
};

export default Gallery;
