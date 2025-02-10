'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaTruck, FaShip, FaPlane, FaExchangeAlt, FaCalculator, FaFileContract, FaWarehouse } from 'react-icons/fa';
import { useLanguage } from '@/app/layout/LanguageContext';
import { logisticsTranslations } from '@/app/translations/index';
import Image from 'next/image';

interface SolutionCategory {
    id: string;
    label: string;
    icon: JSX.Element;
    subCategories?: SolutionCategory[];
    image: string;
    description: string;
    content: JSX.Element;
}

const LogisticPage = () => {
    const searchParams = useSearchParams();
    const [activeSolution, setActiveSolution] = useState('');
    const [activeSubSolution, setActiveSubSolution] = useState('');
    const { language } = useLanguage();
    const t = logisticsTranslations[language];

    useEffect(() => {
        const category = searchParams.get('category');
        const subCategory = searchParams.get('subCategory');
        if (category) {
            setActiveSolution(category);
            if (subCategory) {
                setActiveSubSolution(subCategory);
            }
        } else {
            setActiveSolution('');
            setActiveSubSolution('');
        }
    }, [searchParams]);

    const solutions: SolutionCategory[] = [
        {
            id: 'road',
            label: t.transport.road.title,
            icon: <FaTruck className="mr-2" />,
            image: '/images/road-transport.jpg',
            description: t.transport.road.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.transport.road.title}</h3>
                    <p>{t.transport.road.description}</p>
                    <a href="/other-road-info" className="text-blue-500 hover:underline">Xem thêm thông tin về vận tải đường bộ</a>
                </div>
            ),
        },
        {
            id: 'sea',
            label: t.transport.sea.title,
            icon: <FaShip className="mr-2" />,
            image: '/images/sea-transport.jpg',
            description: t.transport.sea.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.transport.sea.title}</h3>
                    <p>{t.transport.road.description}</p>
                    <ul className="list-disc ml-6 mt-2">
                        {t.transport.sea.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <a href="/other-sea-info" className="text-blue-500 hover:underline">Xem thêm thông tin về vận tải đường biển</a>
                    <br />
                    <div className="mt-4">
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('road')}
                        >
                            Vận tải đường bộ
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('air')}
                        >
                            Vận tải hàng không
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('multimodal')}
                        >
                            Vận tải đa phương thức
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 'air',
            label: t.transport.air.title,
            icon: <FaPlane className="mr-2" />,
            image: '/images/air-transport.jpg',
            description: t.transport.air.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.transport.air.title}</h3>
                    <p>{t.transport.road.description}</p>
                    <ul className="list-disc ml-6 mt-2">
                        {t.transport.air.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <a href="/other-air-info" className="text-blue-500 hover:underline">Xem thêm thông tin về vận tải hàng không</a>
                    <br />
                    <div className="mt-4">
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('road')}
                        >
                            Vận tải đường bộ
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('sea')}
                        >
                            Vận tải đường biển
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('multimodal')}
                        >
                            Vận tải đa phương thức
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 'multimodal',
            label: t.transport.multimodal.title,
            icon: <FaExchangeAlt className="mr-2" />,
            image: '/images/multimodal-transport.jpg',
            description: t.transport.multimodal.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.transport.multimodal.title}</h3>
                    <p>{t.transport.road.description}</p>
                    <ul className="list-disc ml-6 mt-2">
                        {t.transport.multimodal.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                    <a href="/other-multimodal-info" className="text-blue-500 hover:underline">Xem thêm thông tin về vận tải đa phương thức</a>
                    <br />
                    <div className="mt-4">
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('road')}
                        >
                            Vận tải đường bộ
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('sea')}
                        >
                            Vận tải đường biển
                        </a>
                        <span className="mx-2">|</span>
                        <a 
                            href="#" 
                            className="text-blue-500 hover:underline" 
                            onClick={() => setActiveSolution('air')}
                        >
                            Vận tải hàng không
                        </a>
                    </div>
                </div>
            ),
        },
        {
            id: 'freight',
            label: t.freight.title,
            icon: <FaCalculator className="mr-2" />,
            image: '/images/freight.jpg',
            description: t.freight.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.freight.title}</h3>
                    <p>{t.freight.description}</p>
                    <a href="/other-freight-info" className="text-blue-500 hover:underline">Xem thêm thông tin về cước phí</a>
                </div>
            ),
        },
        {
            id: 'customs',
            label: t.customs.title,
            icon: <FaFileContract className="mr-2" />,
            image: '/images/customs.jpg',
            description: t.customs.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.customs.title}</h3>
                    <p>{t.customs.description}</p>
                    <a href="/other-customs-info" className="text-blue-500 hover:underline">Xem thêm thông tin về hải quan</a>
                </div>
            ),
        },
        {
            id: 'warehouse',
            label: t.warehouse.title,
            icon: <FaWarehouse className="mr-2" />,
            image: '/images/warehouse.jpg',
            description: t.warehouse.description,
            content: (
                <div>
                    <h3 className="font-semibold text-lg">{t.warehouse.title}</h3>
                    <p>{t.warehouse.description}</p>
                    <a href="/other-warehouse-info" className="text-blue-500 hover:underline">Xem thêm thông tin về kho bãi</a>
                </div>
            ),
        },
    ];

    const renderContent = () => {
        switch (activeSolution) {
            case 'road':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/road-transport.jpg" 
                                    alt="Vận tải đường bộ"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.transport.road.pageTitle}
                            </div>
                            <p>{t.transport.road.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.transport.road.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('multimodal')}
                            >
                                Vận tải đa phương thức
                            </a>
                        </div>
                    </>
                );
            case 'sea':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/sea-transport.jpg" 
                                    alt="Vận tải đường biển"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.transport.sea.pageTitle}
                            </div>
                            <p>{t.transport.road.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.transport.sea.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('multimodal')}
                            >
                                Vận tải đa phương thức
                            </a>
                        </div>
                    </>
                );
            case 'air':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/air-transport.jpg" 
                                    alt="Vận tải đường hàng không"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.transport.air.pageTitle}
                            </div>
                            <p>{t.transport.road.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.transport.air.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                            
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('multimodal')}
                            >
                                Vận tải đa phương thức
                            </a>
                        </div>
                    </>
                );
            case 'multimodal':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/multimodal-transport.jpg" 
                                    alt="Vận tải đa phương thức"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.transport.multimodal.pageTitle}
                            </div>
                            <p>{t.transport.road.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.transport.multimodal.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                            
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                        </div>
                    </>
                );
                    
            case 'freight':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/freight.jpg" 
                                    alt="Cước tàu/máy bay"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.freight.title}
                            </div>
                            <p>{t.freight.description}</p>
                            <ul className="list-disc ml-6 mt-2">
                                {t.freighting.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                        </div>
                    </>
                );
            case 'customs':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/customs.jpg" 
                                    alt="Thông quan hải quan"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.customs.title}
                            </div>
                            <p className="mb-4">
                                {t.customs.description}
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                {t.customs.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                        </div>
                    </>
                );
            case 'warehouse':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/warehouse.jpg" 
                                    alt="Dịch vụ kho bãi"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                {t.warehouse.title}
                            </div>
                            <p className="mb-4">
                                {t.warehouse.description}
                            </p>
                            <ul className="list-disc ml-6 mt-2 space-y-2">
                                {t.warehousing.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                <p className="text-blue-700">{t.warehousing.facilityNote}</p>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Xem thêm
                            </div>
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('')}
                            >
                                Xem tất cả dịch vụ 
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('road')}
                            >
                                Vận tải đường bộ
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('sea')}
                            >
                                Vận tải đường biển
                            </a>
                            <br />
                            <a 
                                href="#" 
                                className="text-blue-500 hover:underline" 
                                onClick={() => setActiveSolution('air')}
                            >
                                Vận tải hàng không
                            </a>
                        </div>
                    </>
                );
            default:
                return (
                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {solutions.map((solution) => (
                                <div key={solution.id} className="border rounded-lg p-4 bg-gray-100">
                                    <img src={solution.image} alt={solution.label} className="w-full h-32 object-cover rounded" />
                                    <h3 className="font-semibold text-lg mt-2">{solution.label}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                    <button 
                                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={() => {
                                            setActiveSolution(activeSolution === solution.id ? '' : solution.id); // Toggle nội dung
                                        }}
                                    >
                                        Tìm hiểu
                                    </button>
                                    {activeSolution === solution.id && (
                                        <div className="mt-2">
                                            {solution.content}
                                        </div>
                                    )}
                                </div>
                            ))}
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
                    LOGISTIC
                </h1>
            </div>

            {/* Breadcrumb Navigation */}
            <div className="bg-gray-200 py-5 px-5 border-b border-gray-300">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center text-indigo-900">
                        <span 
                            className="hover:text-indigo-600 cursor-pointer"
                            onClick={() => setActiveSolution('')}
                        >
                                Logistic
                        </span>
                        {activeSolution && (
                            <>
                                <span className="mx-2">/</span>
                                <span className="hover:text-indigo-600 cursor-pointer">
                                    {solutions.find(s => s.id === activeSolution)?.label}
                                </span>
                            </>
                        )}
                        {activeSubSolution && activeSolution === 'transport' && (
                            <>
                                <span className="mx-2">/</span>
                                <span className="hover:text-blue-600 cursor-pointer">
                                    {solutions
                                        .find(s => s.id === 'transport')
                                        ?.subCategories?.find(sub => sub.id === activeSubSolution)?.label}
                                </span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            

                {/* Content Area */}
                <div className="flex-1 p-4 bg-white border-l border-gray-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
    );
}

const LogisticPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LogisticPage />
        </Suspense>
    );
};

export default LogisticPageWrapper;