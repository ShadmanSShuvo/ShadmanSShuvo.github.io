<!-- <script lang="ts">
    import Project from "./Project.svelte";
    import { projects } from "$lib/data/projects";

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    projects.sort((a, b) => {
        const [aMonth, aYear] = a.date.split(" ");
        const [bMonth, bYear] = b.date.split(" ");

        const aMonthIndex = monthNames.indexOf(aMonth);
        const bMonthIndex = monthNames.indexOf(bMonth);

        // Create Date objects with month index and compare them
        const dateA = new Date(aYear, aMonthIndex);
        const dateB = new Date(bYear, bMonthIndex);

        // Sort in descending order
        return dateB - dateA;
    });
</script>

<div class="container p-4 mx-auto">
    {#each projects as project}
        <Project {project} />
        <div class="my-4 border-t border-gray-300 dark:border-gray-700"></div>
    {/each}
</div> -->

<script lang="ts">
    import ProjectCard from "./ProjectCard.svelte";
    import { projects } from "$lib/data/projects";
</script>

<div class="container mx-auto p-4">
    <h1
        class="text-3xl font-bold text-primary_dark dark:text-primary_light my-8"
    >
        Projects
    </h1>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>
