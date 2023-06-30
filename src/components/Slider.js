
    const settings = {
        dots: true, // Показувати точки навігації
        infinite: true, // Безкінечна карусель
        speed: 500, // Швидкість прокручування
        slidesToShow: 3, // Кількість слайдів, які показуються одночасно
        slidesToScroll: 3, // Кількість слайдів, які прокручуються за раз
        vertical: false, // Горизонтальний режим
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 5
            }
        }
        ]
    };

export default settings;
