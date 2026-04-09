import { Title } from "@/src/components/ui"

const skills = ["Next.js", "Node.js", "Supabase", "FastAPI"]

export const Skills = () => {
    return (
        <div>
            <Title size="text-2xl" text="software skills" />
            <div className="flex gap-4 mt-10">
                {skills.map((skill) => (
                    <span key={skill} className="bg-gray-800 px-3 py-2 rounded">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
