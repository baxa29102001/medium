import db from '../../utils/dbConnect';
import { Article } from '../../models/article';
db();

export default async function (req, res) {
  if (req.method === 'GET') {
    const id = req.query.id;
    const article = await Article.findOne({ _id: id });

    res.status(200).json({
      articles: article,
    });
  }
}
