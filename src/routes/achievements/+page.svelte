<script lang="ts">
    import AchievementSection from "./AchievementSection.svelte";
    import { achievements } from "$lib/data/achievements";
</script>

<div class="container mx-auto p-4 my-8">
    <h1
        class="text-3xl font-bold text-primary_dark dark:text-primary_light mb-6"
    >
        Achievements
    </h1>
    {#each achievements as { section, items }}
        <AchievementSection sectionTitle={section} achievements={items} />
    {/each}
</div>
