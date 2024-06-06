<script lang="ts">
    import {
        FacebookSolid,
        TwitterSolid,
        LinkedinSolid,
    } from "flowbite-svelte-icons";
    import dp from "$lib/images/black.jpg";
    let name = "Asif Azad";
    let aboutMe =
        "This is Asif Azad. I was born in Faridpur, Bangladesh. Currently I am living in Dhaka, Bangladesh. I am a Freshmen doing my undergad in Bangladesh University of Engineering and Technology. My major is CSE. My hobby is to watch and rewatch movies. And I love to play basketball and table tennis.I am enthusiastic about technology. I enjoy getting myself acquinted with cutting-edge technologies. The wonders of technologies fascinate me in every possible way. I am optimistic about life. Life is a precious gift from the Almighty. That is why I like to feel and enjoy every bit of it. Moreover, I try to give the same vibe to others around me. I love to meet, work and connect with new people. If they share the same interests as me then it's good. And if they don't I get to broaden my perspective engaging with them.";
    let recentUpdates = [
        { date: "2024-01-19", update: "Lorem ipsum dolor sit amet." },
        { date: "2024-01-18", update: "Lorem ipsum dolor sit amet." },
        { date: "2024-01-17", update: "Lorem ipsum dolor sit amet." },
        { date: "2024-01-16", update: "Lorem ipsum dolor sit amet." },
        { date: "2024-01-15", update: "Lorem ipsum dolor sit amet." },
        // Add more updates as needed
    ];
</script>

<div class="flex flex-col items-center md:flex-row">
    <div class="text-center md:text-left md:flex-1">
        <!-- Your Name -->
        <h1 class="text-3xl font-bol">{name}</h1>

        <!-- About Me -->
        <p class="mt-2">{aboutMe}</p>
    </div>

    <div class="w-48 mt-4 md:ml-4 md:mt-0">
        <!-- Your Image -->
        <img
            src={dp}
            alt="Your Name"
            class="rounded-lg w-full h-auto aspect-[3/4] object-cover"
        />
    </div>
</div>

<section class="mt-8">
    <!-- Recent Updates/News -->
    <h2 class="mb-4 text-2xl font-bold">Recent Updates</h2>
    {#each recentUpdates as { date, update }}
        <div class="mb-2">
            <p class="text-sm">{date}</p>
            <p>{update}</p>
        </div>
    {/each}
</section>
<!-- Social Media Links Section -->
<section class="flex justify-center mt-8 space-x-4">
    <!-- Replace href values with your actual social media URLs -->
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookSolid class="w-6 h-6 text-blue-600" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterSolid class="w-6 h-6 text-blue-400" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedinSolid class="w-6 h-6 text-blue-500" />
    </a>
    <!-- Add more icons as needed -->
</section>
