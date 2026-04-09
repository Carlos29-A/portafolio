import { Title } from "@/src/components/ui/title/Title"

export const About = () => {
    return (
        <div>
            <Title size="text-2xl" text="about me" />
            <div className="p-5">
                <p className="text-gray-400 uppercase text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi odit iure reprehenderit dolor nisi, totam nihil voluptate excepturi,
                    eum provident aut atque molestiae recusandae numquam modi minima, sunt doloribus ipsum.
                </p>
            </div>

        </div>
    )
}
