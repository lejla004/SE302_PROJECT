# SE302 Project – Automated Tests with Playwright

This repository contains the project for the **SE302 – Software Testing and Maintenance** course.
The goal of the project is to design and implement **automated  tests** for a web application using **Playwright**, the website that is used  is a demo banking application:
https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login

###SETUP

Clone the repository
 ```bash
git clone https://github.com/lejla004/SE302_PROJECT.git

```
Initialize the project
```bash
git init
```
Install Playwright
```bash
npm install @playwright/test
npx playwright install
```


### RUN TESTS

Run all test cases
```bash
npx playwright test

```

Run a specific test case

```bash
npx playwright test test/nameofthefolder/nameofthefile.spec.ts
```
View Playwright Report


```bash
npx playwright show-report

```

---
