// 将图鉴自动填满
window.onload = function() {
  const fullValuesButton = document.getElementById("fullValuesButton");
  
  fullValuesButton.addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='number']");
    const aTags = document.querySelectorAll("a[data-atlas]");
    
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = aTags[i].textContent;
    }

    const add1 = document.getElementById("add1");
    const seeadd1 = document.getElementById('seeadd1');
    const isHidden = add1.style.display === 'none';
    add1.style.display = isHidden ? 'block' : 'none';
    seeadd1.textContent = isHidden ? '收起图鉴信息' : '查看当前图鉴';
  });

  const emptyValuesButton = document.getElementById("emptyValuesButton");
  emptyValuesButton.addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='number']");
    
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  });

  const fillValuesButton = document.getElementById("fillValuesButton");
  fillValuesButton.addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='number']");
    const aTags = document.querySelectorAll("a[data-atlas]");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].value = aTags[i].textContent;
      }
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

const magicCard1 = document.getElementById('magicCard1');
const magicCard2 = document.getElementById('magicCard2');


// 更新已装备的对应触发图鉴
const addAtkGet = document.getElementById('addAtkGet');

selectedWeapon.addEventListener('change', updateGet);
shieldSelect.addEventListener('change', updateGet);   
rifle2Select.addEventListener('change', updateGet);   
jewelrySelect.addEventListener('change', updateGet);   
peripheralSelect.addEventListener('change', updateGet);   

magicCard1.addEventListener('change', updateGet);   
magicCard2.addEventListener('change', updateGet);  

function updateGet(){
    let atk3_1 = document.getElementById('atk3');  // 武器
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
      var relicEntry1 = document.getElementById('relicEntry1');
      var relicEntry2 = document.getElementById('relicEntry2');
      var relicEntry3 = document.getElementById('relicEntry3');
      if (relicEntry1.value !== 'none'|| relicEntry2.value !== 'none'|| relicEntry3.value !== 'none'){
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

  if (weaponSelect && weaponSelect.style) {
    // 将WeaponSelect内的所有select元素的display设置为none
    var weaponSelectSelects = weaponSelect.getElementsByTagName("select");
    for (var i = 0; i < weaponSelectSelects.length; i++) {
      if (weaponSelectSelects[i].style.display === "block"){
        weaponSelectSelects[i].style.display = "none";
        break
      }
    }
    if (selectElement) {
      // 将选择的武器类型的select元素的display设置为block
      selectElement.style.display = "block";
      }
  } else {
    // weaponSelect不存在或没有style属性
    // console.log("表格内无主武器(忽略)");
  }

  if (weapon2Select && weapon2Select.style) {
    // 将Weapon2Select内的所有select元素的display设置为none
    var weapon2SelectSelects = weapon2Select.getElementsByTagName("select");
    for (var i = 0; i < weapon2SelectSelects.length; i++) {
      if (weapon2SelectSelects[i].style.display === "block"){
        weapon2SelectSelects[i].style.display = "none";
        break
      }
    }
    if (selectElement2) {
      // 将选择的武器类型的select元素的display设置为block
      selectElement2.style.display = "block";
      }
  } else {
    // weapon2Select不存在或没有style属性
    // console.log("表格内无副武器(忽略)");
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

  const relicEntry11 = document.getElementById('relicEntry11');
  const entry11Value = document.getElementById('entry11Value');
  relicEntry11.addEventListener('input', function() {
    entry11Value.textContent = relicEntry11.value;
  });

  const relicEntry22 = document.getElementById('relicEntry22');
  const entry22Value = document.getElementById('entry22Value');
  relicEntry22.addEventListener('input', function() {
    entry22Value.textContent = relicEntry22.value;
  });

  const relicEntry33 = document.getElementById('relicEntry33');
  const entry33Value = document.getElementById('entry33Value');
  relicEntry33.addEventListener('input', function() {
    entry33Value.textContent = relicEntry33.value;
  });

})();


// 遗物主词条上限变化
const relicEntry1 = document.getElementById('relicEntry1');
const relicEntry11 = document.getElementById('relicEntry11');
const entry11Value = document.getElementById('entry11Value');

relicEntry1.addEventListener('change', function() {
  const selectedValue = relicEntry1.value;
  switch (selectedValue) {
    case 'none':
    case 'crit':
      relicEntry11.max = 3;
      break;
    case 'atk':
      relicEntry11.max = 7;
      break;
    case 'skill':
      relicEntry11.max = 11;
      break;
    default:
      relicEntry11.max = 3;
  }
  if (entry11Value.textContent > relicEntry11.max) {
    entry11Value.textContent = relicEntry11.max;
    }
  updateGet();
});

const relicEntry2 = document.getElementById('relicEntry2');
const relicEntry22 = document.getElementById('relicEntry22');
const entry22Value = document.getElementById('entry22Value');

relicEntry2.addEventListener('change', function() {
  const selectedValue = relicEntry2.value;
  switch (selectedValue) {
    case 'none':
    case 'crit':
      relicEntry22.max = 3;
      break;
    case 'atk':
      relicEntry22.max = 7;
      break;
    case 'skill':
      relicEntry22.max = 11;
      break;
    default:
      relicEntry22.max = 3;
  }
  if (entry22Value.textContent > relicEntry22.max) {
    entry22Value.textContent = relicEntry22.max;
    }
    updateGet();
});

const relicEntry3 = document.getElementById('relicEntry3');
const relicEntry33 = document.getElementById('relicEntry33');
const entry33Value = document.getElementById('entry33Value');

relicEntry3.addEventListener('change', function() {
  const selectedValue = relicEntry3.value;
  switch (selectedValue) {
    case 'none':
    case 'crit':
      relicEntry33.max = 3;
      break;
    case 'atk':
      relicEntry33.max = 7;
      break;
    case 'skill':
      relicEntry33.max = 11;
      break;
    default:
      relicEntry33.max = 3;
  }
  if (entry33Value.textContent > relicEntry33.max) {
    entry33Value.textContent = relicEntry33.max;
    }
    updateGet();
});

function critdamageselected(){
  var critDamage = document.getElementById('critDamage');
  var critDamageSelect = document.getElementById('critDamageSelect');
  var cDamge = critDamageSelect.value
  critDamage.value = cDamge;
}

function teamsCritSelected(){
  var teamsCrit = document.getElementById('teamsCrit');
  var teamsCritSelect = document.getElementById('teamsCritSelect');
  var tCrit = teamsCritSelect.value
  teamsCrit.value = tCrit;
}