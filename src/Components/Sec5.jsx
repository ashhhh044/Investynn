import React from 'react'

const Sec5 = () => {
  return (
    <>
        <section className="w-3/4 mx-auto px-6 py-12 justify-between">
            <div className="flex flex-row items-center">
                <div className="mb-10 justify-items-start w-2/3 p-4">
                    <h1 className="text-4xl font-medium text-[var(--faq-blue)]">
                    Frequently Asked Questions
                    </h1>
                    <p className="mt-2 text-[var(--faq-gray)]">
                        Find answers to common questions about investing and using Investynn.
                    </p>
                </div>

                <div className="space-y-4 w-1/2">
                    <details className="group border border-gray-300 rounded-lg p-4 bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)]">
                        <summary className="cursor-pointer text-lg font-medium text-[var(--text-pri)] flex justify-between items-center">
                            What is Investynn?
                            <span className="transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                            <p className="mt-2 text-[var(--text-sec)]">
                            Investynn is a platform that makes investing simple, transparent, and accessible for everyone.
                            </p>
                    </details>
                    <details className="group border border-gray-300 rounded-lg p-4 bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)]">
                        <summary className="cursor-pointer text-lg font-medium text-[var(--text-pri)] flex justify-between items-center">
                            What is Investynn?
                            <span className="transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                            <p className="mt-2 text-[var(--text-sec)]">
                            Investynn is a platform that makes investing simple, transparent, and accessible for everyone.
                            </p>
                    </details>
                    <details className="group border border-gray-300 rounded-lg p-4 bg-white shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)]">
                        <summary className="cursor-pointer text-lg font-medium text-[var(--text-pri)] flex justify-between items-center">
                            What is Investynn?
                            <span className="transition-transform group-open:rotate-180">⌄</span>
                        </summary>
                            <p className="mt-2 text-[var(--text-sec)]">
                            Investynn is a platform that makes investing simple, transparent, and accessible for everyone.
                            </p>
                    </details>
                </div>

            </div>
                
        </section>
    </>
  )
}

export default Sec5