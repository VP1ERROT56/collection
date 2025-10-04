document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы один раз
    const searchButton = document.getElementById("search__button");
    const searchLogin = document.querySelector(".search__login");
    const formSearch = document.querySelector(".Form__search");
    
    // Проверяем, что основные элементы существуют
    if (!searchButton || !searchLogin) {
        console.error("Элементы поиска не найдены!");
        return;
    }
    
    // Единый обработчик клика по кнопке поиска
    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // предотвращаем всплытие
        searchLogin.classList.toggle("open");
    });
    
    // Обработчик клика по документу для закрытия
    document.addEventListener("click", function (event) {
        // Проверяем, что меню открыто и клик был вне нужной области
        if (searchLogin.classList.contains("open") && 
            !searchLogin.contains(event.target) && 
            event.target !== searchButton &&
            !searchButton.contains(event.target)) {
            searchLogin.classList.remove("open");
        }
    });
    
    // Предотвращаем закрытие при клике внутри формы поиска
    if (formSearch) {
        formSearch.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
    
    // Дополнительно: закрытие по клавише Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && searchLogin.classList.contains('open')) {
            searchLogin.classList.remove("open");
        }
    });
});

//навигация с клавиши таб//

document.addEventListener("DOMContentLoaded", function () {
    let isKeyboardNavigation = false;
    
    // Отслеживаем любую навигацию с клавиатуры
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Tab' || 
            event.key === 'ArrowUp' || 
            event.key === 'ArrowDown' || 
            event.key === 'ArrowLeft' || 
            event.key === 'ArrowRight' ||
            event.key === 'Enter' ||
            event.key === ' ') {
            isKeyboardNavigation = true;
        }
    });
    
    // Сбрасываем флаг при клике мыши
    document.addEventListener('mousedown', function() {
        isKeyboardNavigation = false;
    });
    
    // Сбрасываем флаг при скролле колесом мыши
    document.addEventListener('wheel', function() {
        isKeyboardNavigation = false;
    });
    
    // Обработчик фокуса
    document.querySelectorAll("a, button, input, textarea, select").forEach(element => {
        element.addEventListener("focus", function() {
            if (isKeyboardNavigation) {
                this.classList.add("keyboard-focus");
            }
        });
        
        element.addEventListener("blur", function() {
            this.classList.remove("keyboard-focus");
        });
    });
});

//окно регистрации//

document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы один раз
    const searchButton = document.getElementById("loginModal");
    const searchLogin = document.querySelector(".window__login");
    const formSearch = document.querySelector(".window__login");
    
    // Проверяем, что основные элементы существуют
    if (!searchButton || !searchLogin) {
        console.error("Элементы поиска не найдены!");
        return;
    }
    
    // Единый обработчик клика по кнопке поиска
    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // предотвращаем всплытие
        searchLogin.classList.toggle("active");
    });
    
    // Обработчик клика по документу для закрытия
    document.addEventListener("click", function (event) {
        // Проверяем, что меню открыто и клик был вне нужной области
        if (searchLogin.classList.contains("active") && 
            !searchLogin.contains(event.target) && 
            event.target !== searchButton &&
            !searchButton.contains(event.target)) {
            searchLogin.classList.remove("active");
        }
    });
    
    // Предотвращаем закрытие при клике внутри формы поиска
    if (formSearch) {
        formSearch.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
    
    // Дополнительно: закрытие по клавише Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && searchLogin.classList.contains('active')) {
            searchLogin.classList.remove("active");
        }
    });
});