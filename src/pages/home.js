import React, { useState, useLayoutEffect } from "react";
import "../scss/global.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // 반복문을 돌려 모든 DOM에 적용
  useLayoutEffect(() => {
    const boxList = document.querySelectorAll(".box");

    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50%가 viewport에 들어와 있어야 callback 실행
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    boxList.forEach((el) => observer.observe(el));

    setIsLoading(true);
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div calss="wrap">
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">3</div>
          <div class="box">4</div>
          <div class="box">5</div>
          <div class="box">6</div>
          <div class="box">7</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">10</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );

  // return <Scroll />;
}

export default Home;
