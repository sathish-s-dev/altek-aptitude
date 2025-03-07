function Header() {
  return (
    <>
      <div className="bg-white drop-shadow-md sticky top-0 w-100%">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="https://www.altekinstitution.com" className="-m-1.5 p-1.5">
              {" "}
              <span className="sr-only">ALTEK</span>
              <img className="h-8 w-auto" src="./images/Alt.Logo.png" alt="" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
