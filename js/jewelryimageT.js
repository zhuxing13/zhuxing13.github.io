// 获取 select 元素和 image 元素
const jewelrySelectimg = document.getElementById('jewelrySelect');
const image4Element = document.querySelector('#imageContainer3 img');

// 监听 select 元素的 change 事件
jewelrySelectimg.addEventListener('change', function() {
  const selectedValue = jewelrySelectimg.value;
  const imageUrl = 'https://wiki.biligame.com/gt/Special:Redirect/file/' + selectedValue + '.png';
  const backupImageUrl = 'image/jewelry/' + selectedValue + '.png';

  const image = new Image();

  image.onerror = function() {
    // 图片加载失败，切换到备用图片路径
    image4Element.src = backupImageUrl;
  };

  image.onload = function() {
    // 图片加载成功，使用原始图片路径
    image4Element.src = imageUrl;
  };

  // 加载图片
  image.src = imageUrl;

  // 当备用图片加载失败时，切换到其他备用图片路径
  image4Element.onerror = function() {
    image4Element.src = 'image/weapon/其他装备.png';
  };
});
