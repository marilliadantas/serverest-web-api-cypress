import { gerarEmail } from "../../support/utils";

describe("Atualizar registro", () => {
  it("Atualizar registro válido", () => {
    const email = gerarEmail();
    
    cy.cadastrarUsuario(email).then((userId) => {
        cy.atualizarUsuariosPorID(userId, email).then((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).to.equal("Registro alterado com sucesso")
      })
    })
  })

  it("Atualizar registro com email cadastrado", () => {
    const invalidID = "38Dw6HQ4IhooHD5K";

    cy.atualizarUsuariosPorID(invalidID, email).then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal("Este email já está sendo usado")
    })
  })
})