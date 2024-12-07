<script lang="ts">
    import { AwardOutline } from "flowbite-svelte-icons";
    export let achievement: {
        title: string;
        award: string;
        month: string;
        year: string;
        description: string;
    };
</script>

<div class="p-4 bg-primary_light dark:bg-primary_dark shadow-lg rounded-lg">
    <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
        <AwardOutline class="w-6 h-6 inline-block mr-2" />
        {achievement.title}
    </h3>
    <div
        class="flex justify-between items-center text-sm my-2 text-secondary_dark dark:text-secondary_light"
    >
        <span>{achievement.award}</span>
        <span>{achievement.month} {achievement.year}</span>
    </div>
    <p class="text-sm text-ink_light dark:text-ink_dark mt-2">
        {achievement.description}
    </p>
</div>
