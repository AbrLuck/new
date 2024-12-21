'use client'
import Image from "next/image";
import { FaUsers, FaShieldAlt, FaBolt, FaTruckMoving, FaGlobe } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from '@/app/layout/LanguageContext';
import { aboutTranslations } from '@/app/translations/index';

export default function About() {
    const { language } = useLanguage();
    const t = aboutTranslations[language];

    return (
        <div>
            <div className="relative h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/meaning.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className='absolute inset-0 flex items-center justify-center text-[30px] md:text-[50px] font-bold text-white px-4'>
                    {t.pageTitle}
                </h1>
            </div>

            {/* Company Introduction */}
            <div className="container px-10 py-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5 max-w-6xl">
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 border-b-4 w-fit border-blue-800">
                        {t.company.title}
                    </h2>
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            width={500}
                            height={500}   
                            src="/about-company.jpg" 
                            alt={t.company.name}
                            className="w-full h-[300px] object-cover bg-gray-200"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t.company.name}</h2>
                        <p className="text-gray-700 mb-8">{t.company.description}</p>
                    </div>
                </div>
            </div>

            {/* Criteria */}
            <div className="container px-10 py-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 border-b-4 w-fit border-blue-800">
                        {t.criteria.title}
                    </h2>
                    {t.criteria.items.map((item, index) => (
                        <div key={index} className="bg-gray-200 p-6 rounded-lg shadow-md hover:translate-y-[-10px] transition-all duration-300">
                            <div className="flex flex-col items-center text-center">
                                {index === 0 && <FaUsers className="text-5xl mb-4 text-blue-600" />}
                                {index === 1 && <FaShieldAlt className="text-5xl mb-4 text-blue-600" />}
                                {index === 2 && <FaBolt className="text-5xl mb-4 text-blue-600" />}
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Services */}
            <div className="container px-10 py-20 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 border-b-4 w-fit border-blue-800">
                        {t.mainServices.title}
                    </h2>
                    {/* Logistics Service */}
                    <div className="bg-gray-200 h-[350px] p-10 rounded-lg shadow-md hover:translate-y-[-10px] transition-all duration-300">
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col items-center">
                                <FaTruckMoving className="text-5xl my-5 text-blue-600" />
                                <h3 className="text-xl font-bold mb-4">{t.mainServices.logistics.title}</h3>
                            </div>
                            <p className="text-left mb-4">{t.mainServices.logistics.description}</p>
                            <div className="mt-auto flex justify-center">
                                <Link 
                                    href="/service/logistic" 
                                    className="inline-flex items-center px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-500"
                                >
                                    {t.mainServices.logistics.learnMore}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Trading Service */}
                    <div className="bg-gray-200 h-[350px] p-10 rounded-lg shadow-md hover:translate-y-[-10px] transition-all duration-300">
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col items-center">
                                <FaGlobe className="text-5xl my-5 text-blue-600" />
                                <h3 className="text-xl font-bold mb-4">{t.mainServices.trading.title}</h3>
                            </div>
                            <p className="text-left mb-4">{t.mainServices.trading.description}</p>
                            <div className="mt-auto flex justify-center">
                                <Link 
                                    href="/service/trading" 
                                    className="inline-flex items-center px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-500"
                                >
                                    {t.mainServices.trading.learnMore}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
