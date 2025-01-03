import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import CommomPage from "./pages/commonPage";

const register = new RegisterPage();
const login = new LoginPage();
const commom = new CommomPage();

Cypress.Commands.add("registerUser", (email) => {
  commom.accessPage('cadastrarusuarios')
  register.fillInRegister('Alfredo', email, Cypress.env('PASSWORD'))
  register.verifyMessage('Cadastro realizado com sucesso')
})

Cypress.Commands.add("loginUser", (email, senha) => {
  commom.accessPage('login')
  login.fillInLogin(email, senha)
})

Cypress.Commands.add("login", (email, password) => {
  cy.api({
    method: "POST",
    url: `${Cypress.env('SERVER')}${Cypress.env('LOGIN')}`,
    body: {
      email: email,
      password: password,
    },
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  })
})

Cypress.Commands.add("cadastrarUsuario", (email) => {
  return cy.api({
    method: "POST",
    url: `${Cypress.env('SERVER')}${Cypress.env('USERS')}`,
    body: {
      nome: "Alfredo",
      email: email,
      password: "teste123",
      administrador: "true",
    },
  }).then((response) => {
    return response.body._id;
  })
})

Cypress.Commands.add("listarUsuarios", () => {
  cy.api({
    method: "GET",
    url: `${Cypress.env('SERVER')}${Cypress.env('USERS')}`,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  })
})

Cypress.Commands.add("buscarUsuarioPorID", (userID) => {
  cy.api({
    method: "GET",
    url: `${Cypress.env('SERVER')}${Cypress.env('USERS')}/${userID}`,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  })
})

Cypress.Commands.add("deletarUsuarioPorID", (userID) => {
  cy.api({
    method: "DELETE",
    url: `${Cypress.env('SERVER')}${Cypress.env('USERS')}/${userID}`,
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  })
})

Cypress.Commands.add("atualizarUsuariosPorID", (userID, email) => {
  cy.api({
    method: "PUT",
    url: `${Cypress.env('SERVER')}${Cypress.env('USERS')}/${userID}`,
    body: {
      nome: "Natan",
      email: email,
      password: "teste1234",
      administrador: "false",
    },
    failOnStatusCode: false,
  }).then((response) => {
    return response;
  })
})