// Scroll to section
export const scrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section)
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" })
    }
}