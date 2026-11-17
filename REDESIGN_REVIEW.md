# MYN Deco homepage redesign

The homepage now starts with home repairs and renovation in Kuala Lumpur and Selangor. Visible service cards replace the interactive house as the primary way to find a service.

## Review this experience

- Painting, roof leaks, bathroom leaks, plumbing and blocked drains, electrical faults, water heaters, ceiling repairs, doors/windows, and tiles/carpentry.
- Filter services by water problems, faults, or refresh/replacement work.
- Each service opens WhatsApp with that service and prompts for postcode, symptoms, timing and photos. Nothing is sent automatically.
- The contact selector changes the prefilled WhatsApp message.
- Mobile visitors have a collapsible navigation menu and fixed call/WhatsApp bar.
- FAQs explain coverage, photos, assessment and quotations.
- The existing crew route remains available; homepage anchor links from that page still work.
- Larger renovation enquiries have a separate call to action on the same homepage.

The phone, WhatsApp number, business hours, email and broad coverage are taken from the original site. Illustrative photographs are explicitly labelled. The new homepage does not present stock photographs as actual completed projects or invented before/after results. Replace these images with approved MYN project photos when available.

## Run locally

```sh
npm ci
npm run typecheck
npm run build
npm run dev
```

## Verification status

Implementation was reviewed for navigation targets, enquiry links, mobile breakpoints and service coverage. The existing undefined `CTAs` default export was removed.

Build, TypeScript and browser verification remain pending: installation failed with filesystem permissions and missing cached packages in the editing environment. Running the build and typecheck confirmed that Vite and TypeScript were not installed. These are verification blockers, not passing checks.

Before release, verify the homepage at mobile and desktop sizes, service filters, the menu, FAQs, both call links, WhatsApp service selection, and the return journey from `/our-crew`. Confirm the offered services and supplied business information with MYN. The existing crew page retains its original content and styling.

This change is prepared for review only. It has not been merged or deployed to the Firebase production site.
