import { useEffect, useRef } from "react";

/* ── Shape definitions ──────────────────────────────── */
const SHAPES = [
  { type: "circle",   size: 20,  opacity: 0.10, count: 8 },
  { type: "circle",   size: 10,  opacity: 0.08, count: 6 },
  { type: "ring",     size: 36,  opacity: 0.07, count: 5 },
  { type: "triangle", size: 22,  opacity: 0.09, count: 6 },
  { type: "triangle", size: 14,  opacity: 0.07, count: 5 },
  { type: "star",     size: 22,  opacity: 0.10, count: 5 },
  { type: "star",     size: 13,  opacity: 0.08, count: 4 },
  { type: "dot",      size: 5,   opacity: 0.18, count: 12 },
  { type: "dot",      size: 3,   opacity: 0.14, count: 10 },
  { type: "line",     size: 32,  opacity: 0.08, count: 5 },
  { type: "cross",    size: 18,  opacity: 0.09, count: 5 },
  { type: "hex",      size: 28,  opacity: 0.08, count: 5 },
  { type: "square",   size: 16,  opacity: 0.08, count: 4 },
  { type: "diamond",  size: 18,  opacity: 0.09, count: 4 },
  { type: "zigzag",   size: 30,  opacity: 0.06, count: 3 },
];

const DARK_COLORS  = ["#7C3AED", "#06B6D4", "#EC4899", "#8B5CF6", "#2DD4BF", "#A78BFA", "#38BDF8"];
const LIGHT_COLORS = ["#7C3AED", "#0EA5E9", "#D946EF", "#6D28D9", "#06B6D4", "#8B5CF6", "#0284C7"];

function drawShape(
  ctx: CanvasRenderingContext2D,
  type: string,
  x: number, y: number,
  size: number,
  color: string,
  opacity: number,
  angle: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = opacity;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.6;

  switch (type) {
    case "circle":
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.stroke();
      break;

    case "ring": {
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.globalAlpha = opacity * 0.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, size / 3.5, 0, Math.PI * 2);
      ctx.globalAlpha = opacity * 0.35;
      ctx.stroke();
      break;
    }

    case "triangle":
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(size / 2, size / 2);
      ctx.lineTo(-size / 2, size / 2);
      ctx.closePath();
      ctx.stroke();
      break;

    case "star": {
      const r1 = size / 2, r2 = size / 4;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const outerA = (Math.PI / 2.5) * i - Math.PI / 2;
        const innerA = outerA + Math.PI / 5;
        if (i === 0) ctx.moveTo(Math.cos(outerA) * r1, Math.sin(outerA) * r1);
        else ctx.lineTo(Math.cos(outerA) * r1, Math.sin(outerA) * r1);
        ctx.lineTo(Math.cos(innerA) * r2, Math.sin(innerA) * r2);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case "dot":
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
      ctx.fill();
      break;

    case "line":
      ctx.beginPath();
      ctx.moveTo(-size / 2, 0);
      ctx.lineTo(size / 2, 0);
      ctx.stroke();
      break;

    case "cross":
      ctx.beginPath();
      ctx.moveTo(-size / 2, 0); ctx.lineTo(size / 2, 0);
      ctx.moveTo(0, -size / 2); ctx.lineTo(0, size / 2);
      ctx.stroke();
      break;

    case "hex": {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        if (i === 0) ctx.moveTo(Math.cos(a) * size / 2, Math.sin(a) * size / 2);
        else ctx.lineTo(Math.cos(a) * size / 2, Math.sin(a) * size / 2);
      }
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case "square":
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.stroke();
      break;

    case "diamond":
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.lineTo(size / 2, 0);
      ctx.lineTo(0, size / 2);
      ctx.lineTo(-size / 2, 0);
      ctx.closePath();
      ctx.stroke();
      break;

    case "zigzag": {
      const segs = 4;
      const segW = size / segs;
      ctx.beginPath();
      ctx.moveTo(-size / 2, 0);
      for (let i = 0; i < segs; i++) {
        ctx.lineTo(-size / 2 + segW * (i + 0.5), i % 2 === 0 ? -size / 4 : size / 4);
        ctx.lineTo(-size / 2 + segW * (i + 1), 0);
      }
      ctx.stroke();
      break;
    }
  }
  ctx.restore();
}

/* ── Light theme: CSS background (fast & GPU rendered) ── */
const LightBgAnimation = () => (
  <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
    {/* Mesh gradient blobs */}
    <div
      className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(262 73% 52% / 0.08) 0%, transparent 70%)",
        animation: "floatA 14s ease-in-out infinite",
      }}
    />
    <div
      className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(185 70% 38% / 0.07) 0%, transparent 70%)",
        animation: "floatB 18s ease-in-out infinite",
      }}
    />
    <div
      className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
      style={{
        background: "radial-gradient(circle, hsl(330 70% 55% / 0.06) 0%, transparent 70%)",
        animation: "floatC 22s ease-in-out infinite",
      }}
    />
    {/* Animated grid — subtle */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(hsl(262 73% 52% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(262 73% 52% / 0.04) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        animation: "gridPan 30s linear infinite",
      }}
    />
    {/* Floating sparkles */}
    {[...Array(18)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${3 + (i % 4)}px`,
          height: `${3 + (i % 4)}px`,
          left: `${(i * 37 + 5) % 95}%`,
          top: `${(i * 53 + 10) % 90}%`,
          background: i % 3 === 0
            ? "hsl(262 73% 52%)"
            : i % 3 === 1
            ? "hsl(185 70% 38%)"
            : "hsl(330 70% 55%)",
          opacity: 0.25 + (i % 5) * 0.06,
          animation: `sparkle ${4 + (i % 5)}s ease-in-out infinite`,
          animationDelay: `${i * 0.4}s`,
        }}
      />
    ))}
  </div>
);

/* ── Canvas particle animation (dark mode) ──────────── */
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  angle: number; va: number;
  type: string; size: number;
  opacity: number; color: string;
}

const CanvasAnimation = ({ isDark }: { isDark: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const colors = isDark ? DARK_COLORS : LIGHT_COLORS;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight * 5);
    };
    resize();
    window.addEventListener("resize", resize);

    particles.current = SHAPES.flatMap((def, di) =>
      Array.from({ length: def.count }, (_, i) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (isDark ? 0.28 : 0.18),
        vy: (Math.random() - 0.5) * (isDark ? 0.28 : 0.18),
        angle: Math.random() * Math.PI * 2,
        va: (Math.random() - 0.5) * 0.005,
        type: def.type,
        size: def.size * (0.8 + Math.random() * 0.4),
        opacity: def.opacity * (isDark ? 1 : 0.55),
        color: colors[(di + i) % colors.length],
      }))
    );

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.va;
        if (p.x < -60) p.x = canvas.width + 60;
        if (p.x > canvas.width + 60) p.x = -60;
        if (p.y < -60) p.y = canvas.height + 60;
        if (p.y > canvas.height + 60) p.y = -60;
        drawShape(ctx, p.type, p.x, p.y, p.size, p.color, p.opacity, p.angle);
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ── Main export ────────────────────────────────────── */
const DoodleBackground = ({ isDark }: { isDark: boolean }) => (
  <>
    <CanvasAnimation isDark={isDark} />
    {!isDark && <LightBgAnimation />}
  </>
);

export default DoodleBackground;
