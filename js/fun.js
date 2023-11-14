function toggleDropdown(id) {
    const dropdownList = document.getElementById(id + '-list');
    dropdownList.style.display = (dropdownList.style.display === 'none') ? 'block' : 'none';
}

function selectEquip(item, selectedItemId) {
    const selectedItem = document.getElementById(selectedItemId);
    selectedItem.textContent = item;
  }
  

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

const selectedCharacter = document.getElementById('selectedCharacter');
const charSelect = document.getElementById('charSelect');
const radioButtonsProperties = document.getElementsByName('roleProperties');
const radioButtonsOccupation = document.getElementsByName('roleOccupation');

function selectCharacter() {
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
}

charSelect.addEventListener('change', selectCharacter);

radioButtonsProperties.forEach((radioButton) => {
    radioButton.addEventListener('click', filterSelectOptions);
});

radioButtonsOccupation.forEach((radioButton) => {
    radioButton.addEventListener('click', filterSelectOptions);
});

filterSelectOptions();

(function() {
  const levelInput = document.getElementById('levelInput');
  const levelValue = document.getElementById('levelValue');

  levelInput.addEventListener('input', function() {
    levelValue.textContent = levelInput.value;
  });
})();


  const levelValue = document.getElementById('levelValue');
  const basicAtkCharacter = document.getElementById('basicAtkCharacter');
  const basicDefCharacter = document.getElementById('basicDefCharacter');
  const basicHPCharacter = document.getElementById('basicHPCharacter');

  // 监听 selectedCharacter 和 levelValue 的变化
  selectedCharacter.addEventListener('DOMSubtreeModified', updateCharacterAttributes);
  levelValue.addEventListener('DOMSubtreeModified', updateCharacterAttributes);

  // 更新角色属性值
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
    } else {
      const roleProperties = character.toLowerCase();
      const basicAtk = characterAttributes[roleProperties].basicAtk;
      const basicDef = characterAttributes[roleProperties].basicDef;
      const basicHP = characterAttributes[roleProperties].basicHP;

      basicAtkCharacter.value = Math.floor(basicAtk * atkCoefficient);
      basicDefCharacter.value = Math.floor(basicDef * defCoefficient);
      basicHPCharacter.value = Math.floor(basicHP * hpCoefficient);
    }
  }