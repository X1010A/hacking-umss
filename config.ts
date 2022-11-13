import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
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
            icon: faTwitter,
            url: "#"
        },
        {
            icon: faInstagram,
            url: "#"
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