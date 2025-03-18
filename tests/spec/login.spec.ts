import {test, expect} from '@playwright/test';
const {logIn} = require("../page/login");
const data = JSON.parse(JSON.stringify(require("../data/login.json")));

test('01 LogIn', async ({ page }) => {
    const Login = new logIn(page);
    await Login.login(data.url, data.username, data.password);
    await expect(page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
    await expect(page).toHaveTitle('Swag Labs');
});