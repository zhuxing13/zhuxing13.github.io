// 获取WeaponSelect元素
var weaponSelect = document.getElementById('WeaponSelect');
var weapon2Select = document.getElementById('Weapon2Select')

// 创建一个MutationObserver实例
var observerimgWeapon = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      // 当WeaponSelect内的元素发生变化时执行的操作
      updateImgElement();
    }
  });
});
var observerimgWeapon2 = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      // 当WeaponSelect内的元素发生变化时执行的操作
      updateImg2Element();
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
observerimgWeapon2.observe(weapon2Select, observerConfig);

// 监听WeaponSelect元素内的change事件
weaponSelect.addEventListener('change', function(event) {
  updateImgElement();
});
weapon2Select.addEventListener('change', function(event) {
  updateImg2Element();
});

function updateImgElement() {
  var selectElement = weaponSelect.querySelector('select');
  if (selectElement) {
    var selectedValue = selectElement.value;
    var imgElement = document.querySelector('.weaponimage');
    var imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
    var backupImageUrl = 'image/weapon/' + selectedValue + '.png';

    var image = new Image();

    image.onerror = function() {
      // 图片加载失败，切换到备用图片路径
      imgElement.src = backupImageUrl;
    };

    image.onload = function() {
      // 图片加载成功，使用原始图片路径
      imgElement.src = imageUrl;
    };

    // 开始加载图片
    image.src = imageUrl;

    if (selectedValue === '未装备') {
      imgElement.src = backupImageUrl;
    } else if (selectedValue.includes('∧')) {
      selectedValue = selectedValue.substring(0, selectedValue.indexOf('∧'));
      imgElement.src = imageUrl;
    } else {
      imgElement.src = imageUrl;
    }
  }
}

function updateImg2Element() {
  var selectElement = weapon2Select.querySelector('select');
  if (selectElement) {
    var selectedValue = selectElement.value;
    var imgElement = document.querySelector('.weapon2image');
    var imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
    var backupImageUrl = 'image/weapon/' + selectedValue + '.png';

    var image = new Image();

    image.onerror = function() {
      // 图片加载失败，切换到备用图片路径
      imgElement.src = backupImageUrl;
    };

    image.onload = function() {
      // 图片加载成功，使用原始图片路径
      imgElement.src = imageUrl;
    };

    // 开始加载图片
    image.src = imageUrl;

    if (selectedValue === '未装备') {
      imgElement.src = backupImageUrl;
    } else if (selectedValue.includes('∧')) {
      selectedValue = selectedValue.substring(0, selectedValue.indexOf('∧'));
      imgElement.src = imageUrl;
    } else {
      imgElement.src = imageUrl;
    }
  }
}
