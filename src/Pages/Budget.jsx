import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Budget() {
    const [category, setCategory] = useState();
    const [amount, setAmount] = useState();
    const [budgets, setBudgets] = useState([]);
    const [budgetStatus, setBudgetStatus] = useState(false);

    useEffect(() => {
        // Fetch transaction data from the PHP script
        fetch("http://localhost/transaction/FetchBudget.php")
          .then(response => response.json())
          .then(data => setBudgets(data))
          .catch(error => console.error("Error fetching transaction data:", error));
        setBudgetStatus(false);
    },[budgetStatus])

    const handleSubmit = (e) => {
        e.preventDefault();
      
          // Form data to be sent to the PHP script
          const formData = new FormData();
          formData.append("category", category);
          formData.append("amount", amount);
      
          // Send form data to the PHP script
          fetch("http://localhost/transaction/InsertBudget.php", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.text())
            .then((data) => {
              console.log(data); // Log response from the PHP script
              // Reset form fields after successful submission
              setCategory("");
              setAmount("");
              setBudgetStatus(true);
            })
            .catch((error) => {
              console.error("Error:", error); // Log any errors
            });
    }

    return (
        <div>
            <div className="outerdiv">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Type the Category" value={category} onChange={e => setCategory(e.target.value)}/>
                    <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)}/>
                    <button type="submit">Add</button>
                </form>
            </div>
            <br />
            <h3>Budget</h3>
            <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget) => (
              <tr key={budget.bid}>
                <td>{budget.category}</td>
                <td>{budget.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bottom-nav">
        <Link to="/">Home</Link>
        <Link to="/tranasctions">Transactions</Link>
      </div>
        </div>
    );
}

export default Budget;