<script lang="ts">
    export let project: any = {};
</script>

<div class="my-8">
    <h2 class="text-lg font-bold underline">{project.title}</h2>
    <img
        src={project.imageUrl}
        alt={project.title}
        class="mx-auto my-4 max-w-72"
    />
    <p class="font-semibold text-left">{project.date}</p>
    <div class="flex flex-wrap justify-start gap-4 my-2">
        {#each project.tags as tag}
            <span class="px-2 py-1 bg-gray-200 rounded dark:bg-gray-700"
                >{tag}</span
            >
        {/each}
    </div>
    <p>{project.description}</p>
    <div class="flex flex-row justify-start gap-4 my-4">
        {#if project.links.github}
            <a href={project.links.github} class="underline">GitHub</a>
        {/if}
        {#if project.links.slides}
            <a href={project.links.slides} class="underline">Slides</a>
        {/if}
        {#if project.links.abstract}
            <a href={project.links.abstract} class="underline">Abstract</a>
        {/if}
    </div>
</div>
