import React from "react";

export const Playlists = (props) => {
  
    return (
    <article className="album">
      {/* ===== ALBUM COVER ===== */}
      <div className="album-cover">

      
        <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer">
          <img className="album-image" src={props.articleDetails.images[0].url} alt="album cover" />
        </a>
        <div className="icons">
          <img className="icon" src="/icons/heart.svg" alt="heart icon" />
          <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer">
            <img className="play" src="/icons/play.svg" alt="play icon" />
          </a> 
          <img className="icon" src="/icons/dots.svg" alt="dots icon" />
        </div>
        {/* ===== PLAYLIST TITLE =====*/}
      </div >
      
      
        <a href={props.articleDetails.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="title">{props.articleDetails.name}</a>
      
      
      
    </article>
    )
}

