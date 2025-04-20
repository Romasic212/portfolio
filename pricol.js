const contactTitle = document.querySelector('.contact-title');

contactTitle.addEventListener('mouseenter', function() {
    contactTitle.textContent = 'Давай поболтаем!'; // Можно придумать разные варианты
});

contactTitle.addEventListener('mouseleave', function() {
    contactTitle.textContent = 'Связаться со мной'; // Возвращаем исходный текст
});
console.log('%cПривет! Ищете пасхалки? Попробуйте ввести secretCode() в консоли.', 'color: #64ffda; font-size: 1.2em;');

function secretCode() {
    alert('Вы нашли секретный код! Поздравляю!');
    // Дополнительные действия...
}
document.addEventListener('DOMContentLoaded', function() {
    const helpTrigger = document.getElementById('help-trigger');
    const helpModal = document.getElementById('help-modal');
    const closeButton = document.querySelector('.close-button');

    // Открываем модальное окно при клике на вопросик
    helpTrigger.addEventListener('click', function() {
        helpModal.classList.add('show');
    });

    // Закрываем модальное окно при клике на кнопку закрытия
    closeButton.addEventListener('click', closeModal);

    // Закрываем модальное окно при клике вне модального окна
    window.addEventListener('click', function(event) {
        if (event.target == helpModal) {
            closeModal();
        }
    });

    function closeModal() {
        helpModal.classList.remove('show');
        helpModal.classList.add('closing'); // Добавляем класс для анимации закрытия
         setTimeout(() => {
            helpModal.classList.remove('closing'); // Удаляем класс после завершения анимации
            helpModal.style.display = 'none';
        }, 400);
        helpModal.style.display = 'block';
    }

});

