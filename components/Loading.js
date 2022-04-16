import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col text-center mx-auto ">
      <p className="text-4xl  mt-20 font-my-font font-extrabold">Loading...</p>
      <div>
        <Image
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt="loading"
          height={200}
          width={200}
          objectFit="cover"
          className="h-1/6 shadow rounded-t w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Loading;
