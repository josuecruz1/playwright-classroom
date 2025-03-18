import { expect } from "@playwright/test";

class logIn {
    private page: any;
    private user: any;
    private password: any;
    private loginButton: any;

    constructor(page){
        this.page = page;
        this.user = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login(url, username, password){
        await this.page.goto(url);
        await this.page.waitForSelector('#user-name');
        await expect(this.user).toBeVisible();
        await this.user.type(username);
        await this.page.waitForSelector('#password');
        await expect(this.password).toBeVisible();
        await this.password.type(password);
        await this.page.waitForSelector('#login-button');
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginButton).toHaveText('LOGIN');
        await this.loginButton.click();
        await this.page.waitForSelector('#header_container > div.header_label > div');
    }
}
module.exports = { logIn };