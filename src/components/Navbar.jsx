const Navbar = () => {
    return (
      <nav className="bg-blue-500 p-4 text-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">John Driscoll</a>
          <div className="space-x-4">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About Me</a>
            <a href="#skills" className="hover:text-gray-300">Skills</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
    export default Navbar;
