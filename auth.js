const wrapper = document.querySelector(".wrapper"),
              signupHeader = document.querySelector(".signup header"),
              loginHeader = document.querySelector(".login header");
        
        loginHeader.addEventListener("click", () => {
          wrapper.classList.add("active");
        });
        
        signupHeader.addEventListener("click", () => {
          wrapper.classList.remove("active");
        });

document.getElementById("sign-button").addEventListener("click", function () {
    const email = document.getElementById("SignEmail").value;
    const password = document.getElementById("SignPassword").value;
    // const // signText = document.getElementById("// signText");
  
    var EnUp = /[A-Z]/.test(password);
      var nums = /\d/.test(password);
      var RuUp = /[А-Я]/.test(password);
  
      if (email.trim() === "" && password.trim() === "") {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Напишите почту и пароль.";
      } else if (email.trim() === "" || !email.includes("@") || email.length < 6) {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Напишите почту.";
      } else if (password.trim() === "") {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Напишите пароль.";
      } else if (password.length < 7 || password.length > 20) {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Пароль из <7 или >20 символов";
      } else if (!(EnUp || RuUp)) {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Пароль без заглавных букв";
      } else if (!nums) {
      // signText.setAttribute("class", "show");
      // signText.textContent = "Напишите пароль с цифрами";
      } else {
          $.ajax({
        type: 'POST',
        url: 'auth.php',
        data: {email: email, pass: password},
        dataType: 'json',
        success: function(response){
          var email = response.email;
          if (email == "1"){
            location.replace("index.html");
          }
          else if (email == "0"){
            // signText.setAttribute("class", "show");
            // signText.textContent = "Пользователя нет";
          }
          else{
            // signText.setAttribute("class", "show");
            // signText.textContent = "Неправильный пароль";
          }
        }
      });
    }
    setTimeout(() => {
      // signText.setAttribute("class", "hide");
    }, 1000);
  });
  
  document.getElementById("register-button").addEventListener("click", function () {
    const username = document.getElementById("RegUsername").value;
    const email = document.getElementById("RegEmail").value;
    const password = document.getElementById("RegPassword").value;
    // const // regText = document.getElementById("// regText");
    
    var EnUp = /[A-Z]/.test(password);
      var nums = /\d/.test(password);
      var RuUp = /[А-Я]/.test(password);
  
      if (username.trim() === "" && (email.trim() === "" || !email.includes("@")) && password.trim() === "") {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Нет логина, почты и пароля.";
      } else if (username.trim() === "" && (email.trim() === "" || !email.includes("@") || email.length < 6)){
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите логин и пароль.";
    } else if ((email.trim()  === "" || !email.includes("@") || email.length < 6) && password.trim() === ""){
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите почту и пароль.";
    } else if (username.trim() === "" && password.trim() === ""){
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите логин и пароль.";
    } else if(email.trim() === "" || !email.includes("@") || email.length < 6){
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите почту.";
    } else if (username.trim() === "") {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите логин.";
      } else if (password.trim() === "") {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Напишите пароль.";
      } else if (password.length < 7 || password.length > 20) {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Пароль из <7 или >20 символов";
      } else if (!(EnUp || RuUp)) {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Пароль без заглавных букв";
      } else if (!nums) {
      // regText.setAttribute("class", "show");
      // regText.textContent = "Пароль без цифр";
      } else {
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const userExists = registeredUsers.some(user => user.email === email);
        $.ajax({
          type: 'POST',
          url: 'auth.php',
          data: {email: email, pass: password},
          dataType: 'json',
          success: function(response){
            if (response.email == "0"){
              $.ajax({
                type: 'POST',
                url: 'reg.php',
                data: {email: email, pass: password, name: username}
              });
      
              registeredUsers.push({ username, email, password });
              localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
              localStorage.setItem("loggedIn", "true");
      
              // regText.setAttribute("class", "show-success");
              // regText.textContent = "Вы зарегистрированы";

              location.replace("index.html");
            }
            else if (response.email == email){
              // regText.setAttribute("class", "show");
              // regText.textContent = "Пользователь уже есть";
            }
          }
        });
      }
    setTimeout(() => {
      // regText.setAttribute("class", "hide");
    }, 1000);
  });