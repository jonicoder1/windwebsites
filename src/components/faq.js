import React, { useState } from "react";

const FAQ = () => {
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);
  const [expand3, setExpand3] = useState(false);

  function Expand(id) {
    console.log("Expand");
    if (id === "1") {
      console.log("expand1");
      setExpand1(!expand1);
    }
    if (id === "2") {
      setExpand2(!expand2);
    }
    if (id === "3") {
      setExpand3(!expand3);
    }
  }

  return (
    <div
      className="bg-neutral-700 text-center mx-auto p-5 pb-14 lg:px-32 xl:px-72"
      id="faq"
    >
      <h2 className="h2-jon">FAQ</h2>
      <div className="flex flex-col text-white text-left mt-12 mx-auto">
        {data.map((item, id) => (
          <div key={item.id} onClick={() => Expand(item.id.toString())}>
            {console.log(id)}
            <div className="flex justify-between h3-jon bg-black mb-2 rounded-md p-4">
              <h3>{item.h3}</h3>
              <span>v</span>
            </div>
            <div
              className={
                expand1 || expand2 || expand3
                  ? "display p-4 bg-neutral-900 rounded-md mb-2"
                  : "hidden"
              }
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const data = [
  {
    id: 1,
    h3: "Can I build muscles using only bodyweight exercises?",
    description:
      "Yes, you can. Bodyweight exercises are simply exercises that use your own bodyweight as resistance. This includes gymnastics and calisthenics moves like handstand push-ups, pull-ups and lunges – all of which can be done using just your body weight as a means of fitness. The great thing is that they don’t require any equipment, meaning they’re much more convenient to do than traditional weight training. They make for great workouts at home or when travelling – even on the go!",
  },
  {
    id: 2,
    h3: "How long does it take to see results from bodyweight training?",
    description:
      "The results from bodyweight training can be seen after just a few months of regularly working out. The training is generally low in impact and low intensity, but that doesn’t mean it’s lacking in benefits. Bodyweight exercises are common in many exercise programs used by athletes and coaches to help improve strength and power.",
  },
  {
    id: 3,
    h3: "What do you recommend for beginners?",
    description:
      "Calisthenics for beginners is a great way to get in shape, especially if you don't have access to expensive equipment. Calisthenics is a form of exercise that focuses on the body's ability to work against gravity. It doesn't require any special equipment and can be done anywhere at any time with no equipment at all.",
  },
];
