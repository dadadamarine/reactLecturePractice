import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
                        // 와우. multiple 속성은 이런식으로 받음.
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li 
            onClick ={() => onVideoSelect(video)} // 이문법 미쳤다...
            /* 이 아이템에 전달된 video obj를 파라미터로 onVideoSelect 메서드 실행. */
            className ="list-group-item"
        >
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;
