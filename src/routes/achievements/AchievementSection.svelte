<script lang="ts">
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
        class="text-2xl font-bold text-secondary_dark dark:text-secondary_light mb-4"
    >
        {sectionTitle}
    </h2>
    <div class="space-y-6">
        {#each achievements as achievement}
            <AchievementCard {achievement} />
        {/each}
    </div>
</section>

<!-- <script lang="ts">
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
        class="text-2xl font-bold text-secondary_dark dark:text-secondary_light mb-4"
    >
        {sectionTitle}
    </h2>
    <div class="relative space-y-6">
        {#each achievements as achievement, index}
            <div class="flex items-start relative">
                <div
                    class="flex-shrink-0 w-4 h-4 rounded-full bg-secondary_dark dark:bg-secondary_light relative z-10"
                ></div>

                {#if index < achievements.length - 1}
                    <div
                        class="absolute top-4 left-2 w-px h-[calc(100%-1rem)] bg-secondary_dark dark:bg-secondary_light"
                    ></div>
                {/if}

                <div class="ml-6">
                    <AchievementCard {achievement} />
                </div>
            </div>
        {/each}
    </div>
</section> -->

<!-- <script lang="ts">
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
        class="text-2xl font-bold text-secondary_dark dark:text-secondary_light mb-4"
    >
        {sectionTitle}
    </h2>
    <div class="relative">
        {#each achievements as achievement, index}
            <div class="flex items-start relative">
                <div
                    class="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-secondary_dark dark:bg-secondary_light relative z-10 ring-2 ring-opacity-50 ring-secondary_dark dark:ring-secondary_light"
                ></div>

                {#if index < achievements.length - 1}
                    <div
                        class="absolute top-2.5 left-0.75 w-px h-[calc(100%-0.75rem)] bg-secondary_dark dark:bg-secondary_light"
                    ></div>
                {/if}

                <div class="ml-8 flex-1">
                    <AchievementCard {achievement} />
                </div>
            </div>
        {/each}
    </div>
</section> -->
