// state가 필요 x, user reaction이 필요없는 사이트
// 따라서 functional 컴퍼넌트 사용

import React from 'react';
import VideoListItem from './video_list_item';

//class 컴퍼넌트와 헷갈리기에, react에서는 className을쓴다.

const VideoList = (props) =>{
    const videoItems = props.videos.map( (video) => { 
        // 여기에 각 비디오의 요소에 접근하는 함수를 작성
        return (
            <VideoListItem 
            onVideoSelect = {props.onVideoSelect}
            // index.js 에서 건너온 속성을 다시 ListItem에 전달.
            key ={video.etag} 
            video={video} 
            />
        );
    });
    // const videoItems 결과 배열의 참조변수
   
  
    return(
        <ul className="col-md-4 list-group">
        {/* class와 구분하기위해 className이라씀. */}
        {videoItems}
        </ul>
    )
}

export default VideoList;