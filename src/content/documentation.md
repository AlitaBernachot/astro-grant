---
title: Documentation
---

# Whats is Astro?

Astro is a js framework made for generating content rich websites.

# Issues we have faced

- Hydration mismatch https://vite-plugin-ssr.com/hydration-mismatch#hydration-mismatch
either use `define:vars={{ testLayers }}`, but js will be inlined (no import modules)