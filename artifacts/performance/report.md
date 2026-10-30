# Production asset comparison

Gzip estimates for unique initial JavaScript and CSS assets linked by each generated HTML page. Deferred animation/validation chunks, images, prefetched routes and HTML are excluded. These are download-size comparisons, not Lighthouse scores or measured loading times.

| Page | Initial JavaScript (before → after) | Reduction | Initial CSS (before → after) | Reduction |
| --- | --- | --- | --- | --- |
| / | 289.3 KiB → 277.3 KiB | 4.1% | 50.2 KiB → 39.0 KiB | 22.4% |
| /products | 287.4 KiB → 275.2 KiB | 4.2% | 56.2 KiB → 45.0 KiB | 20.0% |
| /products/crm | 299.2 KiB → 287.5 KiB | 3.9% | 52.9 KiB → 41.6 KiB | 21.3% |
| /resources/guides | 284.8 KiB → 265.9 KiB | 6.6% | 62.7 KiB → 51.4 KiB | 18.0% |
| /contact | 369.8 KiB → 263.3 KiB | 28.8% | 51.2 KiB → 40.0 KiB | 22.0% |
| /book-demo | — → 264.6 KiB | — | — → 39.0 KiB | — |
| /custom-solutions | 297.7 KiB → 285.7 KiB | 4.0% | 50.9 KiB → 51.2 KiB | -0.6% |
| /company | 268.8 KiB → 250.3 KiB | 6.9% | 52.8 KiB → 53.1 KiB | -0.6% |
| /platform | 291.3 KiB → 279.4 KiB | 4.1% | 50.2 KiB → 50.5 KiB | -0.6% |

Run `npm run build` followed by `npm run analyze` to refresh the current measurements.
