export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 text-black text-lg font-medium ">
      <div className="text-2xl font-bold mt-5 ml-5">
        Sport<span className="text-orange-500">Bit</span>
      </div>
      <div className="flex space-x-10 mt-5">
        <a href="#" className="border-b-2 border-orange-400 pb-1">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}
