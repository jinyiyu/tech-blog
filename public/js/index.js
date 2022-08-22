const signupForm = $("#signupForm");

const handleSignup = (event) => {
  event.preventDefault();

  console.log("submit signup");
};

signupForm.submit(handleSignup);

const firstname = $("#firstname").val();
const lastname = $("#lastname").val();
const emailAddress = $("#emailAddress").val();
const username = $("#username").val();
const password = $("#password").val();
const confirmPassword = $("#confirmPassword").val();
