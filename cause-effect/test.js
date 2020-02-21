const data = [
  {
    name: 'Kaela Macejkovic',
    street: '59467 Quitzon Stream',
    city: 'Amyaborough',
    state: 'Alabama',
    country: 'Brunei Darussalam',
    telephone: '902-352-6734 x17416',
    birthday: 'Jan 11 1998'
  },
  {
    name: 'Deangelo Crona',
    street: 'Blick Manors',
    city: 'North Ford',
    state: 'North Carolina',
    country: 'Northern Mariana Islands',
    telephone: '987-771-9651 x6964',
    birthday: 'Jul 17 1985'
  },
  {
    name: 'Mireille Jaskolski',
    street: '558 Albert Springs',
    city: 'South Clovisborough',
    state: 'California',
    country: 'Bhutan',
    telephone: '(199) 969-1476 x003',
    birthday: 'Mar 25 1999'
  },
  {
    name: 'Dave Durgan',
    street: '82490 Arnulfo Drive',
    city: 'Port Tyrell',
    state: 'Michigan',
    country: 'Australia',
    telephone: '(961) 846-8651 x842',
    birthday: 'Oct 03 1992'
  }
];

const peopleList = $('.people-list');
const personInfo = $('.person-info');
data.forEach(person => {
  const li = document.createElement('li');
  li.classList.add('people');
  li.setAttribute('data-json', JSON.stringify(person));
  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.innerText = `Name: ${person.name}`;
  li.append(link);
  link.addEventListener('click', function() {
    const p = JSON.parse(li.getAttribute('data-json'));
    if (personInfo.getAttribute('data-name') === p.name) return;
    let finalHtml = '';
    for (const prop in p) {
      finalHtml += `<span>${uppercaseFirst(prop)}: ${p[prop]}</span><br>`;
    }
    personInfo.setAttribute('data-name', p.name);
    personInfo.innerHTML = finalHtml;
    const tl = new TimelineMax();
    tl.fromTo(
      personInfo,
      { x: -7, opacity: 0 },
      { x: 7, opacity: 1, duration: 0.3 }
    );
  });
  peopleList.append(li);
});

function uppercaseFirst(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

/**
 *  @returns {HTMLElement}
 */
function $(selector, multiple) {
  if (selector.startsWith('#')) {
    return document.getElementById(selector.replace('#', ''));
  }
  return multiple
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}
