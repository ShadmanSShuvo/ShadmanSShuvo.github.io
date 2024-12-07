<script lang="ts">
    import { LinkedinSolid, GithubSolid } from "flowbite-svelte-icons";
    import dp from "$lib/images/black.jpg";

    let name = "Asif Azad";
    let aboutMe = `
    This is Asif Azad. I was born in Faridpur, Bangladesh. Currently I am living in Dhaka, Bangladesh. 
    I am a Senior doing my undergrad in Bangladesh University of Engineering and Technology. My major is CSE. 
    My hobby is to watch and rewatch movies. And I love to play basketball and table tennis. I am enthusiastic about technology. 
    I enjoy getting myself acquainted with cutting-edge technologies. The wonders of technologies fascinate me in every possible way. 
    I am optimistic about life. Life is a precious gift from the Almighty. That is why I like to feel and enjoy every bit of it. 
    Moreover, I try to give the same vibe to others around me. I love to meet, work and connect with new people. 
    If they share the same interests as me then it's good. And if they don't, I get to broaden my perspective engaging with them.
  `;
</script>

<div class="flex flex-col items-center justify-center h-screen p-4 space-y-12">
    <!-- Name Section -->
    <div>
        <h1
            class="text-5xl font-bold text-primary_dark dark:text-primary_light text-center"
        >
            {name}
        </h1>
    </div>

    <!-- Image and Info Section -->
    <div class="flex flex-col items-center space-y-4 text-center">
        <!-- Portrait Image -->
        <img
            src={dp}
            alt="Portrait"
            class="rounded-lg w-48 h-auto aspect-[3/4] object-cover border-2 border-secondary_dark dark:border-secondary_light"
        />

        <!-- Social Links -->
        <div
            class="flex gap-4 text-secondary_dark dark:text-secondary_light text-xl"
        >
            <a
                href="https://www.linkedin.com/in/asifazad2677"
                target="_blank"
                aria-label="LinkedIn"
            >
                <LinkedinSolid />
            </a>
            <a
                href="https://github.com/BRAINIAC2677"
                target="_blank"
                aria-label="GitHub"
            >
                <GithubSolid />
            </a>
            <a
                href="https://www.kaggle.com/brainiac2677"
                target="_blank"
                aria-label="Kaggle"
            >
                <img
                    src="https://img.shields.io/badge/Kaggle-20BEFF?style=flat&logo=kaggle&logoColor=white"
                    alt="Kaggle"
                    class="h-6 w-auto"
                />
            </a>
            <a
                href="https://codeforces.com/profile/BRAINIAC77"
                target="_blank"
                aria-label="Codeforces"
            >
                <img
                    src="https://img.shields.io/badge/Codeforces-FF6600?style=flat&logo=codeforces&logoColor=white"
                    alt="Codeforces"
                    class="h-6 w-auto"
                />
            </a>
        </div>

        <!-- Horizontal Divider -->
        <hr class="w-full border-gray-300 dark:border-gray-700" />

        <!-- Email and Location -->
        <div class="space-y-2">
            <p class="text-secondary_dark dark:text-secondary_light">
                <strong>Email:</strong> asif.azad@example.com
            </p>
            <p class="text-secondary_dark dark:text-secondary_light">
                <strong>Location:</strong> Dhaka, Bangladesh
            </p>
        </div>
    </div>

    <!-- About Me Section -->
    <div class="max-w-2xl text-justify">
        <p class="text-sm text-ink_light dark:text-ink_dark leading-relaxed">
            {aboutMe}
        </p>
    </div>
</div>
