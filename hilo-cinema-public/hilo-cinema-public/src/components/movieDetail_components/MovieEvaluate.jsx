﻿const MovieEvaluate = () => {
    return (
        <div>
            <div className="movie__content mb-8 hidden" id="target">
            <span className="border-l-4 border-solid border-blue-10 mr-2"></span>
            <h1 className="mb-4 text-lg inline-block uppercase font-medium">
                Đánh giá phim
            </h1>
            <div className="grid grid-cols-1 items-center ">
                <div className="flex flex-col grow col-span-3">
                    <div className="flex md:justify-between justify-center items-start">
                        <div>
                            <div className="star-rating transition-all duration-300 ease-in-out block">
                                <div className="star-container">
                                    {[...Array(starNumber)].map((_, i) => (
                                        <span key={i} className="star">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 50 50" width="24" height="24" className="inline-block">
                                                <path fill="#A0A3A7" d="M15.868,28.234l-2.33,9.757c-0.094,0.391,0.057,0.8,0.38,1.038c0.324,0.237,0.757,0.26,1.104,0.054  l8.762-5.203l8.758,5.203c0.158,0.094,0.335,0.141,0.511,0.141c0.209,0,0.417-0.065,0.593-0.194c0.323-0.238,0.474-0.647,0.38-1.038  l-2.33-9.757l7.734-6.554c0.309-0.261,0.43-0.683,0.306-1.068c-0.123-0.385-0.467-0.658-0.87-0.691L28.665,19.08l-3.963-9.25  c-0.157-0.368-0.519-0.606-0.919-0.606s-0.762,0.238-0.919,0.606l-3.966,9.25L8.7,19.921c-0.403,0.033-0.747,0.306-0.87,0.691  c-0.124,0.385-0.003,0.807,0.306,1.068L15.868,28.234z M19.662,21.023c0.369-0.03,0.691-0.262,0.837-0.603l3.284-7.659l3.28,7.658  c0.146,0.341,0.468,0.573,0.837,0.603l8.394,0.692l-6.361,5.391c-0.288,0.243-0.414,0.628-0.326,0.995l1.924,8.055l-7.236-4.299  c-0.314-0.188-0.707-0.188-1.021,0l-7.24,4.3l1.924-8.056c0.088-0.367-0.038-0.752-0.326-0.995l-6.359-5.391L19.662,21.023z"></path>
                                            </svg>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MovieEvaluate;