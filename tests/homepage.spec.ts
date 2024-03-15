import {test, expect} from '@playwright/test';

test.describe('Homepage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000");
    });

    test('Header', async ({page}) => {
        await expect(page).toHaveTitle("Upper Iowa Tool & Die Custom Mold & Tooling | Home");

        const contactSection = page.locator('.contact-section');
        const headerText = page.locator('.hero-content p');
        const logo = page.locator('.hero-content img');
        const heroImage = page.locator('.hero-image img');
        const quoteButton = page.locator('text=Get A Quote');

        await expect(contactSection).toHaveText('956 6th Ave W Cresco, IA 52136 | (563) 547-2220')
        await expect(logo).toHaveAttribute('src', 'images/uitd-logo.png');
        await expect(logo).toHaveAttribute('alt', 'Upper Iowa Tool & Custom Molding Logo');
        await expect(headerText).toHaveText('Upper Iowa Tool & Die Custom Mold & Tooling provides the best custom injection molding services at an affordable cost');
        await expect(heroImage).toHaveAttribute('src', 'images/hero-image-blue-400.png');
        await expect(heroImage).toHaveAttribute('alt', 'Collage of Machines');
        await expect(quoteButton).toHaveAttribute('href', 'mailto:alex.fortune@upperiowatoolanddie.com?cc=scott.fortune@upperiowatoolanddie.com&subject=Injection Mold Quote Request&body=Tell Us About Your Project');
    });

    test('Services Section', async ({page}) => {
        const designSection = page.locator('.services-section li').first()
        const designSectionHeader = designSection.locator('h2');
        const designSectionContent = designSection.locator('p');

        const productionSection = page.locator('.services-section li').nth(1);
        const productionSectionHeader = productionSection.locator('h2');
        const productionSectionContent = productionSection.locator('p');

        const measuringSection = page.locator('.services-section li').last();
        const measuringSectionHeader = measuringSection.locator('h2');
        const measuringSectionContent = measuringSection.locator('p')

        await expect(designSectionHeader).toHaveText('Injection Mold Design');
        await expect(designSectionContent).toHaveText('While injection molding is the final product, the process starts with tooling. Our tool makers can fabricate the tool to produce the injection molded part.');

        await expect(productionSectionHeader).toHaveText('Injection Mold Production');
        await expect(productionSectionContent).toHaveText('Our Cincinnati Milacron MH400 is capable of handling most injection mold jobs big and small. If your injection molded part requires annealing we can perform that in our JP Industrial Oven.')

        await expect(measuringSectionHeader).toHaveText('Injection Mold Measuring');
        await expect(measuringSectionContent).toHaveText('Need PPAP services? Our team of CMM trained technicians can provide the data needed to assure the injection molded part meets your specific tolerances.')
    });

    test('Experience Section', async ({page}) => {
        const experienceSection = page.locator('.experience-section')
        const experienceSectionHeader = experienceSection.locator('h2')
        const experienceSectionContent = experienceSection.locator('p')
        const letsTalkButton = experienceSection.locator('text=Let\'s Talk');

        await expect(experienceSectionHeader).toHaveText('Experience Counts!')
        await expect(experienceSectionContent.first()).toHaveText('Through our over 30 years of business we have gained the reputation of providing our customers with a product of highest quality at a very reasonable cost. We are proud to be ISO 9001:2015 certified to provide you with continuous improvement through the highest quality parts and services in northeast Iowa.')
        await expect(experienceSectionContent.nth(1)).toHaveText('Upper Iowa Tool & Die Custom Mold & Tooling is your one-stop shop for precision focused design, fabrication and production of quality plastic injection molded parts. We would love to talk to you to learn how we can help reduce your production costs while improving your efficiencies and increasing your profits!')
        await expect(letsTalkButton).toHaveAttribute('href', 'mailto:alex.fortune@upperiowatoolanddie.com?cc=scott.fortune@upperiowatoolanddie.com&subject=Injection Mold Inquiry&body=Tell Us About Your Project')
    });

    test('Footer', async ({page}) => {
        const footer = page.locator('footer');

        await expect(footer).toHaveText('© 2024 - Upper Iowa Tool & Die Custom Mold & Tooling | (563) 547-2220')
    })
});