import { atom, selector } from 'recoil';
import { ParticlePage } from '../components/Page/ParticlePage';
import { SunduraPage } from '../components/Page/SunduraPage';
import { ShaderPage } from '../components/Page/ShaderPage';

const pages = [ 
  { title: 'Particle of Life', component: ParticlePage },
  { title: 'Stylized Shader', component: ShaderPage },
  { title: 'Life of Sundura', component: SunduraPage },
];

export const selectedPageIndexState = atom({
  key: 'selectedPageIndex',
  default: 0,
});

export const pagesSelector = selector({
  key: 'pagesSelector',
  get: ({get}) => {
    const selectedPageIndex = get(selectedPageIndexState);

    return pages.map((p, i) => ({ ...p, selected: i === selectedPageIndex}));
  },
});