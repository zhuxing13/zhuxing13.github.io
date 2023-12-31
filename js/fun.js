// 将图鉴自动填满
window.onload = function() {
  const fullValuesButton = document.getElementById("fullValuesButton");
  
  fullValuesButton.addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='number']");
    const aTags = document.querySelectorAll("a[data-atlas]");
    
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = aTags[i].textContent;
    }
  });
}
// 图鉴范围限制
document.querySelectorAll('input[type="number"]').forEach(function(input) {
  input.addEventListener('change', function(e) {
      var max = parseFloat(e.target.max);
      var min = parseFloat(e.target.min);
      var value = parseFloat(e.target.value);

      if (value > max) {
          e.target.value = max;
      } else if (value < min) {
          e.target.value = min;
      }
  });
});

// 获取
const selectedWeapon = document.getElementById('selectedWeapon');
const selectedWeapon2 = document.getElementById('selectedWeapon2');
const shieldSelect = document.getElementById('shieldSelect');
const rifle2Select = document.getElementById('rifle2Select');
const selectedCharacter = document.getElementById('selectedCharacter');
const charSelect = document.getElementById('charSelect');
const radioButtonsProperties = document.getElementsByName('roleProperties');
const radioButtonsOccupation = document.getElementsByName('roleOccupation');
const oneSelect = document.getElementById('oneSelect');
const twoSelect = document.getElementById('twoSelect');
const rifleSelect = document.getElementById('rifleSelect');
const scepterSelect = document.getElementById('scepterSelect');
const basketSelect = document.getElementById('basketSelect');
const archSelect = document.getElementById('archSelect');
const gloveSelect = document.getElementById('gloveSelect');
const clawSelect = document.getElementById('clawSelect');
const weaponType = document.getElementById('weaponType');
const weapon2Type = document.getElementById('weapon2Type');
const jewelrySelect = document.getElementById('jewelrySelect');
const peripheralSelect = document.getElementById('peripheralSelect');
const relicSelect = document.getElementById('relicSelect');
const magicCard1 = document.getElementById('magicCard1');
const magicCard2 = document.getElementById('magicCard2');


// 更新已装备的对应触发图鉴
const addAtkGet = document.getElementById('addAtkGet');
const addDefGet = document.getElementById('addDefGet');
const addHPGet = document.getElementById('addHPGet');

selectedWeapon.addEventListener('change', updateGet);
shieldSelect.addEventListener('change', updateGet);   
rifle2Select.addEventListener('change', updateGet);   
jewelrySelect.addEventListener('change', updateGet);   
peripheralSelect.addEventListener('change', updateGet);   
relicSelect.addEventListener('change', updateGet);   
magicCard1.addEventListener('change', updateGet);   
magicCard2.addEventListener('change', updateGet);  

function updateGet(){
    let atk3_1 = document.getElementById('atk3');  // 武器
    let def3_1 = document.getElementById('def3');  // 饰品
    let hp3_1 = document.getElementById('hp3');    // 盾牌
    let atk5_2 = document.getElementById('atk5');  // 遗物
    let atk6_3 = document.getElementById('atk6');  // 魔卡
    let atk7_4 = document.getElementById('atk7');  // 周边
    var addAtkGet1,addAtkGet2,addAtkGet3,addAtkGet4;
    setTimeout(function() {
      if (selectedWeapon.textContent !== '未装备'){
        addAtkGet1 = atk3_1.value
      }else{
          addAtkGet1 = 0
      }
      
      if (relicSelect.value !== '未装备'){
          addAtkGet2 = atk5_2.value
      }else{
          addAtkGet2 = 0
      }

      if (magicCard1.value !== '未装备' || magicCard2.value !== '未装备'){
          addAtkGet3 = atk6_3.value
      }else{
          addAtkGet3 = 0
      }

      if (peripheralSelect.value !== '未装备'){
          addAtkGet4 = atk7_4.value
      }else{
          addAtkGet4 = 0
      }

      addAtkGet.value = Number(addAtkGet1)+Number(addAtkGet2)+Number(addAtkGet3)+Number(addAtkGet4);
      
      if (jewelrySelect.value !== '未装备'){
          addDefGet.value = def3_1.value
      }else{
          addDefGet.value = 0
      }

      if (selectedWeapon2.textContent !== '未装备' && weapon2Type.value !== '无' ){
          addHPGet.value = hp3_1.value
      }else{
          addHPGet.value = 0
      }
  }, 200); 
    
}


