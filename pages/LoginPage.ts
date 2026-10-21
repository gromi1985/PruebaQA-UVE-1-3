import {Page , Locator} from '@playwright/test'

export class LoginPage
{
    private readonly page: Page;
    private readonly userInput: Locator;
    private readonly passwordInput: Locator;
    private submitButton: Locator;
    private readonly loginLink: Locator;

    constructor(page:Page){
        this.page = page;
        this.loginLink = page.getByRole('link', { name: 'Log in' });
        this.userInput = page.locator('#loginusername');
        this.passwordInput = page.locator('#loginpassword');
        
        // El botón de Log in dentro del modal en Demoblaze suele ser un botón con onclick o por texto
        this.submitButton = page.getByRole('button', { name: 'Log in' });
    }


     async goto(): Promise<void> {
         await this.page.goto('/');
     }


    async loginNavigate():Promise<void>
    {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }

    async waitForPage():Promise<void>
    {
        await this.userInput.waitFor();
    }

    async fillUser (user: string): Promise<void>
    {
        await this.userInput.fill(user);
    }

    async fillPassword (password: string): Promise<void>
    {
        await this.passwordInput.fill(password);
    }

    async clickLogin(): Promise<void>
    {
        await this.submitButton.click();
    }

    async login(user:string,password:string): Promise<void>{
        await this.loginLink.click();
        await this.userInput.fill(user);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

}