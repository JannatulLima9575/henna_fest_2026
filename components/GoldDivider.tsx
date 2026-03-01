const GoldDivider = () => {
  return (
    <div className="flex justify-center py-10 bg-white">
      <svg
        width="200"
        height="20"
        viewBox="0 0 200 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="10" x2="200" y2="10" stroke="#d97706" strokeWidth="2" />
        <circle cx="100" cy="10" r="6" fill="#f59e0b" />
      </svg>
    </div>
  );
};

export default GoldDivider;