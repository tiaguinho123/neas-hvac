---
description: How to clone and configure the HVAC website template for a new client
---

# HVAC Site Clone Workflow

This workflow turns the `hvac-template` into a fully branded, live site for a new HVAC client.
Estimated time: ~45–90 minutes end-to-end.

---

## Phase 1 — Research the Client Site

1. Visit the client's real website and Google Maps listing.

2. Use Apify `apify/rag-web-browser` to scrape key pages:
   ```
   Homepage, About Us, Services pages, Contact page
   ```

3. Collect and note down:
   - Business name, phone, email, address, hours
   - Service areas (list of towns)
   - Logo URL
   - Hero image URL (building/van photo)
   - All service images
   - Any awards or certifications (Expertise.com, etc.)
   - License number
   - Social media links

4. Find their **Google Maps Place ID**:
   - Go to `google.com/maps`, search the business name + city
   - Once on the place page, copy the full URL — Place ID looks like `ChIJ...`
   - Or use Apify `compass/Google-Maps-Reviews-Scraper` with the Maps URL to auto-extract

---

## Phase 2 — Scrape Real Google Reviews

// turbo
5. Run Apify `compass/Google-Maps-Reviews-Scraper` with the Place ID:
   ```json
   {
     "placeIds": ["<PLACE_ID>"],
     "maxReviews": 15,
     "reviewsSort": "mostRelevant",
     "language": "en",
     "personalData": true,
     "reviewsOrigin": "google"
   }
   ```

6. From the output, select **5 reviews** that:
   - Are 5-star
   - Have a real profile photo URL (`ACg8oc...` prefix = most reliable)
   - Have substantive review text (3+ sentences preferred)
   - Cover different services (heating, cooling, install, maintenance)

7. Note down for each: `name`, `photo URL`, `text`, `date`, `isLocalGuide`, `services`

---

## Phase 3 — Create the Client Config

// turbo
8. Copy the template config:
   ```powershell
   Copy-Item src\config\neas.config.ts src\config\<clientname>.config.ts
   ```

9. Fill out ALL fields in the new config file:
   - `businessName`, `phone`, `email`, `address`, `hours`
   - `logoUrl` (point to client logo image URL or local file)
   - `colors.primary`, `colors.dark` (match client's brand colors)
   - `heroImage` (the building/van/storefront photo)
   - `services[]` — each service with title, image, path, description
   - `reviews.rating`, `reviews.count`, `reviews.googleMapsUrl`
   - `serviceAreaTowns[]`
   - `trustBadges[]`
   - All branding text fields

10. Update `src/main.tsx` to import the new config:
    ```tsx
    import clientConfig from './config/<clientname>.config';
    // Replace: <SiteConfigProvider config={neasConfig}>
    // With:    <SiteConfigProvider config={clientConfig}>
    ```

---

## Phase 4 — Update GoogleReviews Component

11. Open `src/components/GoogleReviews.tsx` and replace:
    - `GOOGLE_MAPS_URL` → client's Google Maps URL
    - `REVIEWS` array → paste the 5 reviews selected in Step 6
    - Rating and review count in the header section

---

## Phase 5 — Visual Verification

12. Run `npm run dev` and open `localhost:3000`

13. Check every page:
    - [ ] Home — hero image loads, financing strip, buttons work
    - [ ] Services pages — all service images load (no broken images)
    - [ ] About Us — Vimeo or YouTube video embed works (if applicable)
    - [ ] Financing — page renders correctly
    - [ ] Contact — form works
    - [ ] Footer — real logo displays correctly (use `brightness-0 invert` for dark bg)
    - [ ] Reviews — all 5 profile photos load (no broken icons)
    - [ ] Reviews auto-slide works every 6 seconds
    - [ ] Logo click + HOME click scroll to top

14. Fix any broken image using this pattern in `onError`:
    ```tsx
    onError={(e) => {
      (e.target as HTMLImageElement).src =
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=CE1126&color=fff&size=56`;
    }}
    ```

---

## Phase 6 — Deploy to Vercel

// turbo
15. Build the project:
    ```powershell
    npm run build
    ```

16. Deploy via Vercel CLI or connect GitHub repo to Vercel dashboard.

17. Set the custom domain for the client (e.g., `client-preview.vercel.app`).

18. Share the preview link with the client for approval.

---

## Checklist Summary

| Step | Task | Done |
|------|------|------|
| 1–4 | Research client site & extract assets | [ ] |
| 5–7 | Scrape & select 5 Google reviews | [ ] |
| 8–10 | Create & fill out client config file | [ ] |
| 11 | Update GoogleReviews component | [ ] |
| 12–14 | Visual QA on all pages | [ ] |
| 15–18 | Build & deploy to Vercel | [ ] |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/config/<client>.config.ts` | All client-specific data |
| `src/config/SiteConfig.types.ts` | TypeScript interface — all available fields |
| `src/components/GoogleReviews.tsx` | Reviews carousel — update REVIEWS array |
| `src/components/Navbar.tsx` | Update logo URL if using different image |
| `src/components/Footer.tsx` | Logo auto-inverted for dark background |
| `src/pages/HomePage.tsx` | Layout — reviews at bottom before Emergency CTA |

---

## Notes

- **Google profile photos**: Only use `ACg8oc...` prefix URLs for guaranteed loading. `ALV-Uj...` prefix photos may be blocked by Google's CDN for cross-origin requests.
- **Hero images**: If the client's site blocks hotlinking, download the image and host it on Cloudinary or include it in `public/`.
- **Vimeo/YouTube video**: Extract the embed ID from the original site. Replace the static image on the About page with an `<iframe>` at the same aspect ratio.
- **Financing strip**: Always add the Synchrony Financial strip between navbar and hero — this is a key conversion element.
