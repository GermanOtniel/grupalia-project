const BoltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="#f59f00" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="#f59f00" 
      style={{ width: "16px", height: "16px" }}
      { ...props }
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
};

export default BoltIcon;