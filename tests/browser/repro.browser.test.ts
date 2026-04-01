import "vitest-browser-svelte";
import { expect, test } from "vite-plus/test";
import { page } from "vite-plus/test/browser";
import Repro from "../../src/lib/Repro.svelte";

test("reproduces missing Vite+ type augmentations", async () => {
  const screen = await page.render(Repro, { label: "hello" });

  await expect.element(screen.getByRole("heading", { name: "hello" })).toBeVisible();
});
