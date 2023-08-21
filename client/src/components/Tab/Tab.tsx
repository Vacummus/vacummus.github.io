import './Tab.css';

type TTabProps = {
  isSelected: boolean,
  title: string,
  onClick: () => void;
}

export function Tab(props: TTabProps) {
  const className = 'tab ' + (props.isSelected ? 'selected': '');

  return (
    <button className={className} onClick={props.onClick}><div className="tab_inner">{props.title}</div></button>
  );
}
