import css from "./transactionHistory.module.css";

export default function Profile({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.title}>
        <tr className={css.tab}>
          <th className={css.titleCol}>Type</th>
          <th className={css.titleCol}>Amount</th>
          <th className={css.titleCol}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((value, index) => {
          return (
            <tr key={value.id} className={css.rad + " " + (index % 2 ? css.grey : css.white)}>
              <td className={css.com}>{value.type}</td>
              <td className={css.com}>{value.amount}</td>
              <td className={css.com}>{value.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}