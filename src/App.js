import {Routes, Route, Link, useParams} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
//import "./pages.css"

function MyApp()
{
	return (
		<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/stuff/:data" element={<Stuff />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</div>
	)
}

function Nav()
{
	return (
		<ul id='main-nav'>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/stuff/123">Stuff</Link></li>
		<li><Link to="/contact">Contact</Link></li>
		</ul>
	);
}

function Header()
{
	return (
	<div className='header'>
	<Nav />
	</div>
	)
}

function Home()
{
	return (
		<div className='page'>
		<Header />
		<h1>Home</h1>
		Here is some info about the website
		</div>
	)
}

function NotFound()
{
	return (
		<div className='page'>
		<Header />
		<h1>Oh No!</h1>
		You have stumbled on a secret page!  Please choose again.
		</div>
	)
}

function Stuff()
{
	var {data} = useParams();
	
	return (
		
		<div class='page'>
		<Header />
		<h1>Stuff</h1>
		This is some stuff about {data}
		</div>
	)
}

function About()
{
	return (
		
		<div class='page'>
		<Header />
		<h1>About</h1>
		Here is some info about the company
		</div>
	)
}


function Contact()
{
	return (
		
		<div class='page'>
		<Header/>
		<h1>Contact</h1>
		Here is the contact info for the company
		</div>
	)
}

function App() {
    
  return (
    <Router>
      <MyApp />
    </Router>
  );
}

export default App;

