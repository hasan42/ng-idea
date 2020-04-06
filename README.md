# NgIdea

[DEMO](http://ng-idea.irustam.ru/)

Приложение на Angular.

Стили в SCSS.

Backend: PHP и БД MySQL.

### Описание
На главной странице отображается форма входа.

Тестовые пользователи.
`{
  name : qwerty,
  password : qwerty,
  admin : 1
},
{
  name : qwe,
  password : qwe,
  admin : 0
}`

Залогиненый пользователей:
- видит список своих постов;
- может создать новый;
- удалить существующий;
- редактировать - появляется форма с возможностью сохранить или отменить (убирает форму и не сохраняет изменения).

Пользовователь `admin` дополнительно может:
- добавлять новых пользователей "не админов";
- удалять остальных "не админов".