import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { selectedPageSelector } from '../../state/pages';
import { Media } from '../Media/Media';
import sundura1 from './../../assets/sundura-1.mp4';
import sundura2 from './../../assets/sundura-2.mp4';
import sundura3 from './../../assets/sundura-3.mp4';
import sundura4 from './../../assets/sundura-4.mp4';
import sundura5 from './../../assets/sundura-5.mp4';

export const SunduraPage = { title: 'Life of Sundura', component: SunduraPageComponent };

export function SunduraPageComponent() {
  const [page] = useAtom(selectedPageSelector);
  const [loaded, setLoaded] = useState(false);
  const isVisible = page.title === SunduraPage.title;

  useEffect(() => {
    if (isVisible) {
      setLoaded(true);
    }
  }, [isVisible]);

  return (
    <>
      <p className="grayText">
        <strong>Technology:</strong> Unity, C#, DOTS
      </p>

      <p>A collection of prototypes for a game about playing the entire life span of an organism. The goal was to use 2D physics to simulate the life-like movement of organisms.</p>
      
      { loaded && (
        <div className="page_mediaArea">
          <Media src={sundura1}/>
          <Media src={sundura2}/>
          <Media src={sundura3}/>
          <Media src={sundura4}/>
          <Media src={sundura5}/>
        </div>
      )}
    </>
  );
}