// 筛选角色
function updateSelectedCharacter() {
  const selectedItem = charSelect.options[charSelect.selectedIndex];
  const item = selectedItem.textContent;
  selectedCharacter.textContent = item;
}

function filterSelectOptions() {
  const selectedValueProperties = document.querySelector('input[name="roleProperties"]:checked').value;
  const selectedValueOccupation = document.querySelector('input[name="roleOccupation"]:checked').value;

  Array.from(charSelect.options).forEach((option) => {
    const roleProperties = option.getAttribute('data-properties');
    const roleOccupation = option.getAttribute('data-occupation');

    const showProperties = (selectedValueProperties === 'all' || selectedValueProperties === roleProperties);
    const showOccupation = (selectedValueOccupation === 'all' || selectedValueOccupation === roleOccupation);

    if (option.value !== '') {
      if (showProperties && showOccupation) {
        option.style.display = '';
      } else {
        option.style.display = 'none';
      }
    }
  });

  updateSelectedCharacter(); 
}


// 更新选定的角色，并且移动select元素
function selectCharacter() {
  // 首先更新角色
  updateSelectedCharacter();
  // 然后移动select元素
  setTimeout(moveWeaponSelect, 100);
  // 最后，异步更新武器，确保它们在select元素移动之后进行
  setTimeout(updateSelectedWeapon, 100);  // 更新主武器
  setTimeout(updateSelectedWeapon2, 100); // 更新副武器
}

// 移动主副武器select位置
function moveWeaponSelect() {
  var selectedCharacter = charSelect.value;
  var weaponType = characterAttributes[selectedCharacter].weaponType;
  var weapon2Type = characterAttributes[selectedCharacter].weapon2Type;
  var selectElement = document.getElementById(weaponType + "Select");
  var selectElement2 = document.getElementById(weapon2Type + "Select");

  switch (weaponType) {
    case "弓":
      selectElement = document.getElementById("archSelect");
      break;
    case "单手剑":
      selectElement = document.getElementById("oneSelect");
      break;
    case "双手剑":
      selectElement = document.getElementById("twoSelect");
      break;
    case "步枪":
      selectElement = document.getElementById("rifleSelect");
      break;
    case "权杖":
      selectElement = document.getElementById("scepterSelect");
      break;
    case "篮子":
      selectElement = document.getElementById("basketSelect");
      break;
    case "手套":
      selectElement = document.getElementById("gloveSelect");
      break;
    case "爪":
      selectElement = document.getElementById("clawSelect");
      break;
    default:
      selectElement = null;
  }

  switch (weapon2Type) {
    case "盾牌":
      selectElement2 = document.getElementById("shieldSelect");
      break
    case "步枪":
      selectElement2 = document.getElementById("rifle2Select");
      break
    default:
      selectElement2 = null;
  }

  var weaponSelect = document.getElementById("WeaponSelect");
  var weapon2Select = document.getElementById("Weapon2Select");
  var select2 = document.getElementById("select2");

  if (weaponSelect && weaponSelect.firstChild) {
    // 将WeaponSelect中的select元素移动到select2元素中
    select2.appendChild(weaponSelect.firstChild);
  } else {
    // selectElement不存在，或者没有firstChild
    console.log("表格内无主武器(忽略)")
  }
  if (weapon2Select && weapon2Select.firstChild) {
    // 将WeaponSelect中的select元素移动到select2元素中
    select2.appendChild(weapon2Select.firstChild);
  } else {
    // selectElement不存在，或者没有firstChild
    console.log("表格内无副武器(忽略)")
  }

  if (selectElement) {
    // 将新的select元素移动到WeaponSelect中
    weaponSelect.appendChild(selectElement);
  } else {
    console.log("主武器类型不存在（忽略）");
  }
  if (selectElement2) {
    // 将新的select元素移动到WeaponSelect中
    weapon2Select.appendChild(selectElement2);
  } else {
    console.log("副武器类型不存在（忽略）");
  }

  // 更新selectedWeapon的文本
  document.getElementById("selectedWeapon").textContent = weaponType;
  document.getElementById("selectedWeapon2").textContent = weapon2Type;
}


