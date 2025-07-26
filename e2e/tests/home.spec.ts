import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

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
