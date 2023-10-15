// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const paginationButttons = Array.from(document.querySelectorAll('.slider__button-pagination'));
const slideCount = slides.length;
let slideIndex = 0;

function buttonClickHendler(event) {
  const path = Number(event.target.dataset.path);
  slideIndex = path;
  updateSlider();
};

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
paginationButttons.forEach((button) => {
  button.addEventListener('click', buttonClickHendler);
})

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      paginationButttons[index].classList.add('button-pagination-current');
    } else {
      slide.style.display = 'none';
      paginationButttons[index].classList.remove('button-pagination-current');
    };
    if (slideIndex === slideCount - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    };
    if (slideIndex === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }
  });
}

export { updateSlider }
