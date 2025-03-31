# Tech stack:
Astro js
Alpine js
[Embla Carousel](https://www.embla-carousel.com/)

Domain names
- snap-and-seize.com
- catching-magic.com
- catching-moments.com -> taken
- catching-moments.bg -> 58лв py

TO DO: 
- [ ] change 

TO DO: 30-Mar-2024
- [x] on hover navigation elements -> change others' opacity - ~~use alpine JS~~ -> used tailwind groups and double hover:hover
- [x] Pick up nice photos to show
- [ ] Write skeleton copies for the different pages for both en and bg locales
- [x] Brainstorm for domain name -> catching-moments.bg
- [x] Brainstorm pricelist -> ~150лв
- [ ] Add protected page with [dummy gallery](https://neptunian.github.io/react-photo-gallery/) + additional stuff to do 
  
TO DO: 1-Apr-2024
- [x] Create a mobile version of the navigation
  - [x] Add tooggle hamburger & overlay
- [x] Write skeleton copies for the different pages for both en and bg locales
- [ ] Add protected page with [dummy gallery](https://neptunian.github.io/react-photo-gallery/) + additional stuff to do 

TO DO: 5-Apr-2024
-> nothing done

TO DO: 20-May-20
- [ ] work on homepage scroll transition

Other things
- [ ] Add noisy background 
- [ ] Fetch images from Cloudify & make a gallery component
- [ ] Think about logo -> CM how to rotate etc.
- [ ] Add noisy background 
- [ ] Think about typography of navigation and overall



Stuff learned

## Astro 
- when using the Astro.glob() to get multiple images you need to then map and return the .default in order to usie it with Image - astro:assets
- 

ChatGPT generated homepage section ideas.

Homepage Flow for CatchingMoments
1. Hero Section (Already Defined)

    Catchphrase: "Catching smiles, love, and happiness one snap at a time."
    Imagery: Two hero images (perhaps one candid and one moody/posed)
    Subtle Animation: Text fades in first, followed by a slow reveal of the images.

2. Bento Grid of Moments (Already Defined)

    A dynamic grid showcasing various wedding images.
    Smooth hover animations to make images feel interactive.

3. The Passion Behind Every Click (New Section)

    Headline: "Every Frame, A Story—Crafted with Passion."
    Copy:
    Photography is more than just pressing a shutter. It’s about seeing the unseen, feeling the emotions, and crafting a moment that lives forever. Every wedding is unique, and I take time to ensure each shot tells a story that’s authentically yours.
    Visual:
        One side of the screen: A full-width image (or slideshow) showing behind-the-scenes moments (adjusting a dress, fixing lighting, capturing a candid laugh).
        Other side: A grid of passionate, emotive shots (eyes meeting, hands touching, tears of joy).
    Animation: Text reveals first, images appear with a smooth fade-in.

4. About Me – The Storyteller Behind the Lens (New Section)

    Headline: "Meet the Eye Behind the Lens."
    Copy (Concise & Personal):
    I’m [Your Name], a 30-year-old wedding photographer who has spent the past four years capturing love stories with passion and dedication. My approach is a mix of journalistic storytelling and carefully crafted, moody portraits. I thrive in the fast-paced, dynamic energy of wedding days, ensuring every moment—big or small—is immortalized with authenticity.
    Visual Options:
        A warm, candid photo of you at work, possibly mid-shoot or adjusting a frame.
        A mini carousel of you interacting with couples, showcasing your process.
    Animation: Text slides in as images appear with soft zoom effects.

5. A Call to Moments – Featuring Your Latest Work (New Section)

    Headline: "Moments—A Collection of Love Stories."
    Catchphrase (Leading to Albums):
    "Weddings are fleeting, but the moments we capture last forever. Explore the love stories I’ve been honored to tell."
    Visual Layout:
        A clean grid of your latest wedding albums (thumbnails as clickable links).
        Hover effect: Slight zoom + album title appearing.
    Animation: Catchphrase fades in, followed by a staggered reveal of albums.

6. Call to Action – Let’s Capture Your Story (Final Section for Conversions)

    Headline: "Let’s Create Timeless Memories Together."
    CTA:
        "Whether you're planning an intimate elopement or a grand celebration, let's chat about how we can capture your story together."
        Button: "Book a Consultation" (Leads to contact form or booking page)
    Visual:
        A warm, inviting full-width image of a couple’s first dance, a veil flowing, or a sunset embrace.
    Animation: Soft parallax effect on the image as the text slides up.


    .parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 3 / 2; }
.div3 { grid-area: 1 / 2 / 3 / 3; }
