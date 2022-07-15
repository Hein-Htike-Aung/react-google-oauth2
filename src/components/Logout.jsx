import { GoogleLogout } from 'react-google-login';

const clientId =
	'353993886583-bc8enuum313pi4ufv7qedci89c8uk4lm.apps.googleusercontent.com';

const Logout = () => {
	const onSuccess = () => {
		console.log('Log out successful');
	};

	return (
		<div>
			<GoogleLogout
				clientId={clientId}
				buttonText='Logut'
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
};

export default Logout;
