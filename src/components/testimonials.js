const Testimonials = () => {
  return (
    <div className="bg-neutral-700 text-center mx-auto p-5 px-20 lg:px-36">
      <h2 className="h2-jon">Testimonials</h2>
      <div className="flex flex-col text-white justify-evenly mt-12">
        <div className="mb-6">
          <h3 className="h3-jon">Angelina Baker</h3>
          <p className="bg-black p-5 rounded-lg mt-1">
            “I started training Calisthenics during the lockdown. In January,
            the New Year’s Transformation Challenge was announced. I thought,
            nice, I will join, extra motivation to workout“
          </p>
        </div>
        <div className="mb-6">
          <h3 className="h3-jon">Benjamin Dane</h3>
          <p className="bg-black p-5 rounded-lg mt-1">
            “This is the result of my 12- week Transformation Challenge. I made
            a lot of progress and became stronger“
          </p>
        </div>
        <div className="mb-6">
          <h3 className="h3-jon">Malina Suarez</h3>
          <p className="bg-black p-5 rounded-lg mt-1">
            “I have always thought I was pretty fit and healthy but then I
            suffered from depression and unhappiness. Eating a bit more was one
            of my comforts as you can see from my stomach (which is where it
            always goes)”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
