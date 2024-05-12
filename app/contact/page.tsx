export default function Contact(){
  return (
    <div className="flex flex-col items-start m-20">
      <h1 className="text-4xl font-bold">Feel free to keep in touch</h1>
      <form className="flex flex-col gap-4 mt-8">
        <input className="w-96 p-2 rounded-lg" type="text" placeholder="Name" />
        <input className="w-96 p-2 rounded-lg" type="email" placeholder="Email" />
        <textarea className="w-96 h-32 p-2 rounded-lg" placeholder="Message"></textarea>
        <button className="w-96 bg-gradient-to-r from-blue-700 to-blue-900 hover:opacity-[0.7] text-lg text-white py-2 px-8 rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}
