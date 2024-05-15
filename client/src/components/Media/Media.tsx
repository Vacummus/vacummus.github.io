import './Media.css';
import { useState } from 'react';
import { FadeIn } from '../Fadein/FadeIn';

export const Media = (props: { src: string, alt?: string }) => {
  const [status, setStatus] = useState('loading');

  const ext = props.src.split('.').pop();
  const isImage = ext === 'png' || ext === 'gif' || ext === 'jpg' || ext === 'jpeg';

  return (
    <>
      <div className="media" style={{ position: 'relative' }}>
        <FadeIn
          sec={2}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px dashed #30363d',
            display: status === 'loading' ? 'flex' : 'none',
            borderRadius: 14,
            borderTop: 0,
            borderBottom: 0,
          }}
        >loading...</FadeIn>

        <FadeIn on={status === 'loading'} sec={1}>
          { isImage ? ( 
            <img 
              style={{ width: '100%'}}
              src={props.src}
              alt={props.alt || ''}
              onLoad={() => setStatus('loaded')}
              onError={() => setStatus('loaded')}
            />) : (
            <video 
              className="media" 
              autoPlay loop muted playsInline
              style={{ width: '100%' }}
              onLoadedData={() => setStatus('loaded')}
              onError={() => setStatus('loaded')}
            >
              <source src={props.src} type={`video/${ext}`}></source>
            </video>)
          }
        </FadeIn>
      </div>
    </>
  )

  // return (
  //   <>
  //     <div className="media" style={{ position: 'relative' }}>
  //       <Fade timeout={3000} in={status === 'loading'} unmountOnExit>
  //         <div style={{ 
  //           position: 'absolute',
  //           height: '100%',
  //           width: '100%',
  //           display: 'flex',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           border: '1px dashed #30363d',
  //         }}>loading...</div>
  //       </Fade>

  //       <Fade in={status === 'loaded'} timeout={600}>
  //         { isImage ? (
  //           <img 
  //             style={{ width: '100%' }}
  //             loading="lazy"
  //             src={props.src}
  //             alt={props.alt || ''}
  //             onLoad={() => setStatus('loaded')}
  //             onError={() => setStatus('loaded')}
  //           />) : (
  //           <video 
  //             className="media" 
  //             autoPlay loop muted playsInline
  //             style={{ width: '100%' }}
  //             onLoadedData={() => setStatus('loaded')}
  //             onError={() => setStatus('loaded')}
  //           >
  //             <source src={props.src} type={`video/${ext}`}></source>
  //           </video>)
  //         }
  //       </Fade> 
  //     </div>
  //   </>
  // )
}
