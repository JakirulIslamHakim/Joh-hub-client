const FeedBackSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-72">
      <div className="flex gap-4 items-center">
        <div className="skeleton mx-auto w-16 h-16 rounded-full shrink-0"></div>
        {/* <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-28"></div>
        </div> */}
      </div>
      <div className="skeleton h-8 mt-2 w-1/2 mx-auto"></div>
      <div className="skeleton h-36 w-full"></div>
    </div>
  );
};

export default FeedBackSkeleton;
