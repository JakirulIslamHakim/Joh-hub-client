const MyPostSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-4  p-4">
        <div className="skeleton w-1/2 mx-auto h-10 mb-7"></div>
        <div className="skeleton h-48 w-full"></div>
        <div className="flex justify-end gap-2 mt-2">
          <div className="skeleton w-28 h-8 "></div>
          <div className="skeleton w-28 h-8 "></div>
        </div>
      </div>
    </>
  );
};

export default MyPostSkeleton;
