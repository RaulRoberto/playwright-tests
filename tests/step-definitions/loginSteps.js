const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser;
let page;

Given('que o usuário está na página de login', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://minha-aplicacao.com/login');
});

When('o usuário insere {string} e {string}', async function (username, password) {
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
});

Then('o usuário deve ser redirecionado para a página inicial', async function () {
  await page.click('button[type="submit"]');
  await page.waitForURL('**/home');
  expect(page.url()).toContain('/home');
  await browser.close();
});

