import { useState } from "react";

const Faq = () => {
    // Initialize the first accordion as active
    const [activeId, setActiveId] = useState("1");

    const toggleAccordion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const accordionData = [
        { id: "1", title: `How do I manage my notifications?`, content: `To manage notifications, go to "Settings, " select "Notification Settings, " and customize your preferences.` },
        { id: "2", title: "How to verified profile?", content: "Content for section 2 goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, commodi necessitatibus pariatur amet sed, culpa veniam suscipit accusantium atque reprehenderit, voluptatum velit! Qui optio molestias commodi? Maxime, eos totam. Voluptate?" },
        { id: "3", title: "Not getting enough matches", content: "Content for section 3 goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, commodi necessitatibus pariatur amet sed, culpa veniam suscipit accusantium atque reprehenderit, voluptatum velit! Qui optio molestias commodi? Maxime, eos totam. Voluptate?" },
        { id: "4", title: "App crashed multiple time", content: "Content for section 3 goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, commodi necessitatibus pariatur amet sed, culpa veniam suscipit accusantium atque reprehenderit, voluptatum velit! Qui optio molestias commodi? Maxime, eos totam. Voluptate?" },
        { id: "5", title: "How to block someone", content: "Content for section 3 goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, commodi necessitatibus pariatur amet sed, culpa veniam suscipit accusantium atque reprehenderit, voluptatum velit! Qui optio molestias commodi? Maxime, eos totam. Voluptate?" },
        { id: "6", title: "How to block someone", content: "Content for section 3 goes here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, commodi necessitatibus pariatur amet sed, culpa veniam suscipit accusantium atque reprehenderit, voluptatum velit! Qui optio molestias commodi? Maxime, eos totam. Voluptate?" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className=" ml-4">
                <h3 className="text-[#b27409] text-2xl font-bold font-['Inria Serif'] capitalize leading-normal">FAQ</h3>
            </div>
            <div className="flex flex-col gap-3">
                {accordionData.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                        <div key={item.id} className=" border rounded-2xl border-[#b27409] overflow-hidden">
                            {/* Button */}
                            <button
                                id={`accordion-button-${item.id}`}
                                className="w-full flex justify-between items-center px-4 py-3 text-left"
                                onClick={() => toggleAccordion(item.id)}
                                aria-expanded={isActive}
                                aria-controls={`accordion-content-${item.id}`}
                            >
                                <span className="text-[#b27409] text-sm font-normal font-['Inter']">{item.title}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform transform ${isActive ? "rotate-180" : "rotate-0"}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="#b27409"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>
                            {/* Content */}
                            <div
                                id={`accordion-content-${item.id}`}
                                className={`transition-all duration-300 ${isActive ? "opacity-100 h-auto" : "opacity-0 h-0"}`}
                                aria-labelledby={`accordion-button-${item.id}`}
                            >
                                <p className="px-4 py-3 text-[#795D2B] text-sm font-normal font-['Inter']">{item.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
