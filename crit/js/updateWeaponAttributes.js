// 主武器数据随等级变化
const level2Value = document.getElementById('level2Value');

const basicAtkWeapon = document.getElementById("basicAtkWeapon");
const weaponCoefficient = document.getElementById("weaponCoefficient");

const critWeapon = document.getElementById("critWeapon");
const addAtkWeapon = document.getElementById("addAtkWeapon");


const observer2 = new MutationObserver(updateWeaponAttributes);
const config2 = { attributes: true, childList: true, subtree: true };

observer2.observe(selectedWeapon, config2);
observer2.observe(level2Value, config2);

function updateWeaponAttributes() {
    var weaponType = document.getElementById("weaponType").value;
    var selectedWeapon = document.getElementById("selectedWeapon").innerText;

    if (weaponType !== "未选择角色") {
        var weaponAttributes;

        if (weaponType === "单手剑") {
            weaponAttributes = oneWeaponAttributes[selectedWeapon];
        } else if (weaponType === "双手剑") {
            weaponAttributes = twoWeaponAttributes[selectedWeapon];
        } else if (weaponType === "步枪") {
            weaponAttributes = rifleWeaponAttributes[selectedWeapon];
        } else if (weaponType === "权杖") {
            weaponAttributes = scepterWeaponAttributes[selectedWeapon];
        } else if (weaponType === "篮子") {
            weaponAttributes = basketWeaponAttributes[selectedWeapon];
        } else if (weaponType === "弓") {
            weaponAttributes = archWeaponAttributes[selectedWeapon];
        } else if (weaponType === "手套") {
            weaponAttributes = gloveWeaponAttributes[selectedWeapon];
        } else if (weaponType === "爪") {
            weaponAttributes = clawWeaponAttributes[selectedWeapon];
        }
        
        let atkCoefficient2;
        const level2 = parseInt(level2Value.textContent);
        if (level2 <= 83) {
            atkCoefficient2 = Math.pow(1.02, level2 - 1);

          } else {
            const lvl83AtkCoefficient = Math.pow(1.02, 82);

            atkCoefficient2 = lvl83AtkCoefficient * Math.pow(1.026, level2 - 83);
          }
        
        if (typeof weaponAttributes === 'undefined') {
            // console.log('当前主武器不存在（忽略）');
            return; // 提前退出函数
          }
        basicAtkWeapon.value = Math.floor(weaponAttributes.basicAtk * atkCoefficient2);
        weaponCoefficient.value = weaponAttributes.weaponCoefficient;

        critWeapon.value = weaponAttributes.crit;
        addAtkWeapon.value = weaponAttributes.addAtk;

    }
}
