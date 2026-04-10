import { Navbar } from "@/src/components/ui"
import { ContactBackground, ContactBody } from "./components"

export const ContactSection = () => {
    return (
        <div className="relative flex flex-col gap-6 bg-black px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:gap-10 md:p-10" id="contact">
            <ContactBackground />
            <Navbar active="contacto" isLogo={false} />
            <ContactBody />
        </div>
    )
}
