/**
 * Central registry of photography used across the site.
 *
 * All photos are from Unsplash and licensed under the Unsplash License
 * (free for commercial use, no attribution required). Served directly from
 * Unsplash's CDN via next/image with remotePatterns configured in
 * next.config.mjs.
 */
export const photos = {
  heroConstruction: {
    src: 'https://images.unsplash.com/photo-1678941347696-7521637e0be8?auto=format&fit=crop&w=1600&q=80',
    alt: 'Aerial view of a large commercial building under construction, showing the full site layout',
    credit: 'JGC Indonesia / Unsplash'
  },
  worker: {
    src: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&w=1200&q=80',
    alt: 'Construction worker in a hard hat working on a building frame',
    credit: 'Josh Olalde / Unsplash'
  },
  blueprints: {
    src: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Architectural blueprints and construction drawings spread out on a table',
    credit: 'Marina Zvada / Unsplash'
  },
  aerialSite: {
    src: 'https://images.unsplash.com/photo-1678941347696-7521637e0be8?auto=format&fit=crop&w=1400&q=80',
    alt: 'Aerial drone view of a large building under construction',
    credit: 'JGC Indonesia / Unsplash'
  },
  teamMeeting: {
    src: 'https://images.unsplash.com/photo-1760963301666-582b92218a19?auto=format&fit=crop&w=1400&q=80',
    alt: 'Three engineers in hard hats and safety vests discussing a project on site',
    credit: 'SMKN 1 Gantar / Unsplash'
  },
  nightSite: {
    src: 'https://images.unsplash.com/photo-1642781100314-f1ac6fb42296?auto=format&fit=crop&w=1400&q=80',
    alt: 'Overhead view of a construction site lit up at night',
    credit: 'famingjia inventor / Unsplash'
  },
  blueprintOnSite: {
    src: 'https://images.unsplash.com/photo-1774599730788-a74cd9253b56?auto=format&fit=crop&w=1400&q=80',
    alt: 'People gathered around blueprints outdoors on a job site',
    credit: 'Fiqih Alfarish / Unsplash'
  },
  modernBuilding: {
    src: 'https://images.unsplash.com/photo-1527335988388-b40ee248d80c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Clean, modern glass and steel building frame against the sky',
    credit: 'Jacek Dylag / Unsplash'
  }
};
