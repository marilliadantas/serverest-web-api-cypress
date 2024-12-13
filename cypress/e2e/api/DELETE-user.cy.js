import { gerarEmail } from "../../support/utils";

describe("Deletar usuários", () => {
  it("Deletar usuário válido", () => {
    const email = gerarEmail()

    cy.cadastrarUsuario(email).then((userId) => {
      cy.deletarUsuarioPorID(userId).then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal("Registro excluído com sucesso")
      })
    })
  })

  it("Deletar usuário por ID inválido", () => {
    const invalidID = "38Dw6HQ4IhooHD5K";

    cy.deletarUsuarioPorID(invalidID).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body.message).to.equal("Nenhum registro excluído")
    })
  })
})