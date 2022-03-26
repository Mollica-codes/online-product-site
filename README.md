# Online Product Site
A mock eCommerce site for practice with React

### Details
This site was created for practice with Javascript and React. I used data from the free api makeup-api.herokuapp.com for shopping products. I initially set up an api request for the data but could not fetch over an http connection on github so I added the JSON in the src. I've left the request in the Context.js file but have commented it out. I wanted to practice the layout of an Ecommerce site so I added filters, a cart that counts items, and individual product pages. This was accomplished by using React Router to route the ID of each product. The page was also set up using the smallest browser width I could use and setting up media queries, grids, and flexboxes to make it dynamic.

### Home Page
The home page displays all the product data right now. It includes a search bar which at the time is not functional along with a profile login, returns, and a cart which is pretty standard for a eCommerce site. I've included two filters which filter on product type and price. When clicked it gets rid of all the other filters for that filter. This fixed a problem with checking multiple filters in a row. When unchecking one filter box it would reset all the filters even though some would still be checked. Each product is clickable and will route you to a product page.

### Product Page
I wanted to set up a page that resembled a product page when shopping on the web. The product page is set up in a way that resembles Amazon's. The images is displayed on the left with possible colors that can be chose for the product. the image won't update for the color clicked but will display the name of the color when clicked. I've also set up a date which displays the current date and a quantity select. The quantity select does not carry through to the cart it is currently just for display. The add to cart button will add the product to the cart and update the carts number in the navbar. The buy it now button does not have functionality.

### Cart Page
I wanted to make a simple and easy to read cart page. The cart page initializes to say the cart is empty. When adding a product to the cart from a product page it is displayed in the cart page using the products ID. The cart page is accessed from the navbar. Every product that is added has a trash icon next to it that removes the product from the cart. The total at the bottom updates every time a new product is added to the cart. Finally, when clicking the place order button it will set a timeout to show the cart is ordering and then will clear the cart.

### Improvements
There is many things that could be improved upon and I plan to update in the future.
- Fix the filter price functionality to be for all brands. The filter breaks sometimes right now if the data doesn't have at least one product in the three conditions. Currently the data used has a product in each condition but if a different brand was selected that didn't it wouldn't work properly.
- add pagination.
- add brands filter. This would enable the site to load more products and be able to select from more than just the data I put in.
- get search bar working.
- add a confirmed order page before redirecting back home after clicking the place order button.



### How to run
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
-If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
-Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
-You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

