import React , {Component} from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBKf5D6fT-pfzaGKYOhhhhSRp4dUtULqPk';
//YTSearch에 object를 전달하여 실제 검색
//첫번째 인자로 object전달, 두번째 인자로 function전달

// Create a new component. This component should produce
// some HTML 




class App extends Component{
    constructor(props){
        super(props);

        this.state={ 
            videos: [],
            selectedVideo : null // null로 시작.
         };

         this.videoSearch('surfboard');
         //init search;
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term : term}, (videos) => {
            //이 내부에서 state 초기 업데이트.
            this.setState({ 
                videos : videos,
                selectedVideo :videos[0]
            });
            
            // 키와 value가 같은 string일때 
            //this.setState({ videos }); 사용가능
            // es6에서는 위와 같이 변형해서 인식.
        });
    }

    render(){
        const videoSearch = _.debounce( (term) => { this.videoSearch(term) } ,300);
        // 파라미터로 func한개와 시간 전달.
        // debounce : 전달한 함수를 뒤의 시간마다 실행하는 새 함수로 리턴.
        return ( 
            <div>
                {/* <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/> */}
                <SearchBar onSearchTermChange = {videoSearch} />
                {/* searchBar가 onSearchTerm~ 부를때, videoSearch가 실행됨.  */}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    /* 전달된 속성은 props.onVideoSelect로 받을수 있음. */
                    onVideoSelect = {(selectedVideo) => this.setState({selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
            );
    }
}


// Take this component component's generated HTML and put it
// on the page

ReactDom.render(<App />, document.querySelector('.container')); 