<script>
  /**
   * @type {Array<{id: string, src: string, alt: string}>}
   * Each image object should have a unique id (e.g., 'slide0', 'slide1'),
   * a 'src' for the image source, and an 'alt' text.
   */
  export let images = [];

  /**
   * Optional: A fixed height for carousel items for consistency.
   * Example: "400px", "60vh".
   * If null, height will be intrinsic to the image or controlled by aspect ratio classes.
   * @type {string|null}
   */
  export let itemHeight = "400px"; // You can adjust or make this a prop

  /**
   * Optional: Tailwind CSS classes for the <img> tag for object-fit and positioning.
   * @type {string}
   */
  export let imageClass = "w-full h-full object-cover"; // Default: cover the allocated space

  function checkClick() {
    console.log("Image clicked");
	}

</script>

{#if images && images.length > 0}
  <div class="carousel w-full rounded-box"> 
    {#each images as image, i (image.id)}
      <div id={image.id} class="carousel-item relative w-full" style:height={itemHeight}>
        <img src={image.src} alt={image.alt} class={imageClass} />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#${images[(i - 1 + images.length) % images.length].id}`} class="z-99 btn btn-circle btn-sm md:btn-md">❮</a>
          <a href={`#${images[(i + 1) % images.length].id}`} on:click={checkClick} class="z-99 btn btn-circle btn-sm md:btn-md">❯</a>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <p>No images provided for the carousel.</p>
{/if}