import { test, expect } from "@playwright/test";

test("should navigate to home page on first render", async ({ page }) => {
  await page.goto("/");
});

test("should navigate from home page to magazine page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Magazine" }).click();
  await expect(page).toHaveURL("/magazine");
});
