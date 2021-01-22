import { Injectable } from '@angular/core';

export interface ModuleItem {
  id: number;
  name: string;
  items: ModuleSubitem[];
}

export interface ModuleSubitem {
  id: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  modules: ModuleItem[] = [
    {
      id: 1,
      name: 'nosivost-tla',
      items: [
        { id: 1, name: '1-1', image: 'assets/img_1_2.png' },
        { id: 2, name: '1_2', image: 'assets/img_2_2.png' },
        { id: 3, name: '1-3', image: 'assets/img_3_2.png' },
      ],
    },
    {
      id: 2,
      name: 'sleganje-tla',
      items: [
        { id: 1, name: '2-1', image: 'assets/img_4_2.png' },
        { id: 2, name: '2_2', image: 'assets/img_5_2.png' },
        { id: 3, name: '2-3', image: 'assets/img_6_2.png' },
        { id: 4, name: '2-4', image: 'assets/img_7_2.png' },
      ],
    },
    {
      id: 3,
      name: 'klizna-ravan',
      items: [
        { id: 1, name: '3-1', image: 'assets/img_8_2.png' },
        { id: 2, name: '3_2', image: 'assets/img_9_2.png' },
        { id: 3, name: '3-3', image: 'assets/img_10_2.png' },
      ],
    },
    {
      id: 4,
      name: 'potporni-zid',
      items: [
        { id: 1, name: '4-1', image: 'assets/img_11_2.png' },
        { id: 2, name: '4_2', image: 'assets/img_12_2.png' },
        { id: 3, name: '4-3', image: 'assets/img_13_2.png' },
        { id: 4, name: '4-4', image: 'assets/img_14_2.png' },
      ],
    },
    {
      id: 5,
      name: 'proracun-sipa',
      items: [
        { id: 1, name: '5-1', image: 'assets/img_15_2.png' },
        { id: 2, name: '5_2', image: 'assets/img_16_2.png' },
        { id: 3, name: '5-3', image: 'assets/img_17_2.png' },
      ],
    },
    { id: 6, name: 'all', items: [] },
  ];

  constructor() {}

  getModuleNames() {
    const items: string[] = [];
    this.modules.forEach((x) => {
      items.push(x.name);
    });
    return items;
  }

  getModuleItems(id: number) {
    return this.modules[id - 1].items;
    // const m = this.modules[id - 1].items;
    // const arr: string[] = [];
    // m.forEach(mod => {
    //   arr.push(mod.name);
    // });
    // return arr;

    // const a = this.modules.filter(x => x.id === id);
    // let b: string[] = [];
    // a.forEach(x => {
    //   b = [...b, ...x.items]
    // })
    // return b;
  }
}
