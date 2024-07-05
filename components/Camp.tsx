import React from "react";
import { CARD_DATA } from "@/constants/constants";
import { PEOPLE_URL } from "@/constants/constants";
import CampCards from "./CampCards";
import Image from "next/image";

const Camp = () => {
    return (
        <section className=" lg:max-w-[1280px] relative flex flex-col py-6 lg:mb-8 lg:py-16 xl:mb-16  m-auto">
            <div className="flex p-6 flex-col">
                <h1 className="font-bold sm:text-lg lg:text-2xl">
                    Top Destinations
                </h1>
                <p className="text-sm text-gray-30 xl:max-w-[520px]">
                    View Our top spots
                </p>
            </div>
            <div className="hide-scrollbar flex h-[280px] w-full  items-start justify-start gap-8 overflow-x-auto lg:h-[360px] xl:h-[500px] ">
                {/* <CampCards
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prigen, Pasuruan"
                    peopleJoined="50+ Joined"
                /> */}
                {CARD_DATA.map((data) => (
                    <CampCards
                        key={data.title}
                        backgroundImage={data.backgroundImage}
                        title={data.title}
                        subtitle={data.subtitle}
                        peopleJoined={data.peopleJoined}
                        price={data.price}
                    />
                ))}
            </div>
            <div className="flexEnd  mt-10 px-6 lg:-mt-48 lg:mr-6">
                <div className="bg-green-50 p-6 lg:max-w-[350px] xl:max-w-[480px] rounded-3xl px-6 py-4 relative w-full overflow-hidden ">
                    <h2 className="text-lg md:regular-24 2xl:regular-40 capitalize text-white">
                        <strong>Feeling Lost</strong> And Not Knowing The Way?
                    </h2>
                    <p className="text-sm xl:regular-base mt-3 text-white">
                        Starting from the anxiety of the climbers when visiting
                        a new climbing location, the possibility of getting lost
                        is very large . Thats wht we are here for those of you
                        who want to start an adventure.
                    </p>
                    <Image
                        src={"/quote.svg"}
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    );
};

export default Camp;
