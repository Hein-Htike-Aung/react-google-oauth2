import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

const clienId =
	'353993886583-bc8enuum313pi4ufv7qedci89c8uk4lm.apps.googleusercontent.com';

const App = () => {
	useEffect(() => {
		const start = () => {
			gapi.client.init({
				clienId,
				scope: '',
			});
		};

		gapi.load('client:auth2', start);
	}, []);

	return (
		<div>
			<Login />
			<Logout />
		</div>
	);
};

export default App;
