import { test, expect } from "@playwright/test"

test('Verify application title', async ({ page }) => {
    await page.goto('https://www.churchofjesuschrist.org/?lang=eng')

    const title = await page.title()

    await expect(title).toContain('Homepage')

})