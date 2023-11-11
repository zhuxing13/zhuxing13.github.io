function toggleDropdown(id) {
    const dropdownList = document.getElementById(id + '-list');
    dropdownList.style.display = (dropdownList.style.display === 'none') ? 'block' : 'none';
}

function selectEquip(item, selectedItemId) {
    const selectedItem = document.getElementById(selectedItemId);
    selectedItem.textContent = item;
  }
  

function updateTextFields() {
    const text1Input = document.getElementById('atkText');
    const text2Input = document.getElementById('defText');
    const text3Input = document.getElementById('HPText');

    const selectedShield = document.getElementById('shieldSelect').value;
    const selectedJewelry = document.getElementById('jewelrySelect').value;
    const selectedPeripheral = document.getElementById('peripheralSelect').value;

    const shieldValues = shieldAttributes[selectedShield];
    const jewelryValues = jewelryAttributes[selectedJewelry];
    const peripheralValues = peripheralAttributes[selectedPeripheral];

    const text1Print = shieldValues.addAtk + jewelryValues.addAtk + peripheralValues.addAtk
    text1Input.value = text1Print;

    const text2Print = shieldValues.addDef + jewelryValues.addDef + peripheralValues.addDef
    text2Input.value = text2Print;

    const text3Print = shieldValues.addHP + jewelryValues.addHP + peripheralValues.addHP
    text3Input.value = text3Print;
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

const optionElements = document.querySelectorAll('table td');
const radioButtonsProperties = document.getElementsByName('roleProperties');
const radioButtonsOccupation = document.getElementsByName('roleOccupation');
const selectedCharacter = document.getElementById('selectedCharacter');

function filterTableOptions() {
  const selectedValueProperties = document.querySelector('input[name="roleProperties"]:checked').value;
  const selectedValueOccupation = document.querySelector('input[name="roleOccupation"]:checked').value;

  optionElements.forEach((optionElement) => {
    const roleProperties = optionElement.getAttribute('roleProperties');
    const roleOccupation = optionElement.getAttribute('roleOccupation');

    const showProperties = (selectedValueProperties === 'all' || selectedValueProperties === roleProperties);
    const showOccupation = (selectedValueOccupation === 'all' || selectedValueOccupation === roleOccupation);

    if (optionElement.id === 'cha') {
      if (showProperties && showOccupation) {
        optionElement.parentNode.style.display = '';
      } else {
        optionElement.parentNode.style.display = 'none';
      }
    }
  });
}


function selectCharacter(item) {
  selectedCharacter.textContent = item;
}

radioButtonsProperties.forEach((radioButton) => {
  radioButton.addEventListener('click', filterTableOptions);
});

radioButtonsOccupation.forEach((radioButton) => {
  radioButton.addEventListener('click', filterTableOptions);
});

filterTableOptions();

function displayWeaponInfo() {
  const weaponTypeInput = document.getElementById('weaponTypeInput').value;
  const tableBody = document.getElementById('weaponTableBody');

  tableBody.innerHTML = '';

  let weaponAttributes = {};

  if (weaponTypeInput === '双手剑') {
    weaponAttributes = twoWeaponAttributes;
  } else if (weaponTypeInput === '单手剑') {
    weaponAttributes = oneWeaponAttributes;
  } else if (weaponTypeInput === '弓') {
    weaponAttributes = archWeaponAttributes;
  } else if (weaponTypeInput === '篮子') {
    weaponAttributes = basketWeaponAttributes;
  } else if (weaponTypeInput === '爪') {
    weaponAttributes = clawWeaponAttributes;
  } else if (weaponTypeInput === '手套') {
    weaponAttributes = gloveWeaponAttributes;
  } else if (weaponTypeInput === '步枪') {
    weaponAttributes = rifleWeaponAttributes;
  } else if (weaponTypeInput === '权杖') {
    weaponAttributes = scepterWeaponAttributes;
  }

  for (const weaponName in weaponAttributes) {
    const weaponData = weaponAttributes[weaponName];

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = weaponName;
    row.appendChild(nameCell);

    const rolePropertiesCell = document.createElement('td');
    rolePropertiesCell.textContent =weaponData.roleProperties;
    row.appendChild(rolePropertiesCell);

    const atkCell = document.createElement('td');
    atkCell.textContent = weaponData.basicAtk * weaponData.weaponCoefficient;
    row.appendChild(atkCell);

    const critCell = document.createElement('td');
    critCell.textContent = weaponData.crit;
    row.appendChild(critCell);

    const defCell = document.createElement('td');
    defCell.textContent = weaponData.addDef;
    row.appendChild(defCell);

    const hpCell = document.createElement('td');
    hpCell.textContent = weaponData.addHP;
    row.appendChild(hpCell);

    tableBody.appendChild(row);
  }
}