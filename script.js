// ===== script.js =====
// ОПТИМИЗИРОВАНО ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ — SVG СЕРДЦЕ
(function() {
    "use strict";

    // ===== ГЕНЕРАЦИЯ ЧАСТИЦ — ОЧЕНЬ МАЛО ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ =====
    function initParticles() {
        const container = document.getElementById('particles');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Всего 8 частиц для мобильных
        for (let i = 0; i < 10; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            
            const size = Math.random() * 8 + 3;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            
            p.style.animationDelay = Math.random() * 8 + 's';
            p.style.animationDuration = (Math.random() * 10 + 12) + 's';
            
            container.appendChild(p);
        }
    }

    // ===== ГЕНЕРАЦИЯ ИСКР =====
    function initSparkles() {
        const container = document.getElementById('sparkles');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Всего 6 искр
        for (let i = 0; i < 8; i++) {
            const s = document.createElement('div');
            s.className = 'spark';
            
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            
            s.style.animationDelay = Math.random() * 4 + 's';
            s.style.animationDuration = (Math.random() * 5 + 5) + 's';
            
            container.appendChild(s);
        }
    }

    // ===== ОСНОВНАЯ ЛОГИКА ПРИЛОЖЕНИЯ =====
    function initApp() {
        const revealBtn = document.getElementById('revealButton');
        const surprise = document.getElementById('surprise');
        const closeBtn = document.getElementById('closeBtn');
        const body = document.body;

        if (!revealBtn || !surprise || !closeBtn) {
            console.warn('Не найдены необходимые элементы');
            return;
        }

        function revealContent() {
            surprise.classList.add('active');
            body.classList.add('revealed');
        }

        function hideContent() {
            surprise.classList.remove('active');
            body.classList.remove('revealed');
        }

        revealBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            revealContent();
        });

        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideContent();
        });

        surprise.addEventListener('click', function(e) {
            if (e.target === surprise) {
                hideContent();
            }
        });

        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && surprise.classList.contains('active')) {
                hideContent();
            }
        });

        const card = document.querySelector('.wish-card');
        if (card) {
            card.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // ===== ЗАПУСК =====
    window.addEventListener('DOMContentLoaded', function() {
        initParticles();
        initSparkles();
        initApp();
    });

})();
