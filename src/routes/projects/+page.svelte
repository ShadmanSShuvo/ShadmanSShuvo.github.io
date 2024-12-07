<script lang="ts">
    import { goto } from "$app/navigation";
    import persistent_store from "$lib/stores/persistentstore";

    import ProjectCard from "./ProjectCard.svelte";
    import { projects } from "$lib/data/projects";

    let prevUrl = "/achievements";
    let nextUrl = "/skills";
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

    <div class="flex justify-between items-center mt-8 w-full">
        <!-- Previous Page -->
        <button
            class="block py-2 px-4 transition-all rounded text-ink_light hover:bg-gray-100 hover:text-secondary_light md:p-0 dark:text-ink_dark dark:hover:text-secondary_dark dark:hover:bg-gray-700"
            on:click|stopPropagation={() => {
                $persistent_store.activeUrl = prevUrl;
                localStorage.setItem(
                    "persistent_store",
                    JSON.stringify($persistent_store),
                );
                goto(prevUrl);
            }}
        >
            ← Previous
        </button>

        <!-- Next Page -->
        <button
            class="block py-2 px-4 transition-all rounded text-ink_light hover:bg-gray-100 hover:text-secondary_light md:p-0 dark:text-ink_dark dark:hover:text-secondary_dark dark:hover:bg-gray-700"
            on:click|stopPropagation={() => {
                $persistent_store.activeUrl = nextUrl;
                localStorage.setItem(
                    "persistent_store",
                    JSON.stringify($persistent_store),
                );
                goto(nextUrl);
            }}
        >
            Next →
        </button>
    </div>
</div>
