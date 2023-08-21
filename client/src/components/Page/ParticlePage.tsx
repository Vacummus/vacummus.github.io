import githubLogo from './../../assets/github-mark-white.svg';
import particle1 from './../../assets/particle-1.gif';

export function ParticlePage() {
  return (
    <>
      <h2 className="page_title">Particle of Life</h2> 

      <a className="gitHubLink link" target="_blank" rel="noreferrer" href="https://github.com/VakeyLabs/ParticleLife">
        <img src={githubLogo} alt="Github Icon Logo" />
        <span>GitHub Repository</span>
      </a>

      <p className="grayText">
        <strong>Technology:</strong> Unity, C#, DOTS
      </p>
      
      <p>
        A particle simulation that creates life-like structures based 
        on <a className="link" target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Jeffrey_Ventrella">
          Jeffrey Ventrella's
        </a> idea of "Clusters".
        This is where small simple parts are combined to create a larger more complex structure using simple rules of where particles are either attracted or repelled from each other.
      </p>

      <p>
        For example, the simulation below has the following rules:
      </p>

      <ul>
        <li>Red Particles are attracted to Red Particles by 1x</li>
        <li>Red Particles are repelled by Green Particles by 2x</li>
        <li>Green Particles are attracted to Red Particles by 1x</li>
        <li>Green Particles are attracted to Green Particles by 0.5x</li>
        <li>Finally, there is a gravitational force that pushes toward the center. The further a particle is from the center, the more force is applied.</li>
      </ul>

      <div style={{textAlign: 'center'}}>
        <img className="media" src={particle1} alt="particle1" />
      </div>

      <h2>Optimizations</h2>
      
      <p>
        Since all particles can affect each other, all particles will need to be processed to each other to determine the velocity of each particle. In Big-O terms, that is a whopping O(n²).
        The following optimizations have been applied that allow the simulation to run smoothly with up to 20,000 particles.
      </p>

      <ul>
        <li>Use of Spatial Partitioning Technique to dramatically reduce the number of operations needed to determine the velocity of each particle.</li>
        <li>Use of Data Oriented Design principles. Particle data is organized in contiguous cache-friendly data structures to allow for efficient data access and parallelization.</li>
      </ul>
    </>
  );
}
