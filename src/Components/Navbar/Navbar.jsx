import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
    <ul className="flex gap-6 justify-end items-center">
      <li>
        <Link to="/" className="text-white text-xl font-semibold">Home</Link>
      </li>
      <li>
        <Link to="/about" className="text-white text-xl font-semibold">About</Link>
      </li>
      <li>
        <Link to="/contact" className="text-white text-xl font-semibold">Contact</Link>
      </li>
      <li>
        <Link to="/blog" className="text-white text-xl font-semibold">Blog</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar