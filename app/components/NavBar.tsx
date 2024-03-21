export const NavBar = () => {
  return (
    <div className="flex justify-between py-4 px-12 text-xl">
      <div className="flex justify-start items-center text-3xl cursor-pointer">
        <span className="text-white">Traceable Chain</span>
        <img  
          src="/treceability-logo.png"
          alt="traceable chain logo"
          className="text-white invert h-16 w-16 mx-4"
        />
      </div>
      <div className="flex justify-end gap-x-8">
        <div className="hover:underline underline-offset-8	">
          <a href="/">Whitepaper</a>
        </div>
        <div className="hover:underline underline-offset-8	">
          <a href="/about">About</a>
        </div>
        <div className="hover:underline underline-offset-8	">
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
