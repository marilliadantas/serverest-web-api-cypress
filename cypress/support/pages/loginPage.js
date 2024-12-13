import loginElements from "../elements/loginElements";

class LoginPage {
    fillInLogin(email, password) {
        if (email !== '') {
            cy.get(loginElements.emailField).type(email)
        }
        if (password !== '') {
            cy.get(loginElements.passwordField).type(password)
        }
        cy.get(loginElements.loginBtn).click()
    }

    verifyUrl(route) {
        cy.url().should('include', route)
    }

    verifyMessage(txt) {
        cy.get(loginElements.credentialsAlert).should('contain', txt)
    }
}

export default LoginPage;