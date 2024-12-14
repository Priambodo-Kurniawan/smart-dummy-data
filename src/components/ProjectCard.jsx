import { Link } from "react-router";
import ImageWithFallback from "./ImageWithFallback";

export default function ProjectCard({ project }) {
    const imagePrompt = `Coding project: ${project.title} with simple and minimalist background"`;
    return (
        <div
            key={project.id}
            className="flex items-center gap-4 border-b border-gray-200 py-4"
        >
            <div className="w-32">
                <ImageWithFallback
                    src={`https://pollinations.ai/p/${encodeURIComponent(
                        imagePrompt
                    )}?width=${500}&height=${500}&nologo=true&model=turbo`}
                    alt={project.title}
                    className="w-32 h-32 rounded-md object-cover"
                    errorImage="https://via.placeholder.com/150"
                />
            </div>
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                </p>
                <div className="mt-4 flex justify-between">
                    {/* Link react router */}
                    <Link
                        to={project.link}
                        className="text-orange-500 dark:text-orange-400"
                    >
                        {/* emoji rocket */}
                        🚀 Go to project
                    </Link>
                    {/* link to repositories */}
                    <a
                        href={project.repository}
                        target="_blank"
                        className="text-gray-500 dark:text-gray-400"
                    >
                        {/* emoji source code */}
                        📁 Source Code
                    </a>
                </div>
            </div>
        </div>
    );
}
