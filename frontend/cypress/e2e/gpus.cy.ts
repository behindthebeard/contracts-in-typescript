describe('GPUs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('returns error if fetch fails', () => {
    cy.intercept('GET', '/gpus', {
      statusCode: 500,
      body: 'Error',
    }).as('getGpus');

    cy.wait('@getGpus');
    cy.wait('@getGpus');
    cy.wait('@getGpus');
    cy.wait('@getGpus');

    cy.findByRole('alert')
      .contains('There was an error fetching the data. Please try again later.')
      .should('be.visible');
  });

  it('renders GPU table correctly', () => {
    cy.intercept('GET', '/gpus', { fixture: 'gpus.json' }).as('getGpus');
    cy.intercept('GET', '/gpus/*', { fixture: 'gpu.json' }).as('getGpu');

    cy.wait('@getGpus');
    cy.wait('@getGpu');
    cy.wait('@getGpu');

    cy.findByRole('table')
      .should('be.visible')
      .within(() => {
        cy.get('tbody').find('tr').should('have.length', 2);
      });
  });

  it('opens GPU dialog', () => {
    cy.intercept('GET', '/gpus', { fixture: 'gpus.json' }).as('getGpus');
    cy.intercept('GET', '/gpus/*', { fixture: 'gpu.json' }).as('getGpu');

    cy.wait('@getGpus');
    cy.wait('@getGpu');
    cy.wait('@getGpu');

    cy.findAllByRole('button', { name: /view gpu/i })
      .first()
      .click();

    cy.findByRole('dialog').within(() => {
      cy.findByRole('heading', { name: /nvidia rtx 3080/i }).should(
        'be.visible',
      );
      cy.findByRole('img', { name: /nvidia rtx 3080/i }).should('be.visible');
      cy.findByText(
        'The GeForce RTX™ 3080 delivers the ultra performance that gamers crave, powered by Ampere—NVIDIA’s 2nd gen RTX architecture. It’s built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.',
      ).should('be.visible');
    });
  });
});
