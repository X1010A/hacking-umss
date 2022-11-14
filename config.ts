import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { NavbarLinkProps } from "./components/navbar-link"

type SocialLinkProps = {
    icon: IconProp,
    url: string
}

type ConfigProps = {
    socialLinks: SocialLinkProps[],
    navbarLinks: NavbarLinkProps[]
    blogDescription: string
}

// config.ts
const Config: ConfigProps = {
    socialLinks: [
        {
            icon: faFacebook,
            url: "#"
        },
        {
            icon: faYoutube,
            url: "https://www.youtube.com/channel/UCXYsDuT6s8eQGgedkeuEbzw"
        }

    ],
    navbarLinks: [
        {
            text: "Módulo 1",
            href: "#"
        },
        {
            text: "Módulo 2",
            href: "#"
        },
        {
            text: "Módulo 3",
            href: "#"
        },
        {
            text: "Módulo 4",
            href: "#"
        },
        {
            text: "Canales de YOUTUBE",
            href: "#"
        }
    ],
    blogDescription: "Bienvenido a la comunidad de HACKING UMSS"
}

export default Config