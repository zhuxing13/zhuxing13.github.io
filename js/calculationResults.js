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
    const basicHealWeapon = document.getElementById("basicHealWeapon").value;  //回血
    const basicHealCharacter = document.getElementById("basicHealCharacter").value; //回血

    var sameCheck = document.getElementById("sameProperties").checked;
    var AtkCoefficient = 1;
    if (sameCheck) {
        AtkCoefficient = 1.1;
    }

    //计算白值
    var basicAtkAll = document.getElementById("basicAtkAll");
    var basicDefAll = document.getElementById("basicDefAll");
    var basicHPAll = document.getElementById("basicHPAll");
    var basicHealAll = document.getElementById("basicHealAll"); //回血
    basicAtkAll.value = basicAtkCharacter * basicAtkWeapon / 100 * AtkCoefficient;
    basicDefAll.value = Number(basicDefCharacter) + Number(basicDefWeapon) + Number(basicDefWeapon2) + Number(basicDefJewelry);
    basicHPAll.value = basicHPCharacter;
    basicHealAll.value = basicHealCharacter * basicHealWeapon / 100; //回血

// 总加成
    //固定图鉴加成
    const atk1 = document.getElementById("atk1").value;
    const atk2 = document.getElementById("atk2").value;
    const atk4 = document.getElementById("atk4").value;
    
    const def1 = document.getElementById("def1").value;
    const def2 = document.getElementById("def2").value;
    
    const hp1 = document.getElementById("hp1").value;
    const hp2 = document.getElementById("hp2").value;
    const hp4 = document.getElementById("hp4").value;
    //杂项图鉴（其他地方已计算，此处用于计算练度）
    const atk3 = document.getElementById("atk3").value;
    const atk5 = document.getElementById("atk5").value;
    const atk6 = document.getElementById("atk6").value;
    const atk7 = document.getElementById("atk7").value;
    
    const def3 = document.getElementById("def3").value;
    
    const hp3 = document.getElementById("hp3").value;
    //最大图鉴
    const atk1full = document.getElementById("atk1full").textContent;
    const atk2full = document.getElementById("atk2full").textContent;
    const atk3full = document.getElementById("atk3full").textContent;
    const atk4full = document.getElementById("atk4full").textContent;
    const atk5full = document.getElementById("atk5full").textContent;
    const atk6full = document.getElementById("atk6full").textContent;
    const atk7full = document.getElementById("atk7full").textContent;

    const def1full = document.getElementById("def1full").textContent;
    const def2full = document.getElementById("def2full").textContent;
    const def3full = document.getElementById("def3full").textContent;
    
    const hp1full = document.getElementById("hp1full").textContent;
    const hp2full = document.getElementById("hp2full").textContent;
    const hp3full = document.getElementById("hp3full").textContent;
    const hp4full = document.getElementById("hp4full").textContent;
    //练度计算
    var atkMasteryDegree = document.getElementById("atkMasteryDegree");
    var defMasteryDegree = document.getElementById("defMasteryDegree");
    var hpMasteryDegree = document.getElementById("hpMasteryDegree");

    // atkMasteryDegree.value = ((Number(atk1)+Number(atk2)+Number(atk3)+Number(atk4)+Number(atk5)+Number(atk6)+Number(atk7))/(Number(atk1full)+Number(atk2full)+Number(atk3full)+Number(atk4full)+Number(atk5full)+Number(atk6full)+Number(atk7full))*100) + "%";
    // defMasteryDegree.value = ((Number(def1)+Number(def2)+Number(def3))/(Number(def1full)+Number(def2full)+Number(def3full))*100) + "%";
    // hpMasteryDegree.value = ((Number(hp1)+Number(hp2)+Number(hp3)+Number(hp4))/(Number(hp1full)+Number(hp2full)+Number(hp3full)+Number(hp4full))*100) + "%";
    var atkValueDegree = ((Number(atk1)+Number(atk2)+Number(atk3)+Number(atk4)+Number(atk5)+Number(atk6)+Number(atk7))/(Number(atk1full)+Number(atk2full)+Number(atk3full)+Number(atk4full)+Number(atk5full)+Number(atk6full)+Number(atk7full))*100);
    var defValueDegree = ((Number(def1)+Number(def2)+Number(def3))/(Number(def1full)+Number(def2full)+Number(def3full))*100);
    var hpValueDegree = ((Number(hp1)+Number(hp2)+Number(hp3)+Number(hp4))/(Number(hp1full)+Number(hp2full)+Number(hp3full)+Number(hp4full))*100);
    if (atkValueDegree === 100){
        atkMasteryDegree.value = atkValueDegree + "%";
    }else{
        atkMasteryDegree.value = atkValueDegree.toFixed(1) + "%";
    }
    if (defValueDegree === 100){
        defMasteryDegree.value = defValueDegree + "%";
    }else{
        defMasteryDegree.value = defValueDegree.toFixed(1) + "%";
    }
    if (hpValueDegree === 100){
        hpMasteryDegree.value = hpValueDegree + "%";
    }else{
        hpMasteryDegree.value = hpValueDegree.toFixed(1) + "%";
    }

    //攻击加成
    const addAtkCharacter = document.getElementById("addAtkCharacter").value;
    const addAtkWeapon = document.getElementById("addAtkWeapon").value;
    const addAtkWeapon2 = document.getElementById("addAtkWeapon2").value;
    const addAtkOthers = document.getElementById("addAtkOthers").value;
    const addAtkJewelry = document.getElementById("addAtkJewelry").value;
    const addAtkGet = document.getElementById("addAtkGet").value;
    //防御加成
    const addDefCharacter = document.getElementById("addDefCharacter").value;
    const addDefWeapon = document.getElementById("addDefWeapon").value;
    const addDefWeapon2 = document.getElementById("addDefWeapon2").value;
    const addDefOthers = document.getElementById("addDefOthers").value;
    const addDefJewelry = document.getElementById("addDefJewelry").value;
    const addDefGet = document.getElementById("addDefGet").value;
    //生命加成
    const addHPCharacter = document.getElementById("addHPCharacter").value;
    const addHPWeapon = document.getElementById("addHPWeapon").value;
    const addHPWeapon2 = document.getElementById("addHPWeapon2").value;
    const addHPOthers = document.getElementById("addHPOthers").value;
    const addHPJewelry = document.getElementById("addHPJewelry").value;
    const addHPGet = document.getElementById("addHPGet").value;
    //回血加成
    const addHealCharacter = document.getElementById("addHealCharacter").value;
    const addHealWeapon = document.getElementById("addHealWeapon").value;
    // const addHealWeapon2 = document.getElementById("addHealWeapon2").value;
    const addHealOthers = document.getElementById("addHealOthers").value;
    const addHealJewelry = document.getElementById("addHealJewelry").value;

    var addAtkAll = document.getElementById("addAtkAll");
    var addDefAll = document.getElementById("addDefAll");
    var addHPAll = document.getElementById("addHPAll");
    var addHealAll = document.getElementById("addHealAll"); //回血

    var addatkall = Number(atk1) + Number(atk2) + Number(atk4) + Number(addAtkCharacter) + Number(addAtkWeapon) + Number(addAtkWeapon2) + Number(addAtkOthers) + Number(addAtkJewelry) + Number(addAtkGet);
    var adddefall = Number(def1) + Number(def2) + Number(addDefCharacter) + Number(addDefWeapon) + Number(addDefWeapon2) + Number(addDefOthers) + Number(addDefJewelry) + Number(addDefGet);
    var addhpall = Number(hp1) + Number(hp2) + Number(hp4) + Number(addHPCharacter) + Number(addHPWeapon) + Number(addHPWeapon2) + Number(addHPOthers) + Number(addHPJewelry) + Number(addHPGet);
    var addhealall = Number(addHealCharacter) + Number(addHealWeapon) + Number(addHealOthers) + Number(addHealJewelry); //回血

    //计算遗物
    const entry11Value = document.getElementById("entry11Value").textContent;
    const entry22Value = document.getElementById("entry22Value").textContent;
    const entry33Value = document.getElementById("entry33Value").textContent;
    const relicEntry1 = document.getElementById("relicEntry1").value;
    const relicEntry2 = document.getElementById("relicEntry2").value;
    const relicEntry3 = document.getElementById("relicEntry3").value;

    var relicAtk = 0;
    var relicDef = 0;
    var relicHp = 0;
    var relicHeal = 0;
    var reliCrit = 0;
    var relicSkill = 0;
    switch (relicEntry1) {
        case 'crit':
            reliCrit += Number(entry11Value);
            break;
        case 'atk':
            relicAtk += Number(entry11Value);
            break;
        case 'def':
            relicDef += Number(entry11Value);
            break;
        case 'hp':
            relicHp += Number(entry11Value);
            break;
        case 'heal':
            relicHeal += Number(entry11Value);
            break;
        case 'skill':
            relicSkill += Number(entry11Value);
            break;
        } 
    switch (relicEntry2) {
        case 'crit':
            reliCrit += Number(entry22Value);
            break;
        case 'atk':
            relicAtk += Number(entry22Value);
            break;
        case 'def':
            relicDef += Number(entry22Value);
            break;
        case 'hp':
            relicHp += Number(entry22Value);
            break;
        case 'heal':
            relicHeal += Number(entry22Value);
            break;
        case 'skill':
            relicSkill += Number(entry22Value);
            break;
        } 
    switch (relicEntry3) {
        case 'crit':
            reliCrit += Number(entry33Value);
            break;
        case 'atk':
            relicAtk += Number(entry33Value);
            break;
        case 'def':
            relicDef += Number(entry33Value);
            break;
        case 'hp':
            relicHp += Number(entry33Value);
            break;
        case 'heal':
            relicHeal += Number(entry33Value);
            break;
        case 'skill':
            relicSkill += Number(entry33Value);
            break;
        }

    addAtkAll.value = addatkall + relicAtk;
    addDefAll.value = adddefall + relicDef;
    addHPAll.value = addhpall + relicHp;
    addHealAll.value = addhealall + relicHeal;

