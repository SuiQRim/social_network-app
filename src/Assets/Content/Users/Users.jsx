import User from './User/User';
import style from './Users.module.css'

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                name: "Дуэйн",
                icon: "https://cdnn1.img.armeniasputnik.am/img/1506/51/15065139_150:0:1044:984_1920x0_80_0_0_e01039280098cd91b89d2b71d41999e6.jpg",
                status: "Крутой",
                isFriend: false,
            },
            {
                id: 1,
                name: "Олег",
                icon: "https://cdn.forbes.ru/files/998x924/profile/47-oleg-tinkov-182-05_2019.jpg__1555317902__25424.webp",
                status: "Лучший",
                isFriend: true,
            },
            {
                id: 2,
                name: "Илья Мазелов",
                icon: "https://i.pinimg.com/736x/e4/bb/13/e4bb1356e508a914dc77df369fadb1bd.jpg",
                status: "Смешнейший",
                isFriend: false,
            },
            {
                id: 3,
                name: "Джагернаут",
                icon: "https://dota2.ru/img/heroes/juggernaut/portrait.jpg",
                status: "Моя вторая личность",
                isFriend: true,
            }]
        );
    }

    let users = props.users.map(u => <User user={u} addFriend={props.addFriend} deleteFriend={props.deleteFriend} />);

    return (
        <div>
            {users}
        </div>
    );
}

export default Users;
