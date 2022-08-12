import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';
import Content_01 from './components/Content_01';
import Content_02 from './components/Content_02';

// -- DESENHO DO GRID --
//logo header 
//nav content 
//footer

function App() {
    return (
<div className='container'>
<div class="container">
		<nav id="nav">
		<>
			<Navbar />
		</>
		</nav>
		<main id="main">
		<>
			<Main />
		</>
		</main>
		<div id="sidebar">
		<>
			<Sidebar />
		</>	
		</div>
		<div id="content-1">
		<>
			<Content_01 />
		</>
		</div>
		<div id="content-2">
		<>
			<Content_02 />
		</>
		</div>
		<div id="footer">
		<>
			<Footer />
		</>
		</div>
	</div>
</div>
    );
}

export default App;