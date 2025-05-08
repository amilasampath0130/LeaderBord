import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGO environment variable");
}

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) {
        return mongoose;
    }

    const opts = {
        bufferCommands: false,
    };

    await mongoose.connect(MONGODB_URI as string, opts);  // <-- Fix here
    return mongoose;
}

export default connectToDatabase;
