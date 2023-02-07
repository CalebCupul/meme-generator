import meme from '../assets/test.png'

export default function Meme() {
  return (
    <div className="max-w-xs mx-auto mt-10 sm:max-w-md lg:max-w-lg 2xl:max-w-2xl">
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 lg:flex-row">
            <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            />
            <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
            />
        </div>
        <button className="btn btn-primary bg-purple-500">Generate meme</button>
      </form>
      <img src={meme} alt="" className="rounded-md mt-10 object-cover w-full"/>
    </div>
  );
}
