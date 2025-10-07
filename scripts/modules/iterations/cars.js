const cars = [
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
    {
        benefit: "800 000",
        mainImage: "фото авто.png",
        carFirstPhoto: "",
        carSecondPhoto: "",
        brand: "Kaiyi X3",
        mdifications: ["1.5 л (113 л.с.)", "Бензин", "Передний (CVT)"],
        price: "1 475 000",
        monthlyPayment: "147 500",
        link: "#"
    },
]
const carContainer = document.querySelectorAll("[data-car-container]")
carContainer.forEach((container) => {
    cars.forEach((car) => {
        const carElem = document.createElement('a')
        carElem.href = car.link

        const modificationTags = car.mdifications
            .map(mod => `<span class="px-3 py-1 bg-[#EFEFEF] text-sm rounded-full">${mod}</span>`)
            .join('')

        carElem.innerHTML = `
                <div class="max-w-sm rounded-[25px] border border-gray-200 bg-white shadow-sm p-[18px]">
                    <div class="bg-[#EFEFEF] rounded-full px-4 py-1 text-center mb-4 w-max">
                        <span class="text-sm font-medium">Выгода ${car.benefit}₽</span>
                    </div>

                    <div class="flex justify-center mb-5">
                        <img src="../assets/auto/${car.mainImage}" alt="${car.brand}"
                            class="w-full h-auto object-contain">
                    </div>

                    <div class="mb-3">
                        <h3 class="text-[18px] font-medium">${car.brand}</h3>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${modificationTags}
                    </div>

                    <div class="mb-4">
                        <p class="text-[18px] font-medium">от ${car.price} ₽</p>
                    </div>

                    <div class="mb-3">
                        <button
                            class="w-full py-3 bg-[#F90000] text-white font-bold text-lg rounded-full hover:bg-red-600 transition">
                            Получить предложение
                        </button>
                    </div>

                    <div>
                        <button
                            class="w-full py-3 bg-[#202020] text-white font-bold text-lg rounded-full hover:bg-gray-900 transition">
                            от ${car.monthlyPayment} р в месяц
                        </button>
                    </div>
                </div>
        `

        container.append(carElem)
    })
})