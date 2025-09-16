import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BannerSection from "../components/BannerSection";
import servicesData from "../data/servicesData";

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = servicesData.find(
        (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") === slug
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!service)
        return (
            <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
                <h2 className="text-3xl font-bold text-[#222] mb-4">Service Not Found</h2>
                <p className="text-[#666] mb-6">
                    Sorry, the service you are looking for does not exist or has been removed.
                </p>
                <Link
                    to="/services"
                    className="px-6 py-3 bg-[#ED202B] text-white font-semibold rounded hover:bg-[#c01a23] transition-colors"
                >
                    Back to Services
                </Link>
            </section>
        );

    return (
        <>
            <BannerSection />

            <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 flex flex-col gap-12">
                {/* Title and Long Description */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-4">{service.title}</h2>
                    <p className="text-[#666] leading-7 md:leading-8">{service.longDescription}</p>
                </div>

                {/* Images in a responsive grid */}
                {service.otherImages && service.otherImages.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {service.otherImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${service.title} ${idx + 1}`}
                                className="w-full h-64 md:h-48 lg:h-64 object-cover rounded"
                            />
                        ))}
                    </div>
                )}

                {/* Extra Checklist Section */}
                {service.extraData?.checklist && (
                    <div className="flex flex-col gap-8">
                        {service.extraData.checklist.map((item, idx) => (
                            <div key={idx}>
                                <h4 className="text-xl md:text-2xl font-semibold text-[#222] mb-2">{item.title}</h4>
                                <p className="text-[#666] leading-7 md:leading-8">{item.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
};

export default ServiceDetail;
