import db from '../../utils/dbConnect';
import { Article } from '../../models/article';
db();

export default async function (req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    const { title, author, duration, capture, createdAt, story, imgAuthor } =
      req.body;
    const article = new Article({
      title,
      author,
      duration,
      capture,
      createdAt,
      story,
      imgAuthor,
    });

    const saveArticle = await article.save();

    res.status(201).json({
      newArticle: saveArticle,
    });
  }

  if (req.method === 'GET') {
    const articles = await Article.find({});

    res.status(200).json({
      articles: articles,
    });
  }
}
