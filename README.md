## Problem

When importing test APIs from:

- `vite-plus/test`
- `vite-plus/test/browser`

TypeScript does not apply third-party Vitest module augmentations that target:

- `vitest`
- `vitest/browser`

That causes these errors:

- `Property 'render' does not exist on type 'BrowserPage'.`
- `Property 'element' does not exist on type 'ExpectStatic'.`

## Reproduction

Install dependencies if needed:

```bash
vp install
vp run check
```

This reports

```
Property 'render' does not exist on type 'BrowserPage'.
Property 'element' does not exist on type 'ExpectStatic'.
```

Why this seems to happen

vitest-browser-svelte augments vitest/browser, and Vitest browser matcher types augment vitest.

But this repro imports from Vite+ module names instead:

- vite-plus/test
- vite-plus/test/browser
- TypeScript module augmentation requires exact module-specifier matches, so the Vitest augmentations do not carry over automatically.
