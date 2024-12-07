<script lang="ts">
    import ResearchCard from "./ResearchCard.svelte";
    import { researches } from "$lib/data/researches";
</script>

<div class="container mx-auto p-4">
    <h1
        class="text-3xl font-bold text-primary_dark dark:text-primary_light mb-6"
    >
        Research
    </h1>

    <!-- Research Cards (Vertical Layout) -->
    <div class="space-y-6">
        {#each researches as research}
            <ResearchCard {research} />
        {/each}
    </div>
</div>
