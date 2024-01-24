// 获取 select 元素和 image 元素
const peripheralSelectimg = document.getElementById('peripheralSelect');
const image5Element = document.querySelector('#imageContainer4 img');

// 监听 select 元素的 change 事件
peripheralSelectimg.addEventListener('change', function() {
  // 获取选择的值
  const selectedValue = peripheralSelectimg.value;
  
  // 根据选择的值更新图像的 src 属性
  image5Element.src = 'image/peripheral/' + selectedValue + '.png';

  // 当备用图片加载失败时，切换到其他备用图片路径
  image5Element.onerror = function() {
    image5Element.src = 'image/weapon/其他装备.png';
  };
});
