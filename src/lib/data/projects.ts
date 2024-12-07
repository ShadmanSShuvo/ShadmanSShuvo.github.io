import sunshine_poster from "$lib/images/sunshine.jpg";
import buet_cse_courseworks_poster from "$lib/images/buet_cse_courseworks.jpg";
import taskflow_poster from "$lib/images/taskflow.png";

export const projects = [
    {
        title: "BUET CSE Courseworks",
        imageUrl: buet_cse_courseworks_poster,
        githubUrl: "https://github.com/BRAINIAC2677/BUET-CSE-Courseworks",
        youtubeUrl: null,
        tags: ["BUET CSE", "Courseworks"],
        year: "2023",
        description: "This doc contains the links to all of my course works and course related extra works of BUET CSE."
    },
    {
        title: "TaskFlow",
        imageUrl: taskflow_poster,
        githubUrl: "https://github.com/BRAINIAC2677/taskflow",
        youtubeUrl: null,
        tags: ["Svelte", "Typescript", "Node.js", "postgreSQL"],
        year: "2024",
        description:
            "TaskFlow is an advanced AI powered task management system that helps you to manage your tasks efficiently.",
    },
    {
        title: "Sunshine",
        imageUrl: sunshine_poster,
        githubUrl: "https://github.com/BRAINIAC2677/Sunshine",
        youtubeUrl: null,
        tags: ["NASA Space Apps Challenge", "React-Native", "Firebase"],
        year: "2021",
        description:
            "Sunshine app will help to empower and encourage solar energy among mass people and assist to keep track of the system of the installed solar system.",
    },

];

