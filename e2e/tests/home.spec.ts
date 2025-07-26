import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

const devices = [
  { name: 'desktop', viewport: { width: 1280, height: 800 } },
  { name: 'tablet', viewport: { width: 768, height: 1024 } },
  { name: 'mobile', viewport: { width: 375, height: 667 } },
];

for (const device of devices) {
  test(`should render all main sections on ${device.name}`, async ({ page }) => {
    await page.setViewportSize(device.viewport);
    const home = new HomePage(page);
    await home.goto();
    await Promise.all([
      home.navBar.waitFor({ state: 'visible' }),
      home.welcomeSection.waitFor({ state: 'visible' }),
      home.expSection.waitFor({ state: 'visible' }),
      home.skillSection.waitFor({ state: 'visible' }),
      home.recommendationsSection.waitFor({ state: 'visible' }),
      home.footerSection.waitFor({ state: 'visible' })
    ]);
  });
}

test('should check the page title', async ({ page }) => {
  const home = new HomePage(page);
  
  await home.goto();
  await home.expectTitle();
});

test('should display all main texts of each section', async ({ page }) => {
  const home = new HomePage(page);

  await home.goto();
  await home.expectNavBarTexts();
  await home.expectWelcomeSectionTexts();
  await home.expectExpSectionTexts();
  await home.expectSkillSectionTexts();
  await home.expectRecommendationsSectionTexts();
  await home.expectFooterTexts();
});
