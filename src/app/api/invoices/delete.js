// Import the connectDB utility to connect to the database
import connectDB from "../../../utils/db";

// Import the Invoice model to interact with the invoices collection
import Invoice from "../../../models/Invoice";

// Define the handler function to handle API requests
export default async function handler(req, res) {
    // Establish a connection to the database
    await connectDB();

    // Check if the request method is DELETE
    if (req.method === "DELETE") {
        // Extract the invoice ID from the request body
        const { id } = req.body;

        // Find the invoice by ID and delete it from the database
        await Invoice.findByIdAndDelete(id);

        // Respond with status 204 (No Content) to indicate successful deletion
        res.status(204).end();
    } else {
        // Respond with status 405 (Method Not Allowed) if the request method is not DELETE
        res.status(405).end();
    }
}
