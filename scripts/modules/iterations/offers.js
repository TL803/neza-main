const offersContainer = document.getElementById('offers-container')
const offers = [
  {
    image: "------------------- 1.svg",
    description: "Диагностика"
  },
  {
    image: "Ремонт двигателя.svg",
    description: "Ремонт двигателя"
  },
  {
    image: "Тормозная система .svg",
    description: "Тормозная система"
  },
  {
    image: "Замена масла .svg",
    description: "Замена масла"
  },
  {
    image: "Замена фильтров.svg",
    description: "Замена фильтров"
  },
  {
    image: "Шиномонтаж .svg",
    description: "Шиномонтаж"
  },
  {
    image: "Ремонт подвески.svg",
    description: "Ремонт подвески"
  },
  {
    image: "Техническое обслуживание.svg",
    description: "Тех обслуживание"
  }
];


offers.forEach((offer)=>{
    const offerElem = document.createElement('a')
    offerElem.href="#"
   offerElem.className='bg-[#202020] rounded-xl p-4 relative overflow-hidden flex flex-col justify-end aspect-square min-w-[200px]'
    offerElem.innerHTML = `
                    <span class="text-[20px] text-white mb-4 ml-4">${offer.description}</span>
                    <img src="../assets/offers/${offer.image}" alt="Диагностика"
                        class="absolute -right-[100px] w-[400px] bottom-0 opacity-70 pointer-events-none" />
    ` 

    offersContainer.append(offerElem)
})