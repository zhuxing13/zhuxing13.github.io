// 将图鉴自动填满
window.onload = function() {
  const fullValuesButton = document.getElementById("fullValuesButton");
  
  fullValuesButton.addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='textAtlas']");
    const aTags = document.querySelectorAll("a[data-atlas]");
    
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = aTags[i].textContent;
    }
  });
}



// 筛选角色
const selectedCharacter = document.getElementById('selectedCharacter');
const charSelect = document.getElementById('charSelect');
const radioButtonsProperties = document.getElementsByName('roleProperties');
const radioButtonsOccupation = document.getElementsByName('roleOccupation');

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

// 更新选定的角色
function selectCharacter() {
  updateSelectedCharacter();
  setTimeout(updateSelectedWeapon, 100);
}

charSelect.addEventListener('change', selectCharacter);

radioButtonsProperties.forEach((radioButton) => {
  radioButton.addEventListener('click', filterSelectOptions);
});

radioButtonsOccupation.forEach((radioButton) => {
  radioButton.addEventListener('click', filterSelectOptions);
});

filterSelectOptions();




// 主武器更新
const oneSelect = document.getElementById('oneSelect');
const twoSelect = document.getElementById('twoSelect');
const rifleSelect = document.getElementById('rifleSelect');
const scepterSelect = document.getElementById('scepterSelect');
const basketSelect = document.getElementById('basketSelect');
const archSelect = document.getElementById('archSelect');
const gloveSelect = document.getElementById('gloveSelect');
const clawSelect = document.getElementById('clawSelect');


function updateSelectedWeapon() {
  const weaponType = document.getElementById('weaponType');
  const selectedWeapon = document.getElementById('selectedWeapon');
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
})();