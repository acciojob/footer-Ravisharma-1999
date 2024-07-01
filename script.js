cy.visit("http://localhost:3000/");
cy.wait(2000); // Adjust wait time as needed
cy.get(".link-boxes").should("have.css", "display", "flex");
cy.get(".link-boxes").contains(8879887262);
cy.get(".link-boxes").contains("Home");
cy.get(".link-boxes").contains("About");
cy.get(".link-boxes").contains("Links");
cy.get(".link-boxes").contains("Services");
cy.get(".link-boxes").contains("Contact");
