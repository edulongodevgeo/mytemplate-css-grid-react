import React from 'react';
import './App.css';

import layoutContainer from './components/LayoutContainer';

// -- DESENHO DO GRID --
//logo header 
//nav content 
//footer

function App() {
    return (
<div className='container'>
<div class="container">
		<nav id="nav">nav</nav>
		<main id="main">main</main>
		<div id="sidebar">sidebar
		<layoutContainer />
		</div>
		<div id="content-1">content-1</div>
		<div id="content-2">content-2</div>
		<div id="footer">footer</div>
	</div>
</div>
    );
}

export default App;