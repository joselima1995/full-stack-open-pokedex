const { test, describe, expect } = require('@playwright/test')
//beforeEach
describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('another page can be opened', async ({ page }) => {
    await page.goto('/pokemon/ivysaur')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})