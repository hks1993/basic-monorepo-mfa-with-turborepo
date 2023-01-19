import React from 'react';
import { Button, AppShell, PlaylistContent, MoviesContent } from 'ui';
function App() {
	return (
		<div className='App'>
			<Button />
			<AppShell
				title='Playlist'
				colorScheme='dark'
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
