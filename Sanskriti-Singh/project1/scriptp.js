const signupForm = document.getElementById('signupForm');
// Finds the signup form from HTML and stores it in a variable

signupForm.addEventListener('submit', (e) => {
    // Listens for the "submit" event when the signup button is clicked

    e.preventDefault();
    console.log("Hello")
    // Prevents the page from refreshing after form submission

    const user = document.getElementById('regUsername').value;
    // Gets the username entered by the user

    const pass = document.getElementById('regPassword').value;
    // Gets the password entered by the user
    
    const repass=document.getElementById('cpass').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
   
   
       // Retrieve existing users from LocalStorage
    if (users.find(u => u.username === user)) {
        alert("Username taken!");
        return;
    }
    if(repass!==pass){
        alert("password mismatch!");
        return;
    }
    else if(repass===pass){
    users.push({ username: user, password: pass});
    // Add new user object to array

    localStorage.setItem('users', JSON.stringify(users));
    // Save updated users array into LocalStorage

    alert("Signup Successful! Please Login.");
    toggleForm();
    // Switch from signup form to login form
}});


function toggleForm() {
    // Function to toggle between signup and login forms
    document.getElementById('signupForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.toggle('hidden');
}