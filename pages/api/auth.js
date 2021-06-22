// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from '../../utils/dbConnect';
import { Users } from '../../models/users';
import jwt from 'jsonwebtoken';
db();

export default async (req, res) => {
  const { method } = req;

  if (method === 'POST') {
    let { userName, password, role } = req.body;
    try {
      if (!userName || !password)
        return res
          .status(400)
          .json({ msg: 'Iltimos bosh qatorlarni toldiring' });

      const user = new Users(req.body);

      const saveuser = await user.save();
      await jwt.sign({ id: saveuser._id }, 'Bohodir', (err, token) => {
        if (err) console.log(err);

        res.status(201).json({
          token,
          saveuser,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};
