import './sass/main.scss';

const galleryItems = [{
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
    }]

// 1. Создание и рендер разметки по массиву данных galleryItems из app.js и предоставленному шаблону.

const galleryOfImages = document.querySelector('.js-gallery');
const imagesMarkup = createImages(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

function createImages(images) {
  return images.map(({preview,original,description}) =>
  {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="#"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('') 
};

// 2. Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

galleryOfImages.addEventListener('click', onImageClick);

const modalImage = document.querySelector('.lightbox__image')

const largeImgLink = document.querySelector('.gallery__link');

const modalOpen = document.querySelector('.lightbox');

// 2.1 Creating arrow with original images for using a slider when Modal is open.

const originalImagesArrow = [];

for (const item of galleryItems) {
  originalImagesArrow.push(item.original);
};

let idxOfOpenedImage = originalImagesArrow.indexOf(modalImage.src);

function onImageClick(evt) {
  if (!evt.target.classList.contains('gallery__image')) {
    return
  } else {
    
// 3. Открытие модального окна по клику на элементе галереи.
    
    modalOpen.classList.add('is-open');
    
    // 4. Подмена значения атрибута src элемента img.lightbox__image.
    
    modalImage.src = evt.target.dataset.source;
    modalImage.alt = evt.target.alt;

    // 7. Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".

    window.addEventListener('keydown', onRightKeyClick);
    window.addEventListener('keydown', onLeftKeyClick);

    onRightKeyClick(evt);
    onLeftKeyClick(evt);
  };
}

function onRightKeyClick(evt) {
  if (evt.keyCode === 39 && idxOfOpenedImage < originalImagesArrow.length-1) {
      modalImage.src = originalImagesArrow[idxOfOpenedImage += 1]
    }
  }

function onLeftKeyClick(evt) {
  if (evt.keyCode === 37 && idxOfOpenedImage > 0) {
      modalImage.src = originalImagesArrow[idxOfOpenedImage -= 1]
    }
  }

// 5. Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"] and removing Event listener for Right and Left Keys..

const onCloseBtnClick = document.querySelector('.lightbox__button');

onCloseBtnClick.addEventListener('click', closeModal);

// 5.1 Закрытие модального окна по клику на overlay and removing Event listener for Right and Left Keys..

const onOverlayClick = document.querySelector('.lightbox__overlay');

onOverlayClick.addEventListener('click', closeModal);

// 5.2 Закрытие модального окна по клику на Esc key and removing Event listener for Right and Left Keys.

window.addEventListener('keydown', closeModalOnEscKeyClick);

function closeModal() {
  modalOpen.classList.remove('is-open');
  window.removeEventListener('keydown', onRightKeyClick);
  window.removeEventListener('keydown', onLeftKeyClick);

  // 6.Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
  
  modalImage.src = "";
  modalImage.alt = "";
}

function closeModalOnEscKeyClick(evt) {
  if (evt.keyCode === 27) {
    closeModal();
  }
}