<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="loginstyle.css">
    <link rel="shortcut icon" type="image/x-icon" href="website.ico">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
    <section class="wrapper">
      <div class="form signup">
        <header>Регистрация</header>
        <form>
          <input id="RegUsername" class="form" type="text" placeholder="Ник" name="name"/>
          <input id="RegEmail" class="form" type="email" placeholder="Почта" name="email"/>
          <input id="RegPassword" class="form" type="password" placeholder="Пароль" name="pass"/>
          <div class="checkbox">
            <input type="checkbox" id="signupCheck" />
            <label for="signupCheck">Я принимаю все условия использования</label>
          </div>
          <input id="register-button" type="button" value="Начать использовать"/>
        </form>
      </div>
      <div class="form login">
        <header>Авторизация</header>
        <form>
          <input id="SignEmail" class="form" type="email" placeholder="Почта" name="email"/>
          <input id="SignPassword" class="form" type="password" placeholder="Пароль" name="pass"/>
          <a href="#">Забыл пароль?</a>
          <input id="sign-button" type="button" value="Вход"/>
        </form>
      </div>
      <script src="auth.js"></script>
    </section>
    

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

</body>
</html>