const toppingTop = document.getElementById('topping-top');
const toppingBottom = document.getElementById('topping-bottom');
const toppingLeft = document.getElementById('topping-left');
const toppingRight = document.getElementById('topping-right');
const dough = document.getElementById('dough');
const tree = document.getElementById('tree');
const completeButton = document.getElementById('complete-button');
const sherwoodImg = document.getElementById('sherwood-img');

// 78개 토핑 이미지 이름
const toppings = Array.from({ length: 78 }, (_, i) => i + 1);

// 버튼 하나 만들기
function createToppingButton(index) {
  const btn = document.createElement('button');
  btn.className = 'topping-button';
  btn.style.backgroundImage = `url('images/t-${String(index).padStart(2, '0')}.png')`;

  btn.addEventListener('click', () => {
    const topping = document.createElement('div');
    topping.className = 'topping-on-dough';
    topping.style.backgroundImage = `url('images/t-${String(index).padStart(2, '0')}.png')`;

    const doughRect = dough.getBoundingClientRect();
    const doughRadius = doughRect.width / 2;
    const safeRadius = doughRadius - 50; // 기존보다 20px 줄임

    const angle = Math.random() * 2 * Math.PI;
    const radius = Math.random() * safeRadius;

    const centerX = dough.clientWidth / 2;
    const centerY = dough.clientHeight / 2;

    const x = centerX + radius * Math.cos(angle) - 37.5;
    const y = centerY + radius * Math.sin(angle) - 37.5;

    topping.style.left = `${x}px`;
    topping.style.top = `${y}px`;

    dough.appendChild(topping);
  });

  return btn;
}

// 토핑 버튼 배치
toppings.forEach((index, i) => {
  const btn = createToppingButton(index);

  if (i < 22) toppingTop.appendChild(btn);
  else if (i < 44) toppingBottom.appendChild(btn);
  else if (i < 61) toppingLeft.appendChild(btn);
  else toppingRight.appendChild(btn);
});

// 완성 버튼 기능
completeButton.addEventListener('click', () => {
  tree.style.opacity = 1;

  setTimeout(() => {
    sherwoodImg.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    sherwoodImg.style.opacity = 0;
    tree.style.opacity = 0;
    setTimeout(() => {
      dough.innerHTML = '';
    }, 500);
  }, 4000);
});
