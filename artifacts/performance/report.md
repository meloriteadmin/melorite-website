# Production asset comparison

Gzip estimates for unique initial JavaScript and CSS assets linked by each generated HTML page. Deferred animation/validation chunks, images, prefetched routes and HTML are excluded. These are download-size comparisons, not Lighthouse scores or measured loading times.

| Page | Initial JavaScript (before → after) | Reduction | Initial CSS (before → after) | Reduction |
| --- | --- | --- | --- | --- |
| / | 289.3 KiB → 274.8 KiB | 5.0% | 50.2 KiB → 38.7 KiB | 23.0% |
| /products | 287.4 KiB → 272.7 KiB | 5.1% | 56.2 KiB → 44.7 KiB | 20.6% |
| /products/crm | 299.2 KiB → 285.0 KiB | 4.7% | 52.9 KiB → 41.3 KiB | 21.9% |
| /resources/guides | 284.8 KiB → 263.3 KiB | 7.5% | 62.7 KiB → 51.1 KiB | 18.5% |
| /contact | 369.8 KiB → 260.2 KiB | 29.6% | 51.2 KiB → 39.7 KiB | 22.6% |
| /book-demo | — → 261.6 KiB | — | — → 38.7 KiB | — |
| /custom-solutions | 297.7 KiB → 283.1 KiB | 4.9% | 50.9 KiB → 50.9 KiB | 0.0% |
| /company | 268.8 KiB → 247.4 KiB | 8.0% | 52.8 KiB → 52.8 KiB | 0.0% |
| /platform | 291.3 KiB → 276.9 KiB | 5.0% | 50.2 KiB → 50.2 KiB | 0.0% |

Run `npm run build` followed by `npm run analyze` to refresh the current measurements.
