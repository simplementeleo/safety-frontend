export default function ({ store, redirect, route }) {
	let token = localStorage.getItem('secretToken');
	// If the user is not authenticated
	if (token == undefined && route.path != "/login") {
		return redirect('/login');
	}
	// If the user is authenticated and try access to login
	if (token != undefined && route.path == "/login") {
		return redirect('/');
	}
}