<script>
  // Script section remains the same
  import Lightbox from './Lightbox.svelte';

  // --- Props ---
  /**
   * The name of the gallery subfolder to display images from.
   * e.g., "nature", "city"
   * @type {string}
   */
  export let galleryName = '';

  // --- Dynamic Image Loading ---
  const allImageModules = import.meta.glob('/src/images/galleries/**/*.(jpg|jpeg|png|gif)', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  // --- Reactive Image Filtering ---
  let images = [];
  $: {
    images = [];
    const galleryPathPrefix = `/src/images/galleries/${galleryName}/`;
    for (const path in allImageModules) {
      if (path.startsWith(galleryPathPrefix)) {
        images.push({
          src: allImageModules[path],
          caption: path.split('/').pop(),
        });
      }
    }
  }

  // --- Lightbox State ---
  let lightboxOpen = false;
  let activeImageIndex = 0;

  function openLightbox(index) {
    activeImageIndex = index;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
  }
</script>

<div class="container mx-auto px-2 py-4"> {#if images.length > 0}
    <div class="columns-2 md:columns-3 lg:columns-4 gap-3">
      {#each images as { src, caption }, index}
        <div class="mb-3 break-inside-avoid">
          <button
            class="group block w-full rounded-lg overflow-hidden bg-transparent border-none p-0 cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
            aria-label={`View ${caption} in lightbox`}
            on:click={() => openLightbox(index)}
          >
            <img
              {src}
              alt={caption}
              loading="lazy"
              class="block w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-95 shadow-md hover:shadow-lg m-0"
            />
          </button>
        </div>
      {/each}
    </div>
  {:else}
     <p class="text-center text-gray-500 dark:text-gray-400 my-8">
       No images found for gallery '{galleryName || '[No gallery selected]'}'.
    </p>
  {/if}

  {#if lightboxOpen}
    <Lightbox
      {images}
      bind:activeImageIndex
      onClose={closeLightbox}
    />
  {/if}

</div>