import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loading() {
  return (
    <div className="mt-20 flex flex-col space-y-6">
      <Skeleton height={20} width={250} />
      <hr />
      <div className="flex flex-col space-y-5">
        <Skeleton count={5} />
      </div>
      <hr />
      <div className="flex flex-col space-y-10">
        <Skeleton count={4} />
      </div>
      <hr />
      <Skeleton width={200} />
    </div>
  );
}

export default loading;
