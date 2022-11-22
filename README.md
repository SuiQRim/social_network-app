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

## 62
Пишем запросы на подписку\отписку на юзера и исправляем запрос на получение юзера, добавляя туда настройки cookie для того чтобы отправить аккаунт и получить данные о подписке. При запросах на отписку\подписку нужно отправить api-key, который берется из сайта камасутры. Там где его надо использовать я его убрал.

## 63 
Использовали отдельный js файл для запросов axios, чтобы компоненты остовались "тупыми" и была соблюдена хоть какая-то инкапсуляция.

## 64
В уроке нужно было сделать так, чтобы кнопка блокировалась во время запроса. Так надо, чтобы нельзя было отправить одновременно куча запросов, пока запрос отправляется. Я сразу как понял идею, попробовал сам все написать. Посмотрел в видосе как заблокировать кнопку, а остальное у меня было так же. Димыч сказал, что попробуем для каждой кнопки сделать свое блокирование. Я снова попробовал сам и получилось примерно так же, просто в редусоре я не додумался сделать тенарный оператор и использовал другой метод для извлечения значения. И в компоненте для блокирования кнопки я тоже использовал другой метод. Проверял флаг с помощью indexOf и -1 (который возникает когда не найден элемент с таким значением). А Димыч использовал some и переданную функцию как аргумент. Потом все сдела как у димыча потому что понравилось.

## 65-67
thunk очень крутая вещь. Сначала думал будет очень сложно, потом услышал middleWare, и подумал мне конец, потому что не понимал в asp net. А потом дошли до урока практики (66). Там все стало понятно. Тема интуитивна. React мне нравится именно своей интуитивностью, что все архетектурные решения можно объяснить. Переделывал достаточно долго, но трудностей не было. Димыч объяснил очень круто.

## 68
Сделали редирект с переходом на страницу login (пока просто меняется адресс)

## 69 
Используем хук! Тема интересная. Я хотел сделать через функциональный hoc. 30 минут не мог реализовать.. Потом листая проект я увидел один компонент и у меня щелкнуло. Я понял, что у меня уже используется один hoc, который я подсмотрел в комментариях в видео, где нужно было из URI взять параметры. Но этот hoc был прямо внутри файла с другой компонентой, поэтому я переделал в свой файл этот hoc и импортировал. Теперь у меня используется два хука и я более мене разобрался в теме.

## 70-72
compose очень удобно и компактно а local state супер полезно

## 73
делаем put запрос для редактирования status. Local state используем для того, чтобы пользователь мог сперва отредактировать текст не меняя главный state, а потом отправил запрос для редактирования.

## 74
ComponentDidUpdate - суть понял, но есть сложности. Пытался запихнуть в проект чтобы можно было переклчится из чужого профиля в свой (нажатием в левом меню навигации находясь в чужом профиле), но никак не получалось. Разные ошибки были и в итоге не смог подобратся близко к решению. Потратил достаточно много времени

## 75-79
react-redux, а в моем случае Formik, т.к первая устерала. Formik оказался достаточно интуитивным, поэтому быстро освоил. В целом я в каждом видосе почти обгонял Димыча, в том плане, что полностю или частично выполнял то, что мы делали на уроках.

## 80
