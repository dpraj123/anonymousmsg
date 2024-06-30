import mongoose from "mongoose";
type ConnectionObjext = {
  isConnected?: number;
};
const connection: ConnectionObjext = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Db Connected Successfully", db);
  } catch (error) {
    console.log("Db Connection Failed", error);
    process.exit();
  }
}
export default dbConnect;
