// 显示收起信息框
const seeadd1 = document.getElementById('seeadd1');
const add1 = document.getElementById('add1');

toggleButton.addEventListener('click', function() {
  const isHidden = add1.style.display === 'none';
  add1.style.display = isHidden ? 'block' : 'none';
  seeadd1.textContent = isHidden ? '收起图鉴信息' : '显示当前图鉴';
});