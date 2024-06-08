<script lang="ts">
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
</div>
