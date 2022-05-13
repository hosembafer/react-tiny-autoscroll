import { CSSProperties, useRef } from "react";
import { useAutoScroll } from "react-tiny-autoscroll";

const items = Array(1000).fill(null).map((_, i) => i + 1);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useAutoScroll({
    containerRef,
  });

  const style: CSSProperties = {
    height: 400,
    overflowY: "auto",
    border: "1px solid red",
    margin: 50,
  };

  return (
    <div ref={containerRef} style={style}>
      {items.map((n) => (
        <div key={n}>
          {n}
        </div>
      ))}
    </div>
  );
}

export default App;
