// Import the connectDB utility to connect to the database
import connectDB from "../../../utils/db";

// Import the Invoice model to interact with the invoices collection
import Invoice from "../../../models/Invoice";

// Define the handler function to handle API requests
export default async function handler(req, res) {
    // Establish a connection to the database
    await connectDB();

    // Check if the request method is PUT
    if (req.method === "PUT") {
        // Extract the invoice ID, title, and amount from the request body
        const { id, title, amount } = req.body;

        // Find the invoice by ID and update it with the new title and amount
        // The { new: true } option ensures the updated document is returned
        const invoice = await Invoice.findByIdAndUpdate(id, { title, amount }, { new: true });

        // Respond with status 200 (OK) and the updated invoice data in JSON format
        res.status(200).json(invoice);
    } else {
        // Respond with status 405 (Method Not Allowed) if the request method is not PUT
        res.status(405).end();
    }
}
