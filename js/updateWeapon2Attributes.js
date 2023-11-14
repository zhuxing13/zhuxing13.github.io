// 副武器数据随等级变化
const level3Value = document.getElementById('level3Value');
const selectedWeapon2 = document.getElementById('selectedWeapon2');

const basicDefWeapon2 = document.getElementById('basicDefWeapon2');
const critWeapon2 = document.getElementById('critWeapon2');
const addAtkWeapon2 = document.getElementById('addAtkWeapon2');
const addDefWeapon2 = document.getElementById('addDefWeapon2');
const addHPWeapon2 = document.getElementById('addHPWeapon2');
// 暗盾二专盾牌系数勾选
const ogmNO2ShieldCheckbox = document.getElementById("ogmNO2Shield");
ogmNO2ShieldCheckbox.addEventListener("change", updateWeapon2Attributes);

const observer3 = new MutationObserver(updateWeapon2Attributes);
const config3 = { attributes: true, childList: true, subtree: true };

observer3.observe(selectedWeapon2, config3);
observer3.observe(level3Value, config3);

function updateWeapon2Attributes() {
    var weapon2Type = document.getElementById("weapon2Type").value;
    var selectedWeapon2 = document.getElementById("selectedWeapon2").innerText;
    var weapon2Attributes;
    var DefCoefficient = 1;

    if (weapon2Type === "无") {
        basicDefWeapon2.value = 0;
        critWeapon2.value = 0;
        addAtkWeapon2.value = 0;
        addDefWeapon2.value = 0;
        addHPWeapon2.value = 0;
    } else if (weapon2Type === "步枪") {
        weapon2Attributes = rifle2Attributes[selectedWeapon2];
    } else if (weapon2Type === "盾牌") {
        weapon2Attributes = shieldAttributes[selectedWeapon2];
        var ogmCheck = document.getElementById("ogmNO2Shield").checked;
        if (ogmCheck) {
            DefCoefficient = 0.2;
        }
    }

    let defCoefficient3;
    const level3 = parseInt(level3Value.textContent);
    if (level3 <= 83) {
        defCoefficient3 = Math.pow(1.02, level3 - 1);
      } else {
        const lvl83DefCoefficient = Math.pow(1.02, 82);
        defCoefficient3 = lvl83DefCoefficient * Math.pow(1.018, level3 - 83);
      }

      basicDefWeapon2.value = Math.floor((weapon2Attributes.basicDef || 0) * defCoefficient3 * DefCoefficient);
      critWeapon2.value = weapon2Attributes.crit || 0;

      addAtkWeapon2.value = weapon2Attributes.addAtk;
      addDefWeapon2.value = weapon2Attributes.addDef;
      addHPWeapon2.value = weapon2Attributes.addHP;
}