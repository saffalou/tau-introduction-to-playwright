//AAA

import { test, expect, type Page} from '@playwright/test';
import{HomePage2} from '../pages/home-page';

const url = 'https://playwright.dev';
let homePage2: HomePage2;

test.beforeEach(async ({page}) => {
await page.goto(url)
homePage2 = new HomePage2 (page)
});

async function clickGetStarted(page:Page){
    //await page.getByRole('link', { name: 'Get started' }).click();
    await homePage2.clickGetStarted()

}
test.describe('Playwright  website',() => {

    test.only('has title', async ({ page }) => {
    
        await HomePage2.assertPageTitle();
      });
      
      test('get started link', async ({ page }) => {
        await clickGetStarted(page);
        await expect(page).toHaveURL(/.*intro/);
      });
      
      test('check Java page', async ({ page }) => {
        await clickGetStarted(page);
        await page.getByRole('button', { name: 'Node.js' }).hover();
        await page.getByText('Java', { exact: true }).click();
        // await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); // in case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.
        await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
        await expect(page.getByText('Installing Playwright', { exact: true })).not.toBeVisible();
        const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
        await expect(page.getByText(javaDescription)).toBeVisible();
      });
});

export default HomePage2;
  