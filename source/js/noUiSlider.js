const STEP = 1;
const MIN = 0;
const MAX = 1060;
const START = 0;
const END = 900;

const rangeSlider = document.querySelector('.form__slider');
const priceInputs = document.querySelectorAll('.form__range-input');

const initSlider = () => {
  noUiSlider.create(rangeSlider, {
    start: [START, END],
    connect: true,
    step: STEP,
    range: {
      'min': MIN,
      'max': MAX
    }
  });

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    priceInputs[handle].value = Math.round(values[handle]);
  })

  priceInputs.forEach((element, index) => {
    element.addEventListener('change', () => setRangeSlider(index, element.value))
  })
};

const setRangeSlider = (count, value) => {
  let valuesArray = [null, null];
  valuesArray[count] = value;
  rangeSlider.noUiSlider.set(valuesArray);
};

export { initSlider };
