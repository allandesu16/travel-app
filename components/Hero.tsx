import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />

            <div className="relative z-20 flex flex-col gap-6 xl:w-1/2">
                <Image
                    src={"/camp.svg"}
                    alt="camp"
                    width={50}
                    height={50}
                    className="absolute top-[-50px] left-[-5px] w-10 lg:w-[50px]"
                />
                <h1 className="lg:text-2xl sm:text-xl font-bold">
                    Hilink Camp Area
                </h1>
                <p className="text-sm mt-1 text-gray-30 xl:max-w-[520px]">
                    We want to be in each one of your journeys seeking the
                    satisfaction of seeing your incorruptible beauty of nature.
                    We can help you on an adventure around the world in just one
                    app
                </p>
                <div className="my-10 flex flex-wrap gap-5">
                    <div className=" items-center gap-1 flex">
                        {Array(5)
                            .fill(1)
                            .map((_, index) => (
                                <Image
                                    key={index}
                                    src={"/star.svg"}
                                    alt="star"
                                    width={18}
                                    height={18}
                                />
                            ))}
                    </div>
                    <p className="bold-10 lg:bold-16 text-blue-70">
                        198k
                        <span className="text-sm ml-1">Excellent Reviews</span>
                    </p>
                </div>
                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Download App"
                        variant="btn_green"
                    />
                    <Button
                        type="button"
                        title="How we work?"
                        icon="/play.svg"
                        variant="btn_white_text"
                    />
                </div>
            </div>
            <div className="relative flex flex-1 items-start ">
                <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-5 py-6">
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="text-base text-gray-20">Location</p>
                            <Image
                                src={"/close.svg"}
                                alt="close"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="font-bold text-base text-white">
                            Musanze, Muhoza
                        </p>
                    </div>

                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="text-base block text-gray-20">
                                Distance
                            </p>
                            <p className="font-semibold text-white">
                                206.39 km
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-base block text-gray-20">
                                Elevation
                            </p>
                            <p className="font-semibold text-white">2.011 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
