/* ===== style.css ===== */
/* ОПТИМИЗИРОВАНО ДЛЯ МОБИЛЬНЫХ УСТРОЙСТВ — SVG СЕРДЦЕ */

/* СБРОС И БАЗОВАЯ АТМОСФЕРА */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: radial-gradient(circle at 30% 30%, #1a0c0f, #0b0405);
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    position: relative;
    overflow-x: hidden;
    transition: background 0.4s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body.revealed {
    background: radial-gradient(circle at 30% 30%, #2a151a, #120a0c);
}

/* ===== ОСНОВНОЙ ХОЛСТ ===== */
.canvas {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    margin: 0 auto;
}

.valentine-scene {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    transform: translateZ(0);
}

/* ===== СЕРДЦЕ — SVG, АНИМАЦИЯ ЧЕРЕЗ CSS ===== */
.heart-core {
    position: relative;
    width: min(320px, 70vw);
    height: min(320px, 70vw);
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 25px rgba(255, 80, 120, 0.5));
    animation: float 6s infinite ease-in-out;
    z-index: 20;
    transform: translateZ(0);
    will-change: transform;
}

.heart-svg {
    width: 100%;
    height: 100%;
    display: block;
    transform: translateZ(0);
}

/* Убираем анимацию внутри SVG, оставляем только CSS анимацию контейнера */
.heart-svg path, .heart-svg circle {
    transform: translateZ(0);
}

/* ===== КОЛЬЦА СВЕЧЕНИЯ ===== */
.glow-rings {
    position: absolute;
    width: 130%;
    height: 130%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 120, 160, 0.2) 0%, rgba(255, 80, 120, 0) 70%);
    animation: pulseGlow 3.4s infinite alternate;
    z-index: 5;
    will-change: opacity, transform;
    transform: translateZ(0);
}

.glow-rings.second {
    width: 160%;
    height: 160%;
    background: radial-gradient(circle, rgba(255, 170, 200, 0.12) 0%, transparent 75%);
    animation: pulseGlow 4.2s infinite alternate-reverse;
}

.glow-rings.third {
    width: 190%;
    height: 190%;
    background: radial-gradient(circle, rgba(200, 100, 150, 0.08) 0%, transparent 80%);
    animation: pulseGlow 5s infinite alternate;
}

/* ===== КНОПКА ===== */
.signature {
    margin-top: 2rem;
    color: rgba(255, 220, 230, 0.95);
    font-weight: 400;
    font-size: clamp(1rem, 4vw, 1.4rem);
    letter-spacing: 6px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(255, 120, 180, 0.8);
    backdrop-filter: blur(4px);
    padding: 0.7rem 2rem;
    border-radius: 50px;
    border: 1px solid rgba(255, 200, 220, 0.2);
    background: rgba(20, 5, 8, 0.2);
    white-space: nowrap;
    z-index: 30;
    animation: textBreath 4s infinite;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.2s, letter-spacing 0.2s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    transform: translateZ(0);
}

.signature:active {
    transform: scale(0.98);
    background: rgba(40, 10, 15, 0.4);
    letter-spacing: 8px;
}

/* ===== СЮРПРИЗ КОНТЕНТ ===== */
.surprise-content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(18, 8, 12, 0.85);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s;
    pointer-events: none;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}

.surprise-content.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.wish-card {
    max-width: 600px;
    width: 100%;
    background: radial-gradient(145% 140% at 20% 10%, rgba(40, 12, 18, 0.8), rgba(22, 6, 10, 0.95));
    border: 1px solid rgba(255, 200, 210, 0.2);
    border-radius: 36px;
    padding: 2.2rem 1.8rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    color: rgba(255, 235, 240, 0.95);
    transform: scale(0.98);
    transition: transform 0.3s ease;
    will-change: transform;
    position: relative;
}

.surprise-content.active .wish-card {
    transform: scale(1);
}

.wish-title {
    font-size: clamp(1.8rem, 7vw, 2.4rem);
    font-weight: 300;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #ffe3eb;
    text-shadow: 0 0 15px #ff99aa;
    margin-bottom: 1rem;
    border-bottom: 1px dashed rgba(255, 180, 200, 0.4);
    display: inline-block;
    padding-bottom: 0.2rem;
}

