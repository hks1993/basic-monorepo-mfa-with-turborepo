import React from 'react';
import { Button, AppShell, MoviesContent, PlaylistContent } from 'ui';
function App() {
	return (
		<div className='App'>
			<Button />
			<AppShell
				title='Movies'
				colorScheme='light'
				routes={[
					{ path: '/', element: MoviesContent },
					{ path: '/playlist', element: PlaylistContent },
				]}
				navLinks={[
					{ label: 'home', path: '/' },
					{ label: 'playlist', path: '/playlist' },
				]}
			/>
		</div>
	);
}

export default App;
