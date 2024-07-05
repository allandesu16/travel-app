import { PEOPLE_URL } from "@/constants/constants";
import Image from "next/image";

type CampProps = {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
    price: string;
};

const CampCards = ({
    backgroundImage,
    title,
    subtitle,
    peopleJoined,
    price,
}: CampProps) => {
    return (
        <div
            className={`h-5/6 w-full min-w-[650px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-5xl 2xl:rounded-5xl`}
        >
            <div className="flex h-full flex-col items-start justify-between p-4 lg:px-12 lg:py-6">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-2">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-bold text-lg text-white">{title}</p>
                        <p className="regular-14 text-white bold-16">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-between  ">
                    <p className="font-bold flex gap-2 text-base text-white">
                        <span className="flex -space-x-4 overflow-hidden">
                            {PEOPLE_URL.map((url) => (
                                <Image
                                    src={url}
                                    key={url}
                                    alt="person"
                                    width={32}
                                    height={32}
                                />
                            ))}
                        </span>
                        {peopleJoined}
                    </p>
                    <p className="text-white my-1 font-bold relative ">
                        {price}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default CampCards;
