import { ROUTES } from "./routes";

const links = {
    twitter: "https://twitter.com/SMTanimur",
    github: "https://github.com/SMTanimur/Zazila-bazar",
    githubAccount: "https://github.com/SMTanimur",
};

export const siteConfig = {
    name: "Zazila-bazar",
    description:
        "An open source e-commerce jazila-bazar build with everything new in Next.js 13.",
    url: "https://jazila-bazar.vercel.app",
    ogImage: "https://jazila-bazar.vercel.app/opengraph-image.png",
    mainNav: [
        {
            title: "Home",
            href: ROUTES.HOME,
        },
    ],
    links,
};