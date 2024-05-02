const EllipsisIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="white" 
      viewBox="0 0 24 24" 
      strokeWidth={3} 
      stroke="white" 
      style={{ width: "28px", height: "28px" }}
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
    </svg>
  );
};

export default EllipsisIcon;