import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

import image1 from "../../public/Image-1.png"
import image2 from "../../public/Image-2.png"
import image3 from "../../public/Image-3.png"

const Card = () => {
    return (
        <>
            <header className="mt-[40px] lg:mx-[200px]">

                <section className='lg:flex items-center justify-between hidden '>
                    <div className='flex items-center gap-[20px]'>
                        <p>All Posts(32)</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Job</p>
                    </div>

                    <div className="flex items-center gap-[22px]">

                        <button className="flex items-center gap-2 bg-[#EDEEF0] text-[15px] font-medium py-[8px] px-[10px] rounded-[4px]">Write a Post <IoMdArrowDropdown></IoMdArrowDropdown></button>
                        <button className="flex items-center gap-2 bg-[#2F6CE5] text-[15px] font-medium py-[8px] px-[10px] rounded-[4px] text-white"><FaUserPlus></FaUserPlus> Join Group</button>

                    </div>
                </section>



                <section>

                    <div className="lg:w-[692px] w-[370px] lg:h-[220px] h-[120px] mx-auto lg:mx-0 border shadow-md rounded-t">
                        <div>
                            <figure>
                                <img src={image1} alt="" />
                            </figure>
                        </div>

                        <div className="lg:px-5 px-2 space-y-[10px] border shadow-sm rounded-b">
                            <div className="mt-5">
                                <p>✍️ Article</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="lg:w-[600px] w-[300px] font-semibold">
                                    <p className="lg:text-[22px] text-[18px]">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="text-xl m-1"><BsThreeDots></BsThreeDots></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Edit</a></li>
                                        <li><a>Report</a></li>
                                        <li><a>Block</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="lg:text-[19px] text-[15px] text-[#5C5C5C] font-normal">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            </div>

                            <div className="lg:px-5 mt-6 py-8 flex justify-between items-center">
                                <div className="flex items-center gap-3">

                                    <div>
                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="w-10 h-10 rounded-full" alt="" />
                                    </div>
                                    <p>Sarthak Kamra</p>

                                </div>


                                <div className="flex items-center gap-7">
                                    <div className="flex items-center gap-2">
                                        <FaEye></FaEye> 1.4k views
                                    </div>
                                    <div>
                                        <FaShareAlt className="cursor-pointer"></FaShareAlt>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                    <div className="lg:w-[692px] w-[370px] lg:h-[220px] h-[120px] mx-auto lg:mx-0 border shadow-md rounded-t mt-80">
                        <div>
                            <figure>
                                <img src={image2} alt="" />
                            </figure>
                        </div>

                        <div className="lg:px-5 px-2 space-y-[10px] border shadow-sm rounded-b">
                            <div className="mt-5">
                                <p>✍️ Article</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="lg:w-[600px] w-[300px] font-semibold">
                                    <p className="lg:text-[22px] text-[18px]">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="text-xl m-1"><BsThreeDots></BsThreeDots></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Edit</a></li>
                                        <li><a>Report</a></li>
                                        <li><a>Block</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="lg:text-[19px] text-[15px] text-[#5C5C5C] font-normal">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            </div>

                            <div className="lg:px-5 mt-6 py-8 flex justify-between items-center">
                                <div className="flex items-center gap-3">

                                    <div>
                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="w-10 h-10 rounded-full" alt="" />
                                    </div>
                                    <p>Sarthak Kamra</p>

                                </div>


                                <div className="flex items-center gap-7">
                                    <div className="flex items-center gap-2">
                                        <FaEye></FaEye> 1.4k views
                                    </div>
                                    <div>
                                        <FaShareAlt className="cursor-pointer"></FaShareAlt>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                    <div className="lg:w-[692px] w-[370px] lg:h-[220px] h-[120px] mx-auto lg:mx-0 border shadow-md rounded-t mt-80">
                        <div>
                            <figure>
                                <img src={image3} alt="" />
                            </figure>
                        </div>

                        <div className="lg:px-5 px-2 space-y-[10px] border shadow-sm rounded-b">
                            <div className="mt-5">
                                <p>✍️ Article</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="lg:w-[600px] w-[300px] font-semibold">
                                    <p className="lg:text-[22px] text-[18px]">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="text-xl m-1"><BsThreeDots></BsThreeDots></div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Edit</a></li>
                                        <li><a>Report</a></li>
                                        <li><a>Block</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p className="lg:text-[19px] text-[15px] text-[#5C5C5C] font-normal">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            </div>

                            <div className="lg:px-5 mt-6 py-8 flex justify-between items-center">
                                <div className="flex items-center gap-3">

                                    <div>
                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" className="w-10 h-10 rounded-full" alt="" />
                                    </div>
                                    <p>Sarthak Kamra</p>

                                </div>


                                <div className="flex items-center gap-7">
                                    <div className="flex items-center gap-2">
                                        <FaEye></FaEye> 1.4k views
                                    </div>
                                    <div>
                                        <FaShareAlt className="cursor-pointer"></FaShareAlt>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                  


                   



                    <div>

                    </div>
                </section>






            </header>
        </>
    );
};

export default Card;