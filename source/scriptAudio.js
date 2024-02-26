document.getElementById('englishButton').addEventListener('click', function () {
    playAudio('english');
});

document.getElementById('russianButton').addEventListener('click', function () {
    playAudio('russian');
});
// Объект для хранения текущего воспроизводимого аудио
const currentAudio = {
    english: null,
    russian: null,
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
    currentAudio.audio3 = document.getElementById('audio3');
    currentAudio.audio4 = document.getElementById('audio4');
});