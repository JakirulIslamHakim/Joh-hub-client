const FeedBackCard = ({ feedback }) => {
  const { name, comment, rating } = feedback;

  return (
    <div>
      <div className="card w-40 md:w-80  shadow-xl border mr-3 flex flex-col bg-[#b7e4c7]">
        <div className="mx-auto mt-4">
          <div className="avatar">
            <div className="w-11 md:w-20 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
            <h2 className="card-title flex-grow mx-auto text-sm md:text-xl ">{name}</h2>
        </div>
        <div className="card-body  p-2 md:p-6  ">
          {/* <h2 className="card-title flex-grow mx-auto text-sm md:text-xl ">{name}</h2> */}
          <p className="text-justify text-xs md:text-base md:h-28 h-32"><span className="font-semibold">Msg : </span>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
