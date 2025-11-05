import { test, expect } from '@playwright/test'


test('Verify login', async ({ page }) => {

    // await page.setDefaultNavigationTimeout(60000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')



    await page.getByPlaceholder('Username').fill('Admin')

    await page.locator('[name="password"]').fill('admin123')

    await page.locator("button[type='submit']").click()

    await page.waitForTimeout(5000)

    expect(page.url()).toContain('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //await expect(page).toHaveURL(/dashboard/)

    await page.getByAltText('profile picture').click()

    await page.getByText('Logout').click()

    expect(page.url()).toContain('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})