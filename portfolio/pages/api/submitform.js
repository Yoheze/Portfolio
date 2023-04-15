import connectToDB from '@/utils/mongoose-connection';
import Item from '@/models/formSubmit.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Connect to the database
    await connectToDB();

    const { name, email, message } = req.body;
    const existingItem = await Item.findOne({ email: req.body.email });

    if (existingItem) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Add the item to the database
    try {
      const newItem = await Item.create({ name, email, message });
      res.status(201).json({ success: true, data: newItem });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    // Only handle POST requests
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
