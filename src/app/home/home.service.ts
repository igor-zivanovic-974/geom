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
        { id: 1, name: 'konsleg', image: 'assets/1-1.jpg' },
        { id: 2, name: 'brinload', image: 'assets/1-2.jpg' },
        { id: 3, name: 'uecodeload', image: 'assets/1-3.jpg' },
      ],
    },
    {
      id: 2,
      name: 'sleganje-tla',
      items: [
        { id: 1, name: '2-1', image: 'assets/2-1.jpg' },
        { id: 2, name: '2-2', image: 'assets/2-2.jpg' },
        { id: 3, name: '2-3', image: 'assets/2-3.jpg' },
        { id: 4, name: '2-4', image: 'assets/2-4.jpg' },
      ],
    },
    {
      id: 3,
      name: 'klizna-ravan',
      items: [
        { id: 1, name: '3-1', image: 'assets/3-1.jpg' },
        { id: 2, name: '3-2', image: 'assets/3-2.jpg' },
        { id: 3, name: '3-3', image: 'assets/3-3.jpg' },
      ],
    },
    {
      id: 4,
      name: 'potporni-zid',
      items: [
        { id: 1, name: '4-1', image: 'assets/4-1.jpg' },
        { id: 2, name: '4-2', image: 'assets/4-2.jpg' },
        { id: 3, name: '4-3', image: 'assets/4-3.jpg' },
        { id: 4, name: '4-4', image: 'assets/4-4.jpg' },
      ],
    },
    {
      id: 5,
      name: 'proracun-sipa',
      items: [
        { id: 1, name: '5-1', image: 'assets/5-1.jpg' },
        { id: 2, name: '5-2', image: 'assets/5-2.jpg' },
        { id: 3, name: '5-3', image: 'assets/5-3.jpg' },
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
