# Product Management

# Project Overview:
    Develop a frontend-only Product Management Dashboard using React, Redux, and Redux Thunk. The application allows users to manage product data with features like adding, editing, deleting, and viewing products. All data will be stored and retrieved from localStorage.

# Tasks to Complete in One Day

# Task 1: Project Setup
Initialize a React project using create-react-app.
Install necessary libraries:
# redux
# react-redux
# redux-thunk
# react-router-dom
Set up a clean folder structure with dedicated folders for components, Redux actions, reducers, and store configuration.

# Task 2: State Management
1. Configure Redux Store:
Create a Redux store and integrate redux-thunk as middleware.
2. Define State Structure:
Plan the global state to include:
A list of products.
A loading indicator.
An error message (if applicable).
3. Define Actions:
Create action types for CRUD operations: FETCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT.
Write action creators for each action.
4. Create Reducers:
Write reducers to handle updates to the product list based on the defined actions.

# Task 3: Implement Components
1. Header Component:
Navigation links for accessing the product list and the add product page.
2. Product List Component:
Display a table or grid of products fetched from the Redux store.
Include buttons for editing and deleting products.
3. Add Product Component:
A form to add new products with input fields for:
Name
Category
Price
Stock Quantity
Description
4. Edit Product Component:
A form pre-filled with the product's current data to allow editing.
5. Confirmation Modals (Optional):
Show a confirmation modal before deleting a product.
# Task 4: Routing Setup
Use React Router to manage navigation:
/: Displays the product list.
/add: Displays the add product form.
/edit/:id: Displays the edit product form for a specific product.
# Task 5: CRUD Operations Using Redux Thunk
1. Set custom loading:
Set the loader when viewing the records and submitting the form.
2. LocalStorage Integration:
Save product data to localStorage after every add, edit, or delete operation.
Load product data from localStorage on app initialization.

# Task 6: Styling
1. Create a simple, responsive UI using CSS frameworks like TailwindCSS, Bootstrap, or Material-UI.
2. Ensure consistent styling for forms, tables, and buttons.


# Task 7: Testing
1. Test all CRUD functionalities:
Add new products.
Edit existing products.
Delete products.
View the updated product list.
2. Ensure that data persists between page reloads using localStorage.

# Deliverables
1. A functional React application with a product dashboard.
2. CRUD operations handled via Redux and Redux Thunk.
3. Data persistence using localStorage.
4. Responsive and clean user interface.