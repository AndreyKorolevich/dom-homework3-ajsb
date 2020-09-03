const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const createDOM = (arr) => {
  const table = document.getElementById('body-table');
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  arr.forEach((elem) => {
    const tr = document.createElement('tr');
    const tdId = document.createElement('td');
    const tdTitle = document.createElement('td');
    const tdYear = document.createElement('td');
    const tdImdb = document.createElement('td');

    tdId.textContent = elem.id;
    tdTitle.textContent = elem.title;
    tdYear.textContent = elem.year;
    tdImdb.textContent = elem.imdb.toFixed(2);

    tr.insertAdjacentElement('beforeend', tdId);
    tr.insertAdjacentElement('beforeend', tdTitle);
    tr.insertAdjacentElement('beforeend', tdYear);
    tr.insertAdjacentElement('beforeend', tdImdb);

    table.insertAdjacentElement('beforeend', tr);
  });
};
createDOM(data);

const sortTable = (arr, param, direction) => {
  if (direction === 'decrease') {
    arr.sort((a, b) => b[param] - a[param]);
  } else if (direction === 'increases') {
    arr.sort((a, b) => a[param] - b[param]);
  }
};

const arrDataset = Object.keys(data[0]);
const arrPatramsSort = [];
arrDataset.map((elem) => arrPatramsSort.push({
  param: elem,
  direction: 'increases',
}, {
  param: elem,
  direction: 'decrease',
}));

function* genArgument() {
  while (true) {
    yield* arrPatramsSort;
  }
}

const argument = genArgument();

setInterval(() => {
  const { param, direction } = argument.next().value;
  sortTable(data, param, direction);
  createDOM(data);
}, 2000);
