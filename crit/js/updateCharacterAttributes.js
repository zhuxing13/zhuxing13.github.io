// 角色数据随等级变化
const levelValue = document.getElementById('levelValue');
const basicAtkCharacter = document.getElementById('basicAtkCharacter');
const critCharacter = document.getElementById('critCharacter');
const addAtkCharacter = document.getElementById('addAtkCharacter');


const observer = new MutationObserver(updateCharacterAttributes);
const config = { attributes: true, childList: true, subtree: true };

observer.observe(selectedCharacter, config);
observer.observe(levelValue, config);

function updateCharacterAttributes() {
  const character = selectedCharacter.textContent;
  const level = parseInt(levelValue.textContent);

  let atkCoefficient;
  
  if (level <= 83) {
    atkCoefficient = Math.pow(1.02, level - 1);

  } else {
    const lvl83AtkCoefficient = Math.pow(1.02, 82);

    atkCoefficient = lvl83AtkCoefficient * Math.pow(1.026, level - 83);

  }

  if (character === '选择角色') {
    basicAtkCharacter.value = '未选择角色';
    critCharacter.value = '未选择角色';
    addAtkCharacter.value = '未选择角色';

  } else {

    const basicAtkA = characterAttributes[character].basicAtk;

    const critA = characterAttributes[character].crit;
    const addAtkA = characterAttributes[character].addAtk;

    basicAtkCharacter.value = Math.floor(basicAtkA * atkCoefficient);

    critCharacter.value = critA;

    addAtkCharacter.value = addAtkA;

    weaponType.value = characterAttributes[character].weaponType;
    weapon2Type.value = characterAttributes[character].weapon2Type;
  }

}