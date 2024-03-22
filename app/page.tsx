export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row justify-between items-center h-full w-full mt-24 px-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Transforming Traceability with Blockchain</h1>
          <p className="text-[1.65rem] mt-2">
            Empowering your business with unparalleled transparency and security
          </p>
          <button className="w-fit bg-gradient-to-r from-blue-700 to-blue-900 hover:opacity-[0.7] text-lg text-white  mt-8 py-2 px-8 rounded-lg">
            Learn More
          </button>
        </div>
        <img 
          src="/blockchain-intro.webp"
          alt="Blockchain Introduction"
          className="h-[27rem] w-[32rem] ml-4 opacity-[0.4]"
        />
      </div>
    </main>
  );
}
