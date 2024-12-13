import { gerarEmail } from "../../support/utils";

describe("Listar usuários", () => {
  it("Listar todos os usuários", () => {
    cy.listarUsuarios().then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.usuarios.length).to.equal(response.body.quantidade)
      expect(response.body.usuarios).to.have.length.greaterThan(0)
    })
  })

  it("Listar usuário por ID válido", () => { 
    const email = gerarEmail();
    
    cy.cadastrarUsuario(email).then((userId) => {
      cy.buscarUsuarioPorID(userId).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body._id).to.eq(userId)
      })
    })
  })

  it("Listar usuário por ID inválido", () => {
    const invalidID = "38Dw6HQ4IhooHD5K";

    cy.buscarUsuarioPorID(invalidID).then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal("Usuário não encontrado")
    })
  })
})