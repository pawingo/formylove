// ===== script.js =====
(function() {
    "use strict";

    // ===== ГЕНЕРАЦИЯ ЧАСТИЦ И ИСКР =====
    function initParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        // очищаем на всякий случай
        container.innerHTML = '';
        for (let i = 0; i < 24; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.width = (Math.random() * 14 + 4) + 'px';
            p.style.height = p.style.width;
            p.style.animationDelay = Math.random() * 12 + 's';
            p.style.animationDuration = Math.random() * 15 + 14 + 's';
            container.appendChild(p);
        }
    }

    function initSparkles() {
        const container = document.getElementById('sparkles');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 14; i++) {
            const s = document.createElement('div');
            s.className = 'spark';
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDelay = Math.random() * 5 + 's';
            s.style.animationDuration = Math.random() * 6 + 5 + 's';
            container.appendChild(s);
        }
    }

    // ===== ОСНОВНАЯ ЛОГИКА: КНОПКА ПОКАЗЫВАЕТ КОНТЕНТ =====
    function initValentine() {
        const revealBtn = document.getElementById('revealButton');
        const surprise = document.getElementById('surprise');
        const closeBtn = document.getElementById('closeBtn');
        const body = document.body;

        // проверяем, что все элементы на месте
        if (!revealBtn || !surprise || !closeBtn) {
            console.warn('Не найдены необходимые элементы');
            return;
        }

        // открываем сокровенное
        function revealContent() {
            surprise.classList.add('active');
            body.classList.add('revealed');
            // маленькая вибрация, если поддерживается
            if (navigator.vibrate) navigator.vibrate(15);
        }

        // закрываем обратно в визуал
        function hideContent() {
            surprise.classList.remove('active');
            body.classList.remove('revealed');
        }

        // навешиваем события
        revealBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            revealContent();
        });

        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            hideContent();
        });

        // клик вне карточки (на бэкдроп) — закрывает
        surprise.addEventListener('click', function(e) {
            if (e.target === surprise) {
                hideContent();
            }
        });

        // клавиша Escape
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && surprise.classList.contains('active')) {
                hideContent();
            }
        });

        // предотвращаем закрытие при клике внутрь карточки
        const wishCard = document.querySelector('.wish-card');
        if (wishCard) {
            wishCard.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // ===== ЗАПУСК ПРИ ЗАГРУЗКЕ =====
    window.addEventListener('DOMContentLoaded', function() {
        initParticles();
        initSparkles();
        initValentine();
    });
})();