// 获取WeaponSelect元素
var weaponSelect = document.getElementById('WeaponSelect');

// 创建一个MutationObserver实例
var observerimgWeapon = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      // 当WeaponSelect内的元素发生变化时执行的操作
      updateImgElement();
    }
  });
});

// 配置MutationObserver监听的选项
var observerConfig = {
  childList: true,
  subtree: true
};

// 开始观察WeaponSelect元素的变化
observerimgWeapon.observe(weaponSelect, observerConfig);

// 监听WeaponSelect元素内的change事件
weaponSelect.addEventListener('change', function(event) {
  updateImgElement();
});

// 更新img元素的src属性
function updateImgElement() {
  var selectElement = weaponSelect.querySelector('select');
  if (selectElement) {
    var selectedValue = selectElement.value;
    var imgElement = document.querySelector('.weaponimage');
    imgElement.src = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
  }
}
