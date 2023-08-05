import './App.css';
import './pages/Page.css';
import React, { useState } from 'react';
import { Tab } from './components/Tab/Tab';
import { ParticlePage } from './pages/ParticlePage';
import { SunduraPage } from './pages/SunduraPage';
import { ShaderPage } from './pages/ShaderPage';

function App() {
  const tabs = [ 
    { title: 'Particle of Life', page: ParticlePage },
    { title: 'Stylized Shader', page: ShaderPage },
    { title: 'Life of Sundura', page: SunduraPage },
  ];
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <h1>Vakey Rujevic Portfolio</h1>
        <div>
          <a href="vakey.rujevic@gmail.com" className="link header_link">vakey.rujevic@gmail.com</a>
          |
          <a href="http://twitter.com/vakeyrujevic" target="_blank" rel="noreferrer" className="link header_link">@vakeyrujevic</a>
        </div>
        
        <div className="header_tabs">
          { 
            tabs.map((tab, i) => {
              const divider = i !== (tabs.length - 1) ? (<span className="header_divider">|</span>) : '';

              return (
                <>
                  <Tab 
                    {...tab}
                    isSelected={selectedTabIndex === i} 
                    key={tab.title}
                    onClick={() => setSelectedTabIndex(i)}
                  />
                  {divider}
                </>
              );
            })
          }
        </div>
      </header>
        
      <div className="appBody" >
        {/* <section className="section">{tabs[selectedTabIndex].page()}</section> */}
        { 
          tabs.map((tab, i) => (
            <div className="page" style={{display: selectedTabIndex === i ? 'block' : 'none'}}>
              {tab.page()}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
