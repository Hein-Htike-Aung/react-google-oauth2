import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';

const clientId =
	'353993886583-bc8enuum313pi4ufv7qedci89c8uk4lm.apps.googleusercontent.com';

const Login = () => {
	const onSuccess = (res) => {
		console.log('LOGIN SUCCESS ', res.profileObj);

		const accessToken = gapi.auth.getToken().access_token;

		console.log(accessToken);
	};

	const onFailure = (res) => {
		console.log('LOGIN FAILED ', res);
	};

	return (
		<div id='signInButton'>
			<GoogleLogin
				clientId={clientId}
				buttonText='Sign in with google'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</div>
	);
};

export default Login;
