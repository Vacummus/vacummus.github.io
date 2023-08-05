import './Tab.css';

export function Tab(props) {
  const className = 'tab ' + (props.isSelected ? 'selected': '');

  return (
    <button className={className} onClick={props.onClick}><div className="tab_inner">{props.title}</div></button>
  );
}
