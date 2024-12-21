'use client'

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaTruck, FaShip, FaPlane, FaExchangeAlt, FaCalculator, FaFileContract, FaWarehouse } from 'react-icons/fa';
import { useLanguage } from '@/app/layout/LanguageContext';
import { logisticsTranslations } from '@/app/translations/index';

interface SolutionCategory {
    id: string;
    label: string;
    icon: JSX.Element;
    subCategories?: SolutionCategory[];
}

const LogisticPage = () => {
    const searchParams = useSearchParams();
    const [activeSolution, setActiveSolution] = useState('');
    const [activeSubSolution, setActiveSubSolution] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            id: 'transport',
            label: t.transport.title,
            icon: <FaTruck className="mr-2" />,
            subCategories: [
                { id: 'road', label: t.transport.road.title, icon: <FaTruck className="mr-2" /> },
                { id: 'sea', label: t.transport.sea.title, icon: <FaShip className="mr-2" /> },
                { id: 'air', label: t.transport.air.title, icon: <FaPlane className="mr-2" /> },
                { id: 'multimodal', label: t.transport.multimodal.title, icon: <FaExchangeAlt className="mr-2" /> }
            ]
        },
        { id: 'freight', label: t.freight.title, icon: <FaCalculator className="mr-2" /> },
        { id: 'customs', label: t.customs.title, icon: <FaFileContract className="mr-2" /> },
        { id: 'warehouse', label: t.warehouse.title, icon: <FaWarehouse className="mr-2" /> }
    ];

    const renderContent = () => {
        switch (activeSolution) {
            case 'transport':
                switch (activeSubSolution) {
                    case 'road':
                        return (
                            <>
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-square bg-gray-200 rounded-lg">
                                        <img 
                                            src="/images/road-transport.jpg" 
                                            alt="Vận tải đường bộ"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="text-xl font-bold mb-4 text-indigo-700">
                                        {t.transport.road.pageTitle}
                                    </div>
                                    <p>{t.transport.road.description}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>{t.transport.road.services[0]}</li>
                                        <li>{t.transport.road.services[1]}</li>
                                        <li>{t.transport.road.services[2]}</li>
                                    </ul>
                                </div>
                            </>
                        );
                    case 'sea':
                        return (
                            <>
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-square bg-gray-200 rounded-lg">
                                        <img 
                                            src="/images/sea-transport.jpg" 
                                            alt="Vận tải đường biển"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="text-xl font-bold mb-4 text-indigo-700">
                                        {t.transport.sea.pageTitle}
                                    </div>
                                    <p>{t.transport.sea.description}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>{t.transport.sea.services[0]}</li>
                                        <li>{t.transport.sea.services[1]}</li>
                                        <li>{t.transport.sea.services[2]}</li>
                                        <li>{t.transport.sea.services[3]}</li>
                                    </ul>
                                </div>
                            </>
                        );
                    case 'air':
                        return (
                            <>
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-square bg-gray-200 rounded-lg">
                                        <img 
                                            src="/images/air-transport.jpg" 
                                            alt="Vận tải đường hàng không"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="text-xl font-bold mb-4 text-indigo-700">
                                        {t.transport.air.pageTitle}
                                    </div>
                                    <p>{t.transport.air.description}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>{t.transport.air.services[0]}</li>
                                        <li>{t.transport.air.services[1]}</li>
                                        <li>{t.transport.air.services[2]}</li>
                                        <li>{t.transport.air.services[3]}</li>
                                        <li>{t.transport.air.services[4]}</li>
                                    </ul>
                                </div>
                            </>
                        );
                    case 'multimodal':
                        return (
                            <>
                                <div className="w-full md:w-1/3">
                                    <div className="aspect-square bg-gray-200 rounded-lg">
                                        <img 
                                            src="/images/multimodal-transport.jpg" 
                                            alt="Vận tải đa phương thức"
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/3">
                                    <div className="text-xl font-bold mb-4 text-indigo-700">
                                        {t.transport.multimodal.pageTitle}
                                    </div>
                                    <p>{t.transport.multimodal.description}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        <li>{t.transport.multimodal.services[0]}</li>
                                        <li>{t.transport.multimodal.services[1]}</li>
                                        <li>{t.transport.multimodal.services[2]}</li>
                                        <li>{t.transport.multimodal.services[3]}</li>
                                        <li>{t.transport.multimodal.services[4]}</li>
                                        <li>{t.transport.multimodal.services[5]}</li>
                                    </ul>
                                </div>
                            </>
                        );
                    default:
                        return (
                            <div>
                                <div className="">
                                    <img 
                                        src="/solutions.png" 
                                        alt="Tổng quan vận chuyển"
                                        className="w-full rounded-lg"
                                    />
                                </div>
                                <div className="w-full">
                                    <div className="text-2xl font-bold my-4 text-indigo-700">
                                        {t.overview.title}
                                    </div>
                                    <p className="mb-4">
                                        {t.overview.description}
                                    </p>
                                    <div className="space-y-6 p-4 roboto-thin">
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{t.overview.services.road.title}</h3>
                                            <p className="text-gray-600 ml-4">
                                                - {t.overview.services.road.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{t.overview.services.sea.title}</h3>
                                            <p className="text-gray-600 ml-4">
                                                - {t.overview.services.sea.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{t.overview.services.air.title}</h3>
                                            <p className="text-gray-600 ml-4">
                                                - {t.overview.services.air.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">{t.overview.services.multimodal.title}</h3>
                                            <p className="text-gray-600 ml-4">
                                                - {t.overview.services.multimodal.description}
                                            </p>
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="font-semibold text-lg mb-2">{t.advantages.title}</h3>
                                            <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                                {t.advantages.items.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                            <p className="text-blue-700">
                                                {t.menuPrompt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                }
            case 'freight':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <img 
                                    src="/images/freight.jpg" 
                                    alt="Cước tàu/máy bay"
                                    className="w-full h-full object-cover rounded-lg"
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
                    </>
                );
            case 'customs':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <img 
                                    src="/images/customs.jpg" 
                                    alt="Thông quan hải quan"
                                    className="w-full h-full object-cover rounded-lg"
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
                    </>
                );
            case 'warehouse':
                return (
                    <>
                        <div className="w-full md:w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <img 
                                    src="/images/warehouse.jpg" 
                                    alt="Dịch vụ kho bãi"
                                    className="w-full h-full object-cover rounded-lg"
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
                    </>
                );
            default:
                return (
                    <div>
                        <div className="">
                            <img 
                                src="/logistic.png" 
                                alt="Tổng quan vận chuyển"
                                className="w-full rounded-lg"
                            />
                        </div>
                        <div className="w-full">
                            <div className="text-2xl font-bold my-4 text-indigo-700">
                                {t.overview.title}
                            </div>
                            <p className="mb-4">
                                {t.overview.description}
                            </p>
                            <div className="space-y-6 p-4 roboto-thin">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{t.overview.services.road.title}</h3>
                                    <p className="text-gray-600 ml-4">
                                        - {t.overview.services.road.description}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{t.overview.services.sea.title}</h3>
                                    <p className="text-gray-600 ml-4">
                                        - {t.overview.services.sea.description}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{t.overview.services.air.title}</h3>
                                    <p className="text-gray-600 ml-4">
                                        - {t.overview.services.air.description}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{t.overview.services.multimodal.title}</h3>
                                    <p className="text-gray-600 ml-4">
                                        - {t.overview.services.multimodal.description}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <h3 className="font-semibold text-lg mb-2">{t.advantages.title}</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-600">
                                        {t.LogAdvantages.items.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-blue-700">
                                        {t.menuPrompt}
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
                        {solutions.map((solution) => (
                            <li key={solution.id}>
                                <div
                                    className={`flex items-center cursor-pointer p-2 rounded-md ${
                                        activeSolution === solution.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                                    }`}
                                    onClick={() => {
                                        setActiveSolution(solution.id);
                                        setActiveSubSolution('');
                                        // Chỉ đóng menu mobile khi click vào các mục không có submenu
                                        if (!solution.subCategories) {
                                            setIsMobileMenuOpen(false);
                                        }
                                    }}
                                >
                                    {solution.icon}
                                    {solution.label}
                                </div>
                                {solution.subCategories && activeSolution === solution.id && (
                                    <ul className="ml-4 mt-2 space-y-2">
                                        {solution.subCategories.map((subCat) => (
                                            <li
                                                key={subCat.id}
                                                className={`flex items-center cursor-pointer p-2 rounded-md ${
                                                    activeSubSolution === subCat.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                                                }`}
                                                onClick={() => {
                                                    setActiveSubSolution(subCat.id);
                                                    setIsMobileMenuOpen(false); // Đóng menu khi chọn submenu
                                                }}
                                            >
                                                {subCat.icon}
                                                {subCat.label}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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

export default LogisticPage;