import React from 'react';
import { Button, AppShell } from 'ui';

function App() {
	return (
		<div className='App'>
			<Button />
			<AppShell
				title='Movies'
				colorScheme='light'
				routes={[
					{ path: '/', element: () => <div> is it Home</div> },
					{ path: '/playlist', element: () => <div> is it playlist</div> },
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
