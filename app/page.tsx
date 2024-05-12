import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-row justify-between items-center h-full w-full mt-24 px-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-bold">Transforming Traceability with Blockchain</h1>
          <p className="text-[1.65rem] mt-2">
            Empowering your business with unparalleled transparency and security
          </p>
          <Link href='/solutions' className="w-fit bg-gradient-to-r from-blue-700 to-blue-900 hover:opacity-[0.7] text-lg text-white  mt-8 py-2 px-8 rounded-lg">
            Learn More
          </Link>
        </div>
        <div className="relative w-[32rem] h-[27rem]">
          <Image 
            src="/blockchain-intro.webp"
            alt="Blockchain Introduction"
            layout="fill"
          />
        </div>
      </div>
    </main>
  );
}
