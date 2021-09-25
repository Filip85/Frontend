console.log('Exercise 01');

const temperatures = [
  {
    min: 17,
    max: 30,
  },
  {
    min: 17,
    max: 32,
  },
  {
    min: 19,
    max: 35,
  },
  {
    min: 19,
    max: 37,
  },
  {
    min: 18,
    max: 36,
  },
  {
    min: 17,
    max: 31,
  },
  {
    min: 16,
    max: 29,
  },
];

function setTemperatureData() {
  const elements = document.querySelectorAll('LI');

  elements.forEach((el, i) => {
    el.dataset.min = temperatures[i].min;
    el.dataset.max = temperatures[i].max;
  })
}

function highlightWarmestAndCoolestDay() {
    const min = Math.min.apply(null, temperatures.map(x => x.max));
    const max = Math.max.apply(null, temperatures.map(x => x.max));
    console.log(min, max)
  const warmestDay = document.querySelector('[data-max="37"]');
  const coolestDay = document.querySelector('[data-max="29"]');


  warmestDay.style.color = 'red';
  coolestDay.style.color = 'blue';
}

setTemperatureData();
highlightWarmestAndCoolestDay();