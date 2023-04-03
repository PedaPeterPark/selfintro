import React from 'react';
import './App.css';
import chanhoonImage from './images/chanhoon.jpg';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

const FullpageWrapper = () => (
  <ReactFullpage
    scrollOverflow={true}
    render={({ state, fullpageApi }) => {
      return (
        <React.Fragment>
          <div className="section section-1">
            <h1>Carpediem</h1>
          </div>
          <div className="section section-2">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <img src={chanhoonImage} alt="ChanHoon Park" style={{ width: '150px', borderRadius: '50%' }} />
              <p style={{ marginTop: '10px', fontSize: '18px' }}>ChanHoon Park</p>
            </div>
            <p>안녕하세요. <br />제 블로그에 오신 것을 환영합니다!</p>
          </div>
          <div className="section section-3">
              <div className="profile">
                  
              </div>
              <div className="content">
                  <p className="introduction">안녕하세요.<br />저는 개인과 사회에 도움이 되고 싶은 상담교육 박사과정 학생입니다.</p>
                  <p className="experience1">저는 1년차 상담교육 박사과정 박찬훈입니다.<br />인간에 대한 호기심이 많습니다.</p>
                  <p className="experience2">저는 저의 호기심을 사람에 대한 관심으로 돌려 그들의 이야기를 듣고 도움을 주고 싶습니다.</p>
              </div>
          </div>
          <div className="section section-4">
              <div className="left-content">
                  <p className="main-title">제가 제일<br />잘하는 일을<br />소개합니다.</p>
              </div>
              <div className="right-content">
                  <ul className="item-list">
                      <li>
                          1. 개인 상담
                          <ul className="sub-item-list">
                              <li>우울</li>
                              <li>불안</li>
                          </ul>
                      </li>
                      <li>
                          2. 집단상담
                          <ul className="sub-item-list">
                              <li>대인관계</li>
                              <li>커뮤니케이션</li>
                          </ul>
                      </li>
                      <li>
                          3. 심리검사
                          <ul className="sub-item-list">
                              <li>MMPI</li>
                              <li>TCI</li>
                              <li>MBTI</li>
                          </ul>
                      </li>
                      <li>
                          4. 상담연구
                          <ul className="sub-item-list">
                              <li>양적 연구</li>
                              <li>다양한 통계분석</li>
</ul>
</li>
</ul>
</div>
</div>
</React.Fragment>
);
}}
/>
);

function App() {
return (
<div className="App">
<FullpageWrapper />
</div>
);
}

export default App;
