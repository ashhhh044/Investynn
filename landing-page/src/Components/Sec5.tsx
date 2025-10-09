import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";

const Sec5 = () => {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do I start trading on NEPSE?",
            answer: "To start trading on NEPSE, you first need a Demat account (to hold your shares electronically) and a trading account with a licensed broker. Once your accounts are active, you can apply for IPOs, buy or sell stocks, and track your investments through your broker's system or platforms like Investynn that make market data, portfolio tracking, and alerts simple to use.",

        },
        {
            question: "What is a Demat account and why is it important?",
            answer: "A Demat account (short for Dematerialized account) is an account that allows investors to hold shares and securities in an electronic form instead of physical certificates. It makes buying, selling, and managing your investments faster, safer, and more convenient. A Demat account is essential for trading in the stock market because it ensures secure ownership of your shares and eliminates risks like theft, loss, or damage of physical certificates.",

        },
        {
            question: "How can Investynn help me as an investor?",
            answer: "Investynn simplifies investing by providing a user-friendly platform where you can research, track, and manage your investments all in one place. We help you make informed decisions by offering market insights, real-time updates, and easy access to stocks, IPOs, mutual funds, and other investment opportunities. Whether you are a beginner or an experienced investor, Investynn empowers you to invest confidently and grow your wealth.",

        },
        {
            question: "What is the difference between IPO, FPO, and Right Shares?",
            answer: "IPO (Initial Public Offering): The first time a company offers its shares to the public to raise capital. This is usually done when a private company wants to become publicly listed. FPO (Follow-on Public Offering): When an already listed company issues additional shares to the public to raise more funds after the IPO.Right Shares: Shares offered to existing shareholders at a discounted price, allowing them to maintain their proportional ownership in the company.",

        },

    ]
  return (
    <>
        <section className="mx-auto px-6 py-12 justify-between w-[95%]">
            <div className="flex flex-row items-center px-10 mt-10 mb-10 mx-auto w-full">
                <div className="mb-10 justify-items-start p-8 mx-auto w-1/3">
                    <h1 className="text-[40px] font-medium text-[var(--faq-blue)] inter leading-[140%]">
                    Frequently Asked Questions
                    </h1>
                    <p className="mt-2 text-[var(--faq-gray)] inter leading-[140%]">
                        Find answers to common questions about investing and using Investynn.
                    </p>
                </div>

                <div className="space-y-4 w-[60%] mx-auto px-10">
                    {faqs.map((m, i) => (
                        <div
                        key={i}
                        className="rounded-xl bg-white shadow-lg transition hover:shadow-md flex py-2 px-4"
                        >
                        <div className="flex items-start justify-center px-4 py-4">
                            <span className="inter font-medium text-[#B5B5B5] text-xl">
                            {String(i + 1).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="flex-1">
                            <button
                            onClick={() => toggleFAQ(i)}
                            className="w-full flex justify-between items-center p-4 text-left"
                            >
                            <p className="inter font-medium leading-[140%] text-[#646464] mt-0.5">
                                {m.question}
                            </p>
                            </button>

                            {openIndex === i && (
                            <>
                                <hr className="border-t-2 border-gray-200" />
                                <div className="px-4 pb-4 pt-4 w-fit">
                                <p className="inter text-[#989898] font-medium leading-[140%] text-xs text-justify tracking-[0.02em]">
                                    {m.answer}
                                </p>
                                </div>
                            </>
                            )}
                        </div>
                        <div className="flex items-start justify-center px-4 py-4">
                            <IoChevronDown
                            onClick={() => toggleFAQ(i)}
                            className={`w-5 h-5 cursor-pointer text-[#8F8F8F] transition-transform duration-300 ${
                                openIndex === i ? "rotate-180" : ""
                            }`}
                            />
                        </div>
                        </div>
                    ))}
                </div>






            </div>
                
                
        </section>
    </>
  )
}

export default Sec5