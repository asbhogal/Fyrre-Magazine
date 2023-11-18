import { test, expect } from "@playwright/test";

test("should navigate to home page on first render", async ({ page }) => {
  await page.goto("/");
});
