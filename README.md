# Personal Finance Tracker Application In React And Typescript

The Personal Finance Tracker is a user-friendly web application designed to help you manage and monitor your financial transactions. With this tool, you can easily add, edit, and delete your income and expense transactions to keep track of your financial activities.

The application also provides an intuitive pictorial representation of your financial data using charts. These charts help you visualize your income and expenses, making it easier to understand your spending habits and financial health at a glance.

## Key Features

1. **Registration And Login** : User can create an account and login to view their transactions using user name and password.
2. **Add,Delete,Edit Transactions**: User can add,edit,delete transactions in home page.
3. **Pictorial Representaion**:User can view their spendings in single glance in charts representing .
     * **Pai Chart**: Which represents the spendings of all categories like Rent,Shopping,Salry,Free Lanching,Food etc...
     * **Bar Graph**: Which represent Total Income And Expense.
     * **Line Chart**: Which represent the expenses,income in timeline.

## Technologies used

1. Node Js
2. Express Js
3. Mongoose
   

## Installation

1. Clone the repositary

    git clone <repository-url>
    cd Backend

2. Install the required packages

    npm install

3. Run the application

    npm start

4. Access Webapp on your browser 

    http://localhost:3000/

## APIS

1. **Register**
    * Endpoint: /user/
    * Method: POST
    * Request Body:
    {
    "firstName": "Devi",
    "lastName": "Pothula",
    "userName": "deviP642@gmail.com",
    "password": "your_password",
    "phoneNumber": "your_phonenumber"
    }
    * Description: Registers a new user.
2. **Login**
    * Endpoint: /user/login
    * Method: POST
    * Request Body:
    {
    "userName": "deviP642@gmail.com",
    "password": "your_password",
    }
    * Description: Login API.
3. **List Transactions**
    * Endpoint: /transaction/
    * Method: GET
    
    * Description: To fetch the list of transactions.
4. **Add Transaction**
    * Endpoint: /transaction/
    * Method: POST
    * Request Body:
    {
      "amount": "10000",
      "category": "Trips",
      "date": "2024-10-02",
      "title": "Trip to coorg",
      "traType": "Expense"
    }
  * Description: To Add an transaction.
4. **Edit Transaction**
    * Endpoint: /transaction/:id
    * Method: PUT
    * Request Body:
    {
      "amount": "10000",
      "category": "Trips",
      "date": "2024-10-02",
      "title": "Trip to coorg",
      "traType": "Expense",
      "userId": "6rtt@12",
    }
  * Description: To edit an transaction with id.
 5. **Delete Transaction**
    * Endpoint: /transaction/:id
    * Method: DELETE
    
    * Description: To Delete an transaction with id.

## Project Structure 
```
/config                                     #to connect mongo db

/controllers 
    |--  transactionController.js           #controller for crud operations
    |--  userController.js                  #user controller to regiter and login

/middlewares
   |--  authorization.js                    #to verify the auth token using json-web-token

/models
   |--  transaction.js                     #model for transaction table
   |--  user.js                            #model for user table

/routes
  index.js                               #route the transaction and user
  transaction.route.js                   #list the all routes for transaction
  user.route.js                          #list the all routes for user

/package.json
/server.js                             #It initializes the server, sets up middleware, and defines the API routes.
  
```
## License

This project is licensed under the [MIT License](https://opensource.org/license/MIT).




   

