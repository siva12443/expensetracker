import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import '../CSS/Transactions.css'

function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        // Fetch transaction data from the PHP script
        fetch("http://localhost/transaction/FetchTransactions.php")
          .then(response => response.json())
          .then(data => setTransactions(data))
          .catch(error => console.error("Error fetching transaction data:", error));
      }, []);

  return (
    <div>
      <h1>Transaction History</h1>
      <div>
        {/* Render transaction history table */}
        <table>
          <thead>
            <tr>
              <th>Date Time</th>
              <th>Type</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.eid}>
                <td>{transaction.transactiondatetime}</td>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.payment_method}</td>
                <td>{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Bottom navigation bar */}
      <div className="bottom-nav">
        <Link to="/">Home</Link>
        <Link to="/budget">Budget</Link>
      </div>
    </div>
  );
}

export default TransactionHistory;
