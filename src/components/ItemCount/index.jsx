import './styles.sass';

export const ItemCount = ({ min, max, value, onAdd, onSubstract }) => {

  return (
    <div className="item-count">
      <button disabled={value <= min} className="counter-btn" onClick={onSubstract}>-</button>
      <div className="counter-cantidad">{value}</div>
      <button disabled={value >= max } className="counter-btn" onClick={onAdd}>+</button>
    </div>
  )
}