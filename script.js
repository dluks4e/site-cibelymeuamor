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

// Interação ao clicar nas fotos
document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('click', () => {
        // Adiciona vários "Eu te amo" na tela
        for (let i = 0; i < 10; i++) {
            const amor = document.createElement('div');
            amor.textContent = 'Eu te amo ❤️';
            amor.style.position = 'absolute';
            amor.style.left = `${Math.random() * window.innerWidth}px`;
            amor.style.top = `${Math.random() * window.innerHeight}px`;
            amor.style.color = '#ff6f61';
            amor.style.fontSize = '24px';
            amor.style.zIndex = 1000;
            document.body.appendChild(amor);

            // Remove o texto após alguns segundos
            setTimeout(() => {
                amor.remove();
            }, 3000);
        }

        // Adiciona partículas de corações
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ff6f61'
                },
                shape: {
                    type: 'image',
                    image: {
                        src: 'https://www.freeiconspng.com/uploads/heart-png-31.png',
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
    });
});