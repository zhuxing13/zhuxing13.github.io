// 获取 select 元素和 image 元素
const charSelectimg = document.getElementById('charSelect');
const image1Element = document.querySelector('#imageContainer img');

// 监听 select 元素的 change 事件
charSelectimg.addEventListener('change', function() {
  // 获取选择的值
  const selectedValue = charSelectimg.value;
  
  // 根据选择的值更新图像的 src 属性
  image1Element.src = 'image/character/' + selectedValue + '.png';

  // 当备用图片加载失败时，切换到其他备用图片路径
  image1Element.onerror = function() {
    image1Element.src = 'image/character/选择角色.png';
  };
});
