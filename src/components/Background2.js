import React, { Component } from "react";

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
    this.vx = this.randBetween(-2, 2);
    this.vy = this.randBetween(1, 2);
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

class Background2 extends Component {
  constructor() {
    super();
    this.canvasRef = React.createRef();
    this.updateBound = this.update.bind(this);
  }

  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", () => this.onResize());

    this.onResize();
    this.createSnowFlakes();

    if (this.props.endAnimation) {
      // endAnimation이 true일 때만 애니메이션 시작
      requestAnimationFrame(this.updateBound);
    }
  }

  componentDidUpdate(prevProps) {
    // endAnimation이 변경될 때 애니메이션 상태 업데이트
    if (this.props.endAnimation !== prevProps.endAnimation) {
      if (this.props.endAnimation) {
        requestAnimationFrame(this.updateBound);
      }
    }
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  createSnowFlakes() {
    const flakes = window.innerWidth / 4;
    this.snowflakes = [];

    for (let s = 0; s < flakes; s++) {
      this.snowflakes.push(new SnowFlake());
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const flake of this.snowflakes) {
      flake.update();

      this.ctx.save();
      this.ctx.fillStyle = "#FFF";
      this.ctx.beginPath();
      this.ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
      this.ctx.closePath();
      this.ctx.globalAlpha = flake.alpha;
      this.ctx.fill();
      this.ctx.restore();
    }

    if (this.props.endAnimation) {
      // endAnimation이 true일 때만 계속해서 애니메이션 업데이트
      requestAnimationFrame(this.updateBound);
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{ zIndex: 0, position: "fixed", top: "0", left: "0" }}
      />
    );
  }
}

export default Background2;
