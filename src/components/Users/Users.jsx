import React from "react";
import styles from './users.module.css';

const  Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
            {id: 1,photoUrl: 'https://pbs.twimg.com/media/DMGGo4wVAAEIray.jpg',followed: false, fullName: 'Dmitriy',  status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus' }},
            {id: 2,photoUrl: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg',followed: true, fullName: 'Bob' ,status: 'I am a boss too', location: {city: 'New York', country: 'USA' }},
            {id: 3, photoUrl: 'https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/422/kak_sdelat_artavatarku_v_instagram_3.jpg',followed: false, fullName: 'Vlada' ,status: 'I am a boss too', location: {city: 'Kyiv', country: 'Ukraine' }}

        ]
        )
    }

return (
    <div className={styles.user}>
       { props.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoUrl} className={styles.userPhoto}/>
    </div>
    <div>
            {u.followed ?
                <button onClick={() => props.unfollow(u.id)} >Unfollow</button> :
                <button onClick={() => props.follow(u.id)}>Follow</button>}
         </div>
</span>
<span>
    <span>
        <div>{u.fullName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{u.location.country}</div>
        <div>{u.location.city}</div>
    </span>
</span>

    </div>  )}
    </div>

)
}

export default Users;

