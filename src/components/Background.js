import React, { useEffect, useRef } from "react";
import Phenomenon from "phenomenon";

const Background = ({ endAnimation, setEndAnimation }) => {
  const canvasRef = useRef(null);
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  // const handleEndAnimation = useCallback(() => {
  //   setEndAnimation(true);
  // }, [setEndAnimation]);

  useEffect(() => {
    if (endAnimation) {
      return;
    }

    const multiplier = 200000;
    const begin = 0.4;
    const duration = 2.5;

    function h2r(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
      return p;
    }

    function getHSL(h, s, l) {
      h = ((h % 1) + 1) % 1;
      s = Math.max(0, Math.min(1, s));
      l = Math.max(0, Math.min(1, l));
      if (s === 0) return [0, 0, 0];
      const p = l <= 0.5 ? l * (1 + s) : l + s - l * s;
      const q = 2 * l - p;
      return [h2r(q, p, h + 1 / 3), h2r(q, p, h), h2r(q, p, h - 1 / 3)];
    }

    function getRandom(value) {
      const floor = -value;
      return floor + Math.random() * value * 2;
    }

    const attributes = [
      {
        name: "aPositionStart",
        data: (index, total) => {
          return [0, -1, 0];
        },
        size: 3,
      },

      {
        name: "aControlPointOne",
        data: (index, total) => {
          const angle = index * ((2 * Math.PI) / total);
          return [
            Math.cos(angle) * 1.5 + getRandom(0.5),
            1 + getRandom(0.5),
            Math.sin(angle) * 1.5,
          ];
        },
        size: 3,
      },

      {
        name: "aControlPointTwo",
        data: (index, total) => {
          const angle = index * ((2 * Math.PI) / total);
          return [
            Math.cos(angle) + getRandom(1),
            1.2 + getRandom(0.5),
            Math.sin(angle) + getRandom(1),
          ];
        },
        size: 3,
      },

      {
        name: "aPositionEnd",
        data: (index, total) => {
          const angle = index * ((2 * Math.PI) / total);
          return [Math.cos(angle) + getRandom(1.2), 0.85, 0];
        },
        size: 2,
      },

      {
        name: "aColor",
        data: (index, total) =>
          getHSL(
            begin + (index / total) * 0.2,
            0.9 + getRandom(0.1),
            0.9 + getRandom(0.1)
          ),
        size: 3,
      },

      {
        name: "aOffset",
        data: (i) => [i * ((10 - duration) / (multiplier - 1))],
        size: 1,
      },
    ];

    const uniforms = {
      uProgress: {
        type: "float",
        value: 0.0,
      },
    };

    const vertex = `
      attribute vec3 aPositionStart;
      attribute vec3 aControlPointOne;  
      attribute vec3 aControlPointTwo;  
      attribute vec3 aPositionEnd;  
      attribute vec3 aPosition;  
      attribute vec3 aColor;  
      attribute float aOffset;  
    
      uniform float uProgress;
      uniform mat4 uProjectionMatrix;
      uniform mat4 uModelMatrix;
      uniform mat4 uViewMatrix;
    
      varying vec3 vColor;
    
      vec3 bezier4(vec3 a, vec3 b, vec3 c, vec3 d, float t) {
        return mix(mix(mix(a, b, t), mix(b, c, t), t), mix(mix(b, c, t), mix(c, d, t), t), t);
      }
    
      void main(){
        float tProgress = min(1.0, max(0.0, (uProgress - aOffset)) / ${duration});
        vec3 newPosition = bezier4(aPositionStart, aControlPointOne, aControlPointTwo, aPositionEnd, tProgress);
        gl_PointSize = 3.0; 
        gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(newPosition + aPosition, 1);
        vColor = aColor;

      }
    `;

    const fragment = `
    precision mediump float;
  
    varying vec3 vColor;
  
    void main(){
        gl_FragColor = vec4(vColor, 1.0);  // Use the original color
    }
  `;

    const renderer = new Phenomenon({
      canvas: canvasRef.current,
      context: { alpha: true },
      settings: {
        position: { x: 0, y: 0, z: 1.2 },
        shouldRender: true,
      },
    });

    renderer.add("starling", {
      attributes,
      multiplier,
      uniforms,
      vertex,
      fragment,
      onRender: (instance) => {
        // Increment the progress
        instance.uniforms.uProgress.value += 0.04;
        if (instance.uniforms.uProgress.value >= 12) {
          setEndAnimation(true);
          renderer.destroy();
        }
      },
    });

    return () => {
      renderer.destroy();
    };
  }, [endAnimation, setEndAnimation]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        width: `min(${screenWidth}px)`,
        height: `min(${screenHeight}px)`,
        imageRendering: "pixelated",
        overflow: "hidden",
        zIndex: `999`,
        pointerEvents: "none",
      }}
    />
  );
};

export default Background;
