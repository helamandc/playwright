import { test, expect } from '@playwright/test'


test('Verify application title', async ({ page }) => {

    await page.goto('https://kick.com/')

    const title = await page.title()
    console.log('The title is ' + title)

    await expect(title).toContain('Kick')
})