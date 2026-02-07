# Stage 4: About / Story Page

## Objective
Tell Vannya's story in a compelling, visual way. This page should build trust and emotional connection — a key differentiator for handmade goods over mass-produced furniture.

## Tasks

### 4.1 About Hero Section
Create `src/components/about/AboutHero.tsx`

- Shorter than homepage hero (~60vh)
- Large heading: "OUR STORY" or "BUILT ON HERITAGE"
- Subheading: "Two generations of American craftsmanship"
- Background: workshop atmosphere image or wood texture
- Text fades in on load

### 4.2 Vannya's Story Section
Create `src/components/about/VannyaStory.tsx`

**The Narrative (write compelling placeholder copy — Vannya can replace later):**

Tell the story in 3 beats:

**Beat 1: The Father**
- Vannya's father was a woodworker. Describe the tradition, the workshop, learning the craft as a kid.
- "I grew up with sawdust in my hair and the smell of fresh-cut oak. My father didn't just build furniture — he built things that mattered."

**Beat 2: The Son**
- Vannya carrying the torch, making it his own. American-made, modern sensibility with traditional technique.
- "I took what my father taught me and built something new. Every piece I make carries his lessons — patience, precision, respect for the wood."

**Beat 3: The Vision**
- Growing Zaichik Crafts. What it means now. The mission.
- "Zaichik Crafts isn't just a business. It's a promise that real craftsmanship still exists, still matters, and is built right here in America."

**Layout:**
- Alternating text-and-image sections (text left / image right, then swap)
- Large, atmospheric images (placeholder for workshop, tools, hands working wood)
- Generous whitespace between beats
- Each beat animates in on scroll (fade-up + slight slide)
- Pull quotes between sections in larger, italicized text

### 4.3 Values / Philosophy Section
Create `src/components/about/Values.tsx`

3-4 core values displayed as cards or icon blocks:

- **HERITAGE** — "Built on generations of knowledge and tradition"
- **QUALITY** — "Every joint, every finish — done right or done over"
- **AMERICAN-MADE** — "Sourced and built right here. No shortcuts."
- **BUILT TO LAST** — "We don't make things to replace. We make things to keep."

Layout: horizontal row on desktop, stacked on mobile. Each with an icon or small illustration.
Subtle border or accent using brand-red (thin line, small icon fill — restrained).

### 4.4 Workshop Gallery
Create `src/components/about/WorkshopGallery.tsx`

- A masonry or grid layout of workshop photos
- 6-8 images (use high-quality placeholders — can use Unsplash woodworking images or solid color blocks with labels)
- Lightbox on click (simple modal with larger image)
- Images animate in on scroll (staggered fade)
- Caption support below each image

### 4.5 "Let's Build Something" CTA
Reuse or adapt the CTA Banner from Stage 3:
- "HAVE SOMETHING IN MIND?"
- "Every piece starts with a conversation."
- Button: "BROWSE PRODUCTS" or "GET IN TOUCH" (3D primary button)

### 4.6 Assemble About Page
Update `src/app/about/page.tsx`:
1. About Hero
2. Vannya's Story (3 beats)
3. Values
4. Workshop Gallery
5. CTA Banner

## Content Guidelines
- Write in Vannya's voice: confident, plainspoken, proud, American. Not flowery or pretentious. Think Americana, not luxury branding.
- Short paragraphs. Punchy sentences. Let the images breathe.
- Example tone: "I don't do trends. I build things that work and things that last. That's it."
- Avoid corporate speak. This is a craftsman talking, not a marketing team.

## Validation Checklist
- [ ] About hero renders with heading and atmospheric background
- [ ] Story sections alternate layout correctly (text/image flip)
- [ ] All scroll animations work smoothly
- [ ] Values section displays clearly with icons/accents
- [ ] Gallery grid is responsive and images are clickable
- [ ] CTA section has working 3D button linking to products
- [ ] Copy feels authentic to Vannya's character
- [ ] Page is fully responsive
- [ ] `npm run build` succeeds
- [ ] Commit: `stage-4: about page complete`
