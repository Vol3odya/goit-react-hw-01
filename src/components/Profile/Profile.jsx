import css from "./profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.border}>
      <div>
        <img
          className={css.img}
          src={image}
          alt={name}
        />
        <p className={css.main}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listLi}>
          <span className={css.listText}>Followers</span>
          <span className={css.listText}>{stats.followers}</span>
        </li>
        <li className={css.listLi+' '+css.listLiCenter}>
          <span className={css.listText}>Views</span>
          <span className={css.listText}>{stats.views}</span>
        </li>
        <li className={css.listLi}>
          <span className={css.listText}>Likes</span>
          <span className={css.listText}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}