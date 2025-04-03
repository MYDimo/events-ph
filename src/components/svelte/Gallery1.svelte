<script>
  import Lightbox from './Lightbox.svelte';
  export let galleryName

  const allImageModules = import.meta.glob('/src/images/galleries/**/*.(jpg|jpeg|png|gif)', {
    eager: true,
    query: '?url',
    import: 'default',
  });

  let images = [];
  for (const path in imagesPaths) {
    images.push({
      src: imagesPaths[path],
      caption: path.split('/').pop(),
    });
  }

  let lightboxOpen = false;
  let activeImageIndex = 0;

  // Open the lightbox
  function openLightbox(index) {
    lightboxOpen = true;
    activeImageIndex = index;
  }

  // Close the lightbox
  function closeLightbox() {
    lightboxOpen = false; // Ensure this updates correctly
  }
</script>

<div>

  <div class="columns-2 lg:columns-4 gap-2">
    {#each images as { src, caption }, index}
      <div class="break-inside-avoid rounded-md overflow-hidden">
        <button
          class="w-full rounded-md hover:scale-95 transition-transform duration-300 m-0 overflow-hidden focus:outline-none"
          aria-label={`Open lightbox for ${caption}`}
          on:click={() => openLightbox(index)}
        >
          <img
            src={src}
            alt={caption}
            class="w-full rounded-md m-0"
          />
        </button>
      </div>
    {/each}
  </div>

  <!-- Lightbox -->
  {#if lightboxOpen}
    <Lightbox
      {images}
      {activeImageIndex}
      onClose={closeLightbox} 
    />
  {/if}
</div>