import type { Project } from "$lib/interfaces/project";
import cis_poster from "$lib/images/cis.png";
import sunshine_poster from "$lib/images/sunshine.jpg";
import robi_datathon_poster from "$lib/images/robi_datathon.jpg";
import buet_cse_courseworks_poster from "$lib/images/buet_cse_courseworks.jpg";
import dl_sprint_2_poster from "$lib/images/dl_sprint_2.png";

export const projects: Project[] = [
    {
        title: "CIS | Caring Is Sharing",
        imageUrl: cis_poster,
        date: "August 2023",
        tags: ["FTP", "Socket-Programming", "Networking"],
        description: "CIS is a Java-based application that provides FTP (File Transfer Protocol) functionality for transferring files between a client and a server.",
        links: {
            github: "https://github.com/BRAINIAC2677/CIS-Caring-Is-Sharing",
        },
    },
    {
        title: "Sunshine",
        imageUrl: sunshine_poster,
        date: "October 2021",
        tags: ["NASA Space Apps Challenge", "React-Native", "Firebase"],
        description: "Sunshine app will help to empower and encourage solar energy among mass people and assist to keep track of the system of the installed solar system.",
        links: {
            github: "https://github.com/BRAINIAC2677/Sunshine",
        },
    },
    {
        title: "Robi Datathon 3.0",
        imageUrl: robi_datathon_poster,
        date: "May 2024",
        tags: ["Data Analysis", "Machine Learning"],
        description: "Reached to the Final Round (top 20) of Robi Datathon 3.0. However, couldn't attend the final round due to exam date collision. 😞",
        links: {
            github: "https://github.com/BRAINIAC2677/Robi-Datathon-3.0",
        },
    },
    {
        title: "BUET CSE Courseworks",
        imageUrl: buet_cse_courseworks_poster,
        date: "July 2023",
        tags: ["BUET CSE", "Courseworks"],
        description: "This doc contains the links to all of my course works and course related extra works of BUET CSE.",
        links: {
            github: "https://github.com/BRAINIAC2677/BUET-CSE-Courseworks",
        },
    },
    {
        title: "Document Layout Analysis on BaDLAD Dataset: A Comprehensive MViTv2 Based Approach",
        imageUrl: dl_sprint_2_poster,
        date: "August 2023",
        tags: ["Computer Vision", "Bangla Document Layout Analysis", "Deep Learning"],
        description: "In our work, we have trained MViTv2 transformer model architecture with cascaded mask R-CNN on BaDLAD dataset to extract text box, paragraphs, images and tables from a document. ",
        links: {
            github: "https://github.com/BRAINIAC2677/Deep-Learning-Sprint-2.0",
            report: "https://arxiv.org/abs/2308.16571",
            slides: "https://docs.google.com/presentation/d/1A86zG53gdusrji9drY2pffjWX60D6s4D/edit?pli=1#slide=id.p1",
            winner: "https://www.kaggle.com/competitions/dlsprint2/leaderboard"
        },
    },




]