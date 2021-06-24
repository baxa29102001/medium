import db from '../../utils/dbConnect';
import { Users } from '../../models/users';
import jwt from 'jsonwebtoken';

db();

export default async (req, res) => {
  let { userName, password } = req.body;
  if (req.method === 'POST') {
    try {
      if (!userName || !password)
        return res
          .status(400)
          .json({ message: "Iltimos bosh joylarni to'ldiring" });

      const user = await Users.findOne({ userName: userName });
      if (!user)
        return res
          .status(400)
          .json({ message: "Bu username royxatdan o'tmagan" });

      await jwt.sign({ id: user._id }, 'Bohodir', (err, token) => {
        if (err) console.log(err);

        res.status(200).json({
          token,
          user,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
