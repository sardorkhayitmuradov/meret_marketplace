const LoadingSpinner = ({ isLoaded }) => {
    return (
        isLoaded && (
            <div className="grid justify-center items-center h-[350px]">
                <div className="w-[50px] h-[50px] border-[10px] border-solid border-[#f3f3f3] border-t-[10px] border-t-[#383636] rounded-[50%] loading-spinner">
               
                </div>
            </div>
        )
    );
};

export default LoadingSpinner;