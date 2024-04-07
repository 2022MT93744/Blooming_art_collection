const snakep = 'The snake plant, also known as Sansevieria, is a popular indoor plant characterized by its long, upright leaves that resemble snakes. It is highly adaptable to various light conditions and requires minimal maintenance, making it ideal for beginners. Snake plants purify indoor air by removing toxins and can thrive in low light environments.';
const moneyp = 'The money plant, also known as Epipremnum aureum, is a popular indoor plant with heart-shaped leaves. It is believed to bring prosperity, luck, and wealth according to Feng Shui. Easy to care for, it thrives in indirect light and can purify indoor air, making it a favorite among plant enthusiasts.';
const www = 'Money to spaces.';
const aa = 'Money to spaces.';
const ee = 'Money to spaces.';
const wwww = 'Money to spaces.';
const ss = 'Money to spaces.';

const imageInfo = [
    { name: 'p1.jpg', title: 'Terracotta Pot', price: '$15.99', status:'Available', details:snakep },
    { name: 'p1.jpg', title: 'Ceramic Pot', price: '$20.49', status:'ordered', details:moneyp },
    { name: 'p1.jpg', title: 'Decorative Pot', price: '$18.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Hanging Pot', price: '$25.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Plant Pot Set', price: '$35.99', status:'Not Available', details:moneyp },
    { name: 'p1.jpg', title: 'Vintage Pot', price: '$22.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Modern Pot', price: '$28.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Colorful Pot', price: '$19.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Clay Pot', price: '$17.99', status:'Available', details:moneyp },
    { name: 'p1.jpg', title: 'Indoor Pot', price: '$24.99', status:'Available', details:moneyp }
  ];
  
  const galleryContainer = document.getElementById('imageGallery');
  
  // Function to handle adding items to cart
  function addToCart(item) {

        // You can customize this function to add the item to your cart or perform other actions
    // For demonstration purposes, this function opens a new page with item details
    window.open(`item-details.html?name=${item.title}&price=${item.price}&status=${item.status}&details=${item.details}&image=${item.name}`, '_blank');
   
  }
  
  // Loop through the image info array and create image cards dynamically
  imageInfo.forEach(info => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const img = document.createElement('img');
    img.src = `images/${info.name}`;
    img.alt = info.title;
  
    const title = document.createElement('h2');
    title.textContent = info.title;
  
    const price = document.createElement('p');
    price.textContent = info.price;

    const status = document.createElement('p');
    status.textContent = info.status;
  
  
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => addToCart(info));
  
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(status);
    card.appendChild(button);
    
  
    galleryContainer.appendChild(card);
  });
 