// 最终结果
    //守护者基地
    const atk99 = document.getElementById("atk99").value;
    const def99 = document.getElementById("def99").value;
    const hp99 = document.getElementById("hp99").value;

    const resultAtk = document.getElementById("resultAtk");
    const resultDef = document.getElementById("resultDef");
    const resultHP = document.getElementById("resultHP");
    const resultHeal = document.getElementById("resultHeal");

    resultAtk.value = Math.floor((Number(atk99) + 100) / 100 * (Number(addAtkAll.value) + 100) / 100 * basicAtkAll.value);
    resultDef.value = Math.floor((Number(def99) + 100) / 100 * (Number(addDefAll.value) + 100) / 100 * basicDefAll.value);
    resultHP.value = Math.floor((Number(hp99) + 100) / 100 * (Number(addHPAll.value) + 100) / 100 * basicHPAll.value);
    resultHeal.value = Math.floor((Number(addHealAll.value) + 100) / 100 * basicHealAll.value);
    // 暴击
    const critCharacter = document.getElementById("critCharacter").value;
    const critWeapon = document.getElementById("critWeapon").value;
    const critWeapon2 = document.getElementById("critWeapon2").value;
    const critOthers = document.getElementById("critOthers").value;
    const critJewelry = document.getElementById("critJewelry").value;

    var critAll = document.getElementById("critAll");

    critAll.value = Number(critCharacter) + Number(critWeapon) + Number(critWeapon2) + Number(critOthers) + Number(critJewelry) + Number(reliCrit);
    // 秒韧计算
    const weaponCoefficient = document.getElementById("weaponCoefficient").value;

    var dpsNoCrit = document.getElementById("dpsNoCrit");
    var dpsGetCrit = document.getElementById("dpsGetCrit");
    var toughness = document.getElementById("toughness");
    var healGet = document.getElementById("healGet");

    let aaa,aab,aac,aad;
    aaa = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient));
    aab = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient) * (Number(critAll.value) + 100) / 100);
    aac = Math.floor((resultDef.value / 100 + 1) * resultHP.value);
    aad = Math.floor(resultHeal.value);
    dpsNoCrit.value = aaa.toLocaleString();
    dpsGetCrit.value = aab.toLocaleString();
    toughness.value = aac.toLocaleString();
    healGet.value = aad.toLocaleString();

    mianbanimg1 = document.getElementById("mianbanimg1");
    mianbanimg2 = document.getElementById("mianbanimg2");
    mianbanimg3 = document.getElementById("mianbanimg3");
    mianbanimg4 = document.getElementById("mianbanimg4");
    mianbanimg5 = document.getElementById("mianbanimg5");
    // 图片更换
    var name1 = selectedCharacter.textContent;
    var name2 = selectedWeapon.textContent;
    var name3 = selectedWeapon2.textContent;
    var name4 = selectedJewelry.textContent;
    var name5 = peripheralSelect.value;

    mianbanimg1.src = 'image/character/' + name1 + '.png';
    mianbanimg2.src = 'image/weapon/' + name2 + '.png';
    mianbanimg3.src = 'image/weapon/' + name3 + '.png';
    mianbanimg4.src = 'image/jewelry/' + name4 + '.png';
    mianbanimg5.src = 'image/peripheral/' + name5 + '.png';
}