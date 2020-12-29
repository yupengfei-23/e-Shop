// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【24期免息+扫地机】OPPO Reno5 5G手机新品  星河入梦(8GB+128GB) ',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 2699.00,
        realPrice: 3099.00
      },
      {
        intro: 'JBL TUNE215BT 无线蓝牙耳机 半入耳式运动耳麦 超长续航 曜石黑',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 279.0,
        realPrice: 349.0
      },
      {
        intro: 'PRUAD 新款男士双肩包真皮商务背包大容量书包简约15.6笔记本电脑包 黑色',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 299.00,
        realPrice: 798.00
      },
      {
        intro: '艾洛维 毛绒玩具熊猫抱抱熊公仔玩具娃娃大泰迪熊1.6米1.8米布朗熊圣诞节生日礼物',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 39.00,
        realPrice: 88.00
      },
      {
        intro: '康新牧场内蒙古草原酱牛肉五香味卤牛肉150g牛肉熟食 酱牛肉150g*3 五香味',
        img: 'static/img/index/seckill/seckill-item5.jpg',
        price: 39.90,
        realPrice: 86.40
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载电脑专栏数据
export const loadComputer = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '频道广场',
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemContent: [
            'static/img/index/computer/item-computer-1-6.jpg',
            'static/img/index/computer/item-computer-1-7.jpg',
            'static/img/index/computer/item-computer-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/computer/item-computer-2-1.jpg',
          itemContent: [
            'static/img/index/computer/item-computer-2-6.jpg',
            'static/img/index/computer/item-computer-2-7.jpg',
            'static/img/index/computer/item-computer-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 为您推荐数据
export const loadEat = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '为您推荐',
      link: [ '精选', '智能先锋', '居家优品', '超市百货', '时尚达人', '进口好物' ],
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              title: '粮油调味',
              intro: '买2免1',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              title: '饮料冲调',
              intro: '第二件半价',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              title: '休闲零食',
              intro: '满99减40',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              title: '中外名酒',
              intro: '满199减100',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-1-6.jpg',
            'static/img/index/eat/item-eat-1-7.jpg',
            'static/img/index/eat/item-eat-1-8.jpg'
          ]
        },
        {
          bigImg: 'static/img/index/eat/item-eat-2-1.jpg',
          itemFour: [
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            },
            {
              title: '东家菜',
              intro: '丰富好味',
              img: 'static/img/index/eat/item-eat-2-2.jpg'
            }
          ],
          itemContent: [
            'static/img/index/eat/item-eat-2-6.jpg',
            'static/img/index/eat/item-eat-2-7.jpg',
            'static/img/index/eat/item-eat-2-8.jpg'
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/item-detail-1.jpg',
          'static/img/goodsDetail/item-detail-2.jpg',
          'static/img/goodsDetail/item-detail-3.jpg',
          'static/img/goodsDetail/item-detail-4.jpg'
        ],
        title: '耐克NIKE NBASwingmanJersey 男子球衣2020赛季洛杉矶湖人队 CW3669 CW3669-734',
        discount: ['满400减30'],
        promotion: ['跨店满减'],
        remarksNum: 600,
        setMeal: [
          [
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'S',
              price: 599
            },
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'M',
              price: 599
            },
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'L',
              price: 599
            },
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'XL',
              price: 599
            },
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'XXL',
              price: 599
            },
            {
              img: 'static/img/goodsDetail/pack/1.jpg',
              intro: 'XXXL',
              price: 599
            }
          ]
        ],
        hot: [
          {
            img: 'static/img/goodsDetail/hot/1.jpg',
            price: 999.0,
            sale: 165
          },
          {
            img: 'static/img/goodsDetail/hot/2.jpg',
            price: 849.0,
            sale: 135
          },
          {
            img: 'static/img/goodsDetail/hot/3.jpg',
            price: 1099.0,
            sale: 173
          },
          {
            img: 'static/img/goodsDetail/hot/4.jpg',
            price: 639.0,
            sale: 95
          }
        ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg',
          'static/img/goodsDetail/intro/2.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '男子球衣2020赛季洛杉矶湖人队'
          },
          {
            title: '商品编号',
            content: '10023275962535'
          },
          {
            title: '店铺',
            content: 'NBA官方旗舰店'
          },
          {
            title: '商品毛重',
            content: '1.0kg'
          },
          {
            title: '商品产地',
            content: '中国大陆'
          },
          {
            title: '机材质',
            content: '其它'
          },
          {
            title: '适用运动',
            content: '篮球'
          },
          {
            title: '功能',
            content: '速干'
          },
          {
            title: '上市时间',
            content: '2020年秋季'
          }
        ],
        remarks: {
          goodAnalyse: 100,
          remarksTags: [ '时尚大气' ],
          remarksNumDetail: [ 200, 310, 90, 0 ],
          detail: [
            {
              username: 'p****1',
              values: 5,
              content: '东西很满意哦，美观时尚大气，客服超级有耐心，服务细致贴心，大品牌就是不一样质量没得说，跟专卖店一样，特别特别喜欢，而且价格优惠东西不错，还有优惠，可以放心省钱购买',
              goods: 'XL',
              create_at: '2020-12-22 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '棒棒哒，质量很好，我很喜欢。长度合适，帅气逼人，走在马路上一定一定是最闪亮的那颗星。下次打球一定穿他！',
              goods: 'L',
              create_at: '2020-12-21 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '不错经济又实惠 质量好 特别喜欢！',
              goods: 'xxL',
              create_at: '2020-12-21 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '尺码正好，穿着舒服，透气性好，速干，正品',
              goods: 'xl',
              create_at: '2020-12-21 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '男朋友很喜欢，偷偷给他买的，身高175体重75kg穿L刚好合身。',
              goods: 'l',
              create_at: '2020-12-21 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '非常满意！',
              goods: 'L',
              create_at: '2020-12-20 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 337,
            intro: 'NBA-Nike 球队LOGO 套头卫衣 连帽衫 CHICAGO ',
            num: 4,
            sale: 90
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 109,
            intro: 'NBA 金州勇士队黄色训练T恤',
            num: 6160,
            sale: 320
          },
          {
            img: 'static/img/goodsList/item-as-img-3.jpg',
            price: 88,
            intro: 'DETING轻奢品牌卫衣女秋冬加绒加厚韩版宽松慵懒风潮拉链超火外套 中灰色【加绒】',
            num: 160,
            sale: 4324
          },
          {
            img: 'static/img/goodsList/item-as-img-4.jpg',
            price: 99,
            intro: '木林森品牌运动裤秋冬季薄款潮牌针织舒适透气棉质宽松健身卫裤子 深灰【加绒加厚款】',
            num: 2160,
            sale: 7547
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 337,
            intro: 'NBA-Nike 球队LOGO 套头卫衣 连帽衫 CHICAGO ',
            num: 4,
            sale: 90
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 109,
            intro: 'NBA 金州勇士队黄色训练T恤',
            num: 6160,
            sale: 320
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 159.0,
            intro: ' NBA-Nike 球队LOGO 套头卫衣 连帽衫 AJ2852-657 图片色 ',
            remarks: 616,
            shopName: 'NBA官方旗舰店',
            sale: 990
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 370.8,
            intro: 'NBA-Nike 湖人队詹姆斯 CE城市版城市版运动连帽卫衣CJ9547 图片色',
            remarks: 3000,
            shopName: 'NBA官方旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 299.0,
            intro: 'NBA-Nike 湖人队 女子运动休闲开襟夹克宽松开衫外套 CJ7177-728 图片色',
            remarks: 280,
            shopName: 'NBA官方旗舰店',
            sale: 890
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 363.2,
            intro: 'NBA-Nike 骑士队 男子运动休闲开襟风帽夹克开衫外套 911108 图片色',
            remarks: 6000,
            shopName: 'NBA官方旗舰店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 369.85,
            intro: 'NBA-Nike 童装 快船队乔治13号 ASSOCIATION 青少年运动球衣 图片色 ',
            remarks: 616,
            shopName: 'NBA官方旗舰店',
            sale: 856
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 369.85,
            intro: 'NBA-Nike童装 雄鹿队 字母哥主场版 青少年 SW 运动球衣 图片色',
            remarks: 606,
            shopName: 'NBA官方旗舰店',
            sale: 830
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 599.0,
            intro: '耐克NIKE NBASwingmanJersey 男子球衣2020赛季洛杉矶湖人队 CW3669 CW3669-734 ',
            remarks: 280,
            shopName: 'NBA官方旗舰店',
            sale: 656
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 299.0,
            intro: 'NBA-Nike 篮网队 男子 套头连帽卫衣 AV0317-063 图片色',
            remarks: 6080,
            shopName: 'NBA官方旗舰店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-9.jpg',
            price: 299.0,
            intro: 'NBA-Nike 热火队韦德3号 男子运动休闲圆领透气短袖T恤870787-117',
            remarks: 610,
            shopName: 'NBA官方旗舰店',
            sale: 736
          },
          {
            img: 'static/img/goodsList/item-show-10.jpg',
            price: 299.0,
            intro: 'NBA-Nike 勇士队 男子套头连帽卫衣 CI4495-728 图片色',
            remarks: 3000,
            shopName: 'NBA官方旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-11.jpg',
            price: 381.5,
            intro: 'NBA-Nike 猛龙队 男子套头连帽卫衣 CI4495-728 图片色',
            remarks: 1280,
            shopName: 'NBA官方旗舰店',
            sale: 2670
          },
          {
            img: 'static/img/goodsList/item-show-12.jpg',
            price: 139.0,
            intro: 'NBA连帽衫 Nike 球队Logo 欧文同款T恤 AA3666-657',
            remarks: 2900,
            shopName: 'NBA官方旗舰店',
            sale: 3600
          },
          {
            img: 'static/img/goodsList/item-show-13.jpg',
            price: 159.0,
            intro: 'NBA-Nike 雄鹿队字母哥 Dri-FIT 男运动短袖T恤 BV8521-011 图片色',
            remarks: 6160,
            shopName: 'NBA官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-14.jpg',
            price: 149.0,
            intro: 'NBA-Nike 雄鹿队字母哥 Dri-FIT 男运动短袖T恤 BV8521-011 图片色',
            remarks: 906,
            shopName: 'NBA官方旗舰店',
            sale: 2560
          },
          {
            img: 'static/img/goodsList/item-show-15.jpg',
            price: 274.5,
            intro: 'NBA 金州勇士队 Nike Snap 男子针织长裤 AH4274-010 图片色',
            remarks: 3666,
            shopName: 'NBA官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-16.jpg',
            price: 299.0,
            intro: 'NBA-Nike 凯尔特人队 男子 套头连帽卫衣 AV0319-312 图片色',
            remarks: 2080,
            shopName: 'NBA官方旗舰店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};
export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'Gavin',
        province: '江苏省',
        city: '常熟市',
        area: '常熟理工学院',
        address: '东南校区',
        phone: '180****0213',
        postalcode: '232323'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

export const loadShoppingCart = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [{
      goods_id: 1529931938150,
      count: 1,
      img: 'static/img/goodsDetail/pack/1.jpg',
      package: 'XL',
      price: 599,
      title: '耐克NIKE NBASwingmanJersey 男子球衣2020赛季洛杉矶湖人队'
    }];
    commit('SET_SHOPPING_CART', data);
  });
};

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
