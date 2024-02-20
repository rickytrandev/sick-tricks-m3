describe('Sick Trick UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: '../fixtures/tricks'
    }).as('getTricks')
  })
  it('When I visit the page, i should see a title', () => {
    cy.get("h1").should('contain','Sick Trick Wish List')
  })

  it('When I visit the page, i should see a form', () => {
    cy.get("form").should('exist')
  })

  it('When I visit the page, i should see a list of tricks', () => {
    cy.wait('@getTricks')
    cy.get(".card-section .trick").first()
      .contains("p", "treflip")
      .should("exist")
    cy.get(".card-section .trick").last()
      .contains("p", "frontside 50-50, backside 180 out")
      .should("exist")
  })

  it('when data is put into the form, the value is reflected in that form input', () => {
    cy.get("select[name='stance']").select('Regular')
    cy.get("input[name='trick']").type('ollie')
    cy.get("select[name='obstacle']").select('Stairs')
    cy.get("input[name='tutorial']").type('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
  })

  it('when the button is clicked, the trick shows on the DOM', () => {
    cy.get("select[name='stance']").select('Regular')
    cy.get("input[name='trick']").type('ollie')
    cy.get("select[name='obstacle']").select('Stairs')
    cy.get("input[name='tutorial']").type('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')
    cy.get('button').click()
    cy.get(".card-section .trick").last()
    .contains("p", "ollie")
    .should("exist")
  })
  
  
})