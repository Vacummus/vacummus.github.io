import sundura1 from './../../assets/sundura-1.mp4';
import sundura2 from './../../assets/sundura-2.mp4';
import sundura3 from './../../assets/sundura-3.mp4';
import sundura4 from './../../assets/sundura-4.mp4';
import sundura5 from './../../assets/sundura-5.mp4';

export function SunduraPage() {
  return (
    <>
      <h2 className="page_title">Life of Sundura</h2> 

      <p className="grayText">
        <strong>Technology:</strong> Unity, C#, DOTS
      </p>

      <p>A collection of prototypes for a game about playing the entire life span of an organism. The goal was to use 2D physics to simulate the life-like movement of organisms.</p>
      
      <div className="mediaArea">
        <video className="media" autoPlay loop muted playsInline>
          <source src={sundura1} type="video/mp4"></source>
        </video>
        <video className="media" autoPlay loop muted playsInline>
          <source src={sundura2} type="video/mp4"></source>
        </video>
        <video className="media" autoPlay loop muted playsInline>
          <source src={sundura3} type="video/mp4"></source>
        </video>
        <video className="media" autoPlay loop muted playsInline>
          <source src={sundura4} type="video/mp4"></source>
        </video>
        <video className="media" autoPlay loop muted playsInline>
          <source src={sundura5} type="video/mp4"></source>
        </video>
      </div>
    </>
  );
}
