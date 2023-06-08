import React from "react";
import "./article.css";

export default function Article({ article, group, handleClick }) {
  const { id, imgUrl, name, title } = article;

  const handleClickArticle = () => {
    handleClick(id, group);
  };

  return (
    <div
      className={`fs__blog-container_article ${
        group === "A" ? "groupA" : "groupB"
      }`}
      onClick={handleClickArticle}
    >
      <div className="fs__blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="fs__blog-container_article-content">
        <div>
          <p>{name}</p>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
