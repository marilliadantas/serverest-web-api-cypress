import LoginPage from "../../support/pages/loginPage";
import RegisterPage from "../../support/pages/registerPage";
import HomePage from "../../support/pages/homePage";
import { gerarEmail } from "../../support/utils";

const login = new LoginPage();
const home = new HomePage();

describe('Login', () => {
  let email;

  before(() => {
    email = gerarEmail();
    cy.registerUser(email)
  })

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login');
  })

  it('Credenciais válidas', () => {
    login.fillInLogin(email, Cypress.env('PASSWORD'))
    home.verifyUrl('/admin/home')
  })

  it('Email inválido', () => {
    login.fillInLogin('usu137@teste.com', Cypress.env('PASSWORD'))
    login.verifyMessage('Email e/ou senha inválidos')
  })

  it('Senha inválida', () => {
    login.fillInLogin(email, 'senhaErrada123')
    login.verifyMessage('Email e/ou senha inválidos')
  })

  it('Email vazio', () => {
    login.fillInLogin('', Cypress.env('PASSWORD'))
    login.verifyMessage('Email é obrigatório')
  })

  it('Senha vazia', () => {
    login.fillInLogin(email, '')
    login.verifyMessage('Password é obrigatório')
  })
})