Given('I am on the online shop website https://skladprosty.pl/', () => {
    cy.visit('https://skladprosty.pl/')
});

When(`I click on the 'Nowości' button`, () => {
    cy.get('.opt-old-menu-h3-firstlvl > #headlink13 > span').click()
});

When(`I sarch for and click on 'Kamień Gua Sha Muszla Różowy Kwarc'`, () => {
    cy.get('.innerbox > .floatcenterwrap > .paginator > :nth-child(4) > a').click(),
    cy.get('[data-product-id="2295"] > .product-inner-wrap > .prodimage > .f-grid-12 > .k_basic').click()
});

etc