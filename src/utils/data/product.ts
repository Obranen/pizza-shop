import karbonaraMetrovaya from '../images/product/pizza/karbonara-metrovaya_1566297127558.jpeg'
import margarita from '../images/product/pizza/margarita_156706066239.jpeg'
import pollo from '../images/product/pizza/pollo_1567060914824.jpeg'
import gurmeoMetrovaya from '../images/product/pizza/gurmeo-metrovaya_1566296981221.jpeg'
import milano from '../images/product/pizza/milano_1654329100503.jpeg'
import chetyreSyra from '../images/product/pizza/chetyre-syra_1567059967719.jpeg'
import poloMetrovaya from '../images/product/pizza/polo-metrovaya_1566297194328.jpeg'
import karbonara from '../images/product/pizza/karbonara_1654274567805.jpeg'
import gurmeo from '../images/product/pizza/gurmeo_1567060279780.jpeg'
import burgerKingJork from '../images/product/burgers/burger-king-jork.jpeg'
import gamburger from '../images/product/burgers/gamburger.jpeg'
import dablChizburger from '../images/product/burgers/dabl-chizburger.jpeg'
import atlantikSet from '../images/product/sets/atlantik-set.jpeg'
import loveUa from '../images/product/sets/love-ua.jpeg'
import dragonXxl from '../images/product/sets/dragon-xxl.jpeg'
import sanSet from '../images/product/sets/san-set.jpeg'
import superFilaXl from '../images/product/sets/super-fila-xl.jpeg'
import bacardiCartaBlanca from '../images/product/drinks/bacardi-carta-blanca.jpeg'
import evian from '../images/product/drinks/evian.jpeg'
import hugarden from '../images/product/drinks/hugarden.jpeg'
import pepsi from '../images/product/drinks/pepsi.jpeg'
import marengo from '../images/product/drinks/marengo.jpeg'
import redBull from '../images/product/drinks/red-bull.jpeg'
import sandoraAnanas from '../images/product/drinks/sandora-ananas.jpeg'
import kiwiCuveePinotNoir from '../images/product/drinks/kiwi-cuvee-pinot-noir.png'
import koronaSteklo from '../images/product/drinks/korona-steklo.jpeg'
import saperaviDurujiValley from '../images/product/drinks/saperavi-duruji-valley.jpeg'

interface IImage {
  src: string
  alt: string
}

export interface IOptions {
  id: number
  name: string
  value: string
  price: number
  checked: boolean
  category: number
}

export interface IProducts {
  id: number
  image: IImage
  title: string
  weight: number
  desc: string
  options: IOptions[]
  price: number
  quantity: number
  category: number
}

export interface IProductState {
  products: IProducts[]
}

