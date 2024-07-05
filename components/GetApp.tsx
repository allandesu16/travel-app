import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
    return (
        <section className="flexCenter w-full flex-col pb-[100px]">
            <div className="get-app">
                <div className="flex w-full flex-col items-start gap-10 z-20">
                    <h2 className="font-bold lg:text-2xl sm:text-lg xl:max-w-[320px]">
                        Get the app
                    </h2>
                    <p className="text-sm text-gray-10">
                        Available on iOS and Android
                    </p>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap lg:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            icon="/apple.svg"
                            variant="btn_white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon="/apple.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src={"/phones.png"}
                        alt="phone"
                        width={560}
                        height={640}
                    />
                </div>
            </div>
        </section>
    );
};

export default GetApp;
