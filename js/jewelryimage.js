// 获取 select 元素和 image 元素
const jewelrySelectimg = document.getElementById('jewelrySelect');
const image4Element = document.querySelector('#imageContainer3 img');

// 监听 select 元素的 change 事件
jewelrySelectimg.addEventListener('change', function() {
  // 获取选择的值
  const selectedValue = jewelrySelectimg.value;
  
  // 根据选择的值更新图像的 src 属性
  image4Element.src = 'image/jewelry/' + selectedValue + '.png';

  // 当备用图片加载失败时，切换到其他备用图片路径
  image4Element.onerror = function() {
    image4Element.src = 'image/weapon/其他装备.png';
  };
});
