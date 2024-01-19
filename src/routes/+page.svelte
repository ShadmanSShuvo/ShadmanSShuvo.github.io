<script lang="ts">
    import { onMount } from "svelte";
    // import sun and moon icons from flowbite-svelte-icons
    import { SunSolid, MoonSolid } from "flowbite-svelte-icons";
    import dp from "$lib/images/black.jpg";
    import logo_dark from "$lib/images/logo-dark.png";
    /* import { page } from '$app/stores'; */
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,
        Avatar,
    } from "flowbite-svelte";

    let darkMode = false;

    onMount(() => {
        darkMode = document.documentElement.classList.contains("dark");
        toggleDarkMode();
    });

    function toggleDarkMode() {
        darkMode = !darkMode;
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    $: activeUrl = "/";
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

<div
    class="min-h-screen min-w-screen dark:bg-primary_dark dark:text-ink_dark bg-primary_light text-ink_light"
>
    <main class="max-w-4xl p-4 mx-auto">
        <Navbar>
            <NavBrand href="/">
                <Avatar id="avatar-menu" src={logo_dark} />
            </NavBrand>
            <div class="flex items-center md:order-2">
                <button
                    on:click={toggleDarkMode}
                    class="p-2 mx-3 bg-gray-200 rounded dark:bg-gray-700"
                >
                    <!-- Replace with your toggle mode icon -->
                    <span class="text-gray-800 dark:text-gray-200">
                        {#if darkMode}
                            <!-- Icon for Light Mode -->
                            <SunSolid />
                        {:else}
                            <!-- Icon for Dark Mode -->
                            <MoonSolid />
                        {/if}
                    </span>
                </button>
                <NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
            </div>
            <NavUl>
                <NavLi href="/" active={true}>Dashboard</NavLi>
                <NavLi href="/taskview">Task View</NavLi>
                <NavLi href="/insights">Insights</NavLi>
                <NavLi href="/about">About</NavLi>
            </NavUl>
        </Navbar>

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
    </main>
</div>
