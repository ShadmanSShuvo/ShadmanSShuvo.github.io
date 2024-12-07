<script lang="ts">
    import { GithubSolid, YoutubeSolid } from "flowbite-svelte-icons";

    export let project: {
        title: string;
        imageUrl: string;
        githubUrl: string;
        youtubeUrl?: string;
        tags: string[];
        year: string;
        description: string;
    };
</script>

<div
    class="p-4 bg-primary_light dark:bg-primary_dark shadow-md rounded-lg flex flex-col"
>
    <!-- Image -->
    <img
        src={project.imageUrl}
        alt={project.title}
        class="rounded-t-lg mb-4 object-cover h-48 w-full"
    />

    <!-- Title and Links -->
    <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
            {project.title}
        </h3>
        <div class="flex gap-3">
            <a href={project.githubUrl} target="_blank" aria-label="GitHub">
                <GithubSolid size="xl" />
            </a>
            {#if project.youtubeUrl}
                <a
                    href={project.youtubeUrl}
                    target="_blank"
                    aria-label="YouTube"
                >
                    <YoutubeSolid size="xl" />
                </a>
            {/if}
        </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-2">
        {#each project.tags as tag}
            <span
                class="px-2 py-1 text-secondary_light text-xs rounded dark:text-secondary_dark"
            >
                {tag}
            </span>
        {/each}
    </div>

    <!-- Year -->
    <p class="text-sm text-secondary_dark dark:text-secondary_light mb-2">
        {project.year}
    </p>

    <!-- Description -->
    <div class="text-sm text-ink_light dark:text-ink_dark">
        <p>{project.description}</p>
    </div>

    <!-- Divider -->
    <hr class="my-4 border-gray-300 dark:border-gray-700" />
</div>
