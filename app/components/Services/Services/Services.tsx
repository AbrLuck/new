'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FaTruck, FaShip, FaPlane, FaFlask, FaSeedling, FaCarrot } from 'react-icons/fa';
import Image from 'next/image';

interface Category {
    id: string;
    label: string;
    icon: JSX.Element;
}

const ServicePage = () => {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState('');
    const [activeType, setActiveType] = useState('solution'); // 'industry' or 'solution'

    useEffect(() => {
        const category = searchParams.get('category');
        const type = searchParams.get('type') || 'industry';
        if (category) {
            setActiveCategory(category);
            setActiveType(type);
        }
    }, [searchParams]);

    const categories: Record<string, Category[]> = {
        industry: [
            { id: 'chemicals', label: 'Hóa chất', icon: <FaFlask className="mr-2" /> },
            { id: 'fertilizers', label: 'Phân bón', icon: <FaSeedling className="mr-2" /> },
            { id: 'feed', label: 'Nguyên liệu thức ăn chăn nuôi', icon: <FaCarrot className="mr-2" /> }
        ],
        solution: [
            { id: 'transportation', label: 'Đường bộ', icon: <FaTruck className="mr-2" /> },
            { id: 'shipping', label: 'Đường biển', icon: <FaShip className="mr-2" /> },
            { id: 'flight', label: 'Đường hàng không', icon: <FaPlane className="mr-2" /> }
        ]
    };

    const renderContent = () => {
        switch (activeCategory) {
            // Solution content
            case 'transportation':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/transportation.jpg" 
                                    alt="Vận tải đường bộ"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">
                                Dịch vụ Vận tải Đường bộ
                            </div>
                            <p>Chúng tôi cung cấp dịch vụ vận tải đường bộ chuyên nghiệp:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Vận chuyển container</li>
                                <li>Vận chuyển hàng rời</li>
                                <li>Vận chuyển hàng siêu trường siêu trọng</li>
                            </ul>
                        </div>
                    </div>
                );          
            case 'shipping':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/shipping.jpg" 
                                    alt="Vận tải đường biển"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">Dịch vụ Vận tải Đường biển</div>
                            <p>Chúng tôi cung cấp dịch vụ vận tải đường biển toàn diện:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Vận tải container đường biển</li>
                                <li>Vận tải hàng rời</li>
                                <li>Dịch vụ gom hàng lẻ (LCL)</li>
                                <li>Dịch vụ thuê tàu nguyên chuyến</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'flight':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/flight.jpg" 
                                    alt="Vận tải đường hàng không"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">Dịch vụ Vận tải Hàng không</div>
                            <p>Chúng tôi cung cấp dịch vụ vận tải hàng không chất lượng cao:</p>
                            <ul className="list-disc ml-6 mt-2">
                            <li>Vận chuyển hàng hóa thông thường</li>
                            <li>Vận chuyển hàng đặc biệt</li>
                                <li>Dịch vụ chuyển phát nhanh</li>
                                <li>Thuê chuyến hàng không</li>
                            </ul>
                        </div>
                    </div>
                );
            // Industry content
            case 'chemicals':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/chemicals.jpg" 
                                    alt="Hóa chất"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">Dịch vụ Hóa chất</div>
                            <p>Chúng tôi cung cấp đa dạng các sản phẩm hóa chất công nghiệp:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Hóa chất cơ bản: axit, bazơ, muối</li>
                                <li>Hóa chất đặc biệt cho ngành công nghiệp</li>
                                <li>Dung môi công nghiệp các loại</li>
                                <li>Hóa chất xử lý nước</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'fertilizers':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/fertilizers.jpg" 
                                    alt="Phân bón"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">Dịch vụ Phân bón</div>
                            <p>Chúng tôi chuyên cung cấp các loại phân bón chất lượng cao:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Phân bón NPK tổng hợp</li>
                                <li>Phân bón hữu cơ vi sinh</li>
                                <li>Phân bón lá và dinh dưỡng đặc biệt</li>
                                <li>Phân bón chuyên dụng cho từng loại cây trồng</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'feed':
                return (
                    <div className="flex gap-6">
                        <div className="w-1/3">
                            <div className="aspect-square bg-gray-200 rounded-lg">
                                <Image 
                                    src="/images/feed.jpg" 
                                    alt="Nguyên liệu thức ăn chăn nuôi"
                                    className="w-full h-full object-cover rounded-lg"
                                    width={500}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="w-2/3">
                            <div className="text-xl font-bold mb-4 text-indigo-700">Dịch vụ Nguyên liệu thức ăn chăn nuôi</div>
                            <p>Chúng tôi cung cấp đa dạng các nguyên liệu thức ăn chăn nuôi:</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>Bột cá, bột xương</li>
                                <li>Ngũ cốc và phụ phẩm</li>
                                <li>Premix vitamin và khoáng chất</li>
                                <li>Phụ gia thức ăn chăn nuôi</li>
                            </ul>
                        </div>
                    </div>
                );
            default:
                return (
                    <div>
                        <p>Viettrade Logistics luôn cung cấp các dịch vụ vận tải nhanh chóng và chuyên nghiệp.</p>
                        <p>Chúng tôi cũng cung cấp các lĩnh vực hàng hóa chất lượng cao.</p>
                    </div>
            );
        }
    };

    return (    
        <div className='bg-white'>
            {/* Add background cover image section */}
            <div 
                className="relative h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat mb-8"
                style={{
                    backgroundImage: "url('/meaning.png')",
                }}
            >
                {/* Add overlay to make text more readable */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Title */}
                <h1 className='absolute inset-0 flex items-center justify-center text-[30px] md:text-[50px] font-bold text-white px-4'>
                    DỊCH VỤ CỦA CHÚNG TÔI
                </h1>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row mb-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 mb-6 md:mb-0">
                        {/* Type buttons */}
                        <div className="flex md:flex-col mb-4 space-x-2 md:space-x-0 md:space-y-2">
                            <button
                                className={`flex-1 px-4 md:px-6 py-2 rounded-lg font-semibold ${
                                    activeType === 'solution' 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                                onClick={() => setActiveType('solution')}
                            >
                                Phương thức
                            </button>
                            <button
                                className={`flex-1 px-4 md:px-6 py-2 rounded-lg font-semibold ${
                                    activeType === 'industry' 
                                    ? 'bg-blue-500 text-white' 
                                    : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                                onClick={() => setActiveType('industry')}
                            >
                                Lĩnh vực
                            </button>
                        </div>
                        
                        {/* Category Navigation */}
                        <nav className="bg-gray-100 p-4 rounded-lg">
                            <ul className="flex flex-row md:flex-col flex-wrap gap-2 md:space-y-2">
                                {categories[activeType].map((category: Category) => (
                                    <li 
                                        key={category.id}
                                        className={`flex-1 md:flex-none cursor-pointer p-2 md:p-3 rounded-md transition-colors flex items-center justify-center md:justify-start ${
                                            activeCategory === category.id 
                                            ? 'bg-blue-500 text-white' 
                                            : 'hover:bg-gray-200'
                                        }`}
                                        onClick={() => setActiveCategory(category.id)}
                                    >
                                        {category.icon}
                                        <span className="hidden md:inline">{category.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white p-4 md:p-6 md:ml-6 rounded-lg border border-gray-200">
                        <div className="flex flex-col md:flex-row gap-6">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicePageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ServicePage />
        </Suspense>
    );
};

export default ServicePageWrapper;
