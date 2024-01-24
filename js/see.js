// 显示收起信息框
const seeadd1 = document.getElementById('seeadd1');
const add1 = document.getElementById('add1');
seeadd1.addEventListener('click', function() {
  const isHidden = add1.style.display === 'none';
  add1.style.display = isHidden ? 'block' : 'none';
  seeadd1.textContent = isHidden ? '收起图鉴信息' : '查看当前图鉴';
});

const seeadd2 = document.getElementById('seeadd2');
const add2 = document.getElementById('add2');

seeadd2.addEventListener('click', function() {
  const isHidden = add2.style.display === 'none';
  add2.style.display = isHidden ? 'block' : 'none';
  seeadd2.textContent = isHidden ? '收起守护者基地' : '查看守护者基地';
});

const attributeSections = [
  { buttonId: 'seeCharacterAttributes', sectionId: 'CharacterAttributes', buttonText: '角色属性' },
  { buttonId: 'seeWeaponAttributes', sectionId: 'WeaponAttributes', buttonText: '主武器属性' },
  { buttonId: 'seeWeapon2Attributes', sectionId: 'Weapon2Attributes', buttonText: '副武器属性' },
  { buttonId: 'seeJewelryAttributes', sectionId: 'JewelryAttributes', buttonText: '饰品属性' },
  { buttonId: 'seeOthersAttributes', sectionId: 'OthersAttributes', buttonText: '杂项属性' }
];

attributeSections.forEach(section => {
  const button = document.getElementById(section.buttonId);
  const sectionElement = document.getElementById(section.sectionId);

  button.addEventListener('click', function() {
    const isHidden = sectionElement.style.display === 'none';

    attributeSections.forEach(otherSection => {
      if (otherSection.sectionId !== section.sectionId) {
        const otherSectionElement = document.getElementById(otherSection.sectionId);
        otherSectionElement.style.display = 'none';
        const otherButton = document.getElementById(otherSection.buttonId);
        otherButton.textContent = '查看' + otherSection.buttonText;
      }
    });

    sectionElement.style.display = isHidden ? 'block' : 'none';
    button.textContent = isHidden ? '收起' + section.buttonText : '查看' + section.buttonText;
  });
});
