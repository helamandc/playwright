import { test, expect } from '@playwright/test'

test('Verify application title', async ({ page }) => {

    await page.goto('https://easygo.io/')

    const title = await page.title()

    console.log(title)

    await expect(page).toHaveURL('https://easygo.io/')
    await expect(page).toHaveTitle('Easygo - Smart Gaming & Enhanced Entertainment Online')
})