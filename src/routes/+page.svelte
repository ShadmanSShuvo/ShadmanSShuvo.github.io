<script lang="ts">
    import { goto } from "$app/navigation";

    import dp from "$lib/images/black.jpg";
    import persistent_store from "$lib/stores/persistentstore";

    let name = "Md. Shadman Shahriyar Shuvo";
    let aboutMe = `
    Hi, I’m Md. Shadman Shahriyar Shuvo. I was born and raised in Rangpur, Bangladesh, and now I’m living in Dhaka as I pursue my undergraduate studies at Bangladesh University of Engineering and Technology (BUET), majoring in Computer Science and Engineering.

    From a young age, I’ve always been drawn to technology—it amazes me how rapidly it evolves and how deeply it impacts our lives. That curiosity has grown into a passion for exploring the frontiers of cutting-edge tech, and it fuels my academic and personal journey every day.

    Outside the world of code and computers, I find joy in watching and rewatching movies—they give me a sense of comfort and a space to reflect. I also love playing carrom and table tennis, which keep me active and bring out my competitive spirit.

    I try to live life with a deep sense of gratitude. I believe it’s a precious gift from the Almighty, and I do my best to savor each moment. I aim to pass on that positive energy to the people around me. I enjoy meeting new people, working in teams, and learning from those whose perspectives differ from mine—it’s one of the ways I keep growing.
  `;
    let prevUrl = "/research";
    let nextUrl = "/achievements";
</script>

<div class="flex flex-col items-center space-y-4 md:space-y-8">
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
                href="https://www.linkedin.com/in/sdmnsvo"
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
                href="https://github.com/ShadmanSShuvo"
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
                href="https://www.kaggle.com/shadmanshuvo"
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
                href="https://codeforces.com/profile/shadmansshuvo"
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
                <strong>Email:</strong> shuvo2005rzs@gmail.com
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
