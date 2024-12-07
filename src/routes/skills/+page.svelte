<script lang="ts">
    import SkillCard from "./SkillCard.svelte";
    import { skills } from "$lib/data/skills";
</script>

<div class="container mx-auto p-4">
    <h1
        class="text-3xl font-bold text-primary_dark dark:text-primary_light my-8"
    >
        Skills
    </h1>

    <!-- Skills Cards (Vertical Layout) -->
    <div class="space-y-6">
        {#each skills as skill}
            <SkillCard {skill} />
        {/each}
    </div>
</div>
