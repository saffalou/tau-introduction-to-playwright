import { type Locator, type Page, expect } from "@playwright/test";

export class HomePage2{
//variables
readonly page:Page;
//await page.getByRole('link', { name: 'Get started' }).click();
readonly getStartedButton: Locator

//await expect(page).toHaveTitle(/Playwright/);
readonly title:RegExp;

//constructor
constructor (page:Page) {
    this.page = page
    this.getStartedButton = page.getByRole('link', { name: 'Get started' });
    this.title  = /Playwright/;
}

//methods
async clikcGetStarted(){
    await this.getStartedButton.click();
}

async assertPageTitle(){
    await expect(this.page).toHaveTitle(this.title)
} 
}