import React, { useState, useLayoutEffect } from "react";
import Open from "../components/open";
import "../scss/global.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  // 반복문을 돌려 모든 DOM에 적용
  useLayoutEffect(() => {
    setIsLoading(true);
  }, [isLoading]);

  return <>{isLoading ? <Open /> : <p>Loading...</p>}</>;
}

export default Home;
