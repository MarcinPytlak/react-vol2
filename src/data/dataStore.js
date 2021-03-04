export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  header: {
    headerIcon: 'dog',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContents = {
  title: 'Hi, my name is Marcin and this is my first redux page',
  image: 'https://images.musement.com/cover/0001/52/camp-nou-barcelona-jpg_header-51925.jpeg?w=1200&h=630&q=95&fit=crop',
  description:'This is Camp Nou. The stadium will be rebuild soon.',
};

export const FAQContents = {
  title: 'And here are the answers to your most frequently asked questions',
  questionOne: 'Which football team is your favourite one??',
  questionTwo: 'Do you like redux??',
  subtitle: 'Questions & Answers',
  image: 'https://media.istockphoto.com/illustrations/question-answer-bubble-icon-special-blue-banner-background-illustration-id1017160930?k=6&m=1017160930&s=612x612&w=0&h=EEAllFzyvaPBqqF60kpm43fecC1JRo6bPhfEvX_WHKM=',
  answerOne:'Of course it is FC Barcelona',
  answerTwo:'Yes, but i think that is difficult:)',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do sooner<sup>or later</sup>',
    description: 'Things, that i will do (maybe)',
    image: 'https://i.imgur.com/OvMZBs9.jpg',
  },
  {
    id: 'list-3',
    title: 'Super ideas!',
    description: 'List for super ideas',
    image: 'https://st2.depositphotos.com/1663755/8480/i/600/depositphotos_84808256-stock-photo-3d-3d-character-character-3d.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Animals',
    icon: 'paw',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Songs',
    icon: 'guitar',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Ideas',
    icon: 'lightbulb',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    columnId: 'column-5',
    title: 'Buy a dog',
  },
  {
    id: 'card-8',
    columnId: 'column-6',
    title: 'Learn to play guitar',
  },
  {
    id: 'card-9',
    columnId: 'column-7',
    title: 'Bungee jumping !! ',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
