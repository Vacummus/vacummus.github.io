import githubLogo from './images/github-mark-white.svg';
import particle1 from './images/particle-1.gif';
import shader1 from './videos/shader-1.mp4';
import shader2 from './videos/shader-2.mp4';
import shader3 from './videos/shader-3.mp4';
import shader4 from './images/shader-4.gif';
import sundura1 from './videos/sundura-1.mp4';
import sundura2 from './videos/sundura-2.mp4';
import sundura3 from './videos/sundura-3.mp4';
import sundura4 from './videos/sundura-4.mp4';
import sundura5 from './videos/sundura-5.mp4';
import './App.css';
import React, { useState } from 'react';

function App() {
  const tabs = [ 
    { title: 'Particle of Life', page: ParticlePage },
    { title: 'Stylized Shader', page: ShaderPage },
    { title: 'Life of Sundura', page: SunduraPage },
    // { title: 'Art', page: ArtPage },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="app">
      <header className="header">
        <h1>Vakey Rujevic Portfolio</h1>
        <div className="linkSection">
          <a href="vakey.rujevic@gmail.com" className="link header_link">vakey.rujevic@gmail.com</a>
          |
          <a href="http://twitter.com/vakeyrujevic" className="link header_link">@vakeyrujevic</a>
        </div>
        
        <div className="header_tabs">
          { tabs.map((tab, i) => {
              const divider = i !== (tabs.length - 1) ? (<span className="tab_divider">|</span>) : '';
              return (
                <div>
                  <Tab key={tab.title} {...tab} isSelected={selectedTab.title === tab.title} onClick={() => setSelectedTab(tab)}></Tab>
                  {divider}
                </div>
              );
            })
          }
        </div>
      </header>

      <div className="appBody">
        {/* {selectedTab.page()} */}
        <div style={{display: selectedTab.title === tabs[0].title ? 'block' : 'none'}}><ParticlePage></ParticlePage></div>
        <div style={{display: selectedTab.title === tabs[1].title ? 'block' : 'none'}}><ShaderPage></ShaderPage></div>
        <div style={{display: selectedTab.title === tabs[2].title ? 'block' : 'none'}}><SunduraPage></SunduraPage></div>
        {/* <div style={{display: selectedTab.title === tabs[3].title ? 'block' : 'none'}}><ArtPage></ArtPage></div> */}
      </div>
    </div>
  );
}

function Tab(props) {
  const className = 'tab ' + (props.isSelected ? 'selected': '');

  return (
    <button className={className} onClick={props.onClick}><div className="tab_inner">{props.title}</div></button>
  );
}

function ParticlePage() {
  return (
    <div className="section">
      <div className="innerSection">
        <h2 className="bottomBorder innerSection_title">Particle of Life</h2> 

        <a className="icon link" href="https://github.com/VakeyLabs/ParticleLife">
          <img src={githubLogo} alt="Github Icon Logo" />
          <spna>GitHub Repository</spna>
        </a>

        <p className="technologyText">
          <strong>Technology:</strong> Unity, C#, DOTS
        </p>
        
        <p>
          A particle simulation that creates life-like structures.
          This is where small simple parts are combined to create a larger more complex structure using simple rules of where particles are either attracted or repelled from each other.
        </p>

        <p>
          For example, the simulation below has the following rules:
        </p>

        <ul>
          <li>Red Particles are attracted to Red Particles</li>
          <li>Red Particles are repelled by Green Particles</li>
          <li>Green Particles are attracted to Red Particles</li>
          <li>Green Particles are attracted to Green Particles</li>
          <li>Finally, there is a gravitational force that pushes toward the center. The further a particle is from the center, the more force is applied.</li>
        </ul>

        <div style={{textAlign: 'center'}}>
          <img className="videoImageFullSize" src={particle1} alt="particle1" />
        </div>

        <h2 className="bottomBorder">Optimizations</h2>
        
        <p>
          Since all particles can affect each other, all particles will need to be processed to each other to determine the velocity of each particle. In Big-O terms, that is a whopping O(n²).
          The following optimizations have been applied that allow the simulation to run up to 20,000 particles at 60 FPS.
        </p>

        <ul>
          <li>Use of Spatial Partitioning Technique to dramatically reduce the number of operations needed to determine the velocity of each particle.</li>
          <li>Use of Data Oriented Design principles. Particle data is organized in a contiguous cache-friendly data structure. This organization enables for extremely efficient, deterministic, and scalable use of L1/L2 cache lines, multi-core parallelization, and SIMD.</li>
        </ul>
      </div>
    </div>
    );
}

function ShaderPage() {
  return (
    <div className="section">
      <div className="innerSection">
        <h2 className="bottomBorder innerSection_title">Stylized Shader</h2> 

        <p className="technologyText">
          <strong>Technology:</strong> Unity, C#, HLSL
        </p>

        <p>
          The goal of this project was to render complex scenes and models to look 2D hand drawn. This includes stylizing the lighting (creating flat shadows) and drawing outlines on the edges of 3D models.
        </p>

        <p>
          The <a href="https://en.wikipedia.org/wiki/Roberts_cross" className="link">Robert Cross</a> method
          is used for edge detection, where I am sampling surrounding pixels from the scene's depth and normal buffers to determine if an outline should be rendered.
        </p>

        <div className="mediaArea">
          <img className="videoImageFullSize" src={shader4} alt="shader4" />

          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={shader1} type="video/mp4"></source>
          </video>

          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={shader3} type="video/mp4"></source>
          </video>

          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={shader2} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

function SunduraPage() {
  return (
    <div className="section">
      <div className="innerSection">
        <h2 className="bottomBorder innerSection_title">Life of Sundura</h2> 

        <p className="technologyText">
          <strong>Technology:</strong> Unity, C#, DOTS
        </p>

        <p>A collection of prototypes for a game about playing the entire life span of an organism. The goal was to use 2D physics to simulate the life-like movement of organisms.</p>
        
        <div className="mediaArea">
          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={sundura1} type="video/mp4"></source>
          </video>
          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={sundura2} type="video/mp4"></source>
          </video>
          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={sundura3} type="video/mp4"></source>
          </video>
          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={sundura4} type="video/mp4"></source>
          </video>
          <video className="videoImageFullSize" autoPlay loop muted playsInline>
            <source src={sundura5} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </div>
  );
}

// function ArtPage() {
//   return (
//     <div className="section">
//       <div className="innerSection">
//         <h2 className="bottomBorder innerSection_title">Art</h2> 
//       </div>
//     </div>
//   );
// }

export default App;
