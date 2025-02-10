'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaFlask, FaSeedling, FaCarrot } from 'react-icons/fa';
import { useLanguage } from '@/app/layout/LanguageContext';
import { tradingTranslations } from '@/app/translations/index';
import Image from 'next/image';

interface Industry {
    id: string;
    label: string;
    icon: JSX.Element;
}

const TradingPage = () => {
    const searchParams = useSearchParams();
    const [activeIndustry, setActiveIndustry] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language } = useLanguage();
    const t = tradingTranslations[language];

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setActiveIndustry(category);
        } else {
            setActiveIndustry('');
        }
    }, [searchParams]);

    const industries: Industry[] = [
        { id: 'chemicals', label: t.industries.chemicals.label, icon: <FaFlask className="mr-2" /> },
        { id: 'fertilizers', label: t.industries.fertilizers.label, icon: <FaSeedling className="mr-2" /> },
        { id: 'feed', label: t.industries.feed.label, icon: <FaCarrot className="mr-2" /> }
    ];

    const renderContent = () => {
        switch (activeIndustry) {
            case 'chemicals':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/chemicals.jpg" 
                                    alt={t.industries.chemicals.label}
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">{t.industries.chemicals.title}</div>
                            <p>{t.industries.chemicals.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.industries.chemicals.products.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                );
            case 'fertilizers':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/fertilizers.jpg" 
                                    alt={t.industries.fertilizers.label}
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">{t.industries.fertilizers.title}</div>
                            <p>{t.industries.fertilizers.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.industries.fertilizers.products.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                );
            case 'feed':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/feed.jpg" 
                                    alt={t.industries.feed.label}
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">{t.industries.feed.title}</div>
                            <p>{t.industries.feed.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.industries.feed.products.map((product, index) => (
                                    <li key={index}>{product}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                );
            default:
                return (
                    <div>
                        <div className="">
                            <Image 
                                src="/industry.png" 
                                alt={t.overview.title}
                                className="w-full rounded-lg"
                                width={500}
                                height={300}
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-2xl font-bold my-4 text-indigo-700">
                                {t.overview.title}
                            </div>
                            <p className='text-gray-600 ml-4'>{t.overview.description}</p>
                            <div className="space-y-6 p-4 roboto-thin">
                                {Object.keys(t.industries).map((key) => (
                                    <div key={key}>
                                        <h3 className="font-semibold text-lg mb-2">
                                            {t.industries[key as keyof typeof t.industries].label}
                                        </h3>
                                        <p className="text-gray-600 ml-4">
                                            - {t.industries[key as keyof typeof t.industries].overview}
                                        </p>
                                    </div>
                                ))}

                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-2">{t.overview.whyChooseUs.title}</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                        {t.overview.whyChooseUs.reasons.map((reason, index) => (
                                            <li key={index}>{reason}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-blue-700">
                                        {t.overview.menuPrompt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
       <div>
            <div 
                className="relative h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/meaning.png')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className='absolute inset-0 flex items-center justify-center text-[30px] md:text-[50px] font-bold text-white px-4'>
                    {t.pageTitle}
                </h1>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-gray-200 py-5 px-5 border-b border-gray-300">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center text-indigo-900">
                        <span 
                            className="hover:text-indigo-600 cursor-pointer"
                            onClick={() => setActiveIndustry('')}
                        >
                            {t.navigation.title}
                        </span>
                        {activeIndustry && (
                            <>
                                <span className="mx-2">/</span>
                                <span className="hover:text-indigo-600 cursor-pointer">
                                    {industries.find(i => i.id === activeIndustry)?.label}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar Navigation */}
                <nav className="w-full md:w-64 bg-gray-200 p-4 shadow-md">
                    {/* Mobile Toggle Button */}
                    <div className="flex md:hidden justify-start items-center mb-4 gap-4">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-md hover:bg-gray-300"
                        >
                            {isMobileMenuOpen ? t.navigation.mobileMenu.close : t.navigation.mobileMenu.open}
                        </button>
                        <h2 className="font-bold">{t.navigation.title}</h2>
                    </div>

                    {/* Desktop Title */}
                    <h2 className="hidden md:block font-bold mb-4">{t.navigation.title}</h2>

                    {/* Menu Items */}
                    <ul className={`space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
                        {industries.map((industry) => (
                            <li
                                key={industry.id}
                                className={`flex items-center cursor-pointer p-2 rounded-md ${
                                    activeIndustry === industry.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                                }`}
                                onClick={() => {
                                    setActiveIndustry(industry.id);
                                    setIsMobileMenuOpen(false); // Đóng menu khi chọn item
                                }}
                            >
                                {industry.icon}
                                {industry.label}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Content Area */}
                <div className="flex-1 p-4 bg-white border-l border-gray-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
}

const TradingPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TradingPage />
        </Suspense>
    );
};

export default TradingPageWrapper;