const users = [];

users.push({
  email: "test@example.com",
  password: "password123",
  uid: "0",
  status: "",
  createdAt: new Date(),
});

document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const messageElement = document.getElementById("signup-message");
    const status = "active";
    const date = new Date();
    let i = 1;
    let uid = i;
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      messageElement.style.color = "red";
      messageElement.textContent = "email already exists";
    }
    if(password.length < 6 ){
      messageElement.style.color = "red";
      messageElement.textContent = "password must be more than 6";
    }
    else {
      users.push({ email, password, uid, status, date });
      uid = uid +1;
      document.getElementById("signup-container").style.display = "none";
      document.getElementById("login-container").style.display = "block";
      document.getElementById("signup-form").reset();
console.log("users", users)
    }
  });
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const messageElement = document.getElementById("login-message");

    const userFound = users.some(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      document.getElementById("todosPage").style.display = "block";
      document.getElementById("page").style.display = "none";
      event.preventDefault();
      const todos =[];
      function createTodo(){
        event.preventDefault();
        const title= document.getElementById("title").value
        const discription = document.getElementById("discription").value
        const date = document.getElementById("date").value
        const newtodo= {
          title,
          description,
          date,
          status: "inCompleted",
          createdAt,
          id: Math.random().toString(36).substring(2, length+2),
          user_id: uid,
        }
        todos.push(newtodo)
        console.log("todos", todos)
      }

    } else {
      messageElement.style.color = "red";
      messageElement.textContent = "User not found or incorrect password";
    }
  });

function showLogin() {
  document.getElementById("signup-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

function showSignUp() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("signup-container").style.display = "block";
}