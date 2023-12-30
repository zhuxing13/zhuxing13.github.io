// 显示收起信息框
const seeadd1 = document.getElementById('seeadd1');
const add1 = document.getElementById('add1');
seeadd1.addEventListener('click', function() {
  const isHidden = add1.style.display === 'none';
  add1.style.display = isHidden ? 'block' : 'none';
  seeadd1.textContent = isHidden ? '收起图鉴信息' : '显示当前图鉴';
});

const seeadd2 = document.getElementById('seeadd2');
const add2 = document.getElementById('add2');

seeadd2.addEventListener('click', function() {
  const isHidden = add2.style.display === 'none';
  add2.style.display = isHidden ? 'block' : 'none';
  seeadd2.textContent = isHidden ? '收起守护者基地' : '显示守护者基地';
});

const seeCharacterAttributes = document.getElementById('seeCharacterAttributes');
const CharacterAttributes = document.getElementById('CharacterAttributes');
seeCharacterAttributes.addEventListener('click', function() {
  const isHidden = CharacterAttributes.style.display === 'none';
  CharacterAttributes.style.display = isHidden ? 'block' : 'none';
  seeCharacterAttributes.textContent = isHidden ? '收起角色属性' : '查看角色属性';
});

const seeWeaponAttributes = document.getElementById('seeWeaponAttributes');
const WeaponAttributes = document.getElementById('WeaponAttributes');
seeWeaponAttributes.addEventListener('click', function() {
  const isHidden = WeaponAttributes.style.display === 'none';
  WeaponAttributes.style.display = isHidden ? 'block' : 'none';
  seeWeaponAttributes.textContent = isHidden ? '收起主武器属性' : '查看主武器属性';
});

const seeWeapon2Attributes = document.getElementById('seeWeapon2Attributes');
const Weapon2Attributes = document.getElementById('Weapon2Attributes');
seeWeapon2Attributes.addEventListener('click', function() {
  const isHidden = Weapon2Attributes.style.display === 'none';
  Weapon2Attributes.style.display = isHidden ? 'block' : 'none';
  seeWeapon2Attributes.textContent = isHidden ? '收起副武器属性' : '查看副武器属性';
});

const seeJewelryAttributes = document.getElementById('seeJewelryAttributes');
const JewelryAttributes = document.getElementById('JewelryAttributes');
seeJewelryAttributes.addEventListener('click', function() {
  const isHidden = JewelryAttributes.style.display === 'none';
  JewelryAttributes.style.display = isHidden ? 'block' : 'none';
  seeJewelryAttributes.textContent = isHidden ? '收起饰品属性' : '查看饰品属性';
});