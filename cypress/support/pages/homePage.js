class HomePage {
    verifyUrl(route) {
        cy.url().should('include', route)
    }
}

export default HomePage;