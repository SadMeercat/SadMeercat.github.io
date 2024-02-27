document.getElementById('englishButton').addEventListener('click', function () {
    playAudio('english');
    hideButtonContainer();
});

document.getElementById('russianButton').addEventListener('click', function () {
    playAudio('russian');
    hideButtonContainer();
});

document.getElementById('spanishButton').addEventListener('click', function () {
    playAudio('spanish');
    hideButtonContainer();
});

document.getElementById('arabicButton').addEventListener('click', function () {
    playAudio('arabic');
    hideButtonContainer();
});
// Объект для хранения текущего воспроизводимого аудио
const currentAudio = {
    english: null,
    russian: null,
    spanish: null,
    arabic: null,
    audio3: null,
    audio4: null,
};

let currentLanguage = null;

function playAudio(language) {
    // Останавливаем текущее воспроизведение аудио, если оно есть
    if (currentAudio[currentLanguage]) {
        currentAudio[currentLanguage].pause();
        currentAudio[currentLanguage].currentTime = 0;
    }

    // Воспроизводим новое аудио, если оно не находится в состоянии воспроизведения
    if (currentAudio[language] && currentAudio[language].paused) {
        currentLanguage = language;
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
    currentAudio.audio3 = document.getElementById('audio3');
    currentAudio.audio4 = document.getElementById('audio4');
});

function hideButtonContainer() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.classList.add('hidden'); // Добавляем класс hidden для скрытия контейнера
}

const video = document.getElementById('altai');
window.addEventListener('load', function () {
  video.play();
  video.muted = true;
  playAudio(currentLanguage);
});