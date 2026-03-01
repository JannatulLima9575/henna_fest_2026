const IslamicPatternBg = () => {
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="2" fill="#d97706" />
            <circle cx="0" cy="0" r="2" fill="#f59e0b" />
            <circle cx="60" cy="60" r="2" fill="#fbbf24" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern)" />
      </svg>
    </div>
  );
};

export default IslamicPatternBg;