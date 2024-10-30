import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import faq from "../assets/m1.jpeg";

const Enterprises = () => {
    const { t } = useTranslation();

    const [open, setOpen] = useState(null);

    const toggleFAQ = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqItems = [
        {
            question: t('faq.question1'),
            answer: t('faq.answer1'),
        },
        {
            question: t('faq.question2'),
            answer: t('faq.answer2'),
        },
        {
            question:t('faq.question3'),
            answer: t('faq.answer3'),
        },
        {
            question: t('faq.question4'),
            answer: t('faq.answer4'),
        },
        {
            question: t('faq.question5'),
            answer: t('faq.answer5'),
        },
        {
            question: t('faq.question6'),
            answer: t('faq.answer6'),
        },
    ];

    return (
        <div
            id='enterprises'
            className='overflow-hidden bg-cover bg-center min-h-screen'
            style={{ backgroundImage: `url(${faq})` }}
        >
            <div className="bg-gray-100 bg-opacity-80 flex items-center justify-center min-h-screen p-8">
                <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-6">{t('enterprises')}</h2>
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-300 py-5 cursor-pointer"
                        >
                            <div
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full text-left"
                            >
                                <span className="font-semibold text-xl">{item.question}</span>
                                <span className="text-2xl">{open === index ? "−" : "+"}</span>
                            </div>
                            {open === index && (
                                <div className="mt-3 text-gray-600 text-lg">{item.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Enterprises;
