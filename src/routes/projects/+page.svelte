<script lang="ts">
    import Project from "./Project.svelte";
    import { projects } from "$lib/data/projects";
</script>

<div class="container p-4 mx-auto">
    {#each projects as project}
        <Project {project} />
    {/each}
</div>
