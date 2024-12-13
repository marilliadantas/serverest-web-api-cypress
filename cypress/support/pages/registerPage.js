import register from "../elements/registerElements";

class RegisterPage {
    fillInRegister(name, email, password) {
        if (name !== '') {
            cy.get(register.nameField).type(name)
        }
        if (email !== '') {
            cy.get(register.emailField).type(email)
        }
        if (password != '') {
            cy.get(register.passwordField).type(password)
        }
        cy.get(register.checkbox).check()
        cy.get(register.registerBtn).click()
    }

    verifyMessage(txt) {
        cy.get(register.alert)
            .invoke('text')
            .then((text) => {
            cy.wrap(text.replace('×', '').trim()).should('include', txt);
        })
    }

    verifyMessages(txts) {
        cy.get(register.alert).each(($el, index) => {
          cy.wrap($el)
            .should('be.visible')
            .invoke('text')
            .then((actualText) => {
              cy.wrap(actualText.replace('×', '').trim()).should('include', txts[index])
            })
        })
    }
}

export default RegisterPage;