.wish-message {
    font-size: clamp(1.1rem, 4vw, 1.4rem);
    line-height: 1.5;
    font-weight: 350;
    margin: 1.5rem 0 1rem;
    font-style: italic;
    color: #ffd9e2;
    text-shadow: 0 0 20px rgba(255, 100, 130, 0.3);
}

.wish-list {
    list-style: none;
    margin: 1.5rem 0;
}

.wish-list li {
    font-size: 1.1rem;
    padding: 0.7rem 0;
    border-bottom: 0.5px solid rgba(255, 200, 220, 0.15);
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 320;
}

.wish-list li::before {
    content: "✦";
    color: #ffb3c6;
    font-size: 1.3rem;
    text-shadow: 0 0 8px #ff4d6d;
}

.stars {
    font-size: 1.5rem;
    margin-top: 0.8rem;
    letter-spacing: 8px;
    color: #ffb6c1;
    text-shadow: 0 0 15px #ff4d6d;
}

.wish-footer {
    margin-top: 1.2rem;
    font-size: 1rem;
    opacity: 0.8;
    border-top: 1px solid rgba(255,200,200,0.1);
    padding-top: 1rem;
}

.close-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: rgba(255, 220, 230, 0.1);
    border: 1px solid rgba(255, 180, 200, 0.3);
    color: rgba(255, 210, 220, 0.9);
    font-size: 1.6rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(4px);
    line-height: 1;
    padding-bottom: 5px;
    transition: background 0.2s, transform 0.2s;
    -webkit-touch-callout: none;
    user-select: none;
}

.close-btn:active {
    background: rgba(255, 150, 180, 0.3);
    transform: scale(0.9) rotate(90deg);
}

/* ===== ЧАСТИЦЫ И ИСКРЫ ===== */
.particle-cloud {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0.5;
}

.particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 160, 200, 0.4);
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(255, 140, 200, 0.5);
    animation: rise 10s infinite linear;
    opacity: 0;
    will-change: transform, opacity;
}

.sparkle {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0.4;
}

.spark {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 200, 150, 0.7);
    animation: sparkleFloat 6s infinite alternate;
    opacity: 0.3;
    will-change: transform, opacity;
}

/* ===== ДЕКОР ===== */
.feb-tag {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: rgba(255, 180, 200, 0.3);
    font-size: 0.8rem;
    letter-spacing: 2px;
    z-index: 40;
    backdrop-filter: blur(2px);
    padding: 0.2rem 0.6rem;
    border-radius: 30px;
    border: 0.5px solid rgba(255, 200, 220, 0.1);
    background: rgba(10, 2, 3, 0.1);
    pointer-events: none;
}

.vignette {
    position: fixed;
    inset: 0;
    box-shadow: inset 0 0 80px rgba(5, 0, 0, 0.6);
    z-index: 50;
    pointer-events: none;
}

/* ===== АНИМАЦИИ ===== */
@keyframes float {
    0% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-10px) scale(1.01); }
    100% { transform: translateY(0px) scale(1); }
}

@keyframes pulseGlow {
    0% { opacity: 0.2; transform: scale(0.96); }
    100% { opacity: 0.5; transform: scale(1.1); }
}

@keyframes rise {
    0% { transform: translateY(0) scale(1); opacity: 0.2; }
    100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
}

@keyframes sparkleFloat {
    0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
    100% { transform: translate(10px, -15px) scale(1.2); opacity: 0; }
}

@keyframes textBreath {
    0% { letter-spacing: 6px; opacity: 0.9; }
    50% { letter-spacing: 8px; opacity: 1; text-shadow: 0 0 20px rgba(255, 130, 190, 0.9); }
    100% { letter-spacing: 6px; opacity: 0.9; }
}

/* ===== АДАПТАЦИЯ ===== */
@media (max-width: 600px) {
    .signature {
        white-space: normal;
        text-align: center;
        padding: 0.6rem 1.2rem;
        font-size: 1rem;
    }
    
    .heart-core {
        width: min(260px, 65vw);
        height: min(260px, 65vw);
    }
    
    .wish-card {
        padding: 1.8rem 1.2rem;
    }
    
    .close-btn {
        top: 0.8rem;
        right: 0.8rem;
        width: 40px;
        height: 40px;
        font-size: 1.5rem;
    }
}

@media (max-width: 380px) {
    .wish-list li {
        font-size: 1rem;
    }
}

/* GPU-акселерация */
.heart-core,
.heart-svg,
.signature,
.wish-card,
.glow-rings {
    transform: translateZ(0);
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
}
