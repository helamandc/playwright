const { test, expect } = require('@playwright/test')

test.skip('My first test', async ({ page }) => {
    expect(12).toBe(12)
})

test('My second test', async ({ page }) => {

    expect('The quick brown fox.').toContain('FOX'.toLowerCase())
    expect(true).toBeTruthy()
})

test('My third test', async ({ page }) => {

    expect(false).toBeFalsy()

})

test('My fourth test', async ({ page }) => {

    expect('Helaman Del Castillo'.includes('man')).toBeTruthy()

})