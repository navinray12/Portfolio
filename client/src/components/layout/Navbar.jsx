const Navbar = () => {
  return (
   <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 text-white">

<h1 className="text-xl font-bold">
Navin.dev
</h1>

<ul className="flex gap-8">

<li>
<a href="#home" className="hover:text-blue-400">
Home
</a>
</li>

<li>
<a href="#about" className="hover:text-blue-400">
About
</a>
</li>

<li>
<a href="#skills" className="hover:text-blue-400">
Skills
</a>
</li>

<li>
<a href="#projects" className="hover:text-blue-400">
Projects
</a>
</li>

<li>
<a href="#contact" className="hover:text-blue-400">
Contact
</a>
</li>

</ul>

</nav>
  );
};

export default Navbar;