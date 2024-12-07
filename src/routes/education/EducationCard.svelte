<script lang="ts">
    export let education: {
        institution: string;
        timeline: string;
        degree: string;
        grade: string;
        description?: string | null;
        courses?: string[] | null;
    };
</script>

<div
    class="p-4 bg-primary_light dark:bg-primary_dark shadow-md rounded-lg flex flex-col space-y-2"
>
    <!-- Institution and Timeline -->
    <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold text-primary_dark dark:text-primary_light">
            {education.institution}
        </h3>
        <span class="text-sm text-secondary_dark dark:text-secondary_light">
            {education.timeline}
        </span>
    </div>

    <!-- Degree and Grade -->
    <div class="flex justify-between items-center">
        <p class="text-sm text-primary_dark dark:text-primary_light">
            {education.degree}
        </p>
        <p class="text-sm text-secondary_dark dark:text-secondary_light">
            {education.grade}
        </p>
    </div>

    <!-- Description -->
    {#if education.description}
        <p class="text-sm text-ink_light dark:text-ink_dark">
            {education.description}
        </p>
    {/if}

    <!-- Courses -->
    {#if education.courses}
        <div>
            <h4
                class="text-sm font-semibold text-secondary_dark dark:text-secondary_light mt-2"
            >
                Notable Courses
            </h4>
            <ul
                class="list-disc list-inside text-sm text-ink_light dark:text-ink_dark"
            >
                {#each education.courses as course}
                    <li>{course}</li>
                {/each}
            </ul>
        </div>
    {/if}
</div>
