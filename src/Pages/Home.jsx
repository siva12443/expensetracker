import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Home() {
    const [transactionType, setTransactionType] = useState('Expense');
    const [amount, setAmount] = useState();
    const [paymentMethod, setPaymentMethod] = useState("Online");
    const [description, setDescription] = useState();

    const categories = {
        expenses: [
          "Food",
          "Rent",
          "Utilities",
          "Transportation",
          "Entertainment",
          "Healthcare",
          "Insurance",
          "Education",
          "Personal Care",
          "Debt Payments",
          "Miscellaneous"
        ],
        income: [
          "Salary",
          "Freelance Income",
          "Investment Income",
          "Rental Income",
          "Gifts",
          "Grants",
          "Reimbursements",
          "Interest",
          "Bonuses",
          "Dividends",
          "Miscellaneous"
        ]
      };
      const [category, setCategory] = useState(categories.expenses[0]);

      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is zero-based
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');

      const today = `${year}-${month}-${day}T${hours}:${minutes}`;

      const [transactionDate, setTransactionDate] = useState(today);

        const incomeOptions = categories.income.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ));

        const expenseOptions = categories.expenses.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ));

        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Form data to be sent to the PHP script
          const formData = new FormData();
          formData.append("transaction_type", transactionType);
          formData.append("category", category);
          formData.append("amount", amount);
          formData.append("payment_method", paymentMethod);
          formData.append("description", description);
          formData.append("transactiondatetime", transactionDate);
      
          // Send form data to the PHP script
          fetch("http://localhost/transaction/InsertTransaction.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then((data) => {
              console.log(data); // Log response from the PHP script
              // Reset form fields after successful submission
              setTransactionType("");
              setCategory("");
              setAmount("");
              setPaymentMethod("");
              setDescription("");
              setTransactionDate(today);
            })
            .catch((error) => {
              console.error("Error:", error); // Log any errors
            });
        };
      
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 font-nunito">
        <div className="flex w-full max-w-4xl p-6 space-x-6">
          <form className="bg-white p-6 rounded shadow-md size-3/4" onSubmit={handleSubmit}>
            <label className="font-bold text-green-500 text-xl">Add Transaction</label>
            <input type="datetime-local" className="min-h-12 mt-2" value={transactionDate} onChange={(e) => setTransactionDate(e.target.value)} />
            <input type="number" required className="min-h-12" placeholder="Amount in Rs." value={amount} onChange={e => setAmount(e.target.value)}/>
            <select value={transactionType} className="h-12 " onChange={(e) => {setTransactionType(e.target.value)}}>
                <option>Income</option>
                <option>Expense</option>
                {/* <option>Transfer</option> This should come when there is a bank account option added*/}
            </select>
            <select value={category} onChange={e => setCategory(e.target.value)}>
                {transactionType === 'Income' ? incomeOptions : expenseOptions}
            </select>
            <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
                <option>Online</option>
                <option>Cash</option>
                <option>Card</option>
            </select>
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
            <button type="submit">Submit</button>
            <div className="bottom-nav">
              <Link to="/transactions">Transactions</Link>
              <Link to="/budget">Budget</Link>
            </div>
            </form>
        </div>
        </div>
    );
}

export default Home;