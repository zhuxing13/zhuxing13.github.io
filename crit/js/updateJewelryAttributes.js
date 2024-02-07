// 饰品数据随等级变化
const level4Value = document.getElementById("level4Value");

const critJewelry = document.getElementById("critJewelry");
const addAtkJewelry = document.getElementById("addAtkJewelry");

const observer4 = new MutationObserver(updateJewelryAttributes);
const config4 = { attributes: true, childList: true, subtree: true };

observer4.observe(selectedJewelry, config4);
observer4.observe(level4Value, config4);

function updateJewelryAttributes() {
    var selectedJewelry = document.getElementById("selectedJewelry").innerText;
    var jewelryAtt = jewelryAttributes[selectedJewelry];
      
      critJewelry.value = jewelryAtt.crit;
      addAtkJewelry.value = jewelryAtt.addAtk;
}
