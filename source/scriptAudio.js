document.getElementById('englishButton').addEventListener('click', function () {
    setLanguage('english');
    hideButtonContainer();
});

document.getElementById('russianButton').addEventListener('click', function () {
    setLanguage('russian');
    hideButtonContainer();
});

document.getElementById('spanishButton').addEventListener('click', function () {
    setLanguage('spanish');
    hideButtonContainer();
});

document.getElementById('arabicButton').addEventListener('click', function () {
    setLanguage('arabic');
    hideButtonContainer();
});
// Объект для хранения текущего воспроизводимого аудио
const currentAudio = {
    english: null,
    russian: null,
    spanish: null,
    arabic: null
};

let currentLanguage = null;

function setLanguage(language){
    currentLanguage = language;
}

function playAudio(language) {
    // Останавливаем текущее воспроизведение аудио, если оно есть
    if (currentAudio[currentLanguage]) {
        currentAudio[currentLanguage].pause();
        currentAudio[currentLanguage].currentTime = 0;
    }

    // Воспроизводим новое аудио, если оно не находится в состоянии воспроизведения
    if (currentAudio[language] && currentAudio[language].paused) {
        currentAudio[language].play().catch(error => {
            // Обработка ошибки воспроизведения (например, ввод юзера)
            console.error('Error playing audio:', error);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    currentAudio.english = document.getElementById('englishAudio');
    currentAudio.russian = document.getElementById('russianAudio');
    currentAudio.spanish = document.getElementById('spanishAudio');
    currentAudio.arabic = document.getElementById('arabicAudio');
});

function hideButtonContainer() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.classList.add('hidden'); // Добавляем класс hidden для скрытия контейнера
}

const video = document.getElementById('video');
window.addEventListener('load', function () {
  video.play();
  video.muted = true;
  playAudio(currentLanguage);
});