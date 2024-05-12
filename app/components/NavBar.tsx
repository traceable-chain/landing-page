import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="flex justify-between py-4 px-12 text-xl">
      <Link href="/" className="flex justify-start items-center text-3xl cursor-pointer">
        <div  className="relative w-16 h-16 mx-4">
          <Image  
            src="/treceability-logo.png"
            alt="traceable chain logo"
            className="text-white invert h-16 w-16"
            layout="fill"
          />

        </div>
          <span className="text-white">Traceable Chain</span>
      </Link>
      <div className="flex justify-end gap-x-8">
        <div className="hover:underline underline-offset-8	">
          <a href="/">Whitepaper</a>
        </div>
        <div className="hover:underline underline-offset-8	">
          <a href="/solutions">Solutions</a>
        </div>
        <div className="hover:underline underline-offset-8	">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
