import * as mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_CONNECTION_STRING||"");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected To Database")
});
export default db