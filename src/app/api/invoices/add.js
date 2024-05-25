// Import the connectDB utility to connect to the database
import connectDB from "../../../utils/db";

// Import the Invoice model to interact with the invoices collection
import Invoice from "../../../models/Invoice";

// Define the handler function to handle API requests
export default async function handler(req, res) {
    // Establish a connection to the database
    await connectDB();

    // Check if the request method is POST
    if (req.method === "POST") {
        // Extract title and amount from the request body
        const { title, amount } = req.body;

        // Create a new invoice instance with the extracted data
        const invoice = new Invoice({ title, amount });

        // Save the new invoice to the database
        await invoice.save();

        // Respond with status 201 (Created) and the created invoice data in JSON format
        res.status(201).json(invoice);
    } else {
        // Respond with status 405 (Method Not Allowed) if the request method is not POST
        res.status(405).end();
    }
}

