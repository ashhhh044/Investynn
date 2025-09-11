import InvestIllustration from '../assets/Invest_Illustration.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sec4 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,   
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cards = [
    {
      img: InvestIllustration,
      title: "What is Investynn?",
      heading: "Heading",
      desc: "Investynn makes investing simple, transparent, and accessible for everyone.",
    },
    {
      img: InvestIllustration,
      title: "Why choose us?",
      heading: "Heading",
      desc: "We provide expert insights and easy-to-use tools for smarter investing.",
    },
    {
      img: InvestIllustration,
      title: "How to start?",
      heading: "Heading",
      desc: "Sign up, explore opportunities, and begin your investment journey today.",
    },
    {
      img: InvestIllustration,
      title: "Secure & Reliable",
      heading: "Heading",
      desc: "Your data and investments are safe with industry-leading security measures.",
    },
    {
      img: InvestIllustration,
      title: "Accessible to All",
      heading: "Heading",
      desc: "Our platform is built for beginners and experts alike.",
    },
  ];

  return (
    <section className="bg-white mx-auto mt-20 p-4 mb-6 w-3/4">
      <h1 className="text-6xl font-extrabold text-[var(--sec4-title)] text-center">
        Getting Started Guide
      </h1>

      <Slider {...settings} className="mt-8">
        {cards.map((c, i) => (
          <div key={i} className="p-4">
            <div className="flex flex-col shadow-lg rounded-xl h-full w-3xs">
              <div className="rounded-t-xl">
                <img src={c.img} alt="Card_Img" />
              </div>
              <div className="p-4">
                <p className="text-[var(--sec4-gray)] font-semibold text-xl">
                  {c.title}
                </p>
                <p className="text-base font-semibold text-[var(--sec4-gray-sec)]">
                  {c.heading}
                </p>
                <p className="text-[var(--sec4-gray-sec)]">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Sec4;
