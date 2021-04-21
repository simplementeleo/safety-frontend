export default function ({ store, redirect }) {
  let token = localStorage.getItem('secretToken');
  // If the user is not authenticated
  if (token == undefined) {
    return redirect('/login');
  }
}