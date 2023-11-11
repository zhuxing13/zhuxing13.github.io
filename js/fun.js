function toggleDropdown(id) {
    const dropdownList = document.getElementById(id + '-list');
    dropdownList.style.display = (dropdownList.style.display === 'none') ? 'block' : 'none';
}

function selectEquip(item, selectedItemId) {
    const selectedItem = document.getElementById(selectedItemId);
    selectedItem.textContent = item;
  }
  

function updateTextFields() {
    const text1Input = document.getElementById('text1');
    const text2Input = document.getElementById('text2');
    const text3Input = document.getElementById('text3');

    const selectedItem1 = document.getElementById('selected-item1').textContent;
    const selectedItem2 = document.getElementById('selected-item2').textContent;
    const selectedItem3 = document.getElementById('selected-item3').textContent;

    const shieldValues = shieldAttributes[selectedItem1];
    const jewelryValues = jewelryAttributes[selectedItem2];
    const peripheralValues = peripheralAttributes[selectedItem3];

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