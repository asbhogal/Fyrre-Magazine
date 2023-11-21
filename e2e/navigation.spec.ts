import { test, expect } from "@playwright/test";

test("should navigate to home page on first render", async ({ page }) => {
  await page.goto("/");
});

test("should navigate from home page to magazine page using header", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Magazine" })
    .click();
  await expect(page).toHaveURL("/magazine");
});
