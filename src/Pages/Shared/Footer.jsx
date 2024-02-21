const Footer = () => {
  return (
    <footer className="p-10  bg-gray-300">
      <div className="footer flex justify-around flex-col md:flex-row text-base-content mx-auto max-w-7xl">
        <aside>
          <div className="w-20 lg:w-24">
            <img
              className="w-full rounded-full lg:ml-6"
              src="https://i.ibb.co/G95bnRK/Screenshot-29.png"
              alt=""
            />
          </div>
          <p>
            <span className="text-xl">JOB HUB Industries Ltd.</span>
            <br />
            Providing reliable tech since 2023
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
