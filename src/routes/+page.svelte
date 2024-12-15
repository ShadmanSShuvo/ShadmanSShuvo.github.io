<script lang="ts">
    import { goto } from "$app/navigation";

    import dp from "$lib/images/black.jpg";
    import persistent_store from "$lib/stores/persistentstore";

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
    let prevUrl = "/research";
    let nextUrl = "/achievements";
</script>

<div class="flex flex-col items-center p-4 space-y-4 md:space-y-8 my-4">
    <!-- Name Section -->
    <div>
        <h1
            class="text-3xl md:text-4xl font-bold text-primary_dark dark:text-primary_light text-center"
        >
            {name}
        </h1>
    </div>

    <!-- Image and Info Section -->
    <div class="flex flex-col items-center space-y-2 md:space-y-4 text-center">
        <!-- Portrait Image -->
        <img
            src={dp}
            alt="Portrait"
            class="rounded-lg w-32 md:w-48 h-auto aspect-[3/4] object-cover border-2 border-secondary_dark dark:border-secondary_light"
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
                <img
                    src="https://img.shields.io/badge/LinkedIn-06d6a0?style=flat&logo=linkedin&logoColor=white"
                    alt="linkedin"
                    class="h-5 md:h-6 w-auto"
                />
            </a>

            <a
                href="https://github.com/BRAINIAC2677"
                target="_blank"
                aria-label="GitHub"
            >
                <img
                    src="https://img.shields.io/badge/Github-06d6a0?style=flat&logo=github&logoColor=white"
                    alt="github"
                    class="h-5 md:h-6 w-auto"
                />
            </a>
            <a
                href="https://www.kaggle.com/brainiac2677"
                target="_blank"
                aria-label="Kaggle"
            >
                <img
                    src="https://img.shields.io/badge/Kaggle-06d6a0?style=flat&logo=kaggle&logoColor=white"
                    alt="Kaggle"
                    class="h-5 md:h-6 w-auto"
                />
            </a>
            <a
                href="https://codeforces.com/profile/BRAINIAC77"
                target="_blank"
                aria-label="Codeforces"
            >
                <img
                    src="https://img.shields.io/badge/Codeforces-06d6a0?style=flat&logo=codeforces&logoColor=white"
                    alt="Codeforces"
                    class="h-5 md:h-6 w-auto"
                />
            </a>
        </div>

        <!-- Horizontal Divider -->
        <hr class="w-full border-gray-300 dark:border-gray-700" />

        <!-- Email and Location -->
        <div class="space-y-2">
            <p class="text-ink_light dark:text-ink_dark">
                <strong>Email:</strong> asifazad0178@gmail.com
            </p>
            <p class="text-ink_light dark:text-ink_dark">
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

    <!-- My favourite quote -->
    <div class="text-center">
        <p class="text-sm text-ink_light dark:text-ink_dark">
            <strong> "Life is Beautiful" </strong>
        </p>
        <hr class="w-full border-secondary_light dark:border-secondary_dark" />
    </div>

    <div class="flex justify-between items-center mt-8 w-full">
        <!-- Previous Page -->
        <button
            class="block py-2 px-4 transition-all rounded text-ink_light hover:bg-gray-100 hover:text-secondary_light md:p-0 dark:text-ink_dark dark:hover:text-secondary_dark dark:hover:bg-gray-700"
            on:click|stopPropagation={() => {
                $persistent_store.activeUrl = prevUrl;
                localStorage.setItem(
                    "persistent_store",
                    JSON.stringify($persistent_store),
                );
                goto(prevUrl);
            }}
        >
            ← Previous
        </button>

        <!-- Next Page -->
        <button
            class="block py-2 px-4 transition-all rounded text-ink_light hover:bg-gray-100 hover:text-secondary_light md:p-0 dark:text-ink_dark dark:hover:text-secondary_dark dark:hover:bg-gray-700"
            on:click|stopPropagation={() => {
                $persistent_store.activeUrl = nextUrl;
                localStorage.setItem(
                    "persistent_store",
                    JSON.stringify($persistent_store),
                );
                goto(nextUrl);
            }}
        >
            Next →
        </button>
    </div>
</div>
