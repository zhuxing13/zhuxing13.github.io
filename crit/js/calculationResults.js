// 计算面板
function CalculationResults(){
// 总白值
    const basicAtkCharacter = document.getElementById("basicAtkCharacter").value;
    if (basicAtkCharacter === "未选择角色"){
        alert('未选择角色！');
        return
    }

    const basicAtkWeapon = document.getElementById("basicAtkWeapon").value;

    //计算白值
    var basicAtkAll = document.getElementById("basicAtkAll");

    basicAtkAll.value = basicAtkCharacter * basicAtkWeapon / 100;


// 总加成
    //固定图鉴加成
    const atk1 = document.getElementById("atk1").value;
    const atk2 = document.getElementById("atk2").value;
    const atk4 = document.getElementById("atk4").value;
    
    //杂项图鉴（其他地方已计算，此处用于计算练度）
    const atk3 = document.getElementById("atk3").value;
    const atk5 = document.getElementById("atk5").value;
    const atk6 = document.getElementById("atk6").value;
    const atk7 = document.getElementById("atk7").value;
    
    //最大图鉴
    const atk1full = document.getElementById("atk1full").textContent;
    const atk2full = document.getElementById("atk2full").textContent;
    const atk3full = document.getElementById("atk3full").textContent;
    const atk4full = document.getElementById("atk4full").textContent;
    const atk5full = document.getElementById("atk5full").textContent;
    const atk6full = document.getElementById("atk6full").textContent;
    const atk7full = document.getElementById("atk7full").textContent;

    //练度计算
    var atkMasteryDegree = document.getElementById("atkMasteryDegree");

    var atkValueDegree = ((Number(atk1)+Number(atk2)+Number(atk3)+Number(atk4)+Number(atk5)+Number(atk6)+Number(atk7))/(Number(atk1full)+Number(atk2full)+Number(atk3full)+Number(atk4full)+Number(atk5full)+Number(atk6full)+Number(atk7full))*100);

    if (atkValueDegree === 100){
        atkMasteryDegree.value = atkValueDegree + "%";
    }else{
        atkMasteryDegree.value = atkValueDegree.toFixed(1) + "%";
    }


    //攻击加成
    const addAtkCharacter = document.getElementById("addAtkCharacter").value;
    const addAtkWeapon = document.getElementById("addAtkWeapon").value;
    const addAtkWeapon2 = document.getElementById("addAtkWeapon2").value;
    const addAtkOthers = document.getElementById("addAtkOthers").value;
    const addAtkOthers2 = document.getElementById("addAtkOthers2").value;
    const addAtkJewelry = document.getElementById("addAtkJewelry").value;
    const addAtkGet = document.getElementById("addAtkGet").value;

    var addAtkAll = document.getElementById("addAtkAll");

    var addatkall = Number(atk1) + Number(atk2) + Number(atk4) + Number(addAtkCharacter) + Number(addAtkWeapon) + Number(addAtkWeapon2) + Number(addAtkOthers) + Number(addAtkOthers2) + Number(addAtkJewelry) + Number(addAtkGet);

    //计算遗物
    const entry11Value = document.getElementById("entry11Value").textContent;
    const entry22Value = document.getElementById("entry22Value").textContent;
    const entry33Value = document.getElementById("entry33Value").textContent;
    const relicEntry1 = document.getElementById("relicEntry1").value;
    const relicEntry2 = document.getElementById("relicEntry2").value;
    const relicEntry3 = document.getElementById("relicEntry3").value;

    var relicAtk = 0;
    var reliCrit = 0;
    var relicSkill = 0;
    switch (relicEntry1) {
        case 'crit':
            reliCrit += Number(entry11Value);
            break;
        case 'atk':
            relicAtk += Number(entry11Value);
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
        case 'skill':
            relicSkill += Number(entry33Value);
            break;
        }

    addAtkAll.value = addatkall + relicAtk;

// 攻击魔卡收益计算
const atk7C1 = document.getElementById("atk7C1");
const atk7C2 = document.getElementById("atk7C2");
const atk5C1 = document.getElementById("atk5C1");
const atk5C2 = document.getElementById("atk5C2");

let aall = addatkall + relicAtk - Number(addAtkOthers)
let a7c1, a7c2, a5c1, a5c2;
a7c1 = (7 / (aall + 100) * 100).toFixed(5);
a7c2 = (7 / (aall + 107) * 100).toFixed(5);
a5c1 = (5 / (aall + 100) * 100).toFixed(5);
a5c2 = (5 / (aall + 105) * 100).toFixed(5);
atk7C1.value = a7c1;
atk7C2.value = a7c2;
atk5C1.value = a5c1;
atk5C2.value = a5c2;



// 最终结果
    //守护者基地
    const atk99 = document.getElementById("atk99").value;

    const resultAtk = document.getElementById("resultAtk");

    resultAtk.value = Math.floor((Number(atk99) + 100) / 100 * (Number(addAtkAll.value) + 100) / 100 * basicAtkAll.value);

    // 暴击
    const critCharacter = document.getElementById("critCharacter").value;
    const critWeapon = document.getElementById("critWeapon").value;
    const critWeapon2 = document.getElementById("critWeapon2").value;
    const critOthers = document.getElementById("critOthers").value;
    const critJewelry = document.getElementById("critJewelry").value;

    var critAll = document.getElementById("critAll");

    critAll.value = Number(critCharacter) + Number(critWeapon) + Number(critWeapon2) + Number(critOthers) + Number(critJewelry) + Number(reliCrit);

// 暴击魔卡收益计算
const crit3C1 = document.getElementById("crit3C1");
const crit3C2 = document.getElementById("crit3C2");
const critDamage = Number(document.getElementById("critDamage").value) / 100;
const teamsCrit = document.getElementById("teamsCrit").value;

let call = (Number(critAll.value) - Number(critOthers) + Number(teamsCrit)) / 100
let c1 = Math.min(call + 0.03, 1)
let c2 = Math.min(call + 0.06, 1)
call = Math.min(call, 1)
let c3c1,c3c2;
c3c1 = (((c1 * critDamage + 1 - c1) / (call * critDamage + 1 - call) - 1) * 100).toFixed(5);
c3c2 = ((((c2 * critDamage + 1 - c2) / (c1 * critDamage + 1 - c1)) - 1) * 100).toFixed(5);
crit3C1.value = c3c1;
crit3C2.value = c3c2;

    // 秒伤计算
    const weaponCoefficient = document.getElementById("weaponCoefficient").value;

    var dpsNoCrit = document.getElementById("dpsNoCrit");
    var dpsGetCrit = document.getElementById("dpsGetCrit");


    let aaa,aab;
    aaa = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient));
    aab = Math.floor(Number(resultAtk.value) * Number(weaponCoefficient) * (Number(critAll.value) + 100) / 100);

    dpsNoCrit.value = aaa.toLocaleString();
    dpsGetCrit.value = aab.toLocaleString();

}