<script lang="ts">
    import EducationCard from "./EducationCard.svelte";
    import { education_milestone } from "$lib/data/education";
</script>

<div class="container mx-auto p-4">
    <h1
        class="text-3xl font-bold text-primary_dark dark:text-primary_light my-8"
    >
        Education
    </h1>

    <!-- Education Cards -->
    <div class="space-y-6">
        {#each education_milestone as education}
            <EducationCard {education} />
        {/each}
    </div>
</div>
