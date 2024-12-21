'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaPlane, FaShip, FaTruck, FaCalculator, FaFileContract, FaWarehouse } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useLanguage } from '@/app/layout/LanguageContext';
import { homeTranslations } from '@/app/translations/index';


const slides = [
    { src: '/logo1.png', alt: 'Slide 1'},
    { src: '/logo3.png', alt: 'Slide 2' },
    { src: '/logo2.png', alt: 'Slide 3' },
];

const Homepage = () => {
    const { language } = useLanguage();
    const t = homeTranslations[language];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
        AOS.init();
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <React.Fragment>
            <div className="slider max-h-[90vh] relative">
                <div className="slides relative w-full max-h-[85vh]">
                    <img src={slides[currentSlide].src} alt={slides[currentSlide].alt} className="w-full object-cover max-h-[35vh] sm:max-h-[50vh] md:max-h-[65vh] lg:max-h-[90vh]" />
                    <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">❮</button>
                    <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2">❯</button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_0fr] md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] px-5 py-20'>
                <div className="method p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 border-b-4 w-fit border-blue-800">
                        {t.transportMethods}
                    </h2>
                    <div className="flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <img src="/truck-image.png" alt={t.roadTransport.title} className="w-full h-60 rounded-2xl mb-2" />
                        <FaTruck className="mr-2 text-blue-500" />
                        <strong className='text-orange-400 text-xl'>{t.roadTransport.title}</strong>
                        <p>{t.roadTransport.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=transport&subCategory=road" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <div className="flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <img src="/ship-image.png" alt={t.seaTransport.title} className="w-full h-60 rounded-2xl mb-2" />
                        <FaShip className="mr-2 text-blue-500" />
                        <strong className='text-orange-400 text-xl'>{t.seaTransport.title}</strong>
                        <p>{t.seaTransport.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=transport&subCategory=sea" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <div className="flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <img src="/plane-image.png" alt={t.airTransport.title} className="w-full h-60 mb-2 rounded-2xl" />
                        <FaPlane className="mr-2 text-blue-500" />
                        <strong className='text-orange-400 text-xl'>{t.airTransport.title}</strong>
                        <p>{t.airTransport.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=transport&subCategory=air" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 border-b-4 w-fit border-blue-800 pt-40" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        {t.logistics}
                    </h2>
                    <div className="p-5 flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <FaCalculator className="text-4xl text-blue-500 my-4" />
                        <strong className='text-orange-400 text-xl'>{t.freight.title}</strong>
                        <p>{t.freight.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=freight" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <div className="p-5 flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <FaFileContract className="text-4xl text-blue-500 my-4" />
                        <strong className='text-orange-400 text-xl'>{t.customs.title}</strong>
                        <p>{t.customs.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=customs" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <div className="p-5 flex flex-col bg-gray-200 items-center border border-gray-300 p-2 rounded-2xl hover:translate-y-[-10px]">
                        <FaWarehouse className="text-4xl text-blue-500 my-4" />
                        <strong className='text-orange-400 text-xl'>{t.warehouse.title}</strong>
                        <p>{t.warehouse.desc}</p>
                        <div className="flex-grow" />
                        <Link href="/service/logistic?category=warehouse" className="inline-flex items-center mt-4 px-4 py-2 rounded-3xl bg-gray-200 border border-orange-400 hover:bg-orange-400 hover:text-white hover:text-[18px] transition-all duration-500">
                            {t.learnMore}
                        </Link>
                    </div>
                    <h2 className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3 border-b-4 w-fit border-blue-800 pt-40" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        {t.tradingIndustries}
                    </h2>
                    <div className="grid grid-cols-1 gap-4 col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                        {[
                            {
                                title: t.chemicals.title,
                                content: t.chemicals.items,
                                link: '/service/trading?category=chemicals'
                            },
                            {
                                title: t.fertilizers.title,
                                content: t.fertilizers.items,
                                link: '/service/trading?category=fertilizers'
                            },
                            {
                                title: t.feedMaterials.title,
                                content: t.feedMaterials.items,
                                link: '/service/trading?category=feed'
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-gray-200 rounded-2xl overflow-hidden">
                                <div 
                                    onClick={() => setOpenItems(prev => ({
                                        ...prev,
                                        [index]: !prev[index]
                                    }))}
                                    className="cursor-pointer hover:translate-x-[10px] transition-all duration-500 group"
                                >
                                    <div className="flex items-center justify-between p-5">
                                        <strong className='text-xl md:text-2xl text-orange-400'>{item.title}</strong>
                                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold group-hover:text-xl group-hover:bg-gray-300">
                                            {openItems[index] ? '-' : '+'}
                                        </div>
                                    </div>
                                </div>
                                <div className={`bg-gray-200 overflow-hidden transition-all duration-700 ease-in-out ${
                                    openItems[index] ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="px-5 py-5 border-t border-gray-300">
                                        {item.content.map((line, i) => (
                                            <p key={i}>- {line}</p>
                                        ))}
                                        <Link 
                                            href={item.link}
                                            className="inline-flex items-center mt-4 px-4 py-2 bg-white border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors duration-500"
                                        >
                                            {t.learnMore}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact p-5" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                    <div className='sticky top-20'>
                        <h2 className='border-b-4 w-fit border-blue-800'>{t.contact}</h2>
                        <div className='mt-4 p-5 bg-gray-200 border border-gray-300 z-10 rounded-2xl hover:translate-y-[-10px]'>
                            <h3>{t.contactContent.hotline.title}</h3>
                            <p>{t.contactContent.hotline.content}</p>
                            <h3>{t.contactContent.email.title}</h3>
                            <p>{t.contactContent.email.content}</p>
                            <h3>{t.contactContent.social.title}</h3>
                            <div className='flex justify-center items-center gap-5 pt-5'>
                                <Link href="https://www.facebook.com/" target='_blank'>
                                    <Image
                                        src="/Facebook_Icon.svg"
                                        alt="Facebook"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                        />
                                </Link>
                                <Link href="https://www.youtube.com/" target='_blank'>
                                    <Image
                                        src="/Youtube_Icon.svg"
                                        alt="Youtube"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                        />
                                </Link>
                                <Link href="https://chat.zalo.me/" target='_blank'>
                                    <Image
                                        src="/Zalo_Icon.svg"
                                        alt="Zalo"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                        />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className='p-10' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h2 className='border-b-4 w-fit border-blue-800'>{t.partners}</h2>
                <div className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 py-5'>
                    <Image
                        src="/company1.png"
                        alt="Company1"
                        width={100}
                        height={100}
                        className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 border border-indigo-800 rounded-full hover:-translate-y-1"
                    />
                    <Image
                        src="/company2.png"
                        alt="Company2"
                        width={100}
                        height={100}
                        className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 border border-indigo-800 rounded-full hover:-translate-y-1"
                    />
                    <Image
                        src="/company3.png"
                        alt="Company3"
                        width={100}
                        height={100}
                        className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 border border-indigo-800 rounded-full hover:-translate-y-1"
                    />
                    <Image
                        src="/company4.png"
                        alt="Company4"
                        width={100}
                        height={100}
                        className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 border border-indigo-800 rounded-full hover:-translate-y-1"
                    />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-[1fr_1fr] md:grid-cols-[2fr_4fr] lg:grid-cols-[2fr_5fr] px-10 py-20 bg-slate-200 gap-10' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div>
                    <h2 className='border-b-4 w-fit border-blue-800'>{t.aboutUs}</h2>
                    <Image 
                        src="/meaning.png"
                        alt="logistic"
                        width={400}
                        height={400}
                        className='py-5'
                    />
                </div>
                <div className='py-[60px]'>
                    {t.aboutContent.map((text, index) => (
                        <p key={index} className="text-justify">{text}</p>
                    ))}
                </div>      
            </div>
            <div className="px-10 py-20" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <h2 className='border-b-4 w-fit border-blue-800'>{t.logisticsNews}</h2>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[3fr_1fr] lg:grid-cols-[4fr_1fr] py-5'>
                    <div>
                        <article>
                            <h3>{t.news.article1.title}</h3>
                            <p>{t.news.article1.content}</p>
                        </article>
                        <article>
                            <h3>{t.news.article2.title}</h3>
                            <p>{t.news.article2.content}</p>
                        </article>
                    </div>
                    <div className="">
                        <h3>{t.news.video.title}</h3>
                        <iframe 
                            width="400" 
                            height="315" 
                            src="https://www.youtube.com/embed/qn_BO-KgJb8" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>        
        </React.Fragment>
    );
};

export default Homepage;