import Button from "../re-usables/button";

const Services = () => {
  return (
    <div className="container bg-black text-center mx-auto p-28">
      <h1>Services</h1>
      <div className="flex text-white justify-evenly">
        <div>
          <h2>Basic</h2>
          <ul>
            <li>responsive website</li>
            <li>8 sections</li>
            <li>1 home page</li>
            <li>1 contact page</li>
            <li>1 basic logo</li>
            <li>photos</li>
          </ul>
        </div>
        <div>
          <h2>Regular</h2>
          <ul>
            <li>responsive website</li>
            <li>8 sections</li>
            <li>1 home page</li>
            <li>1 contact page</li>
            <li>1 basic logo</li>
            <li>photos</li>
            <li>SEO</li>
          </ul>
        </div>
        <div>
          <h2>Advanced</h2>
          <ul>
            <li>responsive website</li>
            <li>8 sections</li>
            <li>1 home page</li>
            <li>1 contact page</li>
            <li>1 basic logo</li>
            <li>photos</li>
            <li>SEO</li>
            <li>payment systems</li>
            <li>custom pages</li>
            <li>shop</li>
          </ul>
        </div>
      </div>
      <Button>Call Us</Button>
    </div>
  );
};

export default Services;
