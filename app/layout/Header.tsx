'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {FaTruck, FaChartLine} from 'react-icons/fa';
import { useLanguage } from '@/app/layout/LanguageContext';
import { translations } from '@/app/translations/index';

//import { ROUTES } from '@/app/lib/constants/routes';

const Header: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSolutionsMenu = () => {
        if (window.innerWidth < 768) {
            setIsSolutionsOpen(!isSolutionsOpen);
        }
    };


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <header className="bg-indigo-700 p-2 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                <button onClick={toggleMenu} className="md:hidden text-white text-2xl p-2">
                    {isOpen ? '✖' : '☰'}
                </button>
                <div className="text-white text-center md:left-0 md:transform-none">
                    #Logo#
                </div>
                <div className="w-8 md:hidden"></div>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-end">
                    <li>
                        <Link 
                            href="/" 
                            className={`text-white transition-all ease-in-out duration-300 hover:text-orange-300 hover:border-b-[3px] hover:border-orange-600 inline-block px-2 w-fit ${
                                pathname === '/' ? 'border-b-[3px] border-orange-600' : ''
                            }`}
                        >
                            {t.home}
                        </Link>
                    </li>
                    {/* Dịch vụ Menu */}
                    <li className="relative" onMouseEnter={() => window.innerWidth >= 768 && setIsSolutionsOpen(true)} onMouseLeave={() => window.innerWidth >= 768 && setIsSolutionsOpen(false)}>
                        <button 
                            onClick={toggleSolutionsMenu}
                            className={`text-white transition-all ease-in-out duration-300 hover:text-orange-300 hover:border-b-[3px] hover:border-orange-600 inline-block px-2 w-fit ${
                                pathname.startsWith('/service') ? 'border-b-[3px] border-orange-600' : ''
                            }`}
                        >
                            {t.services}
                        </button>
                        {/* Mobile Menu */}
                        {isOpen && (
                            <div 
                                className={`overflow-hidden transition-all duration-700 ease-in-out md:hidden`}
                                style={{ maxHeight: isSolutionsOpen ? '1000px' : '0' }}
                            >
                                <div className={`transform transition-all duration-700 ${
                                    isSolutionsOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                }`}>
                                    <div className="text-white p-2">
                                        <ul>
                                            {/* Logistics */}
                                            <Link href="/service/logistic">
                                                <li className="flex items-center p-2 text-left hover:text-orange-400 hover:translate-x-2 transition-all duration-700">
                                                    <div className="flex items-center group">
                                                        <FaTruck className='mr-2' /> {t.logistics}
                                                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">→</span>
                                                    </div>
                                                </li>
                                            </Link>

                                            {/* Lĩnh vực */}
                                            <Link href="/service/trading">
                                                <li className="flex items-center p-2 text-left hover:text-orange-400 hover:translate-x-2 transition-all duration-700">
                                                    <div className="flex items-center group">
                                                        <FaChartLine className='mr-2' /> {t.trading}
                                                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">→</span>
                                                    </div>
                                                </li>
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Desktop Popup Menu */}
                        {isSolutionsOpen && !isOpen && (
                            <div className="absolute left-0 pl-2 py-2 bg-white text-black hidden md:block min-w-[154px]">
                                <ul className="space-y-2">
                                    {/* Logistics */}
                                    <Link href="/service/logistic">
                                        <li className="flex items-center p-2 text-left hover:text-orange-400 hover:translate-x-2 transition-all duration-700">
                                            <div className="flex items-center group">
                                                <FaTruck className='mr-2' /> {t.logistics}
                                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">→</span>
                                            </div>
                                        </li>
                                    </Link>

                                    {/* Lĩnh vực */}
                                    <Link href="/service/trading">
                                        <li className="flex items-center p-2 text-left hover:text-orange-400 hover:translate-x-2 transition-all duration-700">
                                            <div className="flex items-center group">
                                                <FaChartLine className='mr-2' /> {t.trading}
                                                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">→</span>
                                            </div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link 
                            href="/about" 
                            className={`text-white transition-all ease-in-out duration-300 hover:text-orange-300 hover:border-b-[3px] hover:border-orange-600 inline-block px-2 w-fit ${
                                pathname === '/about' ? 'border-b-[3px] border-orange-600' : ''
                            }`}
                        >
                            {t.about}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/new" 
                            className={`text-white transition-all ease-in-out duration-300 hover:text-orange-300 hover:border-b-[3px] hover:border-orange-600 inline-block px-2 w-fit ${
                                pathname === '/new' ? 'border-b-[3px] border-orange-600' : ''
                            }`}
                        >
                            {t.news}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact" 
                            className={`text-white transition-all ease-in-out duration-300 hover:text-orange-300 hover:border-b-[3px] hover:border-orange-600 inline-block px-2 w-fit ${
                                pathname === '/contact' ? 'border-b-[3px] border-orange-600' : ''
                            }`}
                        >
                            {t.contact}
                        </Link>
                    </li>
                    <span className='p-4'></span>
                    <li>
                        <button 
                            onClick={toggleLanguage}
                            className='text-white hover:text-orange-300 font-bold flex items-center gap-2'
                        >
                            {language === 'vi' ? 'ENG' : 'VIE'}
                            <span className="text-xs">
                                ({language === 'vi' ? 'English' : 'Tiếng Việt'})
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;