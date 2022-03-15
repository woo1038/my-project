import React, { useEffect } from "react";
import "../scss/open.scss";

function Open() {
  useEffect(() => {
    // Section 1
    const scrollTitle = document.querySelector(".fix_text_motion");
    const titText1 = scrollTitle.querySelector(".intro_txt_01");
    const titText2 = scrollTitle.querySelector(".intro_txt_02");
    const titText3 = scrollTitle.querySelector(".intro_txt_03");

    // Section 2
    const scrollBody = document.querySelector(".fix_motion");
    const maskLeft = scrollBody.querySelector(".left_mask");
    const maskRight = scrollBody.querySelector(".right_mask");
    const bgImage = scrollBody.querySelector(".bg_img");
    const endingContent = scrollBody.querySelector(".ending_txt");

    // Section 3
    let scrollWork = document.querySelector(".fix_Work_motion");

    let section1_scrollHeight;
    let section1_winScrollTop;
    let section1_OffsetTop;
    let section1_ScrollTop;
    let section1_scrollRealHeight;
    let section1_scrollPerecnt;
    let section1_percent;

    let section2_scrollHeight;
    let section2_OffsetTop;
    let section2_ScrollTop;
    let section2_scrollRealHeight;
    let section2_winScrollTop;
    let section2_scrollPerecnt;
    let section2_percent;

    let section3_scrollHeight;
    let section3_OffsetTop;
    let section3_ScrollTop;
    let section3_scrollRealHeight;
    let section3_winScrollTop;
    let section3_scrollPerecnt;
    let section3_percent;
    var section3_isMobile;

    function changeOverlap() {
      setProperty();
      motionRender();

      // if (section3_isMobile) {
      //   contentInMobile();
      // } else {
      //   contentIn();
      // }
    }

    function setProperty() {
      section1_scrollHeight = scrollTitle.offsetHeight; // section의 높이
      section1_winScrollTop = window.pageYOffset; // 현재 스크롤 높이
      section1_OffsetTop = // 현재 section 위에 대한 여백 높이
        scrollTitle.getBoundingClientRect().top + window.pageYOffset;
      section1_scrollRealHeight = section1_scrollHeight - window.innerHeight; // 내가 사용하는 모니터로 상단 기준으로 스크롤 마침일때, 스크롤 할수있는 높이
      section1_ScrollTop = section1_winScrollTop - section1_OffsetTop; // 여백을 제외한 현재 section에서의 스크롤 높이
      section1_scrollPerecnt = section1_ScrollTop / section1_scrollRealHeight; // 현재 스크롤 지점 소수점 기준
      section1_percent = section1_scrollPerecnt * 100; // 현재 스크롤 지점 100% 기준

      section2_scrollHeight = scrollBody.offsetHeight;
      section2_winScrollTop = window.pageYOffset;
      section2_OffsetTop =
        scrollBody.getBoundingClientRect().top + window.pageYOffset;
      section2_scrollRealHeight = section2_scrollHeight - window.innerHeight;
      section2_ScrollTop = section2_winScrollTop - section2_OffsetTop;
      section2_scrollPerecnt = section2_ScrollTop / section2_scrollRealHeight;
      section2_percent = section2_scrollPerecnt * 100;

      section3_isMobile = window.innerWidth <= 1024 ? true : false;
      section3_scrollHeight = scrollWork.offsetHeight;
      section3_winScrollTop = window.pageYOffset;
      section3_OffsetTop =
        scrollWork.getBoundingClientRect().top + section3_winScrollTop;
      section3_scrollRealHeight = section3_scrollHeight - window.innerHeight;
      section3_ScrollTop = section3_winScrollTop - section3_OffsetTop;
      section3_scrollPerecnt = section3_ScrollTop / section3_scrollRealHeight;
      section3_percent = section3_scrollPerecnt * 100;
    }

    function motionRender() {
      console.log(section3_isMobile);
      // Section 1
      if (section1_percent > 30) {
        titText1.classList.add("active");
      } else {
        titText1.classList.remove("active");
      }

      if (section1_percent < 30 || section1_percent > 60) {
        titText2.classList.add("active");
      } else {
        titText2.classList.remove("active");
      }

      if (section1_percent < 60) {
        titText3.classList.add("active");
      } else {
        titText3.classList.remove("active");
      }

      // Section 2
      let maskStartValue = 50;
      let maskEndValue = 0;
      let zoomValue = 2.5;
      let zoomOutValue = 1;
      let maskVal = Math.max(
        maskEndValue,
        maskStartValue - section2_scrollPerecnt * maskStartValue
      );
      let scaleVal = Math.max(
        zoomOutValue,
        zoomValue - section2_scrollPerecnt * (zoomValue - 0.25)
      );

      maskLeft.style.width = maskVal + "%";
      maskRight.style.width = maskVal + "%";
      bgImage.style.transform = "scale(" + scaleVal + ")";

      if (section2_percent > 90) {
        endingContent.classList.add("active");
      } else {
        endingContent.classList.remove("active");
      }

      // Section 3
      if (section3_percent >= 0 && section3_percent < 25) {
        document
          .querySelector(".fix_Work_motion .slide .box01")
          .classList.add("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt01")
          .classList.add("active");
      } else {
        document
          .querySelector(".fix_Work_motion .slide .slide_box")
          .classList.remove("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt01")
          .classList.remove("active");
      }

      if (section3_percent >= 25 && section3_percent < 50) {
        document
          .querySelector(".fix_Work_motion .slide .box02")
          .classList.add("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt02")
          .classList.add("active");
      } else {
        document
          .querySelector(".fix_Work_motion .slide .box02")
          .classList.remove("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt02")
          .classList.remove("active");
      }

      if (section3_percent >= 50 && section3_percent < 75) {
        document
          .querySelector(".fix_Work_motion .slide .box03")
          .classList.add("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt03")
          .classList.add("active");
      } else {
        document
          .querySelector(".fix_Work_motion .slide .box03")
          .classList.remove("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt03")
          .classList.remove("active");
      }

      if (section3_percent >= 75 && section3_percent < 100) {
        document
          .querySelector(".fix_Work_motion .slide .box04")
          .classList.add("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt04")
          .classList.add("active");
      } else if (section3_percent < 75) {
        document
          .querySelector(".fix_Work_motion .slide .box04")
          .classList.remove("active");

        document
          .querySelector(".fix_Work_motion .text_box .txt04")
          .classList.remove("active");
      }

      console.log("🚙🚙🛺🛺🚕");
      console.log(section3_isMobile);
      console.log(section3_scrollHeight);
      console.log(section3_winScrollTop);
      console.log(section3_OffsetTop);
      console.log(section3_scrollRealHeight);
      console.log(section3_ScrollTop);
      console.log(section3_scrollPerecnt);
      console.log(section3_percent);
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
  }, []);

  return (
    <>
      <div className="wrap">
        <section className="fix_text_motion">
          <article className="sticky_cont">
            <div className="cont_box">
              <div className="intro_txt_01">
                <h2>안녕하세요.</h2>
              </div>
              <div className="intro_txt_02">
                <h2>개발자 김우혁입니다.</h2>
              </div>
              <div className="intro_txt_03">
                <h2>저만의 사이트를 볼까요?</h2>
              </div>
            </div>
          </article>
        </section>

        <section className="fix_motion">
          <article className="sticky_cont">
            <div className="cont_box">
              <div className="left_mask"></div>
              <div className="right_mask"></div>
              <figure className="bg_img"></figure>
              <div className="ending_txt">
                <div className="tb_row">
                  <div className="tb_cell">
                    <p>감사합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="fix_Work_motion">
          <article className="fix_wrap inner">
            <div className="title">
              <h2 className="tit">2022</h2>
              <h3 className="sub-tit">Portfolio.</h3>
              <p>
                AirPods Max는 AirPods 제품군이 자랑하는 간편하면서 매혹적인
                사용성을 그대로 갖추고 있습니다. 설정부터 Siri 명령어까지,
                매끄러운 청취 경험을 완성하기 위한 여러 기능 덕분에 낮부터
                밤까지 기기를 넘나들며 당신만의 리듬에 심취할 수 있죠.
              </p>
            </div>
            <div className="device_fix">
              <div className="watch_img">
                <figure className="img_device">
                  <img src={require("../images/mac.png").default} alt="" />
                </figure>
                <div className="slide_wrap">
                  <div className="slide">
                    <div className="slide_box box01">
                      <figure>
                        <img src={require("../images/1.jpg").default} />
                      </figure>
                      <div className="text_box">
                        <h4>설정도 탭 한 번으로</h4>
                        <p className="txt01">
                          AirPods Max는 iPhone 또는 iPad와 즉시 연결됩니다.
                          AirPods Max를 기기 가까이 가져간 다음, 화면에서
                          ‘연결’을 탭하기만 하면 간단히 페어링할 수 있죠.
                        </p>
                      </div>
                    </div>
                    <div className="slide_box box02">
                      <figure>
                        <img src={require("../images/2.jpg").default} />
                      </figure>
                      <div className="text_box">
                        <h4>설정도 탭 한 번으로</h4>
                        <p className="txt02">
                          AirPods Max는 iPhone 또는 iPad와 즉시 연결됩니다.
                          AirPods Max를 기기 가까이 가져간 다음, 화면에서
                          ‘연결’을 탭하기만 하면 간단히 페어링할 수 있죠.
                        </p>
                      </div>
                    </div>
                    <div className="slide_box box03">
                      <figure>
                        <img src={require("../images/3.jpg").default} />
                      </figure>
                      <div className="text_box">
                        <h4>설정도 탭 한 번으로</h4>
                        <p className="txt03">
                          {" "}
                          AirPods Max는 iPhone 또는 iPad와 즉시 연결됩니다.
                          AirPods Max를 기기 가까이 가져간 다음, 화면에서
                          ‘연결’을 탭하기만 하면 간단히 페어링할 수 있죠.
                        </p>
                      </div>
                    </div>
                    <div className="slide_box box04">
                      <figure>
                        <img src={require("../images/4.jpg").default} />
                      </figure>
                      <div className="text_box">
                        <h4>설정도 탭 한 번으로</h4>
                        <p className="txt04">
                          {" "}
                          AirPods Max는 iPhone 또는 iPad와 즉시 연결됩니다.
                          AirPods Max를 기기 가까이 가져간 다음, 화면에서
                          ‘연결’을 탭하기만 하면 간단히 페어링할 수 있죠.
                        </p>
                      </div>
                    </div>
                    <figure></figure>
                    <figure></figure>
                    <figure></figure>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="ggang_box">
          <h2>END</h2>
        </section>
      </div>
    </>
  );
}

export default Open;
