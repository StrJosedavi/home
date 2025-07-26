import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navBar: Locator;
  readonly welcomeSection: Locator;
  readonly expSection: Locator;
  readonly skillSection: Locator;
  readonly recommendationsSection: Locator;
  readonly footerSection: Locator;
  readonly recommendation: Locator;
  readonly recommendationTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navBar = page.locator('#navBar');
    this.welcomeSection = page.locator('#welcome');
    this.expSection = page.locator('#exp');
    this.skillSection = page.locator('#skills');
    this.recommendationsSection = page.locator('#recommendations');
    this.footerSection = page.locator('#footer');
    this.recommendationTitle = page.getByText('Recomendações');
    this.recommendation = page.getByText(/Fitbank|Júnior Veras|Pedro Henrique/);
  }

  // Adaptar método para usar valor do arquivo .env
  async goto() {
    await this.page.goto('http://localhost:5173'); 
  }

  async expectTitle() {
    await expect(this.page).toHaveTitle('José Davi - QA');
  }

  async expectRecommendationsVisible() {
    await expect(this.recommendationTitle).toBeVisible();
  }

  async expectRecommendationExampleVisible() {
    await expect(this.recommendation).toBeVisible();
  }
  
  async expectNavBarTexts() {
    await expect(this.page.locator('#navBar').getByRole('heading', { name: 'José Davi Fernandes Sobreira' })).toBeVisible();
    await expect(this.page.locator('#navBar').getByText('Analista de Qualidade')).toBeVisible();
  }

  async expectWelcomeSectionTexts() {
    await expect(this.page.getByText('Profissional com quase 4 anos de experiência em qualidade de software', { exact: false })).toBeVisible();
  }

  async expectExpSectionTexts() {
    await expect(this.page.getByText('Experiência Profissional')).toBeVisible();
    await expect(this.page.getByText('EasyCrédito')).toBeVisible();
    await expect(this.page.getByText('Fitbank Pagamentos Eletrônicos')).toBeVisible();
  }

  async expectSkillSectionTexts() {
    await expect(this.page.getByText('Habilidades Técnicas')).toBeVisible();
    await expect(this.page.getByText('Testes & Qualidade')).toBeVisible();
    await expect(this.page.getByText('Ferramentas & Tecnologias')).toBeVisible();
    await expect(this.page.getByText('Metodologias & Soft Skills')).toBeVisible();
  }

  async expectRecommendationsSectionTexts() {
    await expect(this.page.getByRole('heading', { name: 'Recomendações' })).toBeVisible();
    await expect(this.page.getByText('Tive a oportunidade de trabalhar com o Davi', { exact: false })).toBeVisible();
    await expect(this.page.getByText('Davi é um profissional extremamente competente', { exact: false })).toBeVisible();
    await expect(this.page.getByText('José Davi é um profissional dedicado', { exact: false })).toBeVisible();
  }

  async expectFooterTexts() {
    await expect(this.page.getByText('Vamos Conversar?')).toBeVisible();
    await expect(this.page.getByText('Entre em contato para discutir oportunidades')).toBeVisible();
    await expect(this.page.getByText('Email')).toBeVisible();
    await expect(this.page.getByText('Telefone')).toBeVisible();
    await expect(this.page.getByText('Redes Sociais')).toBeVisible();
  }
}
