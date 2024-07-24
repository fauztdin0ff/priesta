/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
         });
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }

         /***/
      })
/******/]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
         /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
   }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
         }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

      /*--------------------------------------------Прелоадер---------------------------------------------*/
      function hidePreloaderWithDelay() {
         const preloader = document.querySelector('.preloader');
         const body = document.querySelector('body');

         if (preloader) {
            if (preloader.style.display !== 'none') {
               body.style.overflow = 'hidden';
            }

            setTimeout(() => {
               preloader.style.display = 'none';
               body.style.overflow = 'auto';
            }, 800);
         }
      }
      window.addEventListener('load', hidePreloaderWithDelay);
      /*--------------------------------------------Открытие поиска в header---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const searchContainer = document.querySelector('.header__search');
         const searchIcon = document.querySelector('.header__search-icon');
         const searchBody = document.querySelector('.header__search-body');
         const searchInput = document.getElementById('searchQuery');

         if (searchIcon && searchBody && searchInput) {
            searchIcon.addEventListener('click', function () {
               searchBody.classList.toggle('show');
               searchContainer.classList.toggle('active');
               document.body.classList.toggle('open-search');
            });

            const closeBtn = document.querySelector('.header__search-body button');
            if (closeBtn) {
               closeBtn.addEventListener('click', function (event) {
                  event.preventDefault();
                  searchBody.classList.remove('show');
                  searchContainer.classList.remove('active');
                  document.body.classList.remove('open-search');
               });
            }
         }
      });


      /*--------------------------------------------Открытие попапа Войти---------------------------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const accountButton = document.querySelector('.account-button-text');
         const accountPopup = document.querySelector('.account__popup');
         const menuNav = document.querySelector('.menu__nav');

         accountButton.addEventListener('click', function (event) {
            event.stopPropagation();
            accountPopup.classList.toggle('opened');
            document.body.classList.toggle('login-popup');

            menuNav.classList.toggle('_lock');

         });

         document.addEventListener('click', function (event) {
            if (!accountPopup.contains(event.target) && !accountButton.contains(event.target)) {
               accountPopup.classList.remove('opened');
               document.body.classList.remove('login-popup');

               menuNav.classList.remove('_lock');
            }
         });

         window.addEventListener('resize', function () {
            if (window.innerWidth > 767) {
               menuNav.classList.remove('_lock');
            }
         });
      });



      /*--------------------------------------------Код из почты---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var digitInputs = document.querySelectorAll('.digit-input');

         digitInputs.forEach(function (input, index) {
            input.addEventListener('input', function () {
               if (this.value.length === this.maxLength) {
                  var nextInput = digitInputs[index + 1];
                  if (nextInput) {
                     nextInput.focus();
                  }
               }
            });

            input.addEventListener('keydown', function (event) {
               if (event.key === 'Backspace' && this.value === '') {
                  var prevInput = digitInputs[index - 1];
                  if (prevInput) {
                     prevInput.focus();
                  }
               }
            });

            input.addEventListener('paste', function (event) {
               event.preventDefault();
               var clipboardData = event.clipboardData || window.clipboardData;
               var pastedText = clipboardData.getData('text');

               for (var i = 0; i < pastedText.length; i++) {
                  if (index + i < digitInputs.length) {
                     digitInputs[index + i].value = pastedText[i];
                  }
               }

               var nextInput = digitInputs[index + pastedText.length];
               if (nextInput) {
                  nextInput.focus();
               }
            });
         });
      });

      /*--------------------------------------------Открытие каталога---------------------------------------------*/
      // Для компьютерной версии
      document.getElementById('openHeaderCatalog').addEventListener('mouseenter', function (event) {
         event.preventDefault();
         document.querySelector('.catalog-header').classList.add('opened');
         document.body.classList.add('open-catalog');
      });

      document.querySelector('.catalog-header').addEventListener('mouseleave', function () {
         document.querySelector('.catalog-header').classList.remove('opened');
         document.body.classList.remove('open-catalog');
      });

      // Для мобильной версии
      document.getElementById('openHeaderCatalog').addEventListener('click', function (event) {
         event.preventDefault();
         if (document.querySelector('.catalog-header').classList.contains('opened')) {
            document.querySelector('.catalog-header').classList.remove('opened');
            document.body.classList.remove('open-catalog');
         } else {
            document.querySelector('.catalog-header').classList.add('opened');
            document.body.classList.add('open-catalog');
         }
      });


      /*--------------------------------------------Header Catalog---------------------------------------------*/
      const links = document.querySelectorAll('.catalog-header__link');
      links.forEach(link => {
         link.addEventListener('mouseover', (event) => {
            links.forEach(otherLink => {
               otherLink.classList.remove('active');
            });

            link.classList.add('active');

            const nextElement = link.nextElementSibling;
            if (nextElement && nextElement.classList.contains('catalog-header__content')) {
               const allContents = document.querySelectorAll('.catalog-header__content');
               allContents.forEach(content => {
                  content.classList.remove('show');
               });

               nextElement.classList.add('show');
            }
         });
      });

      /*--------------------------------------------Бургер меню---------------------------------------------*/
      let iconMenu = document.querySelector('.menu__icon');
      let menuBody = document.querySelector('.menu__body');

      if (iconMenu) {
         iconMenu.addEventListener("click", function (e) {
            e.preventDefault();
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
         });
      }

      document.addEventListener('click', (event) => {
         if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
      });

      /*--------------------------------------------Перенос поиска---------------------------------------------*/
      window.onload = function () {
         function moveSearch() {
            var screenWidth = window.innerWidth;
            var searchElement = document.querySelector('.header__search');
            var buttonsElement = document.querySelector('.header__buttons');

            if (screenWidth < 767 && searchElement && buttonsElement) {
               buttonsElement.appendChild(searchElement);
            }
         }

         function moveElements() {
            var screenWidth = window.innerWidth;
            var wishlistElement = document.querySelector('.header__buttons-wishlist');
            var accountElement = document.querySelector('.header__buttons-account');
            var mobileHeader = document.querySelector('.header-mobile');

            if (screenWidth < 767 && wishlistElement && accountElement && mobileHeader) {
               mobileHeader.appendChild(wishlistElement);
               mobileHeader.appendChild(accountElement);
            }

            var catalogHeaderList = document.querySelector('.catalog-header__list');
            var mobileCatalogItems = document.querySelector('.mobile-catalog-items');

            if (screenWidth < 767 && catalogHeaderList && mobileCatalogItems) {
               mobileCatalogItems.appendChild(catalogHeaderList);
            }
         }
         moveSearch();
         moveElements();
      };


      /*--------------------------------------------В Избранное---------------------------------------------*/
      document.querySelectorAll(".add-to-wishlist").forEach(function (button) {
         button.addEventListener("click", function () {
            var wishlistItem = this.closest(".item-catalog");
            if (!wishlistItem) return;

            var wishlistButton = wishlistItem.querySelector(".add-to-wishlist");
            var wishlistContainer = wishlistItem.querySelector(".item-catalog__wishlist");

            if (!wishlistButton || !wishlistContainer) return;

            if (wishlistButton.classList.contains("active")) {
               wishlistButton.classList.remove("active");
               wishlistContainer.classList.remove("visible");
            } else {
               wishlistButton.classList.add("active");
               wishlistContainer.classList.add("visible");
            }
         });
      });


      /*--------------------------------------------Удаление из избранного---------------------------------------------*/
      const removeWishButtons = document.querySelectorAll('.item-wishlist__wishlist-remove');

      if (removeWishButtons.length > 0) {
         removeWishButtons.forEach(button => {
            button.addEventListener('click', () => {
               const item = button.closest('.item-catalog');

               if (item) {
                  item.remove();
               }
            });
         });
      }
      /*--------------------------------------------Выбор цвета в каталоге---------------------------------------------*/
      var itemCatalogImages = document.querySelectorAll('.item-catalog__images');

      itemCatalogImages.forEach(function (itemCatalogImage) {
         var mySwiper = new Swiper(itemCatalogImage, {
            threshold: 1,
            loop: true,
            touchRatio: 1,
            loopedSlides: 1,
            slidesPerGroup: 1,
            freeMode: false,
            simulateTouch: true,
            speed: 300,
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
               crossFade: true,
            },
            breakpoints: {
               992: {
                  simulateTouch: false,
               }
            },
         });

      });
      /*--------------------------------------------Открытие фильтра---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         const openFilterButton = document.getElementById("openFilter");
         const filterPanel = document.querySelector(".filter-panel");
         const closeFilterButton = document.querySelector(".close-filter");
         const body = document.body;

         if (openFilterButton && filterPanel && closeFilterButton && body) {
            openFilterButton.addEventListener("click", function () {
               closeFilterButton.classList.remove('close');
               closeFilterButton.classList.add('show');
               filterPanel.classList.toggle("open");
               body.classList.toggle("open-filter");
            });

            closeFilterButton.addEventListener("click", function () {
               filterPanel.classList.remove("open");
               closeFilterButton.classList.remove('show');
               closeFilterButton.classList.add('close');
               body.classList.remove("open-filter");
            });

            // Закрытие фильтра при клике вне попапа
            document.addEventListener("click", function (event) {
               if (!filterPanel.contains(event.target) && !openFilterButton.contains(event.target)) {
                  filterPanel.classList.remove("open");
                  closeFilterButton.classList.remove('show');
                  closeFilterButton.classList.add('close');
                  body.classList.remove("open-filter");
               }
            });
         }
      });

      /*--------------------------------------------Открытии определенного фильтра---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var filterNames = document.querySelectorAll('.item-filter__name');

         if (filterNames.length > 0) {
            filterNames.forEach(function (filterName) {
               filterName.addEventListener('click', function () {
                  filterName.classList.toggle('active');
                  var content = filterName.nextElementSibling;
                  content.classList.toggle('show');
               });
            });
         }
      });


      /*--------------------------------------------Цена От/До---------------------------------------------*/
      var slider = document.getElementById('price-range');
      var inputMin = document.getElementById('input-min');
      var inputMax = document.getElementById('input-max');

      if (slider && inputMin && inputMax) {
         noUiSlider.create(slider, {
            start: [10000, 120000],
            connect: true,
            range: {
               'min': 10000,
               'max': 150000
            },
            step: 1000 // Шаг ползунка
         });

         slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle === 0) {
               inputMin.value = formatNumber(Math.round(value));
            } else {
               inputMax.value = formatNumber(Math.round(value));
            }
         });

         function formatNumber(number) {
            return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
         }

         inputMin.addEventListener('change', function () {
            if (this.value && inputMax.value) {
               slider.noUiSlider.set([this.value, null]);
            }
         });

         inputMax.addEventListener('change', function () {
            if (this.value && inputMin.value) {
               slider.noUiSlider.set([null, this.value]);
            }
         });
      }

      /*--------------------------------------------Динамический Padding---------------------------------------------*/
      window.addEventListener('scroll', function () {
         if (window.innerWidth > 767) {
            var scrollPosition = window.scrollY;

            var filterPanel = document.querySelector('.filter-panel');
            if (filterPanel) {
               var paddingTop = Math.max(50, 164 - scrollPosition);
               filterPanel.style.paddingTop = paddingTop + 'px';
            }

            var closeFilter = document.querySelector('.close-filter');
            if (closeFilter) {
               var top = Math.max(0, 114 - scrollPosition);
               closeFilter.style.top = top + 'px';
            }
         }
      });

      /*--------------------------------------------Перенос кнопки закрытия фильтра---------------------------------------------*/
      const closeFilterButton = document.querySelector('.close-filter');
      const filterPanelTitle = document.querySelector('.filter-panel__title');

      function moveButton() {
         if (closeFilterButton && filterPanelTitle) {
            if (window.innerWidth < 1000) {
               filterPanelTitle.appendChild(closeFilterButton);
            }
         }
      }

      window.addEventListener('load', moveButton);
      window.addEventListener('resize', moveButton);

      /*--------------------------------------------Открытие сортировки---------------------------------------------*/
      var openSortButton = document.getElementById("openSort");
      var sortBody = document.querySelector(".catalog__sort-body");

      if (openSortButton && sortBody) {
         openSortButton.addEventListener("click", function (event) {
            sortBody.classList.toggle("show");
            event.stopPropagation();
         });

         document.addEventListener("click", function (event) {
            var isClickInsideSortBody = sortBody.contains(event.target);
            var isClickOnSortButton = openSortButton.contains(event.target);

            if (!isClickInsideSortBody && !isClickOnSortButton) {
               sortBody.classList.remove("show");
            }
         });

         var sortItems = document.querySelectorAll('.catalog__sort-item');
         sortItems.forEach(function (item) {
            item.addEventListener('click', function () {
               sortItems.forEach(function (item) {
                  item.classList.remove('active');
               });
               this.classList.add('active');

               sortBody.classList.remove("show");
            });
         });
      }

      /*--------------------------------------------СЛайдер в карточке продукта---------------------------------------------*/
      // Получаем ссылку на элемент слайдера
      const swiperContainer = document.querySelector('.swiper');

      // Проверяем наличие элемента слайдера перед инициализацией
      if (swiperContainer) {
         const swiper = new Swiper('.swiper', {
            loop: false,

            pagination: {
               el: '.swiper-pagination',
               clickable: true,
            },

            navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
            },
            //Включение/отключение перетаскивания на ПК
            simulateTouch: true,
            //Чувствительность свайпа
            touchRatio: 1,
            //Курсор перетаскивания
            grabCursor: true,
            //Переключение при клике на слайд
            slideToClickedSlide: false,
            //Количество слайдов для показа
            slidesPerView: 1,
            //Отключение функционала если слайдов меньше чем нужно
            watchOverflow: true,
            //Количество прокручиваемых слайдов
            slidesPerGroup: 1,
            speed: 500,
            /* effect: 'fade',
            fadeEffect: {
              crossFade: true,
            }, */
         });
      }


      /*--------------------------------------------Галерея в карточке товара---------------------------------------------*/
      const gsBgImgSelector = ".swiper-product-slide img";
      const sliderImgs = document.querySelectorAll(gsBgImgSelector);

      if (sliderImgs.length > 0) {
         const dynamicEl = [...sliderImgs].map((sliderImg) => {
            return {
               src: sliderImg.src,
            };
         });

         const dynamicGallery = document.querySelector(".dynamic-gallery-button");

         if (dynamicGallery) { // Проверка на наличие элемента .dynamic-gallery-button
            const popup = lightGallery(dynamicGallery, {
               dynamic: true,
               download: false,
               dynamicEl,
               mobileSettings: {
                  showCloseIcon: true,
               },
            });

            dynamicGallery.addEventListener("click", () => {
               popup.openGallery(0);
            });

            [...document.querySelectorAll(".swiper-slide")].map((slide, idx) => {
               slide.addEventListener("click", () => {
                  popup.openGallery(idx);
               });
            });
         }
      }

      /*--------------------------------------------В избранное---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var buttons = document.querySelectorAll('.add-to-wishlist2');
         buttons.forEach(function (button) {
            button.addEventListener('click', function () {
               button.classList.toggle('active');
            });
         });
      });


      /*--------------------------------------------Открытие деталей товарв---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         let detailNames = document.querySelectorAll(".details__name");

         detailNames.forEach(function (detailName) {
            detailName.addEventListener("click", function () {
               let parentItem = this.parentNode;
               let content = parentItem.querySelector(".details__content");

               // Check if content is currently active
               let isActive = content.classList.contains("show");

               // Remove 'active' and 'show' classes from all names and contents
               detailNames.forEach(function (name) {
                  name.classList.remove("active");
               });
               let activeContent = document.querySelector(".details__content.show");
               if (activeContent) {
                  activeContent.classList.remove("show");
               }

               // If content is not active, open it
               if (!isActive) {
                  this.classList.add("active");
                  content.classList.add("show");
               }
            });
         });
      });


      /*--------------------------------------------Добавление в корзину---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         let addToCartBtn = document.querySelector("#addToCart");
         let addedToCartMessage = document.querySelector(".added-to-cart");

         if (addToCartBtn) {
            let added = false; // флаг, показывающий, добавлен ли товар в корзину

            addToCartBtn.addEventListener("click", function (event) {
               event.preventDefault(); // предотвращаем стандартное поведение ссылки

               if (added) {
                  // если товар уже добавлен в корзину, делаем переход на страницу корзины
                  window.location.href = "cart.html";
               } else {
                  // если товар еще не добавлен в корзину, добавляем его и меняем текст кнопки
                  addToCartBtn.classList.add("added");
                  addToCartBtn.querySelector(".add-to-cart").style.display = "none";
                  addToCartBtn.querySelector(".added-to-cart").style.display = "flex";
                  added = true;
               }
            });
         }
      });

      //анимация полета
      document.addEventListener("DOMContentLoaded", function () {
         let addToCartBtn = document.querySelector("#addToCart");
         let productGallery = document.querySelector(".product__gallery");
         let productImages = document.querySelectorAll(".swiper-product-slide img");
         let addedToCartMessage = document.querySelector(".added-to-cart-message");
         let isAdded = false; // Переменная для отслеживания добавлен ли уже товар в корзину

         if (addToCartBtn) {
            addToCartBtn.addEventListener("click", function () {
               if (!isAdded) { // Проверяем, добавлен ли товар в корзину
                  // Получаем координаты кнопки "Добавить в корзину"
                  let buttonRect = this.getBoundingClientRect();
                  // Копируем выбранное изображение товара
                  let cloneImage = productImages[0].cloneNode(true);
                  cloneImage.classList.add("animated-product-image");
                  // Устанавливаем начальные координаты изображения как координаты кнопки "Добавить в корзину"
                  cloneImage.style.left = buttonRect.left + "px";
                  cloneImage.style.top = buttonRect.top + "px";
                  // Добавляем изображение в DOM
                  document.body.appendChild(cloneImage);
                  addedToCartMessage.classList.add("show");
                  setTimeout(function () {
                     addedToCartMessage.classList.remove("show");
                  }, 3000);
                  // Анимируем полет изображения в верхний правый угол
                  setTimeout(function () {
                     // Устанавливаем координаты изображения в верхний правый угол
                     cloneImage.style.left = "calc(100% - 100px)"; // 100px - ширина изображения
                     cloneImage.style.top = "0";
                     // Уменьшаем размер изображения и задаем нулевую непрозрачность
                     cloneImage.style.transform = "scale(0)";
                     cloneImage.style.opacity = "0";
                  }, 500); // Измените продолжительность анимации по желанию

                  // Удаляем изображение после завершения анимации
                  setTimeout(function () {
                     cloneImage.remove();
                  }, 1500); // Измените продолжительность анимации по желанию

                  isAdded = true; // Товар добавлен в корзину
               } else {
                  // Ваша логика для удаления товара из корзины
                  // Например, удаление класса "added" и изменение текста кнопки
                  isAdded = false; // Сбрасываем флаг добавления товара в корзину
               }
            });
         }
      });

      /*--------------------------------------------В карточке товара добавление в избранное ---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var addToWishlistBtns = document.querySelectorAll('.add-to-wishlist');
         var wishlistMessage = document.querySelector('.added-to-wishlist-message');
         var addedToWishlist = false;

         if (addToWishlistBtns.length > 0) {
            addToWishlistBtns.forEach(function (btn) {
               btn.addEventListener('click', function () {
                  if (!addedToWishlist) {
                     wishlistMessage.innerHTML = "<p>Товар добавлен в <a href='cart.html'>Избранное</a></p>";
                     wishlistMessage.classList.add('show');
                     btn.classList.add('added');
                     addedToWishlist = true;
                  } else {
                     wishlistMessage.textContent = "Товар удален из Избранного";
                     wishlistMessage.classList.add('show');
                     btn.classList.remove('added');
                     addedToWishlist = false;
                  }
                  setTimeout(function () {
                     wishlistMessage.classList.remove('show');
                  }, 2000);
               });
            });
         }
      });



      /*--------------------------------------------LOOKBOOK модал---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var lookAboutLinks = document.querySelectorAll(".look-about-link");
         var lookbookModals = document.querySelectorAll(".lookbook-modal");

         if (lookAboutLinks.length > 0 && lookbookModals.length > 0) {
            lookAboutLinks.forEach(function (link, index) {
               link.addEventListener("click", function (event) {
                  event.stopPropagation(); // Предотвращаем всплытие события
                  var modalToShow = document.querySelector(".lookbook-modal-" + (index + 1));
                  if (modalToShow) {
                     toggleModal(modalToShow);
                  }
               });
            });

            // Добавляем обработчик клика за пределами модального окна
            document.addEventListener("click", function (event) {
               lookbookModals.forEach(function (modal) {
                  if (!modal.contains(event.target)) {
                     modal.classList.remove("show");
                  }
               });
            });
         }
      });

      function toggleModal(modal) {
         if (modal.classList.contains("show")) {
            modal.classList.remove("show");
         } else {
            // Удаляем класс "show" со всех модальных окон
            document.querySelectorAll(".lookbook-modal").forEach(function (modal) {
               modal.classList.remove("show");
            });
            // Добавляем класс "show" к текущему модальному окну
            modal.classList.add("show");
         }
      }


      /*--------------------------------------------Кастомный инпут количества в карточке---------------------------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         var inputs = document.querySelectorAll('.custom-input');
         var increaseButtons = document.querySelectorAll('.increase-button');
         var decreaseButtons = document.querySelectorAll('.decrease-button');

         for (var i = 0; i < inputs.length; i++) {
            increaseButtons[i].addEventListener('click', function () {
               increaseValue(this);
            });

            decreaseButtons[i].addEventListener('click', function () {
               decreaseValue(this);
            });
         }

         function increaseValue(button) {
            var input = button.previousElementSibling;
            var value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            input.value = value;
         }

         function decreaseValue(button) {
            var input = button.nextElementSibling;
            var value = parseInt(input.value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            input.value = value;
         }
      });


      /*--------------------------------------------Активация промокода---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var button = document.getElementById("activatedPromo");
         if (button) {
            button.addEventListener("click", function (event) {
               event.preventDefault(); // Отмена стандартного поведения кнопки
               button.textContent = "Активировано!";
            });
         }
      });

      /*--------------------------------------------Удаление товара с корзины---------------------------------------------*/
      const removeButtons = document.querySelectorAll('.remove-cart');

      // Функция для проверки, пуста ли корзина
      function checkCartEmpty() {
         const cart = document.querySelector('.cart');
         if (cart) {
            const cartItems = cart.querySelectorAll('.cart__item');
            if (cartItems.length === 0) {
               cart.classList.add('empty');
            }
         }
      }

      if (removeButtons.length > 0) {
         removeButtons.forEach(button => {
            button.addEventListener('click', function () {
               const cartItem = this.closest('.cart__item');
               cartItem.remove();
               checkCartEmpty();
            });
         });
      }

      checkCartEmpty();




      /*--------------------------------------------Выпадающий список---------------------------------------------*/

      document.addEventListener('DOMContentLoaded', function () {

         if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
               thisArg = thisArg || window;
               for (var i = 0; i < this.length; i++) {
                  callback.call(thisArg, this[i], i, this);
               }
            };
         }

         document.querySelectorAll('.s-dropdown').forEach(function (dropDownWrapper) {
            const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
            const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
            const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
            const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

            dropDownBtn.addEventListener('click', function (e) {
               dropDownList.classList.toggle('dropdown__list--visible');
               this.classList.toggle('dropdown__button--active');
            });

            dropDownListItems.forEach(function (listItem) {
               listItem.addEventListener('click', function (e) {
                  e.stopPropagation();
                  dropDownBtn.innerText = this.innerText;
                  dropDownBtn.focus();
                  dropDownInput.value = this.dataset.value;
                  dropDownList.classList.remove('dropdown__list--visible');
               });
            });

            document.addEventListener('click', function (e) {
               const isDropdownClick = dropDownWrapper.contains(e.target);
               const isDropdownListClick = dropDownList.contains(e.target);
               if (!isDropdownClick && !isDropdownListClick) {
                  dropDownBtn.classList.remove('dropdown__button--active');
                  dropDownList.classList.remove('dropdown__list--visible');
               }
            });

            document.addEventListener('keydown', function (e) {
               if (e.key === 'Tab' || e.key === 'Escape') {
                  dropDownBtn.classList.remove('dropdown__button--active');
                  dropDownList.classList.remove('dropdown__list--visible');
               }
            });
         });

      });


      /*--------------------------------------------кабинет перенос  контента---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         function moveAllContent() {
            var contentBlocks = document.querySelectorAll('.tab-cabinet__content');
            var tabContentWrapper = document.querySelector('.cabinet__tab-contents');

            if (window.innerWidth < 650 && contentBlocks.length > 0) {
               contentBlocks.forEach(function (content) {
                  var tabId = content.classList[1];
                  var tab = document.querySelector('.cabinet__tab[data-tab="' + tabId + '"]');
                  tab.appendChild(content);
               });
            }
         }

         window.addEventListener('load', moveAllContent);
      });


      /*--------------------------------------------Открытие товара в Оформлении---------------------------------------------*/
      const orderName = document.querySelector('.order__info-name');
      const orderContent = document.querySelector('.order__info-content');

      if (orderName && orderContent) {
         orderName.addEventListener('click', function () {
            this.classList.toggle('active');
            orderContent.classList.toggle('show');
         });
      }

      /*--------------------------------------------Метод доставки---------------------------------------------*/
      document.addEventListener("DOMContentLoaded", function () {
         var checkboxes = document.querySelectorAll('.pay-order__card input[type="checkbox"]');

         checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('click', function () {
               checkboxes.forEach(function (cb) {
                  if (cb !== checkbox) {
                     cb.checked = false;
                  }
               });
            });
         });
      });


      /*------------------------------Куки---------------------------*/
      /*  document.addEventListener("DOMContentLoaded", function () {
          const cookiesAlert = document.querySelector('.cookies-alert');
          const acceptCookiesBtn = document.querySelector('#accept-cookies');
 
          if (cookiesAlert && acceptCookiesBtn) {
             if (!localStorage.getItem('cookiesAccepted')) {
                cookiesAlert.style.display = 'block';
             }
 
             acceptCookiesBtn.addEventListener('click', function () {
                localStorage.setItem('cookiesAccepted', 'true');
                cookiesAlert.style.display = 'none';
             });
          }
       }); */





   })();

   /******/
})()
   ;