export const product: IProductState = {
  products: [
    {
      id: 1,
      image: {
        src: karbonaraMetrovaya,
        alt: 'karbonaraMetrovaya'
      },
      title: 'Карбонара метровая',
      weight: 1200,
      desc: 'Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, томаты черри и трюфельное масло',

      options: [
        {
          id: 1,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 65,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 19,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 485,
      quantity: 1,
      category: 1
    },
    {
      id: 2,
      image: {
        src: margarita,
        alt: 'margarita'
      },
      title: 'Маргарита',
      weight: 460,
      desc: 'Соус маринара, помидоры, сыр моцарелла, соус песто',

      options: [
        {
          id: 1,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 19,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 159,
      quantity: 1,
      category: 1
    },
    {
      id: 3,
      image: {
        src: pollo,
        alt: 'pollo'
      },
      title: 'Поло',
      weight: 550,
      desc: 'Сыр дор блю, сыр моцарелла, сыр чеддер, сыр пармезан, трюфельная паста, филадельфия, мед, трюфельное масло',

      options: [{
        id: 1,
        name: 'Соус барбекю',
        value: 'barbecueSauce',
        price: 15,
        checked: false,
        category: 1
      }],
      price: 219,
      quantity: 1,
      category: 1
    },
    {
      id: 4,
      image: {
        src: gurmeoMetrovaya,
        alt: 'gurmeoMetrovaya'
      },
      title: 'Гурмео метровая',
      weight: 1300,
      desc: 'Филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка, соус BBQ и трюфельное масло',

      options: [
        {
          id: 1,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 65,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 19,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 489,
      quantity: 1,
      category: 1
    },
    {
      id: 5,
      image: {
        src: milano,
        alt: 'milano'
      },
      title: 'Милано',
      weight: 530,
      desc: 'Салями милано, сыр моцарелла, томаты черри, руккола, соус маринара',

      options: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 179,
      quantity: 1,
      category: 1
    },
    {
      id: 6,
      image: {
        src: chetyreSyra,
        alt: 'chetyreSyra'
      },
      title: 'Четыре сыра',
      weight: 430,
      desc: 'Cыр дор блю, сыр чеддер, сыр пармезан, сыр моцарелла, груша, грецкий орех, сливочный',

      options: [
        {
          id: 1,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15,
          checked: false,
          category: 2
        },
        {
          id: 2,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 2
        }
      ],
      price: 197,
      quantity: 1,
      category: 1
    },
    {
      id: 7,
      image: {
        src: poloMetrovaya,
        alt: 'poloMetrovaya'
      },
      title: 'Поло метровая',
      weight: 1350,
      desc: 'Слабосоленый лосось, сыры страчателла и моцарелла, руккола, маринованный красный лук, соус маринара',

      options: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 429,
      quantity: 1,
      category: 1
    },
    {
      id: 8,
      image: {
        src: karbonara,
        alt: 'karbonara'
      },
      title: 'Карбонара',
      weight: 500,
      desc: 'Сыр моцарелла, ветчина, грудинка, шампиньоны, пармезан, томаты черри и трюфельное масло',
      options: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 249,
      quantity: 1,
      category: 1
    },
    {
      id: 9,
      image: {
        src: gurmeo,
        alt: 'gurmeo'
      },
      title: 'Гурмео',
      weight: 580,
      desc: 'Филе куриное sous-vide, ветчина, колбаски охотничьи, пеперони, сыр моцарелла, шампиньоны, лук репчатый, петрушка, соус BBQ и трюфельное масло',

      options: [
        {
          id: 1,
          name: 'Соус сырный',
          value: 'cheeseSauce',
          price: 25,
          checked: false,
          category: 1
        },
        {
          id: 2,
          name: 'Соус барбекю',
          value: 'barbecueSauce',
          price: 15,
          checked: false,
          category: 1
        },
        {
          id: 3,
          name: 'Сырный бортик',
          value: 'CheeseSide',
          price: 29,
          checked: false,
          category: 1
        }
      ],
      price: 269,
      quantity: 1,
      category: 1
    },
    {
      id: 10,
      image: {
        src: burgerKingJork,
        alt: 'burgerKingJork'
      },
      title: 'Бургер Кинг Йорк',
      weight: 210,
      desc: 'Котлета из говядины, сыр Хохланд, салат айсберг, фиолетовый лук, маринованный огурец, помидор, фирменный соус',

      options: [],
      price: 119,
      quantity: 1,
      category: 2
    },
    {
      id: 11,
      image: {
        src: gamburger,
        alt: 'gamburger'
      },
      title: 'Гамбургер',
      weight: 180,
      desc: 'Котлета из говядины, лук, маринованный огурец, кетчуп, горчица',

      options: [],
      price: 79,
      quantity: 1,
      category: 2
    },
    {
      id: 12,
      image: {
        src: dablChizburger,
        alt: 'dablChizburger'
      },
      title: 'Дабл Чизбургер',
      weight: 280,
      desc: 'Две котлеты из говядины, сыр Хохланд, лук, маринованный огурец, кетчуп, горчица',

      options: [],
      price: 159,
      quantity: 1,
      category: 2
    },
    {
      id: 13,
      image: {
        src: atlantikSet,
        alt: 'atlantikSet'
      },
      title: 'Атлантик Сет 46 шт',
      weight: 1250,
      desc: 'Ролл №1 - Филадельфия унаги:\n' +
        '\n' +
        'Ролл с угрем панко, сурими кимчи, грушей и сливочным сыром в икре тобико и кунжуте.\n' +
        '\n' +
        'Ролл №2 - Зеленый дракон:\n' +
        '\n' +
        'Ролл с угрем панко, сливочным сыром, авокадо, Тамаго, огурцом, кунжутом и соусом унаги.\n' +
        '\n' +
        'Ролл №3 - Феликс ролл с угрем:\n' +
        '\n' +
        'Ролл с угрем, лососем, окунем, сурими кимчи, сливочным сыром, огурцом, Тамаго, соусом спайси и соусом унаги.\n' +
        '\n' +
        'Ролл №4 - Унаги-сяке Филадельфия:\n' +
        '\n' +
        'Ролл с угрем и лососем, сливочным сыром, сыром дор блю и грушей.\n' +
        '\n' +
        'Ролл №5 - Унаги маки:\n' +
        '\n' +
        'Маки с угрем, огурцом, соусом спайси и соусом унаги.\n' +
        '\n' +
        'Ролл №6 - Унаги рору:\n' +
        '\n' +
        'Ролл с угрем, лососем, окунем, сурими кимчи, сливочным сыром, огурцом, Тамаго и соусом унаги.',

      options: [],
      price: 729,
      quantity: 1,
      category: 3
    },
    {
      id: 14,
      image: {
        src: loveUa,
        alt: 'loveUa'
      },
      title: 'Love ua 44 шт',
      weight: 1115,
      desc: 'Ролл с филе лосося, сыром филадельфия, авокадо и огурцом;\n' +
        '\n' +
        'Ролл с сурими-кимчи, сыром филадельфия, авокадо, огурцом и икрой тобико;\n' +
        '\n' +
        'Ролл с тартаром с филе лосося и соусом манго-чили. сыром филадельфия, омлетом тамаго-унаги, огурцом;\n' +
        '\n' +
        'Ролл с сырами дор блю и филадельфия, грушей, омлетом тамаго-унаги в сыре чеддер с соусом унаги;\n' +
        '\n' +
        'Маки с лососем и огурцом;\n' +
        '\n' +
        'Маки с масляным, огурцом и соусом спайси-гьодза',

      options: [
        {
          id: 1,
          name: 'Marengo 0.75 л',
          value: 'Marengo',
          price: 169,
          checked: false,
          category: 1
        }
      ],
      price: 649,
      quantity: 1,
      category: 3
    },
    {
      id: 15,
      image: {
        src: dragonXxl,
        alt: 'dragonXxl'
      },
      title: 'Драгон XXL 66 шт',
      weight: 1650,
      desc: 'Ролл №1 - Калифорния чикен:\n' +
        '\n' +
        'Ролл с курицей панко, огурцом, томатами, салатом и соусом Цезарь в икре тобико.\n' +
        '\n' +
        'Ролл №2 - Зеленый дракон:\n' +
        '\n' +
        'Ролл с лососем и угрем панко, сыром Филадельфия, Тамаго, огурцом, икрой тобико, авокадо, кунжутом и соусом унаги.\n' +
        '\n' +
        'Ролл №3 - Унаги рору:\n' +
        '\n' +
        'Ролл с угрем, сыром Филадельфия, огурцом, Тамаго и соусом унагi.\n' +
        '\n' +
        'Ролл №4 - Огненный дракон:\n' +
        '\n' +
        'Ролл с карамелизированным лососем, сыром Филадельфия, сыром дор блю, грушей, Тамаго, икрой тобико и соусом манго-чили.\n' +
        '\n' +
        'Ролл №5 - Феликс ролл с угрем:\n' +
        '\n' +
        'Ролл с угрем, сыром Филадельфия, огурцом, Тамаго и соусом унагi.\n' +
        '\n' +
        'Ролл №6 - Золотой дракон:\n' +
        '\n' +
        'Ролл с угрем, лососем панко, сыром Филадельфия, Тамаго, болгарским перцем, огурцом, икрой тобико, кунжутом и соусом унаги.\n' +
        '\n' +
        ' Ролл №7 - Маки с лососем:\n' +
        '\n' +
        'Маки с лососем, кунжутом и соусом Шрирачи.\n' +
        '\n' +
        'Ролл № 8 - Чука маки спайси:\n' +
        '\n' +
        'Маки с  чукой, кунжутом и соусом спайси.',
      options: [],
      price: 649,
      quantity: 1,
      category: 3
    },
    {
      id: 16,
      image: {
        src: sanSet,
        alt: 'sanSet'
      },
      title: 'Сан сет 32 шт',
      weight: 1230,
      desc: 'Запеченный ролл с угрем, запеченный ролл с креветкой, запеченный ролл с лососем, запеченный сырный ролл с курицей-панко\n' +
        '\n' +
        'Напиток в ПОДАРОК на выбор:\n' +
        '\n' +
        '- пиво Mafia Lager 0,5л;\n' +
        '\n' +
        '- яблочный сидр 0,5л;\n' +
        '\n' +
        '– классический лимонад 0,5л.',
      options: [],
      price: 899,
      quantity: 1,
      category: 3
    },
    {
      id: 17,
      image: {
        src: superFilaXl,
        alt: 'superFilaXl'
      },
      title: 'Супер Фила XL 44 шт',
      weight: 1155,
      desc: 'Ролл сурими-тамаго, Маки с масляной, Маки с лососем, Ролл филадельфия с лососем, Чизу ролл',
      options: [],
      price: 599,
      quantity: 1,
      category: 3
    },
    {
      id: 18,
      image: {
        src: bacardiCartaBlanca,
        alt: 'bacardiCartaBlanca'
      },
      title: 'Bacardi Carta Blanca',
      weight: 1000,
      desc: 'Белый ром. Германия/ Италия',
      options: [],
      price: 999,
      quantity: 1,
      category: 4
    },
    {
      id: 19,
      image: {
        src: evian,
        alt: 'evian'
      },
      title: 'Evian',
      weight: 330,
      desc: 'Белый ром. Германия/ Италия',
      options: [],
      price: 59,
      quantity: 1,
      category: 4
    },
    {
      id: 20,
      image: {
        src: hugarden,
        alt: 'hugarden'
      },
      title: 'Hoegaarden',
      weight: 500,
      desc: 'Пиво',
      options: [],
      price: 109,
      quantity: 1,
      category: 4
    },
    {
      id: 21,
      image: {
        src: pepsi,
        alt: 'pepsi'
      },
      title: 'Pepsi',
      weight: 500,
      desc: 'Газированный напиток',
      options: [],
      price: 45,
      quantity: 1,
      category: 4
    },
    {
      id: 22,
      image: {
        src: marengo,
        alt: 'marengo'
      },
      title: 'Marengo',
      weight: 750,
      desc: 'Белое полусладкое игристое вино. Украина',
      options: [],
      price: 259,
      quantity: 1,
      category: 4
    },
    {
      id: 23,
      image: {
        src: redBull,
        alt: 'redBull'
      },
      title: 'Red Bull',
      weight: 250,
      desc: 'Энергетический напиток',
      options: [],
      price: 65,
      quantity: 1,
      category: 4
    },
    {
      id: 24,
      image: {
        src: sandoraAnanas,
        alt: 'sandoraAnanas'
      },
      title: 'Sandora Ананас',
      weight: 950,
      desc: 'Пакетированный ананасовый нектар',
      options: [],
      price: 99,
      quantity: 1,
      category: 4
    },
    {
      id: 25,
      image: {
        src: kiwiCuveePinotNoir,
        alt: 'kiwiCuveePinotNoir'
      },
      title: 'Kiwi Cuvee Pinot Noir',
      weight: 750,
      desc: 'Красное сухое вино. Франция',
      options: [],
      price: 419,
      quantity: 1,
      category: 4
    },
    {
      id: 26,
      image: {
        src: koronaSteklo,
        alt: 'koronaSteklo'
      },
      title: 'Corona Extra',
      weight: 330,
      desc: 'Пиво',
      options: [],
      price: 89,
      quantity: 1,
      category: 4
    },
    {
      id: 27,
      image: {
        src: saperaviDurujiValley,
        alt: 'saperaviDurujiValley'
      },
      title: 'Сапераві Duruji Valley',
      weight: 750,
      desc: 'Красное, сухое, Грузия',
      options: [],
      price: 419,
      quantity: 1,
      category: 4
    }
  ]
}