# E-Commerce Store Project For dot.Cards Frontend Developer Position

This is a basic e-commerce store project built with the latest React framework and TypeScript. This project includes a home page showing a header, a hero image, a selection of four products, and a footer. There are also product pages for each product, allowing a user to view more information about the product, including an image carousel, and be able to add that product to their cart. The user can then check out via the "View Cart" button in the header to see their current cart and totals.

## Technical Requirements

- The project is built using the latest React framework.

- TypeScript is used throughout the project for type safety and better development experience.

- Version control is utilized with Git.

- Styling is implemented using SCSS/CSS or Styled Components, as required.

## Starting The Application

Install packages via:

```bash
npm install
```

Build the project:

```bash
npm run build
```

Start the server:

```bash
npm start
```

## Future Improvements

There are a few improvements that would make sense to implement in the next steps of developing this app.

- This project, due to it's limited scope, has hardcoded data being sent from the backend. One major drawback to this is that the cart that a user creates will be erased on any refresh of the page, and there can be no true persistence of data. The next step to solve this issue would be to add dynamic backend data via SQL databases. This would allow users to navigate throughout the application without worry of losing their data in addition to the feature of tracking real-time product data. In the future this could also allow for the creation of user accounts and authentication as well.
- There should be more feedback within the app. What I would like to add in the future is more messaging that allows a user to know what is going on. This includes things such as skeleton loading states, button loading states, toasts to show a user when an item has been added to the cart, and adding the icon to the View Cart button to show how many items are in a user's cart. One framework that would make this simple to implement is React Redux, as it's state handling allows for universal access across the app to important information without the need for prop-drilling.
- Update SEO. In following the design given from Figma, while the site looks clean and sleek, it does not have proper header structure or content to be competitive in the Google SERP. For example, the site header has the logo, which was given in an SVG. While this is good from an accessability standpoint, it would be good to have a clear H1 to use for each page. In addition, there should be more content present on the homepage to increase its SEO score.
- Finish the checkout flow. This project did not require a checkout flow, however the logical next steps in making this functional in a real-world setting would be to connect to a third party credit card processing service (Stripe, Square, PayPal, etc.) via API to setup a proper checkout flow.
- Add thorough testing. Full test coverage would be imperitive to launch this app to production or to another dev environment where others would be working on it in tandem. This would ensure that nothing is being broken as new features are added and that components are functioning in the way that we expect.

## Conclusion

I thank you for your consideration of this project. Please feel free to dive into the project and I welcome any feedback you have!

Christian Stutzman
