'use client'
import { useLanguage } from '@/app/layout/LanguageContext';
import { newsTranslations } from '@/app/translations/index';

export default function News() {
    const { language } = useLanguage();
    const t = newsTranslations[language];

    return (
        <div>
            <div className="relative h-[300px] md:h-[500px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/meaning.png')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <h1 className='absolute inset-0 flex items-center justify-center text-[30px] md:text-[50px] font-bold text-white px-4'>
                    {t.pageTitle}
                </h1>
            </div>

            {/* Logistics News */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="border-b-4 w-fit border-blue-800">{t.sections.logistics.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                    {[1, 2, 3].map((item) => (
                        <div key={`logistics-${item}`} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/logistics-news.jpg" 
                                alt={`${t.sections.logistics.newsItem.altText} ${item}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold mb-2">{t.sections.logistics.newsItem.title} {item}</h3>
                                <p className="text-gray-600 text-sm">{t.sections.logistics.newsItem.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trading News */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="border-b-4 w-fit border-blue-800">{t.sections.trading.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                    {[1, 2, 3].map((item) => (
                        <div key={`trading-${item}`} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/trading-news.jpg" 
                                alt={`${t.sections.trading.newsItem.altText} ${item}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold mb-2">{t.sections.trading.newsItem.title} {item}</h3>
                                <p className="text-gray-600 text-sm">{t.sections.trading.newsItem.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* General News */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="border-b-4 w-fit border-blue-800">{t.sections.general.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                    {[1, 2, 3].map((item) => (
                        <div key={`general-${item}`} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
                            <img 
                                src="/general-news.jpg" 
                                alt={`${t.sections.general.newsItem.altText} ${item}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="font-bold mb-2">{t.sections.general.newsItem.title} {item}</h3>
                                <p className="text-gray-600 text-sm">{t.sections.general.newsItem.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video của công ty */}
            <div className="container mx-auto px-4 py-12">
                <h2 className="border-b-4 w-fit border-blue-800">{t.videos.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 py-5">
                    {/* Video chính */}
                    <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg mb-8">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/your-video-id"
                            title={t.videos.main.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Danh sách video khác */}
                    <div className="pb-4">
                        {[1, 2, 3].map((item) => (
                            <div key={`video-${item}`} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                                <div className="relative pt-[46.25%]">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src={`https://www.youtube.com/embed/video-id-${item}`}
                                        title={`Video ${item}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="px-4 py-2">
                                    <h3 className="font-bold mb-2">{t.videos.other.title} {item}</h3>
                                    <p className="text-gray-600 text-sm">{t.videos.other.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
  