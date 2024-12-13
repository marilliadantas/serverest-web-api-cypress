import { gerarEmail } from "../../support/utils";

const email = gerarEmail();

describe("Login", () => {
  before(() => {
    cy.cadastrarUsuario(email)
  })

  it("Login com dados válidos", () => {
    cy.login(email, Cypress.env("PASSWORD")).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso")
    })
  })

  it("Login com email inválido", () => {
    cy.login("emailinvalido@teste.com", Cypress.env("PASSWORD")).then((response) => {
      expect(response.status).to.equal(401)
      expect(response.body.message).to.equal("Email e/ou senha inválidos")
    })
  })

  it("Login com senha inválido", () => {
    cy.login(email, 'senhaInvalida').then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos")
    })
  })

  it("Login com email vazio", () => {
    cy.login('', Cypress.env("PASSWORD")).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal("email não pode ficar em branco")
    })
  })

  it("Login com password vazio", () => {
    cy.login(email, '').then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.password).to.equal("password não pode ficar em branco")
    })
  })

  it("Login com email e password vazios", () => {
    cy.login('', '').then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.email).to.equal("email não pode ficar em branco")
      expect(response.body.password).to.equal("password não pode ficar em branco")
    })
  })
})

