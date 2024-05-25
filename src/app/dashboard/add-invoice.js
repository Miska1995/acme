import { useState } from "react";

export default function AddInvoice() {
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");

const handleSubmit = async (event) => {
    event.preventDefault();
    // API call to add invoice
};

return (
    <div>
    <h1>Add Invoice</h1>
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
        <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        />
        <button type="submit">Add</button>
    </form>
    </div>
);
}
