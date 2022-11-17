# Обучась React js

Изучаю по бесплатному курсу it-kamasutra  
https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8  
  
  
## 45  
Пока не работают диспатчи но это норм потому что камасутра сказал что исправим это на след. уроках
  

## 46-47  
Теперь диспатчи работают. Нужно было вернуть новый экземпляр обьекта при изменениях, вместо редактирования старого. Копирование state без ссылки реализовал с помощью библиотеки lodash. Меняем данные и возвращяем измененный stateCopy.
  

## 48  
Урок помог мне копировать экземпляр без ссылки с более сложными обьектами. Удалил lodash который облегчал жизнь, но по идее делал сайт более рерурсо затратным, т.к. создавался stateCopy, который получал все ссылки новые, хотя должен был получить новую ссылку для изменяемого поля  
  
  
## 49  
Урок практика. Сперва глянул видео не углубляясь, потом попробовал сам реализовать. Получилось. Немного отличается реализация кнопки отписаться и подписаться. В уроке было показано как работать с одним элементом из массива. Раньше я это делал с помощью FindIndex, потом индекс использовал для работы с элементом массива, а сейчас использую map и внутри проверяю тот ли элемент, если да, то возвращаю измененную версию. Этот же метод я теперь использую в редусоре сообщений.

## 50-52
Познакомили с API. В 51 Сделали первый запрос на получение пользователей. В 52 поясняли за чистую функцию и за Side Effects и сделал кнопку.

## 53
Использовал классовый компонент вместо функции. Пока не понял зачем это нужно. Все больше и больше вижу как люди пишут про хуки в комментариях. Очень хочется познакомится с этой темой но надо придерживатся курса. Вроде в будущем это будет изучено.

## 54-55
54 просто поменяли конструктор на метод. В 55 уроке делали страницу на которую загружется определенное кол-во пользователей. Сами пользователи зависят от цифры вкладки. Глянул урок и старался написать без подсматриваний. Получилось слегка по другому, но мне кажется у меня круче реализация. А вид это уже дело времени.

## 56-57 
Классовую компоненту превратили в контейнерную. Т.к. две контейнерные было бы плохо их объеденили. Теперь в одном файле живет классовая компоннта и connect. Ещё добавили гифку при загрузке. Сделал быстро чтобы не задерживаться.

## 58 
Понравилось. Упростили mapDispatchToProps оставив только Action Creator

## 59-60
Очень крутые уроки, только видно что устарело. Нужно было сделать так, чтобы можно было запросом в api получить профиль по id. id брался из uri, но на первом видосе мы так не умели, поэтому делали с пользователем с id 2. Во втором уроке сделали по id из uri, однако то, что на видосе не работало, поэтому загуглил, было что-то про хуки, попробовал использовать - не особо получилось. Нужно было реализовать с помощью функционального компонента, а по уроку мы делали компонент классовым. В комментариях увидел пример как человек сделал и это походу было тоже самое что я видел в гугле, но только немного обернуто в функцию. Такой способ я видел в гугле но не понял как реализовать. Тут по комментарию смог. Ещё сделал чтобы статус выводился и если изображение отсутсвует, то выводится дефолтное изображение.

## 61 
Делаем запрос на авторизацию после чего в Header можно увидеть логин. Попробовал сам сделать чтобы загружался профиль по умолчанию если не введен id в uri. Работает но если рефрешнуть\зайти на url профиля напрямую то не загрузиться т.к. сперва подгружается страница и делается запрос на получение профиля хотя мы ещё не авторизовались и не получили id. Решил что займусь вопросом позже, пока пойду дальше.