<script lang="ts">
    import { GithubSolid, YoutubeSolid, TagSolid } from "flowbite-svelte-icons";

    export let teaching: {
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
        src={teaching.imageUrl}
        alt={teaching.title}
        class="rounded-t-lg mb-4 object-cover h-48 w-full"
    />

    <!-- Title and Links -->
    <div class="flex justify-between items-center mb-2">
        <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
            {teaching.title}
        </h3>
        <div class="flex gap-3">
            <a href={teaching.githubUrl} target="_blank" aria-label="GitHub">
                <GithubSolid size="xl" />
            </a>
            {#if teaching.youtubeUrl}
                <a
                    href={teaching.youtubeUrl}
                    target="_blank"
                    aria-label="YouTube"
                >
                    <YoutubeSolid size="xl" />
                </a>
            {/if}
        </div>
    </div>

    <!-- Tags -->
    <div class="flex flex-wrap gap-2 mb-2 items-center">
        <TagSolid
            size="sm"
            class="text-secondary_light dark:text-secondary_dark"
        />
        {#each teaching.tags as tag}
            <span
                class="px-2 py-1 text-secondary_light text-xs rounded dark:text-secondary_dark"
            >
                {tag}
            </span>
        {/each}
    </div>

    <!-- Year -->
    <p class="text-sm text-secondary_dark dark:text-secondary_light mb-2">
        {teaching.year}
    </p>

    <!-- Description -->
    <div class="text-sm text-ink_light dark:text-ink_dark">
        <p>{teaching.description}</p>
    </div>

    <!-- Divider -->
    <hr class="my-4 border-gray-300 dark:border-gray-700" />
</div>
