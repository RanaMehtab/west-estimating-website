/**
 * Content for the "In The Field" photo gallery on the homepage and its
 * detail pages at /gallery/[slug]. Each entry pairs a photo (or a custom
 * illustrated tile) with a longer description and a related service link.
 */

export const galleryItems = [
  {
    slug: 'drone-site-analysis',
    tag: 'Drone View',
    title: 'Top-down site & quantity analysis',
    photoKey: 'aerialSite',
    summary: 'How an aerial view helps us verify site quantities before the takeoff starts.',
    body: [
      'Before line items ever hit a spreadsheet, our estimators review the site from above — confirming pad sizes, access roads, laydown areas, and site boundaries against the civil drawings.',
      'An aerial view catches things a 2D plan set can hide: grading conflicts, utility routing, and staging constraints that affect sitework and earthwork pricing.',
      'This step feeds directly into our Sitework & Earthwork estimates, so quantities reflect the real footprint of the job, not just what is on the page.'
    ],
    relatedSlug: 'sitework-earthwork'
  },
  {
    slug: 'live-estimate-app',
    tag: 'On-Site App',
    title: 'Live estimate, right on the tablet',
    photoKey: null,
    summary: 'The same numbers your estimator is building, viewable from the field.',
    body: [
      'Our estimating workbooks are built so field teams and PMs can follow along in real time — no waiting for a finished PDF to see how a change order affects the bottom line.',
      'Whenever quantities shift (a scope change, a spec revision, a material substitution), the summary updates and the assumption log tracks exactly what changed and why.',
      'It is the same workbook you get delivered at the end — just visible earlier, so there are no surprises at hand-off.'
    ],
    relatedSlug: 'cost-estimation'
  },
  {
    slug: 'team-budget-meeting',
    tag: 'Team Meeting',
    title: 'Talking budget, on site',
    photoKey: 'teamMeeting',
    summary: 'Why we join budget conversations directly with your field and project teams.',
    body: [
      'Numbers on a spreadsheet only tell part of the story. When it is useful, our estimators join a call or an on-site walk to align on scope before finalizing pricing.',
      'This is especially common on General Contractor estimates, where sub-bid leveling and scope-gap analysis benefit from a direct conversation about what is (and is not) included.',
      'The result: fewer scope surprises after award, and a bid package your team can defend with confidence.'
    ],
    relatedSlug: 'gc-estimates'
  },
  {
    slug: 'plan-review-on-site',
    tag: 'Plan Review',
    title: 'Walking the drawings on site',
    photoKey: 'blueprintOnSite',
    summary: 'Cross-checking the plan set against real conditions before pricing locks in.',
    body: [
      'Drawings and reality do not always match — especially on renovation or phased work. Where possible, we walk the plans against site conditions before finalizing quantities.',
      'This catches discrepancies early: a wall that moved, an as-built condition that was never updated, a scope item the drawings assumed but the site does not support.',
      'It is one more layer of accuracy behind every quantity takeoff we deliver.'
    ],
    relatedSlug: 'quantity-takeoff'
  },
  {
    slug: 'night-shift-site',
    tag: 'Night Shift',
    title: 'Lit up, still on schedule',
    photoKey: 'nightSite',
    summary: 'Estimating for projects that run around the clock.',
    body: [
      'Not every job runs 7-to-5. Night pours, occupied-building renovations, and fast-tracked schedules all change how labor, lighting, and safety costs get priced.',
      'When a project has night or off-hours work, we price it as its own line — separate labor rates, added equipment, and the safety measures that come with it — instead of folding it quietly into a day-rate average.',
      'That level of detail is what keeps a bid-ready estimate close to actuals once the job breaks ground.'
    ],
    relatedSlug: 'cost-estimation'
  },
  {
    slug: 'modern-structural-builds',
    tag: 'Modern Builds',
    title: 'Clean structure, clean numbers',
    photoKey: 'modernBuilding',
    summary: 'Estimating structural steel and metals on modern commercial builds.',
    body: [
      'Clean, modern structures still hide plenty of estimating complexity — connection details, metal deck, curtain wall interfaces, and coordination with the building envelope.',
      'Our Structural Steel & Metals estimates break quantities out by member type and connection, so your steel fabricator and erector are pricing from the same page you are.',
      'It is built to hold up under scrutiny from sub-bid leveling, not just to look complete.'
    ],
    relatedSlug: 'structural-steel'
  },
  {
    slug: 'takeoff-table',
    tag: 'Takeoff Table',
    title: 'Every division, measured by hand',
    photoKey: 'blueprints',
    summary: 'What actually happens at the desk between receiving plans and delivering numbers.',
    body: [
      'Every project starts here — plans spread out, measured division by division, cross-referenced against specs and addenda.',
      'We do not rely on rough software auto-counts alone; every quantity is reviewed by a senior estimator before it goes into your workbook.',
      'It is slower than a fully automated takeoff, and it is why our numbers hold up when a sub or GC pushes back on a numbers.'
    ],
    relatedSlug: 'quantity-takeoff'
  },
  {
    slug: 'bid-ready-summary',
    tag: 'Presentation Ready',
    title: 'Bid-ready, presentation-ready',
    photoKey: null,
    summary: 'How your final estimate gets packaged for ownership and leadership.',
    body: [
      'A great estimate can still lose a bid if it is hard to read. Every project we deliver includes a clean executive summary — total cost, division breakdown, and key assumptions on one page.',
      'It is built so you can hand it straight to ownership, a lender, or a GC without reformatting anything yourself.',
      'This same summary format anchors our Bid Preparation & Tender Support service, where we help assemble the full submission package.'
    ],
    relatedSlug: 'bid-preparation'
  }
];

export function getGalleryItem(slug) {
  return galleryItems.find((g) => g.slug === slug) || null;
}
