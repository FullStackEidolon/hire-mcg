
//import resume from '../public/Ian_McGahren_Resume.pdf'
function App() {
  return (
    <div id="wrapper">
			<div id="bg"></div>
			<div id="overlay"></div>
			<div id="main">

				{/* <!-- Header --> */}
					<header id="header">
						<h1>Ian McGahren</h1>
						<p>Software Engineer &nbsp;&bull;&nbsp; Property Manager &nbsp;&bull;&nbsp; Musician</p>
						<nav>
							<ul>
								<li><a href="https://github.com/FullStackEidolon" className="icon brands fa-github"><span className="label">Github</span></a></li>
								<li><a href="/Ian_McGahren_Resume.pdf" download="Ian_McGahren_Resume.pdf" className="icon solid fa-file-alt"><span className="label" >Dribbble</span></a></li>
								<li><a href="mailto:mcgahreni@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
							</ul>
						</nav>
					</header>

				{/* <!-- Footer --> */}
					<footer id="footer">
					</footer>

			</div>
		</div>
  );
}


export default App;


// extras

{/*  potential other links
<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> 
<span className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>.</span>
*/}