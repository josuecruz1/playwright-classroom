import { expect } from "@playwright/test";

class logIn {
    private page: any;
    private user: any;
    private password: any;
    private loginButton: any;
    private product01: any;
    private product02: any;
    private product02Desc: any;
    private addToCardBotton : any;

    constructor(page){
        this.page = page;
        this.user = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.product01 = page.locator('xpath=//*[@id="item_4_title_link"]/div'),
        this.product02 = page.locator('xpath=//*[@id="item_0_title_link"]/div')
        this.product02Desc = page.locator('//*[@id="inventory_container"]/div/div[2]/div[2]/div');
        this.addToCardBotton = page.locator('//*[@id="inventory_container"]/div/div[2]/div[3]/button');
    }

    async login(url, username, password, product01){
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
        await expect(this.product01).toHaveText(product01)
    }

    async productList (prodcut02, product02Desc){
        await expect(this.product02).toBeVisible();
        await expect(this.product02).toHaveText(prodcut02);
        await expect(this.product02Desc).toBeVisible();
        await expect(this.product02Desc).toHaveText(product02Desc);
        await expect(this.addToCardBotton).toBeVisible();
        await expect(this.addToCardBotton).toHaveText('ADD TO CART');
        await this.addToCardBotton.click();
        await this.page.waitForTimeout(10000);
    }
}
module.exports = { logIn };