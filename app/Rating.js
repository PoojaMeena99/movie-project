 import React, { useState } from 'react';


const LikeDislike = ({ movie, onLikeDislike }) => {
  const [showLikes, setShowLikes] = useState(0);
 

  const handleLike = () => {
    movie.likes += 1;
    onLikeDislike();
  };

  const handleDislike = () => {
    movie.likes -= 1;
    onLikeDislike();
  };

  return (
    <div>
      <div className="like">
        <img  src="like.png" onClick={handleLike} />
      </div>
      <div className="Circle">
              {movie.likes}
      </div>
      <div className="dislike">
        <img  src="dislike.png" onClick={handleDislike} />
      </div>
    </div>
  );
};

export default LikeDislike;



