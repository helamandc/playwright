import { test, expect } from '@playwright/test'

test('Verify Application Title', async ({ page }) => {

    //expect('Google'.toLowerCase().includes('google')).toBeTruthy()
    await page.goto('https://www.google.com/')

    const url = await page.url()
    console.log('The url is ' + url)

    const title = await page.title()
    console.log('The title is ' + title)

    await expect(page).toHaveTitle('Google')
})