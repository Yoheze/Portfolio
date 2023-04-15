import mongoose from 'mongoose';

async function connectToDB() {
  if (mongoose.connections[0].readyState) {
    // Use existing connection
    return;
  }

  try {
    // Create a new connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Unable to connect to MongoDB');
  }
}

export default connectToDB;