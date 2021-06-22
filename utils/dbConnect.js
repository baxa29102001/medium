import moongose from 'mongoose';

let connection = {};
const db = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await moongose.connect(
    'mongodb+srv://baxa_2910:bohodir29102001<>@medium.s1p9r.mongodb.net/Medium?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected);
};

export default db;
