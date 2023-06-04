const Feed = () => {
  return (
    <>
      <div className="navbar flex justify-between border-b border-gray-700 p-2">
        <div className="h-14 w-14 mx-8">
          <img src="/img/nexus-website-favicon-white.png" alt="Logo" />
        </div>
        <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer mx-8">
          AC
        </div>
      </div>
      <div className="h-full w-full flex">
        <div className="h-full w-1/4 flex flex-col justify-between pb-10 border-r border-gray-700">
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
          <h2>Routes</h2>
        </div>
        <div className="w-3/4 h-1/10">
          <h1>Main content</h1>
        </div>
      </div>
    </>
  );
};

export default Feed;
