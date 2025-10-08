const services = [
    {
        title: "Трейд-ин",
        description: "Обменяйте старое авто на новое со скидкой",
        image: "Трей2д -ин.png"
    },
    {
        title: "Кредитование",
        description: "До 96 месяцев со ставкой от 0,01%",
        image: "Кредитовани е.png"
    },
    {
        title: "Выкуп",
        description: "В течение дня, по объективной цене",
        image: "Кредитовани е (1).png"
    },
    {
        title: "Страхование",
        description: "Выгодные страховые продукты для защиты вашего имущества, жизни и финансов",
        image: "Страхование.png"
    },
    {
        title: "Комиссия",
        description: "Продадим ваш автомобиль быстро, выгодно и без лишних хлопот",
        image: "Лизинг.png"
    },
    {
        title: "Лизинг",
        description: "Одобрение по 2 документам, без первоначального взноса",
        image: "Комиссия.png"
    }
];

class ServiceSlider {
    constructor() {
        this.currentIndex = 0;
        this.slider = document.getElementById('service-slider');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.cardsPerView = this.getCardsPerView();
        
        // Создаем расширенный массив для бесконечной прокрутки
        this.extendedServices = [...services, ...services, ...services];
        this.realServicesCount = services.length;
        
        this.init();
        this.setupEventListeners();
        this.updateSlider();
    }

    getCardsPerView() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1024) return 2;
        return 3;
    }

    init() {
        // Очищаем слайдер
        this.slider.innerHTML = '';
        
        // Создаем карточки из расширенного массива
        this.extendedServices.forEach((service, index) => {
            const serviceElem = document.createElement('div');
            serviceElem.className = `service-card flex-shrink-0 px-4`;
            serviceElem.style.width = `${100 / this.cardsPerView}%`;
            serviceElem.setAttribute('data-index', index);
            
            serviceElem.innerHTML = `
                <div class="flex flex-col w-full h-[320px] rounded-xl bg-[#F6F6F6] p-8 relative overflow-hidden">
                    <!-- Изображение на весь блок -->
                    <div class="absolute inset-0 w-full h-full">
                        <img src="../assets/services/${service.image}" alt="${service.title}" 
                             class="w-full h-full object-cover">
                    </div>
                    <div class="flex flex-col gap-3 relative z-10 h-full justify-between">
                        <div>
                            <h3 class="text-[22px] font-semibold">${service.title}</h3>
                            <p class="text-[16px] text-gray-700 max-w-xs mt-2">
                                ${service.description}
                            </p>
                        </div>
                        <button class="mt-4 bg-[#F90000] w-max text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#d80000] transition">
                            Подробнее
                        </button>
                    </div>
                </div>
            `;
            
            this.slider.appendChild(serviceElem);
        });
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });

        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });

        window.addEventListener('resize', () => {
            const newCardsPerView = this.getCardsPerView();
            if (newCardsPerView !== this.cardsPerView) {
                this.cardsPerView = newCardsPerView;
                this.currentIndex = this.realServicesCount;
                this.init();
                this.updateSlider();
            }
        });

        // Автоматическая прокрутка (опционально)
        this.startAutoSlide();
    }

    nextSlide() {
        this.currentIndex++;
        
        // Плавная анимация
        this.slider.style.transition = 'transform 0.5s ease-in-out';
        this.updateSlider();
        
        // Если дошли до конца расширенного массива, незаметно перескакиваем в середину
        if (this.currentIndex >= this.extendedServices.length - this.cardsPerView) {
            setTimeout(() => {
                this.slider.style.transition = 'none';
                this.currentIndex = this.realServicesCount;
                this.updateSlider();
            }, 500);
        }
    }

    prevSlide() {
        this.currentIndex--;
        
        // Плавная анимация
        this.slider.style.transition = 'transform 0.5s ease-in-out';
        this.updateSlider();
        
        // Если дошли до начала расширенного массива, незаметно перескакиваем в середину
        if (this.currentIndex <= 0) {
            setTimeout(() => {
                this.slider.style.transition = 'none';
                this.currentIndex = this.realServicesCount;
                this.updateSlider();
            }, 500);
        }
    }

    updateSlider() {
        const cardWidth = 100 / this.cardsPerView;
        const translateX = this.currentIndex * cardWidth;
        this.slider.style.transform = `translateX(-${translateX}%)`;
    }

    // Автоматическое листание (по желанию)
    startAutoSlide() {
        setInterval(() => {
            this.nextSlide();
        }, 4000); // Листание каждые 4 секунды
    }
}

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => {
    new ServiceSlider();
});