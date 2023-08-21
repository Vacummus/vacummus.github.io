import shader1 from './../../assets/shader-1.mp4';
import shader2 from './../../assets/shader-2.mp4';
import shader3 from './../../assets/shader-3.mp4';
import shader4 from './../../assets/shader-4.gif';

export function ShaderPage() {
  return (
    <>
      <h2 className="page_title">Stylized Shader</h2> 

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

      <div className="mediaArea">
        <img className="media" src={shader4} alt="shader4" />

        <video className="media" autoPlay loop muted playsInline>
          <source src={shader1} type="video/mp4"></source>
        </video>

        <video className="media" autoPlay loop muted playsInline>
          <source src={shader3} type="video/mp4"></source>
        </video>

        <video className="media" autoPlay loop muted playsInline>
          <source src={shader2} type="video/mp4"></source>
        </video>
      </div>
    </>
  );
}