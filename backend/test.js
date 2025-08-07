// index.js
require('dotenv').config();
const mongoose = require('mongoose');

// Use .env file to store MONGO_URI
const MONGO_URI = "mongodb+srv://sahilbhadane22:sahilbhadane22@zerodhaclonecluster.p4i6dw7.mongodb.net/zerodha?retryWrites=true&w=majority&appName=ZerodhaCloneCluster";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected successfully');

    // Test schema and document (optional)
    const testSchema = new mongoose.Schema({ name: String });
    const Test = mongoose.model('Test', testSchema);

    const doc = new Test({ name: 'Hello MongoDB' });
    await doc.save();
    console.log('✅ Test document saved:', doc);

    mongoose.connection.close();
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
  }
};

connectToMongoDB();
