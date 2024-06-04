import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

type Data = {
    message: string;
    };

    export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
    if (req.method === 'POST') {
        try {
        const client = await clientPromise;
        const db = client.db('prowash'); // Replace with your database name
        const collection = db.collection('users'); // Replace with your collection name

        const { name, email, address, phone, message } = req.body;

        await collection.insertOne({ name, email, address, phone, message });

        res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
