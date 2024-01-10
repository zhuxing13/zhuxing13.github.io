// 获取 select 元素和 image 元素
const charSelectimg = document.getElementById('charSelect');
const image1Element = document.querySelector('#imageContainer img');

// 监听 select 元素的 change 事件
charSelectimg.addEventListener('change', function() {
  // 获取选择的值
  const selectedValue = charSelectimg.value;
  
  // 根据选择的值更新图像的 src 属性
  image1Element.src = 'image/character/' + selectedValue + '.png';
});
