import { atom } from 'jotai';
import { ParticlePage } from '../components/Page/ParticlePage';
import { SunduraPage } from '../components/Page/SunduraPage';
import { ShaderPage } from '../components/Page/ShaderPage';

const pages = [ 
  { title: 'Particle of Life', component: ParticlePage },
  { title: 'Stylized Shader', component: ShaderPage },
  { title: 'Life of Sundura', component: SunduraPage },
];

export const selectedPageIndexState = atom(0);

export const pagesSelector = atom((get) => {
  const selectedPageIndex = get(selectedPageIndexState);

  return pages.map((p, i) => ({ ...p, selected: i === selectedPageIndex}));
});