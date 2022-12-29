import Link from "next/link";


const Navbar = () => {
  return <div>
    <Link legacyBehavior href="/"><a>Home</a></Link>
    <Link legacyBehavior href="/about-us"><a>About-Us</a></Link>
    <Link legacyBehavior href="/events"><a>Events</a></Link>

  </div>;
};

export default Navbar;
