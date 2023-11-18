// 饰品数据随等级变化
const level4Value = document.getElementById("level4Value");

const basicDefJewelry = document.getElementById("basicDefJewelry");
const critJewelry = document.getElementById("critJewelry");
const addAtkJewelry = document.getElementById("addAtkJewelry");
const addDefJewelry = document.getElementById("addDefJewelry");
const addHPJewelry = document.getElementById("addHPJewelry");
const addHealJewelry = document.getElementById("addHealJewelry");

const observer4 = new MutationObserver(updateJewelryAttributes);
const config4 = { attributes: true, childList: true, subtree: true };

observer4.observe(selectedJewelry, config4);
observer4.observe(level4Value, config4);

function updateJewelryAttributes() {
    var selectedJewelry = document.getElementById("selectedJewelry").innerText;
    var jewelryAtt = jewelryAttributes[selectedJewelry];

    let defCoefficient4;
    const level4 = parseInt(level4Value.textContent);
    
    if (level4 <= 83){
        defCoefficient4 = Math.pow(1.02, level4 - 1);
      } else {
        const lvl83DefCoefficient = Math.pow(1.02, 82);
        defCoefficient4 = lvl83DefCoefficient * Math.pow(1.018, level4 - 83);
      }
      
      basicDefJewelry.value = Math.floor(jewelryAtt.basicDef * defCoefficient4);
      critJewelry.value = jewelryAtt.crit;
      addAtkJewelry.value = jewelryAtt.addAtk;
      addDefJewelry.value = jewelryAtt.addDef;
      addHPJewelry.value = jewelryAtt.addHP;
      addHealJewelry.value = jewelryAtt.addHeal;
}
