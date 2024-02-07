// 杂项装备更新


const critOthers = document.getElementById('critOthers');
const addAtkOthers = document.getElementById('addAtkOthers');
const addAtkOthers2 = document.getElementById('addAtkOthers2');

peripheralSelect.addEventListener('change', updateSelectedOthers);
magicCard1.addEventListener('change', updateSelectedOthers);
magicCard2.addEventListener('change', updateSelectedOthers);


function updateSelectedOthers() {
    let other1 = peripheralAttributes[peripheralSelect.value] || { addAtk: 0, skill: 0 };
    let other3 = magicCardAttributes[magicCard1.value] || { crit: 0, addAtk: 0};
    let other4 = magicCardAttributes[magicCard2.value] || { crit: 0, addAtk: 0};

    critOthers.value = other3.crit + other4.crit;
    addAtkOthers.value = other3.addAtk + other4.addAtk;
    addAtkOthers2.value = other1.addAtk;
}
