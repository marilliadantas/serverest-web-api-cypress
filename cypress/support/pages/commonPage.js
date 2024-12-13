class CommomPage {
    accessPage(route) {
        cy.visit(`${Cypress.env('FRONT_URL')}/${route}`)
    }
}

export default CommomPage;