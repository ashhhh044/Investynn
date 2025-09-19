import card1 from '../assets/cards/card1.png';
import First_Strip from '../assets/cards/First_Strip.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sec4 = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   responsive: [
  //     {
  //       breakpoint: 1280,
  //       settings: {
  //         slidesToShow: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 900,
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // };
  const settings = {
  centerMode: true,
  centerPadding: "40px", // space around center card
  slidesToShow: 3,
  infinite: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 2, centerPadding: "30px" },
    },
    {
      breakpoint: 900,
      settings: { slidesToShow: 1, centerPadding: "20px" },
    },
  ],
};


  const cards = [
    {
      img_f: card1,
      img_s: First_Strip,
      title: "Smart Tips",
      heading: "Avoid Common Mistakes",
      desc: "Description: Discover the do's and don'ts of trading so you can make smarter decisions and minimize risks.",
    },
    {
      img_f: card1,
      img_s: First_Strip,
      title: "Smart Tips",
      heading: "Avoid Common Mistakes",
      desc: "Description: Discover the do's and don'ts of trading so you can make smarter decisions and minimize risks.",
    },
    {
      img_f: card1,
      img_s: First_Strip,
      title: "Smart Tips",
      heading: "Avoid Common Mistakes",
      desc: "Description: Discover the do's and don'ts of trading so you can make smarter decisions and minimize risks.",
    },
    {
      img_f: card1,
      img_s: First_Strip,
      title: "Smart Tips",
      heading: "Avoid Common Mistakes",
      desc: "Description: Discover the do's and don'ts of trading so you can make smarter decisions and minimize risks.",
    },
    
  ];

  return (
    <section className="bg-white mx-auto mt-20 p-4 mb-6">
      <h1 className="poppins text-6xl font-extrabold text-[var(--sec4-title)] text-center p-6">
        Getting Started Guide
      </h1>
      <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-10 pointer-events-none">
    {Array.from({ length: 40 }).map((_, i) => (
      <span
        key={i}
        className="poppins text-[5rem] font-extrabold text-[#d9e6ff] m-4 select-none"
      >
        BLOG
      </span>
    ))}
  </div>

      {/* <div className="relative w-[313px] shadow-2xl rounded-4xl overflow-hidden bg-white">
        <img
          src={First_Strip}
          alt="Decoration"
          className="absolute top-0 left-0 h-full z-0"
        />

        <img
          src={card1}
          alt="Common Mistakes"
          className="w-full h-[200px] object-cover relative z-10 rounded-t-4xl"
        />

        <div className="px-6 py-6 bg-white relative z-10 rounded-tl-4xl">
          <h3 className="poppins font-extrabold text-xl text-[#838383]">Smart Tips</h3>
          <p className="poppins text-lg font-semibold text-[#999999] mt-2 leading-[113%]">
            Avoid Common Mistakes
          </p>
          <p className="poppins text-[#999999] mr-4 leading-tight">
            Description: Discover the do’s and don’ts of trading so you can make
            smarter decisions and minimize risks.
          </p>
        </div>
      </div> */}
      
      <div className="w-full py-2">

        <Slider {...settings} className="py-10 h-auto">
          {cards.map((c, i) => (
            <div key={i} className="px-3"> 
              <div
                className={`relative w-[313px] mx-auto shadow-2xl rounded-4xl overflow-hidden bg-white transform transition-all duration-300 ${
                  i % 2 === 1 ? "translate-y-8" : "translate-y-0"
                }`}
              >
                <img
                  src={c.img_s}
                  alt="Decoration"
                  className="absolute top-0 left-0 h-full z-0"
                />
                <img
                  src={c.img_f}
                  alt={c.title}
                  className="w-full h-[200px] object-cover relative z-10 rounded-t-4xl"
                />
                <div className="px-6 py-6 bg-white relative z-10 rounded-tl-4xl">
                  <h3 className="poppins font-extrabold text-xl text-[#838383]">{c.title}</h3>
                  <p className="poppins text-lg font-semibold text-[#999999] mt-2 leading-[113%]">
                    {c.heading}
                  </p>
                  <p className="poppins text-[#999999] mr-4 leading-tight">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      

    </section>
  );
};

export default Sec4;