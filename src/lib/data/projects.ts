import type { Project } from "$lib/interfaces/project";
import dummy_image from "$lib/images/black.jpg";

export const projects: Project[] = [
    {
        title: "Project Title",
        imageUrl: dummy_image,
        date: "Month Year",
        tags: ["Tag1", "Tag2"],
        description: "Short description of the project.",
        links: {
            github: "https://github.com/",
            slides: "https://slides.com/",
        },
    },

]