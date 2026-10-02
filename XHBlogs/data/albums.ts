// 🛡️ 本文件由 XingHuiSama 控制台自动生成，请勿手动修改
export interface Photo { url: string; caption?: string; }
export interface Album { id: string; title: string; description: string; cover: string; date: string; photos: Photo[]; }

export const albums: Album[] = [
  {
    "title": "风景",
    "description": "网上搜集的一些风景图片",
    "cover": "https://img-baofun.zhhainiao.com/fs/15cdd2b1ea6cd26f53e76bbf9ca46b3b.jpg",
    "id": "album_1790921304112",
    "photos": [
      {
        "url": "https://cdn.svipaigc.com/bizi/2024/03/231928-17111207687df9.jpg"
      },
      {
        "url": "https://cdn.svipaigc.com/bizi/2024/02/190949-151947058914b4.jpg"
      },
      {
        "url": "https://ts1.tc.mm.bing.net/th/id/R-C.08ca21be6b067c60a9a536e153c14e87?rik=ndAHuC2ayYmTKg&riu=http%3a%2f%2fimg.netbian.com%2ffile%2f20110727%2fdb5e0a081f21cf9fcb6390536f7933f7.jpg&ehk=toF1qbqiFjjgJn3c%2bMmer6qOEr6j6wv8W2Ou%2fdzdw3Q%3d&risl=&pid=ImgRaw&r=0"
      },
      {
        "url": "https://img-baofun.zhhainiao.com/fs/15cdd2b1ea6cd26f53e76bbf9ca46b3b.jpg"
      }
    ],
    "date": "2026-10-02"
  },
  {
    "id": "terra-journey",
    "title": "泰拉大陆纪行",
    "description": "关于源石、孤星与前文明的视觉记录（测试用相册）",
    "cover": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
    "date": "2026.01",
    "photos": [
      {
        "url": "https://bu.dusays.com/2026/03/31/69cb69bb530d8.jpg",
        "caption": "原来的人"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
        "caption": "星空漫游"
      }
    ]
  },
  {
    "id": "history-tour",
    "title": "唐宋历史巡游",
    "description": "寻访千年前的长安与汴梁遗迹（测试用相册）",
    "cover": "https://bu.dusays.com/2026/03/24/69c24230a4efe.jpg",
    "date": "2025.10",
    "photos": [
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230a5ff8.jpg",
        "caption": "古都夕阳"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230d661d.jpg",
        "caption": "青石板小路"
      },
      {
        "url": "https://bu.dusays.com/2026/03/24/69c24230de927.jpg",
        "caption": "飞檐翘角"
      }
    ]
  }
];