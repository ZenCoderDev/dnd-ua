const TownSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" viewBox="0 0 900 600" className="absolute mx-auto -bottom-2 md:relative  w-[100%]" style={{ zIndex: "4" }} preserveAspectRatio="none">
    <rect width="900" height="600" fill="transparent" />

    {/* Первый "слой земли" ниже (с 400 → 500) */}
    <path
      d="M0 430 L300 430 L600 430 L900 430 L900 500 L0 600Z"
      fill="var(--card-background)"
    />

    {/* Второй "слой земли" */}
    <path
      d="M0 500 L400 500 L800 500 L900 500 L900 600 L0 600Z"
      fill="var(--accent)"
    />
  </svg>
);

export default TownSVG;
