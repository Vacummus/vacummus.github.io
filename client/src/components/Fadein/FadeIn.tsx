import './FadeIn.css';

export const FadeIn = (props: { 
  on?: boolean,
  sec: number,
  children: string | JSX.Element | JSX.Element[],
  style?: React.CSSProperties, 
}) => {
  const { on, sec, style, children } = props;

  const animation = on == undefined 
    ? { animation: `fadeIn ${sec}s` }
    : { transition: `opacity ${sec}s`, opacity: on ? '0' : '1' };

  return (
    <div style={{...style, ...animation}}>{children}</div>
  )
};