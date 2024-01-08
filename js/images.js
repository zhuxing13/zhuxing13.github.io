// 获取 select 元素和 image 元素
const selectElement = document.getElementById('charSelect');
const imageElement = document.querySelector('#imageContainer img');

// 监听 select 元素的 change 事件
selectElement.addEventListener('change', function() {
  // 获取选择的值
  const selectedValue = selectElement.value;
  
  // 根据选择的值更新图像的 src 属性
  imageElement.src = 'image/character/' + selectedValue + '.png';
});
