// 获取WeaponSelect元素
var weaponSelect = document.getElementById('WeaponSelect');
var weapon2Select = document.getElementById('Weapon2Select')

// 监听WeaponSelect元素内的change事件
weaponSelect.addEventListener('change', function(event) {
  setTimeout(updateImgElement, 100);
});
weapon2Select.addEventListener('change', function(event) {
  setTimeout(updateImg2Element, 100);
});

// 创建一个MutationObserver实例
var observerimgWeapon = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      // 当WeaponSelect内的select元素的style属性发生变化时执行的操作
      setTimeout(updateImgElement, 100);
    }
  });
});
var observerimgWeapon2 = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      // 当Weapon2Select内的select元素的style属性发生变化时执行的操作
      setTimeout(updateImg2Element, 100);
    }
  });
});

// 配置MutationObserver监听的选项
var observerConfig = {
  attributes: true,
  attributeFilter: ['style'],
  subtree: true
};

// 开始观察WeaponSelect元素内select的变化
var selectElements = weaponSelect.getElementsByTagName("select");
for (var i = 0; i < selectElements.length; i++) {
  observerimgWeapon.observe(selectElements[i], observerConfig);
}

// 开始观察Weapon2Select元素内select的变化
var select2Elements = weapon2Select.getElementsByTagName("select");
for (var j = 0; j < select2Elements.length; j++) {
  observerimgWeapon2.observe(select2Elements[j], observerConfig);
}

function updateImgElement() {
  var selectElement = weaponSelect.querySelector('select[style*="display: block"]');
  if (selectElement) {
    var selectedValue = selectElement.value;
    var imgElement = document.querySelector('.weaponimage');
    var imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
    var backupImageUrl = 'image/weapon/' + selectedValue + '.png';

    var image = new Image();

    image.onerror = function() {
      imgElement.src = backupImageUrl;
    };

    image.onload = function() {
      imgElement.src = imageUrl;
    };

    // 当备用图片加载失败时，切换到其他备用图片路径
    imgElement.onerror = function() {
      imgElement.src = 'image/weapon/其他装备.png';
    };

    if (selectedValue === '未装备') {
      imgElement.src = backupImageUrl;
    } else {
      // 开始加载图片
      image.src = imageUrl; 
    }

  }
}

function updateImg2Element() {
  var selectElement = weapon2Select.querySelector('select[style*="display: block"]');
  var imgElement = document.querySelector('.weapon2image');
  if (selectElement) {
    var selectedValue = selectElement.value;
    var imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
    var backupImageUrl = 'image/weapon/' + selectedValue + '.png';

    var image = new Image();

    image.onerror = function() {
      imgElement.src = backupImageUrl;
    };

    image.onload = function() {
      imgElement.src = imageUrl;
    };

    // 当备用图片加载失败时，切换到其他备用图片路径
    imgElement.onerror = function() {
      imgElement.src = 'image/weapon/其他装备.png';
    };

    if (selectedValue === '未装备') {
      imgElement.src = backupImageUrl;
    } else if (selectedValue.includes('∧')) {
      imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue.substring(0, selectedValue.indexOf('∧')) + '.png';
      // 开始加载图片
      image.src = imageUrl; 
    } else {
      // 开始加载图片
      image.src = imageUrl; 
    }

  }else{
    imgElement.src = 'image/weapon/未装备.png';
    // console.log("该角色无副武器（忽略）");
  }
}
