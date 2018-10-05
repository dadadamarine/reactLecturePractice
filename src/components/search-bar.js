import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props){ // init state for class based component
        //﻿함수형 component는 state가 없다.
        //모든 자바스크립트 클래스들은 constructor이라고 부르는 함수를 가짐
        // 새 instance가 생성될때마다 실행되는 특수한 함수 : ex) <SearchBar />
        //아나.. 생성자네 그냥
        super(props);
        //Component클래스가 원래 가지는 cons~ 실행위해 super사용

        this.state={term :''}; 
        // state를 사용하기위해 term 속성을 담아 새 object를 init 함.
        // 유저가 searchinput를 변경할때마다. term속성이 업데이트 되거나 변경사항을 받아옴.
        // 즉 입력창의 value를 값으로 가진다.
    }

    render () {
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})} />
                {/* 여기서 value는, stat e가 변경되서 변경된 값이 반영되는것.
                    만약 onChange가 없다면, value값은 state값인 ''으로 고정이다. */}

                
                {/* state가 업데이트될때마다 rerender진행.
                    그때 다시 적는 this.state.term은 최신값임.*/}
            </div>

        );
    }

}

export default SearchBar;