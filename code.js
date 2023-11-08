const firebaseConfig = {
    apiKey: "AIzaSyDEc_Q5lqnTmRANhg5PQUVq9HiuO_MLl04",
    authDomain: "mmmarch-9270e.firebaseapp.com",
    databaseURL: "https://mmmarch-9270e-default-rtdb.firebaseio.com",
    projectId: "mmmarch-9270e",
    storageBucket: "mmmarch-9270e.appspot.com",
    messagingSenderId: "736234259938",
    appId: "1:736234259938:web:aee899ac9bbe1ee67225bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const enrollmentForm = document.getElementById('enrollment-form');

enrollmentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get user input
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const religion = document.getElementById('religion').value;
    const password = document.getElementById('password').value;

    // Age and gender validation
    if (age <= 10) {
        alert('Age must be above 10.');
        return;
    }

    if (gender !== 'male') {
        alert('Only Male gender is allowed.');
        return;
    }

    // Reference to the Firebase database
    const database = firebase.database().ref('enrollments');

    // Create a new enrollment object
    const newEnrollment = {
        name: name,
        age: age,
        email: email,
        gender: gender,
        religion: religion
    };

    // Push the new enrollment data to the database
    database.push(newEnrollment, function (error) {
        if (error) {
            console.error("Data could not be saved.", error);
        } else {
            console.log("Data saved successfully.");
            enrollmentForm.reset(); // Clear the form after submission

            // Redirect to the streak.html page
            window.location.href = 'streak.html';
        }
    });
});