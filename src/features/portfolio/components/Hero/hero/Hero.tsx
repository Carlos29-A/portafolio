import { ProfileImage } from "../profile-image/ProfileImage"
import { Title } from "../title/Title"

export const Hero = () => {
    return (
        <section className="flex flex-col gap-10 items-center justify-center">
            <Title />
            <ProfileImage />
        </section>
    )
}
