'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/app/lib/constants/routes';
import { useLanguage } from '@/app/layout/LanguageContext';
import { footerTranslations } from '@/app/translations/index';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = footerTranslations[language];

    return (
        <footer>
            <div className="bg-gray-800 py-4 text-gray-400">
                <div className="container px-4 mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        {/* Contact Section */}
                        <div className="px-4 my-4 w-full xl:w-1/4">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                                    {t.contact.title}
                                </h2>
                            </div>
                            <ul className="leading-8">
                                <li className="hover:text-blue-400">{t.contact.address}</li>
                                <li className="hover:text-blue-400">{t.contact.phone}</li>
                                <li className="hover:text-blue-400">{t.contact.email}</li>
                            </ul>
                        </div>

                        {/* Company Section */}
                        <div className="px-4 my-4 w-full sm:w-auto">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                                    {t.company.title}
                                </h2>
                            </div>
                            <ul className="leading-8">
                                <li><Link href="/" className="hover:text-blue-400">{t.company.home}</Link></li>
                                <li><Link href={ROUTES.LOGISTIC} className="hover:text-blue-400">{t.company.logistics}</Link></li>
                                <li><Link href={ROUTES.TRADING} className="hover:text-blue-400">{t.company.trading}</Link></li>
                                <li><Link href={ROUTES.ABOUT} className="hover:text-blue-400">{t.company.about}</Link></li>
                                <li><Link href={ROUTES.NEW} className="hover:text-blue-400">{t.company.news}</Link></li>
                                <li><Link href={ROUTES.CONTACT} className="hover:text-blue-400">{t.company.contact}</Link></li>
                            </ul>
                        </div>

                        {/* Policies Section */}
                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/4">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                                    {t.policies.title}
                                </h2>
                            </div>
                            <ul>
                                <li><a href="#" className="hover:text-blue-400">{t.policies.terms}</a></li>
                                <li><a href="#" className="hover:text-blue-400">{t.policies.privacy}</a></li>
                                <li><a href="#" className="hover:text-blue-400">{t.policies.cookies}</a></li>
                            </ul>            
                        </div>

                        {/* Social Media Section */}
                        <div className="px-4 my-4 w-full sm:w-auto xl:w-1/4">
                            <div>
                                <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                                    {t.social.title}
                                </h2>
                            </div>
                            <div className='inline-flex gap-4'>
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
                                <Link href="https://www.messenger.com/" target='_blank'>
                                    <Image
                                        src="/Messenger_Icon.svg"
                                        alt="Messenger"
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

            {/* Copyright Section */}
            <div className="bg-indigo-700 py-4 text-gray-100">
                <div className="container mx-auto px-4">
                    <div className="-mx-4 flex flex-wrap justify-between">
                        <div className="px-4 w-full text-center sm:w-auto sm:text-left">
                            {t.copyright}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;