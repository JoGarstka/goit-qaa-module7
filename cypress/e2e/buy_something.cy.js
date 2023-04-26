describe('Buy yourself something nice', () => {

    it('From A to Z', () => {
        cy.visit('https://skladprosty.pl/'),
        cy.get('.opt-old-menu-h3-firstlvl > #headlink13 > span').click(),
        cy.get('.innerbox > .floatcenterwrap > .paginator > :nth-child(4) > a').click(),
        cy.get('[data-product-id="2295"] > .product-inner-wrap > .prodimage > .f-grid-12 > .k_basic').click(),
        cy.get('.button_wrap > .addtobasket').click(),
        cy.get('.row > p'),
        cy.get('a.count').click(),
        cy.get('.k_cart_inner > .selected > .name > .radio-wrap').click(),
        cy.get('#payments-online-container > :nth-child(3) > .name > .radio-wrap').click(),
        cy.get('.important').click(),
        cy.get('form.order > .btn > span').click(),
        cy.get('#input_mail').type('abcd@email.com'),
        cy.get('#input_name').type('Abcd'),
        cy.get('#input_surname').type('Efg'),
        cy.get('#input_phone').type('123456789'),
        cy.get('#input_other_address').type('Przykładowa 1/2'),
        cy.get('#input_zip').type('12-200'),
        cy.get('#input_city').type('Nibylandia'),
        cy.get('.apaczkaComboBox').click(),
        cy.get(':nth-child(8) > .tabulator-cell > .apaczkaMapCell > .apaczkaCellHeader > b').click()
       // cy.get('.important').click(),
       // cy.get('.bottombuttons > .btn-red').click()
    });
})