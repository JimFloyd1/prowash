export async function createCustomerController(req: any, res: any) {
    try {
        const { db } = req.app;

        const {name, email, address, phone, message} = req.body;

        if (!name || !email || !address || !phone ) {
            return res.status(400).json({message: 'All fields are required'});
        }

        if (typeof name !== 'string' || typeof email !== 'string' || typeof address !== 'string' || typeof phone !== 'string' || typeof message !== 'string') {
            return res.status(400).json({message: 'Invalid data type'});
        }

        if (name.length > 50) {
            return res.status(400).json({message: 'Name is too long'});
        }

        if (email.length > 50) {
            return res.status(400).json({message: 'Email is too long'});
        }

        if (address.length > 100) {
            return res.status(400).json({message: 'Address is too long'});
        }

        if (phone.length > 20) {
            return res.status(400).json({message: 'Phone is too long'});
        }

        if (message.length > 500) {
            return res.status(400).json({message: 'Message is too long'});
        }

        const exisitingCustomer = await db.collection('customers').findOne({
            email: email.toLowerCase()
        });

        if (exisitingCustomer) {
            return res.status(400).json({message: 'Customer already exists'});
        }

        const result = await db.collection('customers').insertOne({
            name,
            email: email.toLowerCase(),
            address,
            phone,
            message
        });

        console.log(result);

        res.status(200).json({message: 'Form submitted successfully'});
    }
    catch(error: any) {
        res.status(500).json({error: error.toString()});
    }
}
