import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../rtk-store/slices/counterSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold mb-4">Counter Value : {count}</h1>
      <div className="flex">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-2 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
