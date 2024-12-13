import { gerarEmail, gerarProduto } from "../../support/utils";

describe('Registro de produto', () => {
  const produto = gerarProduto()
  const email = gerarEmail()
  
  before(() => {
    cy.registerUser(email)
  })

  beforeEach(() => {
    cy.loginUser(email, Cypress.env('PASSWORD'))
  })
 
  it('Registrar produto', () => {
    // cy.get('[data-testid="cadastrar-produtos"]').click()
    // cy.get('[data-testid="nome"]').type(produto)
    // cy.get('[data-testid="preco"]').type('10000')
    // cy.get('[data-testid="descricao"]').type('Teste do teste')
    // cy.get('[data-testid="quantity"]').type('10')
    // cy.get('[data-testid="cadastarProdutos"]').click()

    // cy.contains('tr', produto)
  })
})