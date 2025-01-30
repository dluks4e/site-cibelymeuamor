// Configuração do particles.js para corações
particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ff6f61' // Coração vermelho
        },
        shape: {
            type: 'image',
            image: {
                src: 'https://www.freeiconspng.com/uploads/heart-png-31.png', // URL de um coração PNG
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 10,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 5,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Interação ao clicar no coração
document.getElementById('coracao').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'flex';
});

// Fechar o overlay
document.getElementById('close-overlay').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
});