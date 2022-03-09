import React from "react";
import "../scss/open.scss";

function Open() {
  window.onload = function () {
    const scrollTitle = document.querySelector(".fix_text_motion");
    const titText1 = document.querySelector(".intro_txt_01");
    const titText2 = document.querySelector(".intro_txt_02");
    const titText3 = document.querySelector(".intro_txt_03");
    // const titText1 = scrollBody.querySelector(".intro_txt_01");
    // const titText2 = scrollBody.querySelector(".intro_txt_02");
    // const titText3 = scrollBody.querySelector(".intro_txt_03");
    const scrollBody = document.querySelector(".fix_motion");
    const maskLeft = scrollBody.querySelector(".left_mask");
    const maskRight = scrollBody.querySelector(".right_mask");
    const bgImage = scrollBody.querySelector(".bg_img");
    const endingContent = scrollBody.querySelector(".ending_txt");

    let scrollHeight;
    let sectionOffsetTop;
    let sectionScrolTop;
    let scrollRealHeight;
    let winScrollTop;
    let scrollPerecnt;
    let percent;

    let scrollHeight2;
    let sectionOffsetTop2;
    let sectionScrolTop2;
    let scrollRealHeight2;
    let winScrollTop2;
    let scrollPerecnt2;
    let percent2;

    function changeOverlap() {
      setProperty();
      motionRender();
    }

    function setProperty() {
      scrollHeight = scrollBody.offsetHeight;
      winScrollTop = window.pageYOffset;
      sectionOffsetTop =
        scrollBody.getBoundingClientRect().top + window.pageYOffset;
      scrollRealHeight = scrollHeight - window.innerHeight;
      sectionScrolTop = winScrollTop - sectionOffsetTop;
      scrollPerecnt = sectionScrolTop / scrollRealHeight;
      percent = scrollPerecnt * 100;

      scrollHeight2 = scrollTitle.offsetHeight;
      sectionOffsetTop2 =
        scrollTitle.getBoundingClientRect().top + window.pageYOffset;
      scrollRealHeight2 = scrollHeight2 - window.innerHeight;
      sectionScrolTop2 = winScrollTop - sectionOffsetTop2;
      scrollPerecnt2 = sectionScrolTop2 / scrollRealHeight2;
      percent2 = scrollPerecnt2 * 100;
      console.log(percent2);
    }

    function motionRender() {
      let maskStartValue = 50;
      let maskEndValue = 0;
      let zoomValue = 1.5;
      let zoomOutValue = 1;
      let maskVal = Math.max(
        maskEndValue,
        maskStartValue - scrollPerecnt * maskStartValue
      );
      let scaleVal = Math.max(
        zoomOutValue,
        zoomValue - scrollPerecnt * zoomValue
      );

      maskLeft.style.width = maskVal + "%";
      maskRight.style.width = maskVal + "%";
      bgImage.style.transform = "scale(" + scaleVal + ")";

      if (percent2 > 30) {
        titText1.classList.add("active");
      } else {
        titText1.classList.remove("active");
      }

      if (percent2 < 30 || percent2 > 60) {
        titText2.classList.add("active");
      } else {
        titText2.classList.remove("active");
      }

      if (percent2 < 60) {
        titText3.classList.add("active");
      } else {
        titText3.classList.remove("active");
      }

      if (percent > 90) {
        endingContent.classList.add("active");
      } else {
        endingContent.classList.remove("active");
      }
    }

    function init() {
      changeOverlap();
      bindEvent();
    }

    function bindEvent() {
      window.addEventListener("scroll", function () {
        changeOverlap();
      });

      window.addEventListener("resize", function () {
        changeOverlap();
      });
    }

    init();
  };

  return (
    <>
      <div class="wrap">
        <section class="fix_text_motion">
          <article className="sticky_cont">
            <div class="cont_box">
              <div class="intro_txt_01">
                <h2>안녕하세요</h2>
              </div>
              <div class="intro_txt_02">
                <h2>개발자 김우혁입니다.</h2>
              </div>
              <div class="intro_txt_03">
                <h2>저만의 사이트를 볼까요?</h2>
              </div>
            </div>
          </article>
        </section>

        <section class="fix_motion">
          <article class="sticky_cont">
            <div class="cont_box">
              {/* <div class="intro_txt_01">
                <h2>안녕하세요</h2>
              </div>
              <div class="intro_txt_02">
                <h2>개발자 김우혁입니다.</h2>
              </div>
              <div class="intro_txt_03">
                <h2>저만의 사이트를 볼까요?</h2>
              </div> */}
              <div class="left_mask"></div>
              <div class="right_mask"></div>
              <figure class="bg_img"></figure>
              <div class="ending_txt">
                <div class="tb_row">
                  <div class="tb_cell">
                    <p>감사합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section class="ggang_box">
          <h2>END</h2>
        </section>
      </div>
    </>
  );
}

export default Open;
