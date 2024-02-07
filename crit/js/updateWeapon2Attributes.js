// 副武器数据随等级变化
const level3Value = document.getElementById('level3Value');

const critWeapon2 = document.getElementById('critWeapon2');
const addAtkWeapon2 = document.getElementById('addAtkWeapon2');


const observer3 = new MutationObserver(updateWeapon2Attributes);
const config3 = { attributes: true, childList: true, subtree: true };

observer3.observe(selectedWeapon2, config3);
observer3.observe(level3Value, config3);

function updateWeapon2Attributes() {
    var weapon2Type = document.getElementById("weapon2Type").value;
    var selectedWeapon2 = document.getElementById("selectedWeapon2").innerText;
    var weapon2Attributes;

    if (weapon2Type === "无") {
        critWeapon2.value = 0;
        addAtkWeapon2.value = 0;
        return
    } else if (weapon2Type === "步枪") {
        weapon2Attributes = rifle2Attributes[selectedWeapon2];
    } else if (weapon2Type === "盾牌") {
        weapon2Attributes = shieldAttributes[selectedWeapon2];
    }

      if (typeof weapon2Attributes === 'undefined') {
        // console.log('当前主武器不存在（忽略）');
        return; // 提前退出函数
      }

      critWeapon2.value = weapon2Attributes.crit || 0;

      addAtkWeapon2.value = weapon2Attributes.addAtk;
}