// charSelect改变时的事件处理程序
charSelect.addEventListener('change', selectCharacter);

document.addEventListener('DOMContentLoaded', (event) => {
  // DOM完全加载后的初始化代码
});


radioButtonsProperties.forEach((radioButton) => {
  radioButton.addEventListener('click', filterSelectOptions);
});

radioButtonsOccupation.forEach((radioButton) => {
  radioButton.addEventListener('click', filterSelectOptions);
});

filterSelectOptions();




// 主武器更新
function updateSelectedWeapon() {
  const weaponValue = weaponType.value;
  if (weaponValue === '未选择角色') {
    selectedWeapon.textContent = '未装备';
  } else if (weaponValue === '单手剑') {
    selectedWeapon.textContent = oneSelect.value;
  } else if (weaponValue === '双手剑') {
    selectedWeapon.textContent = twoSelect.value;
  } else if (weaponValue === '步枪') {
    selectedWeapon.textContent = rifleSelect.value;
  } else if (weaponValue === '权杖') {
    selectedWeapon.textContent = scepterSelect.value;
  } else if (weaponValue === '篮子') {
    selectedWeapon.textContent = basketSelect.value;
  } else if (weaponValue === '弓') {
    selectedWeapon.textContent = archSelect.value;
  } else if (weaponValue === '手套') {
    selectedWeapon.textContent = gloveSelect.value;
  } else if (weaponValue === '爪') {
    selectedWeapon.textContent = clawSelect.value;
  }
  updateGet();
}

oneSelect.addEventListener('change', updateSelectedWeapon);
twoSelect.addEventListener('change', updateSelectedWeapon);
rifleSelect.addEventListener('change', updateSelectedWeapon);
scepterSelect.addEventListener('change', updateSelectedWeapon);
basketSelect.addEventListener('change', updateSelectedWeapon);
archSelect.addEventListener('change', updateSelectedWeapon);
gloveSelect.addEventListener('change', updateSelectedWeapon);
clawSelect.addEventListener('change', updateSelectedWeapon);

updateSelectedWeapon();

// 副武器更新
function updateSelectedWeapon2() {
  if (weapon2Type.value === '无') {
    selectedWeapon2.textContent = '未装备';
  }else if (weapon2Type.value === '盾牌') {
    selectedWeapon2.textContent = shieldSelect.value;
  } else if (weapon2Type.value === '步枪') {
    selectedWeapon2.textContent = rifle2Select.value;
  }
}
shieldSelect.addEventListener('change', updateSelectedWeapon2);
rifle2Select.addEventListener('change', updateSelectedWeapon2);

updateSelectedWeapon2();

// 饰品更新

function updateSelectedJewelry() {
  const selectedJewelry = document.getElementById('selectedJewelry');
  selectedJewelry.textContent = jewelrySelect.value;
}
jewelrySelect.addEventListener('change', updateSelectedJewelry);

updateSelectedJewelry();




// 显示等级滚动条的当前等级
(function() {
  const levelInput = document.getElementById('levelInput');
  const levelValue = document.getElementById('levelValue');
  levelInput.addEventListener('input', function() {
    levelValue.textContent = levelInput.value;
  });

  const level2Input = document.getElementById('level2Input');
  const level2Value = document.getElementById('level2Value');
  level2Input.addEventListener('input', function() {
    level2Value.textContent = level2Input.value;
  });

  const level3Input = document.getElementById('level3Input');
  const level3Value = document.getElementById('level3Value');
  level3Input.addEventListener('input', function() {
    level3Value.textContent = level3Input.value;
  });

  const level4Input = document.getElementById('level4Input');
  const level4Value = document.getElementById('level4Value');
  level4Input.addEventListener('input', function() {
    level4Value.textContent = level4Input.value;
  });

})();


