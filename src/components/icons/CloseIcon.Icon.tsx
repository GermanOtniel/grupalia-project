const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="white" 
      viewBox="0 0 24 24" 
      strokeWidth={3} 
      stroke="black" 
      style={{ width: "46px", height: "46px" }}
      { ...props }
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
};

export default CloseIcon;