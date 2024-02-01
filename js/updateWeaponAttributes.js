// 主武器数据随等级变化
const level2Value = document.getElementById('level2Value');

const basicAtkWeapon = document.getElementById("basicAtkWeapon");
const weaponCoefficient = document.getElementById("weaponCoefficient");
const basicDefWeapon = document.getElementById("basicDefWeapon");
const basicHealWeapon = document.getElementById("basicHealWeapon");
const critWeapon = document.getElementById("critWeapon");
const addAtkWeapon = document.getElementById("addAtkWeapon");
const addDefWeapon = document.getElementById("addDefWeapon");
const addHPWeapon = document.getElementById("addHPWeapon");
const addHealWeapon = document.getElementById("addHealWeapon");

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
        
        let atkCoefficient2, defCoefficient2, healCoefficient2;
        const level2 = parseInt(level2Value.textContent);
        if (level2 <= 83) {
            atkCoefficient2 = Math.pow(1.02, level2 - 1);
            defCoefficient2 = Math.pow(1.02, level2 - 1);
            healCoefficient2 = Math.pow(1.02, level2 - 1);
          } else {
            const lvl83AtkCoefficient = Math.pow(1.02, 82);
            const lvl83DefCoefficient = Math.pow(1.02, 82);
            const lvl83HealCoefficient = Math.pow(1.02, 82);
            atkCoefficient2 = lvl83AtkCoefficient * Math.pow(1.026, level2 - 83);
            defCoefficient2 = lvl83DefCoefficient * Math.pow(1.018, level2 - 83);
            healCoefficient2 = lvl83HealCoefficient * Math.pow(1.0363, level2 - 83);
          }
        
        if (typeof weaponAttributes === 'undefined') {
            // console.log('当前主武器不存在（忽略）');
            return; // 提前退出函数
          }
        basicAtkWeapon.value = Math.floor(weaponAttributes.basicAtk * atkCoefficient2);
        weaponCoefficient.value = weaponAttributes.weaponCoefficient;
        basicDefWeapon.value = Math.floor(weaponAttributes.basicDef * defCoefficient2);
        basicHealWeapon.value = Math.floor(weaponAttributes.basicHeal * healCoefficient2);
        critWeapon.value = weaponAttributes.crit;
        addAtkWeapon.value = weaponAttributes.addAtk;
        addDefWeapon.value = weaponAttributes.addDef;
        addHPWeapon.value = weaponAttributes.addHP;
        addHealWeapon.value = weaponAttributes.addHeal;

    }
}
