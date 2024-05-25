import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EditInvoice() {
const router = useRouter();
const { id } = router.query;
const [title, setTitle] = useState("");
const [amount, setAmount] = useState("");

useEffect(() => {
    if (id) {
      // Fetch invoice data and set state
    }
}, [id]);

const handleSubmit = async (event) => {
    event.preventDefault();
    // API call to update invoice
};

return (
    <div>
    <h1>Edit Invoice</h1>
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
        <button type="submit">Update</button>
    </form>
    </div>
);
}
