describe('Turing Cafe Reservations', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200,
      body: [
          {
              "id": 1,
              "name": "Christie",
              "date": "12/29",
              "time": "7:00",
              "number": 12
          },
          {
              "id": 2,
              "name": "Leta",
              "date": "4/5",
              "time": "7:00",
              "number": 2
          }
      ]
    })

    cy.visit('http://localhost:3000/')
  })



  it('should display a form with the properly named input fields and submission button', () => {
      cy.get('.App')
        .find('.resy-form')
        .within(() => {
          cy.get('input[name="name"]')
            .should('exist')
          cy.get('input[name="date"]')
            .should('exist')
          cy.get('input[name="time"]')
            .should('exist')
          cy.get('input[name="guests"]')
           .should('exist')
        })  
  })

  it('should display all existing reservations and each reservation should display the expected relevant data', () => {
    cy.get('.App >.resy-container')
      .get(':nth-child(1)')
        .should('exist')
        .should('contain','Christie')
        .should('contain','12/29')
        .should('contain','7:00 pm')
        .should('contain','Number of guests: 12')

    cy.get('.App >.resy-container')
      .get(':nth-child(2)')
        .should('exist')
        .should('contain','Leta')
        .should('contain','4/5')
        .should('contain','7:00 pm')
        .should('contain','Number of guests: 2')
    })


  it('should add a booking upon form submission and all booking data should be displayed on the booking card', () => {
    cy.get('.App > .resy-form')
      .get('input[name="name"]').type('Tom')
      .get('input[name="date"]').type('4/9')
      .get('input[name="time"]').type('8:00 pm')
      .get('input[name="guests"]').type(5)
      .get('button').click()

      cy.get('.App >.resy-container')
        .get(':nth-child(3)')
          .should('exist')
          .should('contain','Tom')
          .should('contain','4/9')
          .should('contain','8:00 pm')
          .should('contain','Number of guests: 5')
    })
      
})