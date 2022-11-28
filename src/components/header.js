import Button from "../re-usables/button";

const Header = () => {
  return (
    <div className="text-center bg-teal-500 text-white">
      <div className="m-auto py-20">
        <h1 className="h1-jon">Calisthenics Website</h1>
        <h2 className="text-2xl">A Site For You</h2>
        <Button>
          <a href="mailto: windowlightmedia@gmail.com">Contact</a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
