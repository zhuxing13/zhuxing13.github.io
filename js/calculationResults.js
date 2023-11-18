// 计算面板
function CalculationResults(){
// 总白值
    const basicAtkCharacter = document.getElementById("basicAtkCharacter").value;
    if (basicAtkCharacter === "未选择角色"){
        alert('未选择角色！');
        return
    }
    const basicDefCharacter = document.getElementById("basicDefCharacter").value;
    const basicHPCharacter = document.getElementById("basicHPCharacter").value;
    const basicAtkWeapon = document.getElementById("basicAtkWeapon").value;
    const basicDefWeapon = document.getElementById("basicDefWeapon").value;
    const basicDefWeapon2 = document.getElementById("basicDefWeapon2").value;
    const basicDefJewelry = document.getElementById("basicDefJewelry").value;

    var sameCheck = document.getElementById("sameProperties").checked;
    var AtkCoefficient = 1;
    if (sameCheck) {
        AtkCoefficient = 1.1;
    }

    var basicAtkAll = document.getElementById("basicAtkAll");
    var basicDefAll = document.getElementById("basicDefAll");
    var basicHPAll = document.getElementById("basicHPAll");
    basicAtkAll.value = basicAtkCharacter * basicAtkWeapon / 100 * AtkCoefficient;
    basicDefAll.value = Number(basicDefCharacter) + Number(basicDefWeapon) + Number(basicDefWeapon2) + Number(basicDefJewelry);
    basicHPAll.value = basicHPCharacter;

// 总加成
    const atk1 = document.getElementById("atk1").value;
    const atk2 = document.getElementById("atk2").value;
    const atk4 = document.getElementById("atk4").value;
    const def1 = document.getElementById("def1").value;
    const def2 = document.getElementById("def2").value;
    const hp1 = document.getElementById("hp1").value;
    const hp2 = document.getElementById("hp2").value;
    const hp4 = document.getElementById("hp4").value;

    const addAtkCharacter = document.getElementById("addAtkCharacter").value;
    const addAtkWeapon = document.getElementById("addAtkWeapon").value;
    const addAtkWeapon2 = document.getElementById("addAtkWeapon2").value;
    const addAtkOthers = document.getElementById("addAtkOthers").value;
    const addAtkJewelry = document.getElementById("addAtkJewelry").value;
    const addAtkGet = document.getElementById("addAtkGet").value;

    const addDefCharacter = document.getElementById("addDefCharacter").value;
    const addDefWeapon = document.getElementById("addDefWeapon").value;
    const addDefWeapon2 = document.getElementById("addDefWeapon2").value;
    const addDefOthers = document.getElementById("addDefOthers").value;
    const addDefJewelry = document.getElementById("addDefJewelry").value;
    const addDefGet = document.getElementById("addDefGet").value;

    const addHPCharacter = document.getElementById("addHPCharacter").value;
    const addHPWeapon = document.getElementById("addHPWeapon").value;
    const addHPWeapon2 = document.getElementById("addHPWeapon2").value;
    const addHPOthers = document.getElementById("addHPOthers").value;
    const addHPJewelry = document.getElementById("addHPJewelry").value;
    const addHPGet = document.getElementById("addHPGet").value;

    var addAtkAll = document.getElementById("addAtkAll");
    var addDefAll = document.getElementById("addDefAll");
    var addHPAll = document.getElementById("addHPAll");

    addAtkAll.value = Number(atk1) + Number(atk2) + Number(atk4) + Number(addAtkCharacter) + Number(addAtkWeapon) + Number(addAtkWeapon2) + Number(addAtkOthers) + Number(addAtkJewelry) + Number(addAtkGet);
    addDefAll.value = Number(def1) + Number(def2) + Number(addDefCharacter) + Number(addDefWeapon) + Number(addDefWeapon2) + Number(addDefOthers) + Number(addDefJewelry) + Number(addDefGet);
    addHPAll.value = Number(hp1) + Number(hp2) + Number(hp4) + Number(addHPCharacter) + Number(addHPWeapon) + Number(addHPWeapon2) + Number(addHPOthers) + Number(addHPJewelry) + Number(addHPGet);
// 最终结果
    const atk99 = document.getElementById("atk99").value;
    const def99 = document.getElementById("def99").value;
    const hp99 = document.getElementById("hp99").value;

    const resultAtk = document.getElementById("resultAtk");
    const resultDef = document.getElementById("resultDef");
    const resultHP = document.getElementById("resultHP");

    resultAtk.value = Math.floor((Number(atk99) + 100) / 100 * (Number(addAtkAll.value) + 100) / 100 * basicAtkAll.value);
    resultDef.value = Math.floor((Number(def99) + 100) / 100 * (Number(addDefAll.value) + 100) / 100 * basicDefAll.value);
    resultHP.value = Math.floor((Number(hp99) + 100) / 100 * (Number(addHPAll.value) + 100) / 100 * basicHPAll.value);
// 暴击
    const critCharacter = document.getElementById("critCharacter").value;
    const critWeapon = document.getElementById("critWeapon").value;
    const critWeapon2 = document.getElementById("critWeapon2").value;
    const critOthers = document.getElementById("critOthers").value;
    const critJewelry = document.getElementById("critJewelry").value;

    var critAll = document.getElementById("critAll");

    critAll.value = Number(critCharacter) + Number(critWeapon) + Number(critWeapon2) + Number(critOthers) + Number(critJewelry);
// 秒韧计算
    const weaponCoefficient = document.getElementById("weaponCoefficient").value;

    var dpsNoCrit = document.getElementById("dpsNoCrit");
    var dpsGetCrit = document.getElementById("dpsGetCrit");
    var toughness = document.getElementById("toughness");
    let aaa,aab,aac;
    aaa = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient));
    aab = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient) * (Number(critAll.value) + 100) / 100);
    aac = Math.floor((resultDef.value / 100 + 1) * resultHP.value);
    dpsNoCrit.value = aaa.toLocaleString();
    dpsGetCrit.value = aab.toLocaleString();
    toughness.value = aac.toLocaleString();
}