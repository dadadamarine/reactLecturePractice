import React from 'react';

const videoDetail = ({video}) => {
    
    if(!video){
        return <div>loding... </div>;
    }

    const videoId= video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    // youtube 를 가르키는 iframe을 생성(유투브 플레이어). 
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
}

export default videoDetail;