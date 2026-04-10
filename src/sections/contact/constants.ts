import type { IconType } from "react-icons"
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export type SocialLinkItem = {
    id: string
    href: string
    label: string
    Icon: IconType
}

export const CONTACT_SOCIAL_LINKS: SocialLinkItem[] = [
    { id: "linkedin", href: "#", label: "carlosaguilarvillanueva", Icon: FaLinkedinIn },
    { id: "github", href: "https://github.com/Carlos29-A", label: "Carlos29-A", Icon: FaGithub },
    { id: "instagram", href: "#", label: "carlosaguilarvillanueva", Icon: FaInstagram },
    {
        id: "email",
        href: "mailto:caguilarvillanueva68@gmail.com",
        label: "caguilarvillanueva68@gmail.com",
        Icon: FaEnvelope,
    },
]
