import { useAtom } from 'jotai';
import { selectedPageSelector } from '../../state/pages';
import { Media } from '../Media/Media';
import shader1 from './../../assets/shader-1.mp4';
import shader2 from './../../assets/shader-2.mp4';
import shader3 from './../../assets/shader-3.mp4';
import shader4 from './../../assets/shader-4.gif';
import { useEffect, useState } from 'react';

export const ShaderPage = { title: 'Stylized Shader', component: ShaderPageComponent };

export function ShaderPageComponent() {
  const [page] = useAtom(selectedPageSelector);
  const [loaded, setLoaded] = useState(false);
  const isVisible = page.title === ShaderPage.title;

  useEffect(() => {
    if (isVisible) {
      setLoaded(true);
    }
  }, [isVisible]);
  
  return (
    <>
      <p className="grayText">
        <strong>Technology:</strong> Unity, C#, HLSL
      </p>

      <p>
        The goal of this project was to render complex scenes and models to look 2D hand drawn. This includes stylizing the lighting (creating flat shadows) and drawing outlines on the edges of 3D models.
      </p>

      <p>
        The <a href="https://en.wikipedia.org/wiki/Roberts_cross" className="link">Robert Cross</a> method
        is used for edge detection, where I am sampling surrounding pixels from the scene's depth and normal buffers to determine if an outline should be rendered.
      </p>

      { loaded && (
        <div className="page_mediaArea">
          <Media src={shader4} alt="shader4" />
          <Media src={shader1}/>
          <Media src={shader3}/>
          <Media src={shader2}/>
        </div>
      )}
    </>
  );
}