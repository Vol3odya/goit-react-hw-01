import css from "./FriendListItem.module.css";

export default function Profile({ avatar, name, isOnline }) {
  return (
    <div>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.text}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}