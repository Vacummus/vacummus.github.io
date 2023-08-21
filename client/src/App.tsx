import './App.css';
import './components/Page/Page.css';
import { Header} from './components/Header/Header';
import { useAtom } from 'jotai';
import { pagesSelector } from './state/pages';

function App() {
  const [pages] = useAtom(pagesSelector);

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
