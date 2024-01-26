import React, { useState, useEffect, useRef } from "react";

class SnowFlake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.r = 0;
    this.alpha = 0;

    this.reset();
  }

  reset() {
    this.x = this.randBetween(0, window.innerWidth);
    this.y = this.randBetween(0, -window.innerHeight);
    this.vx = this.randBetween(-3, 3);
    this.vy = this.randBetween(2, 5);
    this.r = this.randBetween(1, 4);
    this.alpha = this.randBetween(0.1, 0.9);
  }

  randBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.y + this.r > window.innerHeight) {
      this.reset();
    }
  }
}

const Background2 = ({ endAnimation }) => {
  const canvasRef = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const createSnowFlakes = () => {
    const flakes = window.innerWidth / 4;
    const snowflakes = [];

    for (let s = 0; s < flakes; s++) {
      snowflakes.push(<SnowFlake key={s} />);
    }

    return snowflakes;
  };

  const update = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);

    // SnowFlake 업데이트 로직 추가

    if (endAnimation) {
      requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (endAnimation) {
      requestAnimationFrame(update);
    }
  }, [endAnimation]);

  return (
    <canvas
      ref={canvasRef}
      style={{ zIndex: 1, position: "fixed", top: 0, left: 0 }}
      width={width}
      height={height}
    >
      {createSnowFlakes()}
    </canvas>
  );
};

export default Background2;
