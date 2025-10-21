import React, { useEffect, useRef } from "react";

const Eyes = ({className=""}) => {
  const eyesRef = useRef([]);
  const pupilsRef = useRef([]);
  const targetRef = useRef([
    { x: 0, y: 0, angle: 0 },
    { x: 0, y: 0, angle: 0 },
  ]);
  const currentRef = useRef([
    { x: 0, y: 0, angle: 0 },
    { x: 0, y: 0, angle: 0 },
  ]);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      eyesRef.current.forEach((eyeEl, i) => {
        if (!eyeEl) return;

        const rect = eyeEl.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;

        const eyeRadius = rect.width / 2;
        const pupilSize = rect.width * 0.6; // 🟢 pupil = 60% of eye width
        const pupilRadius = pupilSize / 2;

        // 👁️ subtle travel limit (reduce to 35% of full possible)
        const maxTravel = (eyeRadius - pupilRadius - 6) * 0.35;

        const ratio = Math.min(1, maxTravel / dist);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        targetRef.current[i] = {
          x: dx * ratio,
          y: dy * ratio,
          angle,
        };
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const SMOOTH = 0.1; // smooth animation
    const tick = () => {
      for (let i = 0; i < eyesRef.current.length; i++) {
        const cur = currentRef.current[i];
        const tar = targetRef.current[i];

        cur.x += (tar.x - cur.x) * SMOOTH;
        cur.y += (tar.y - cur.y) * SMOOTH;
        let deltaAngle = ((tar.angle - cur.angle + 540) % 360) - 180;
        cur.angle += deltaAngle * SMOOTH;

        const pup = pupilsRef.current[i];
        if (pup) {
          pup.style.transform = `translate(calc(-50% + ${cur.x}px), calc(-50% + ${cur.y}px)) rotate(${cur.angle}deg)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden ">

      <div
        
        className={` flex items-center h-full justify-center p-8 bg-cover bg-center ${className}`}
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            ref={(el) => (eyesRef.current[i] = el)}

            className="w-[15vw] h-[15vw] bg-white rounded-full mx-4 flex items-center justify-center relative overflow-hidden shadow-lg"
          >
            {/* pupil */}
            <div

              ref={(el) => (pupilsRef.current[i] = el)}

              className="absolute left-1/2 top-1/2 bg-black rounded-full pointer-events-none"
              style={{
                width: "60%", // 🟢 pupil size = 60%
                height: "60%",
                transform: "translate(-50%, -50%)",
                willChange: "transform",
              }}
            >
              {/* highlight */}
              <div
                className="absolute rounded-full bg-white"
                style={{
                  width: "18%",
                  height: "18%",
                  right: "20%",
                  top: "10%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eyes;