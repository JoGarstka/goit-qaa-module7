Feature: Shopping on the https://skladprosty.pl/

    You can search for and buy here whatever you want, especially beauty/cosmetic products.

    Scenario: Find what you want to buy and add it to the cart

    Given I am on the online shop website https://skladprosty.pl/
    When I click on the 'Nowości' button
    And I sarch for and click on 'Kamień Gua Sha Muszla Różowy Kwarc'
    And I am on the product site https://skladprosty.pl/pl/p/Kamien-Gua-Sha-Muszla-Rozowy-Kwarc-/2295
    And I click on the 'Dodaj do koszyka' button
    Then I see a notification message 'Produkt dodany do koszyka'
    And I see one item in the cart

    Scenario: Finalizing the purchase

    Given I have one 'Kamień Gua Sha Muszla Różowy Kwarc' in my shopping cart
    When I click on the 'Koszyk' icon
    And I select a delivery method: 'Dostawa' as 'Orlen Paczka'
    And I select a payment method: 'Płatność' as 'Blik'
    And I click on the 'Zamawiam' button to confirm my decisions
    And I select shopping without registration
    And I click on the 'Złóż zamówienie' button
    And I enter my personal data 
    And I select my delivery place
    And I click one the 'Podsumowanie' button
    Then I see my order number
    And I am redirected to the payment page
    

