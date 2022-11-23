import Button from "../re-usables/button";

const FAQ = () => {
  return (
    <div className="bg-neutral-700 text-center mx-auto p-5 pb-14 lg:px-32 xl:px-72">
      <h2 className="h2-jon">FAQ</h2>
      <div className="flex flex-col text-white text-left mt-12 mx-auto">
        <h3 className="h3-jon bg-black mb-2 rounded-md p-4">
          Can I build muscles using only bodyweight exercises?
        </h3>
        <h3 className="h3-jon bg-black mb-2 rounded-md p-4">
          How long does it take to see results from bodyweight training?
        </h3>
        <h3 className="h3-jon bg-black mb-2 rounded-md p-4">
          What do you recommend for beginners?
        </h3>
      </div>
    </div>
  );
};

export default FAQ;
