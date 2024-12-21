'use client'
import { useLanguage } from '@/app/layout/LanguageContext';
import { contactTranslations } from '@/app/translations/index';

export default function Contact() {
    const { language } = useLanguage();
    const t = contactTranslations[language];

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

            {/* Contact Form */}
            <div className="container mx-auto px-10 py-20">
                <h2 className="text-center mx-auto">{t.formTitle}</h2>
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    {t.form.name.label} <span className="text-red-500">{t.form.required}</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={t.form.name.placeholder}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                    {t.form.email.label} <span className="text-red-500">{t.form.required}</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={t.form.email.placeholder}
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                    {t.form.phone.label} <span className="text-red-500">{t.form.required}</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={t.form.phone.placeholder}
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                                    {t.form.company.label}
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={t.form.company.placeholder}
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                    {t.form.address.label}
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder={t.form.address.placeholder}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                                {t.form.subject.label} <span className="text-red-500">{t.form.required}</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder={t.form.subject.placeholder}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                {t.form.message.label} <span className="text-red-500">{t.form.required}</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={6}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder={t.form.message.placeholder}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                {t.form.submit}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}