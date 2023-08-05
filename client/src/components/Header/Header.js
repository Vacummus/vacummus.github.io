import './Header.css';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Tab } from './../Tab/Tab';
import { pagesSelector, selectedPageIndexState } from '../../state/pages';

export function Header() {
  const pages = useRecoilValue(pagesSelector);
  const [, setSelectedPageIndex] = useRecoilState(selectedPageIndexState);

  return (
    <header className="header">
      <h1>Vakey Rujevic Portfolio</h1>
      <div>
        <a href="vakey.rujevic@gmail.com" className="link header_link">vakey.rujevic@gmail.com</a>
        |
        <a href="http://twitter.com/vakeyrujevic" target="_blank" rel="noreferrer" className="link header_link">@vakeyrujevic</a>
      </div>
      
      <div className="header_tabs">
        { 
          pages.map((page, i) => {
            const divider = i !== (pages.length - 1) ? (<span className="header_divider">|</span>) : '';

            return (
              <div key={page.title}>
                <Tab 
                  title={page.title}
                  isSelected={page.selected} 
                  onClick={() => setSelectedPageIndex(i)}
                />
                {divider}
              </div>
            );
          })
        }
      </div>
    </header>
  );
}
