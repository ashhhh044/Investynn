import InvestIllustration from '../assets/Invest_Illustration.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sec4 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const cards = [
    {
      img: InvestIllustration,
      title: "What is Investynn?",
      heading: "Learn the basics",
      desc: "Investynn makes investing simple, transparent, and accessible for everyone.",
    },
    {
      img: InvestIllustration,
      title: "Why choose us?",
      heading: "Our advantages",
      desc: "We provide expert insights and easy-to-use tools for smarter investing.",
    },
    {
      img: InvestIllustration,
      title: "How to start?",
      heading: "Begin your journey",
      desc: "Sign up, explore opportunities, and begin your investment journey today.",
    },
    {
      img: InvestIllustration,
      title: "Secure & Reliable",
      heading: "Safety first",
      desc: "Your data and investments are safe with industry-leading security measures.",
    },
    {
      img: InvestIllustration,
      title: "Accessible to All",
      heading: "For everyone",
      desc: "Our platform is built for beginners and experts alike.",
    },
  ];

  return (
    <section className="bg-white mx-auto mt-20 p-4 mb-6">
      <h1 className="poppins text-6xl font-extrabold text-[var(--sec4-title)] text-center p-6">
        Getting Started Guide
      </h1>

      <Slider {...settings} className="mt-8 py-4 mb-4">
        {cards.map((c, i) => (
          <div key={i} className="p-4">
            <div
              className={`flex flex-col shadow-lg rounded-xl h-[28rem] w-3xs transform transition-all duration-300 ${
                i % 2 === 1 ? "translate-y-8" : "translate-y-0"
              }`}
            >
              <div className="flex flex-col rounded-xl w-3xs h-full bg-white">
                <div className="rounded-t-xl overflow-hidden flex-shrink-0 h-56 flex items-center justify-center">
                  <img src={c.img} alt="Card Visual" className="w-full h-full object-contain" />
                </div>
                <div className="px-2 mb-2 flex flex-col flex-1">
                  <p className="text-[var(--sec4-gray)] font-semibold text-xl mt-4">
                    {c.title}
                  </p>
                  <p className="text-base font-semibold text-[var(--sec4-gray-sec)]">
                    {c.heading}
                  </p>
                  <p className="text-[var(--sec4-gray-sec)] mt-2">{c.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sec4;