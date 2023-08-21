import './App.css';
import './components/Page/Page.css';
import { Header} from './components/Header/Header';
import { useRecoilValue } from 'recoil';
import { pagesSelector } from './state/pages';

function App() {
  const pages = useRecoilValue(pagesSelector);

  return (
    <div className="app">
      <Header />
        
      <article className="appBody" >
        { 
          pages.map((page) => (
            <div key={page.title} className="page" style={{display: page.selected ? 'block' : 'none'}}>
              {page.component()}
            </div>
          ))
        }
      </article>
    </div>
  );
}

export default App;
