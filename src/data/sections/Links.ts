import { SectionItem, SectionWithItems } from "@/components/layout/types"

const LinksItems: SectionItem[] = [
    {
        link: "https://www.linkedin.com/in/ebsaral",
        image: {
            src: "/images/linkedin-logo.png",
            alt: "LinkedIn logo",
            width: 33
        },
        translationPaths: {
            title: "Links.LinkedIn",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://www.github.com/ebsaral",
        image: {
            src: "/images/github-logo.png",
            alt: "GitHub logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Github",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://www.dev.to/ebsaral",
        image: {
            src: "/images/devto-logo.png",
            alt: "Dev.to logo",
            width: 33
        },
        translationPaths: {
            title: "Links.DevTo",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://stackoverflow.com/users/1437254/emin-bugra-saral?tab=profile",
        image: {
            src: "/images/stackoverflow-logo.png",
            alt: "Stackoverflow logo",
            width: 33
        },
        translationPaths: {
            title: "Links.Stackoverflow",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://www.deviantart.com/eminbugrasaral",
        image: {
            src: "/images/deviantart-logo.png",
            alt: "DeviantArt logo",
            width: 33
        },
        translationPaths: {
            title: "Links.DeviantArt",
        },
        titleStyle: "text-sm"
    },
    {
        link: "https://fetlife.com/users/16201534",
        image: {
            src: "/images/fetlife-logo.png",
            alt: "FetLife logo",
            width: 33
        },
        translationPaths: {
            title: "Links.FetLife",
        },
        titleStyle: "text-sm"
    },
]

export const LinksSection: SectionWithItems = {
    translationPaths: {
        title: "Links.title"
    },
    items: LinksItems,
    minCol: 2,
    maxCol: 3,
    id: "links"
}
