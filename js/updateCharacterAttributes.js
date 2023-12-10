// 角色数据随等级变化
const levelValue = document.getElementById('levelValue');
const basicAtkCharacter = document.getElementById('basicAtkCharacter');
const basicDefCharacter = document.getElementById('basicDefCharacter');
const basicHPCharacter = document.getElementById('basicHPCharacter');
const basicHealCharacter = document.getElementById('basicHealCharacter');
const critCharacter = document.getElementById('critCharacter');
const addAtkCharacter = document.getElementById('addAtkCharacter');
const addDefCharacter = document.getElementById('addDefCharacter');
const addHPCharacter = document.getElementById('addHPCharacter');
const addHealCharacter = document.getElementById('addHealCharacter');


const observer = new MutationObserver(updateCharacterAttributes);
const config = { attributes: true, childList: true, subtree: true };

observer.observe(selectedCharacter, config);
observer.observe(levelValue, config);

function updateCharacterAttributes() {
  const character = selectedCharacter.textContent;
  const level = parseInt(levelValue.textContent);

  let atkCoefficient, defCoefficient, hpCoefficient;
  
  if (level <= 83) {
    atkCoefficient = Math.pow(1.02, level - 1);
    defCoefficient = Math.pow(1.02, level - 1);
    hpCoefficient = Math.pow(1.0404, level - 1);
  } else {
    const lvl83AtkCoefficient = Math.pow(1.02, 82);
    const lvl83DefCoefficient = Math.pow(1.02, 82);
    const lvl83HpCoefficient = Math.pow(1.0404, 82);
    atkCoefficient = lvl83AtkCoefficient * Math.pow(1.026, level - 83);
    defCoefficient = lvl83DefCoefficient * Math.pow(1.018, level - 83);
    hpCoefficient = lvl83HpCoefficient * Math.pow(1.0363, level - 83);
  }

  if (character === '选择角色') {
    basicAtkCharacter.value = '未选择角色';
    basicDefCharacter.value = '未选择角色';
    basicHPCharacter.value = '未选择角色';
    basicHealCharacter.value = '未选择角色';
    critCharacter.value = '未选择角色';
    addAtkCharacter.value = '未选择角色';
    addDefCharacter.value = '未选择角色';
    addHPCharacter.value = '未选择角色';
    addHealCharacter.value = '未选择角色';
  } else {
    // const roleProperties = character.toLowerCase();
    const basicAtkA = characterAttributes[character].basicAtk;
    const basicDefA = characterAttributes[character].basicDef;
    const basicHPA = characterAttributes[character].basicHP;
    const basicHealA = characterAttributes[character].basicHeal;
    const critA = characterAttributes[character].crit;
    const addAtkA = characterAttributes[character].addAtk;
    const addDefA = characterAttributes[character].addDef;
    const addHPA = characterAttributes[character].addHP;
    const addHealA = characterAttributes[character].addHeal;

    basicAtkCharacter.value = Math.floor(basicAtkA * atkCoefficient);
    basicDefCharacter.value = Math.floor(basicDefA * defCoefficient);
    basicHPCharacter.value = Math.floor(basicHPA * hpCoefficient);
    basicHealCharacter.value = basicHealA;
    critCharacter.value = critA;
    addAtkCharacter.value = addAtkA;
    addDefCharacter.value = addDefA;
    addHPCharacter.value = addHPA;
    addHealCharacter.value = addHealA;
    weaponType.value = characterAttributes[character].weaponType;
    weapon2Type.value = characterAttributes[character].weapon2Type;
  }

}