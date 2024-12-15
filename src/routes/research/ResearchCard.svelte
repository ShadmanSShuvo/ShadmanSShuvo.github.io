<script lang="ts">
    import { BookOpenSolid, ReceiptSolid } from "flowbite-svelte-icons";

    export let research: {
        title: string;
        arxivUrl: string;
        keywords: string[];
        coAuthors: string[];
        abstract: string;
    };
</script>

<div
    class="p-6 bg-primary_light dark:bg-primary_dark shadow-md rounded-lg w-full mb-6"
>
    <!-- Title and arXiv Link -->
    <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
            <BookOpenSolid class="w-6 h-6 inline-block mr-2" />
            {research.title}
        </h3>
        {#if research.arxivUrl}
            <a
                href={research.arxivUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary_dark dark:text-secondary_light hover:underline"
            >
                <i class="fab fa-arxiv mr-2"></i> arXiv
            </a>
        {/if}
    </div>

    <!-- Keywords -->
    <div class="flex flex-wrap gap-2 mb-4">
        {#each research.keywords as keyword}
            <span
                class="px-2 py-1 bg-secondary_light text-ink_light text-xs rounded dark:bg-secondary_dark dark:text-ink_dark"
            >
                {keyword}
            </span>
        {/each}
    </div>

    <!-- Co-authors -->
    {#if research.coAuthors.length > 0}
        <p class="text-sm text-secondary_dark dark:text-secondary_light mb-6">
            <strong>Co-authors:</strong>
            {research.coAuthors.join(", ")}
        </p>
    {/if}
    <!-- Abstract -->
    <p class="text-sm text-ink_light dark:text-ink_dark text-justify">
        <strong>Abstract:</strong>
        {research.abstract}
    </p>
</div>
