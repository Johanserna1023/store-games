import "./index.css";
export const LoaderCard = () => {
  return (
    <>
      <div>
        <div className="max-w-[200px] md:min-w-[250px] w-full h-[205px] rounded-sm loader-animation"></div>
        <div className="w-full h-[25px] rounded-sm mt-2 loader-animation "></div>
        <div className="w-[60%] h-[15px] rounded-sm mt-2 loader-animation "></div>
        <div className="w-[90%] h-[20px] rounded-sm mt-2 loader-animation "></div>
      </div>
    </>
  );
};
