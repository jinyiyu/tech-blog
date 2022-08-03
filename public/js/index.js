// const signupForm = $("#signupForm");
const signupForm = document.getElementById("signupForm");

const handleSignup = (event) => {
  event.preventDefault();

  console.log("submit signup");
};

signupForm.submit(handleSignup);
