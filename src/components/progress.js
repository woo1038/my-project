import React from "react";
import "../scss/progress.scss";

function Progress() {
  window.onload = function () {
    let text = document.querySelector(".progress .txt");
    let progressBar = document.querySelector(".progress .bar");

    function getPercent() {
      let scrollHeight = document.querySelector(".sec01").offsetHeight;
      let scrollRealHeight = scrollHeight - window.innerHeight;
      let winScrollTop = window.pageYOffset;
      let scrollPercent = (winScrollTop / scrollRealHeight) * 100;
      let textPercent = Math.round(scrollPercent);

      render(textPercent, scrollPercent);
    }

    function render(textPercent, scrollPercent) {
      text.innerText = textPercent + "%";
      progressBar.style.width = scrollPercent + "%";
    }

    function init() {
      getPercent();
    }

    document.addEventListener(
      "scroll",
      function () {
        getPercent();
      },
      false
    );

    init(); //초기화
  };

  return (
    <>
      <div class="wrap">
        <section class="sec01">
          <h2 class="com_tit">스크롤 백분율 구하는 방법</h2>
          <p class="com_txt">
            뒤에 나오는 예제에서 반복 학습을 계속합니다. 부담없이 학습하세요 :)
          </p>
          <div class="content">
            <div class="progress">
              <span class="bar"></span>
              <p class="txt">0%</p>
            </div>
            가<br />
            나<br />
            다<br />
            라<br />
            마<br />
            바<br />
            사<br />
            아<br />
            자<br />
            차<br />
            카<br />
            타<br />
            파<br />하
          </div>
        </section>
      </div>
    </>
  );
}

export default Progress;
