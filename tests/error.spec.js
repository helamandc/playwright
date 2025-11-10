import { test, expect } from '@playwright/test'

test.use({ viewport: { width: 1536, height: 864 } })

test('Verify error message', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const height = await page.viewportSize().height
    const width = await page.viewportSize().width

    console.log('The height is ' + height)
    console.log('The width is ' + width)

    await page.getByPlaceholder('Username').type('Admin', { delay: 200 });

    await page.getByPlaceholder('Password').type('WrongPassword', { delay: 200 })

    await page.locator('button:has-text("Login")').click()

    const errorMessage = await page.locator('p:has-text("Invalid credentials")').textContent()

    console.log('Error message is ' + errorMessage)

    await expect(errorMessage).toContain('Invalid credentials')
    await expect(errorMessage.includes('Invalid')).toBeTruthy()
})