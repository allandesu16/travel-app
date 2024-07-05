import {
    FOOTER_CONTACT_INFO,
    FOOTER_LINKS,
    SOCIALS,
} from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="bold-16 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="flexCenter mb-20">
            <div className="flex w-full max-container padding-container max-container flex-col  gap-10">
                <div className="flex flex-col items-start justify-center gap-[10%] mg:flex-row">
                    <Link href="/" className="mb-10" />
                    <Image
                        src={"/hilink-logo.svg"}
                        alt="logo"
                        width={74}
                        height={29}
                    />
                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FOOTER_LINKS.map((columns) => (
                            <FooterColumn
                                title={columns.title}
                                key={columns.title}
                            >
                                <ul className="flex flex-col gap-3 text-gray-50 text-sm">
                                    {columns.links.map((link) => (
                                        <Link href={"/"} key={link}>
                                            {link}
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        ))}
                        <div className="flex flex-col gap-4">
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link
                                        href={"/"}
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap text-sm text-gray-50">
                                            {link.label}
                                        </p>
                                        <p className="text-sm whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map((link) => (
                                        <Link href={"/"} key={link}>
                                            <Image
                                                src={link}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                            />
                                        </Link>
                                    ))}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="text-sm text-gray-30 w-full text-center">
                    2024 Hilink. All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
