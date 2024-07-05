import { FEATURES } from "@/constants/constants";
import Image from "next/image";
import { title } from "process";
import React from "react";

const Features = () => {
    return (
        <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-no-repeat py-16 ">
            <div className="max-container padding-container relative w-full justify-end flex">
                <div className="flex flex-1 lg:min-h-[760px]">
                    <Image
                        src={"/phone.png"}
                        alt="phone"
                        width={360}
                        height={460}
                        className="feature-phone"
                    />
                </div>
                <div className="flex z-20 w-full flex-col lg:w-[60%]">
                    <div className="relative">
                        <Image
                            src={"/camp.svg"}
                            alt="camp"
                            width={50}
                            height={50}
                            className=" absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
                        />
                        <h2 className="font-bold lg:text-32 sm:text-2xl">
                            Our Features
                        </h2>
                    </div>
                    <ul className="mt-10 grid gap-10 md:grip-cols-2 lg:mg-20 lg:gap-10">
                        {FEATURES.map((feature) => (
                            <FeatureItem
                                title={feature.title}
                                key={feature.title}
                                icon={feature.icon}
                                description={feature.description}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

type FeatureItem = {
    title: string;
    icon: string;
    description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
    return (
        <li className="flex w-full flex-1 flex-col items-start">
            <div className="rounded-full p-2 lg:p-5 bg-green-50">
                <Image src={icon} alt="map" width={28} height={28} />
            </div>
            <h2 className="font-bold lg:text-xl  sm:text-lg mt-2 capitalize">
                {title}
            </h2>
            <p className="text-sm mt-2 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                {description}
            </p>
        </li>
    );
};

export default Features;
