## Finance Dashboard

* Overview:

This project is a simple finance dashboard that I built using React. The idea was to create an interface where users can track their financial activities like income and expenses in a clean and understandable way.

Instead of focusing on complexity, I tried to keep the UI simple and intuitive while implementing the core features properly.

* Features:

* Displays overall balance, total income, and total expenses
* Shows a list of transactions with details like date, category, amount, and type
* Allows adding new transactions (for Admin role)
* Basic role-based UI (Viewer / Admin)
* Filter transactions based on type (Income / Expense)
* Insights section to identify highest spending category

* Approach:

I started by structuring the application with static transaction data and then gradually made it dynamic using React state.

For calculations like balance and insights, I used simple JavaScript logic (loops and conditions) to process the transaction data.

I focused more on:

* Clean structure
* Readable code
* Simple but functional UI

* Tech Stack:

* React (useState for state management)
* JavaScript (logic and data handling)
* CSS (basic styling)

* How to Run:

1. Clone the repository
2. Open the project folder
3. Run `npm install`
4. Run `npm start`
5. Open http://localhost:3000 in your browser

* What I Learned:

* Managing state in React
* Handling user inputs and updating UI dynamically
* Basic role-based UI behavior
* Structuring a small frontend project

* Future Improvements:

* Add charts for better data visualization
* Store data using local storage
* Improve UI design and responsiveness
* Add edit/delete transaction functionality.
