import React from "react";

const StoryCard = ({ story }) => {
  console.log(story);
  const { author, content, description, publishedAt, source, title, url, urlToImage } = story;
  return (
    <>
      <div class="row" style={{ flexGrow: "2", width: "500px" }}>
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={urlToImage} alt={title} />
              <span class="card-title" style={{ fontSize: "16px" }}>
                {title}
              </span>
            </div>
            <div class="card-content">
              <p>{description}</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
