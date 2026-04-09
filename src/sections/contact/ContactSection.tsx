import { Navbar } from "@/src/components/ui"
import { ContactBackground, ContactBody } from "./components"

export const ContactSection = () => {
    return (
        <div className="relative flex flex-col gap-10 bg-black p-10" id="contact">
            <ContactBackground />
            <Navbar active="contacto" isLogo={false} />
            <ContactBody />
        </div>
    )
}
