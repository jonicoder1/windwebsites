import Button from "../re-usables/button";
import img1 from "../images/shop/gymnastics_ring.jpg";
import img2 from "../images/shop/parallettes.jpg";
import img3 from "../images/shop/resistance_bands.jpg";

const Shop = () => {
  return (
    <div className="bg-black text-center mx-auto p-5" id="shop">
      <h2 className="h2-jon">Shop</h2>
      <div className="flex flex-col lg:flex-row lg:justify-center text-white mt-12">
        <div className="m-4">
          <img
            src={img1}
            className="mx-auto h-48 w-98 rounded-lg"
            alt="gymnastics rings"
          />
          <h3 className="h3-jon">Gymnastics Rings</h3>
          <p>$49.99</p>
        </div>
        <div className="m-4">
          <img
            src={img2}
            className="mx-auto h-48 w-98 rounded-lg"
            alt="parallettes"
          />
          <h3 className="h3-jon">Parallettes</h3>
          <p>$79.99</p>
        </div>
        <div className="m-4">
          <img
            src={img3}
            className="mx-auto h-48 w-98 rounded-lg"
            alt="resistance bands"
          />
          <h3 className="h3-jon">Resistance Bands</h3>
          <p>$18.99</p>
        </div>
      </div>
      <Button>Shop</Button>
    </div>
  );
};

export default Shop;
