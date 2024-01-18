// 杂项装备更新


const critOthers = document.getElementById('critOthers');
const addAtkOthers = document.getElementById('addAtkOthers');
const addDefOthers = document.getElementById('addDefOthers');
const addHPOthers = document.getElementById('addHPOthers');
const addHealOthers = document.getElementById('addHealOthers');

peripheralSelect.addEventListener('change', updateSelectedOthers);
magicCard1.addEventListener('change', updateSelectedOthers);
magicCard2.addEventListener('change', updateSelectedOthers);


function updateSelectedOthers() {
    let other1 = peripheralAttributes[peripheralSelect.value] || { addAtk: 0, addDef: 0, addHP: 0, addHeal: 0, skill: 0 };
    let other3 = magicCardAttributes[magicCard1.value] || { crit: 0, addAtk: 0, addDef: 0, addHP: 0, addHeal: 0 };
    let other4 = magicCardAttributes[magicCard2.value] || { crit: 0, addAtk: 0, addDef: 0, addHP: 0, addHeal: 0 };

    critOthers.value = other3.crit + other4.crit;
    addAtkOthers.value = other1.addAtk + other3.addAtk + other4.addAtk;
    addDefOthers.value = other1.addDef + other3.addDef + other4.addDef;
    addHPOthers.value = other1.addHP + other3.addHP + other4.addHP;
    addHealOthers.value = other1.addHeal + other3.addHeal + other4.addHeal;
}
