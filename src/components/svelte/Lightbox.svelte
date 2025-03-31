<script>
  import { onMount, onDestroy } from 'svelte';

  export let images;
  export let activeImageIndex;
  export let onClose;

  let lightboxElement;

  function disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  function enableScroll() {
    document.body.style.overflow = 'auto';
  }

  function nextImage() {
    activeImageIndex = (activeImageIndex + 1) % images.length;
  }

  function prevImage() {
    activeImageIndex = (activeImageIndex - 1 + images.length) % images.length;
  }

  function handleKeydown(event) {
    switch (event.key) {
      case 'Escape':
        enableScroll();
        if (onClose) onClose(); // Call parent’s `closeLightbox` to hide lightbox
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
    }
  }

  onMount(() => {
    disableScroll();
    window.addEventListener('keydown', handleKeydown);

    if (lightboxElement) {
      lightboxElement.focus();
    }
  });

  onDestroy(() => {
    enableScroll();
    window.removeEventListener('keydown', handleKeydown);
  });
</script>

<div
  bind:this={lightboxElement}
  class="lightbox fixed inset-0 flex items-center justify-center bg-black bg-opacity-95 z-[100]"
  tabindex="-1"
>
  <!-- Close Button -->
  <button
    class="absolute top-5 right-5 text-white z-[110] close-button text-5xl"
    on:click={() => {
      enableScroll();
      if (onClose) onClose(); // Call parent’s `closeLightbox` when button is clicked
    }}
    aria-label="Close Lightbox"
  >
    ✕
  </button>

  <!-- Main Lightbox Content -->
  <div class="relative max-w-screen-lg max-h-screen flex items-center justify-center p-4 rounded-md">
    <img
      src={images[activeImageIndex].src}
      alt={images[activeImageIndex].caption}
      class="lightbox-image rounded-md max-w-[95vw] max-h-[95vh] object-contain "
    />
  </div>

  <!-- Navigation Buttons -->
  <div class="absolute inset-y-0 left-5 flex items-center z-[100]">
    <button
      on:click={prevImage}
      class="text-white text-2xl cursor-pointer bg-opacity-50 bg-gray-800 px-3 py-2 rounded"
    >
      ◀
    </button>
  </div>

  <div class="absolute inset-y-0 right-5 flex items-center z-[100]">
    <button
      on:click={nextImage}
      class="text-white text-2xl cursor-pointer bg-opacity-50 bg-gray-800 px-3 py-2 rounded"
    >
      ▶
    </button>
  </div>
</div>

<style>
  .lightbox {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.95);
    z-index: 100;
    position: fixed;
    inset: 0;
    outline: none; /* Remove the default focus box */
  }

  .lightbox:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5); /* Optional, for accessibility */
  }
</style>