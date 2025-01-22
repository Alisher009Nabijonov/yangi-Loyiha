import Kreslo1 from './assets/4.png';
import Kreslo2 from './assets/5.png';
import Kreslo3 from './assets/6.png';
import Sumka1 from './assets/7.png';
import Soat1 from './assets/8.png';
import Soat2 from './assets/9.png';
import Quloqchin1 from './assets/10.png';
import Kreslo4 from './assets/11.png';
import Soat3 from './assets/12.png';
import Kamera1 from './assets/13.png';
import Quloqchin2 from './assets/14.png';

import Stol1 from './assets/stol1.jpg'
import Stol2 from './assets/stol2.jpg'
import Stol3 from './assets/stol3.jpg'

import stol4 from './assets/kreslo1.jpg'
import stol5 from './assets/kreslo2.jpg'
import stol6 from './assets/kreslo3.jpg'

import sumka7 from './assets/sumka1.jpg'
import sumka8 from './assets/sumka2.jpg'
import sumka9 from './assets/sumka3.jpg'

import soat10 from './assets/soat1.jpg'
import soat11 from './assets/soat2.jpg'
import soat12 from './assets/soat3.jpg'

import soat13 from './assets/soat4.jpg'
import soat14 from './assets/soat5.jpg'
import soat15 from './assets/soat6.jpg'

import quloqchin16 from './assets/quloqchin1.jpg'
import quloqchin17 from './assets/quloqchin2.jpg'
import quloqchin18 from './assets/quloqchin3.jpg'

import kamera19 from './assets/kamera1.jpg'
import kamera20 from './assets/kamera2.jpg'
import kamera21 from './assets/kamera3.jpg'
import en from './Languig/homeen'
import uz from './Languig/homeuz'
import ru from './Languig/homeru'

// Here, you can choose which language to use (en, uz, or ru)
const language = en; // Change this to `uz` or `ru` based on the selected language


export const cards = [
  { id: 1, img: Kreslo1, title: language.shop1, cost: 20.00, cost1: 42.00, Imgs:[ Kreslo1, Stol1, Stol2, Stol3] },
  { id: 2, img: Kreslo2, title: language.shop2, cost: 26.00, cost1: 42.00, Imgs:[ Kreslo2, stol6, stol5, stol4 ] },
  { id: 3, img: Kreslo3, title: language.shop3, cost: 16.00, cost1: 42.00, Imgs:[ Kreslo3, Stol3, Stol2,Stol1 ] },
  { id: 4, img: Sumka1, title: language.shop4, cost: 22.00, cost1: 42.00, Imgs:[ Sumka1, sumka7, sumka8, sumka9 ] },
  { id: 5, img: Soat1, title: language.shop5, cost: 26.00, cost1: 42.00, Imgs:[ Soat1, soat10, soat11, soat12 ] },
  { id: 6, img: Soat2, title: language.shop6, cost: 24.00, cost1: 42.00, Imgs:[ Soat2, soat13, soat14, soat15 ] },
  { id: 7, img: Quloqchin1, title: language.shop7, cost: 36.00, cost1: 42.00, Imgs:[ Quloqchin1, quloqchin16, quloqchin17, quloqchin18 ] },
  { id: 8, img: Kreslo4, title: language.shop8, cost: 46.00, cost1: 42.00, Imgs:[ Kreslo4, stol6, stol5, stol4 ] },
  { id: 9, img: Soat3, title: language.shop9, cost: 30.00, cost1: 42.00, Imgs:[ Soat3, soat10, soat11, soat12 ] },
  { id: 10, img: Kamera1, title: language.shop10, cost: 34.00, cost1: 42.00, Imgs:[ Kamera1, kamera19, kamera20, kamera21 ] },
  { id: 11, img: Quloqchin2, title: language.shop11, cost: 56.00, cost1: 42.00, Imgs:[ Quloqchin2, quloqchin17, quloqchin16, quloqchin18 ] },
  { id: 12, img: Sumka1, title: language.shop12, cost: 36.00, cost1: 42.00, Imgs:[ Sumka1, sumka8, sumka7, sumka9 ] },
];