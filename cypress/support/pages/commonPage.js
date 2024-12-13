class CommomPage {
    accessPage(route) {
        cy.visit(`${Cypress.env('BASE_URL')}/${route}`)
    }
}

export default CommomPage;