import React from "react";
import Card from "./card";

const Articles = ({ articles }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
    {articles.map((article, i) => (
        <Card
          article={article}
          key={`article_${article.node.slug}`}
        />
      )
    )}
  </div>
)

export default Articles;
