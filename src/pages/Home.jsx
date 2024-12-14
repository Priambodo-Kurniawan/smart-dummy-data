import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
    // array of objects, each object represents a project
    const projects = [
        {
            id: 1,
            title: "Create Dummy Data Project",
            description:
                "Create dummy data products for the cart. The data should contain an array of products, each product should have an id, image, name, description, color, tag, quantity, price, hexCode, and currency.",
            imageUrl: "https://via.placeholder.com/150",
            link: "/dummy-data",
            repository:
                "https://github.com/Priambodo-Kurniawan/smart-dummy-data/tree/feat/text-placeholder",
        },
        {
            id: 2,
            title: "Dialog Generator Project",
            description:
                "Create a dialog generator project. The data should contain an array of chat, each chat animated like a real chat.",
            imageUrl: "https://via.placeholder.com/150",
            link: "/dialog",
            repository:
                "https://github.com/Priambodo-Kurniawan/smart-dummy-data/tree/feat/ai-conversation",
        },
    ];
    return (
        <div className="max-w-3xl w-full mx-auto bg-white md:p-6 p-4 rounded-lg shadow flex-1 justify-between flex flex-col">
            {/* informasi bahwa ini adalah kumpulan project dari iam */}
            <div>
                <h1 className="text-2xl font-bold mb-5">Projects</h1>

                {/* looping array projects */}
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <Footer />
        </div>
    );
}
