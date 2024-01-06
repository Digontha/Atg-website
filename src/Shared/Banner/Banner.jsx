

const Banner = () => {
    return (
        <>
            <div className="relative ">

                <div>
                    <img className="w-full h-[236px]  lg:h-[440px] object-cover" src="https://weboptimainc.com/file-uploads/2017/10/desk_work_computer_cigarette_laptop-124100.jpgd_-1090x380.jpeg" alt="" />
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-50 text-white">
                    <div className="lg:mt-[286px] mt-[168px] ml-[16px] lg:ml-[200px]">
                        <p className="text-[#fff] font-semibold lg:text-[36px] text-[20px] ">Computer Engineering</p>
                        <p className="text-[#fff] font-normal">142,765 Computer Engineers follow this</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Banner;