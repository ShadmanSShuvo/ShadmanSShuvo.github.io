<script lang="ts">
    import { StarSolid } from "flowbite-svelte-icons";
    import AchievementCard from "./AchievementCard.svelte";

    export let sectionTitle: string;
    export let achievements: Array<{
        title: string;
        award: string;
        month: string;
        year: string;
        description: string;
    }>;
</script>

<section class="my-8">
    <h2
        class="text-2xl font-bold text-secondary_dark dark:text-secondary_light mb-4 flex items-center"
    >
        <StarSolid class="w-6 h-6 inline-block mr-2" />
        {sectionTitle}
    </h2>
    <div class="space-y-6">
        {#each achievements as achievement}
            <AchievementCard {achievement} />
        {/each}
    </div>
    <hr
        class="my-8 border-t border-secondary_light dark:border-secondary_dark"
    />
</section>
