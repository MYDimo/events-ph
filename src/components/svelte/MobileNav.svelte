<script lang="ts">
  // Import Svelte utilities
  import { fly, fade } from 'svelte/transition';
  import { onMount, onDestroy } from 'svelte';

  // --- Props ---
  // Define the data this component expects from Astro
  export let lang: 'en' | 'bg';
  export let homeHref: string;
  export let pricesHref: string;
  export let aboutHref: string;
  export let momentsHref: string;
  export let navHomeText: string;
  export let navPricesText: string;
  export let navAboutText: string;
  export let navMomentsText: string;
  export let enLinkHref: string;
  export let bgLinkHref: string;
  export let toggleMenuLabel: string = 'Toggle menu'; // Default label

  // --- State ---
  let open = false; // Reactive state for menu visibility
  let navElement: HTMLElement; // Reference to the main container for click outside logic
  let toggleButtonElement: HTMLElement; // Reference to the toggle button

  // --- Functions ---
  const closeMenu = () => {
    open = false;
  };

  const toggleMenu = () => {
    open = !open;
  };

  // --- Event Handlers ---
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    // Close if menu is open, click is outside the navElement, AND outside the toggle button
     if (
        open &&
        navElement &&
        !navElement.contains(event.target as Node) &&
        toggleButtonElement &&
        !toggleButtonElement.contains(event.target as Node)
     ) {
       closeMenu();
     }
  };

  // --- Lifecycle ---
  onMount(() => {
    // Add global listeners when component mounts
    document.addEventListener('click', handleClickOutside, true); // Use capture phase
  });

  onDestroy(() => {
    // Clean up global listeners when component unmounts
    document.removeEventListener('click', handleClickOutside, true);
  });

</script>

<svelte:window on:keydown={handleKeydown}/>

<div bind:this={navElement} class="w-full fixed lg:hidden {open ? 'bg-zinc-600' : 'bg-transparent'} transition-colors duration-300 ease-in-out">
  <div class="flex justify-between w-full p-5">
    <a href={homeHref} class="prose z-10" on:click={closeMenu}>
      YOOOOOO this is the logo
    </a>

    <button
      bind:this={toggleButtonElement}
      type="button"
      class="tham tham-e-squeeze tham-w-11 z-50 {open ? 'tham-active' : ''}"
      aria-label={toggleMenuLabel}
      aria-expanded={open}
      aria-controls="mobile-menu-items"
      on:click|stopPropagation={toggleMenu}
    >
      <div class="tham-box">
        <div class="tham-inner {open ? 'bg-slate-50' : 'bg-slate-600'} transition-colors duration-300">
        </div>
      </div>
    </button>
  </div>

  {#if open}
    <div
      transition:fade={{ duration: 200 }}
      class="fixed inset-0 z-40"
      aria-hidden="true"
    ></div>

    <div
      id="mobile-menu-items"
      class="absolute top-0 left-0 w-screen h-screen bg-zinc-600 z-40 flex flex-col justify-center items-center gap-8 text-white text-xl"
      transition:fly={{ y: -20, duration: 300, opacity: 0 }}
    >
      <div class="flex gap-2 divide-x">
        <a
          href={enLinkHref}
          class="pr-2 {lang === 'en' ? 'pointer-events-none text-gray-400' : 'hover:text-gray-300'}"
          aria-current={lang === 'en'}
          lang="en"
          hreflang="en"
          on:click={closeMenu}
        >en</a>
        <a
          href={bgLinkHref}
          class="pl-2 {lang === 'bg' ? 'pointer-events-none text-gray-400' : 'hover:text-gray-300'}"
          aria-current={lang === 'bg'}
          lang="bg"
          hreflang="bg"
          on:click={closeMenu}
        >bg</a>
      </div>

      <a href={homeHref} on:click={closeMenu}>{navHomeText}</a>
      <a href={pricesHref} on:click={closeMenu}>{navPricesText}</a>
      <a href={aboutHref} on:click={closeMenu}>{navAboutText}</a>
      <a href={momentsHref} on:click={closeMenu}>{navMomentsText}</a>
    </div>
  {/if}
</div>