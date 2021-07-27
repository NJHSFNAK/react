function formatPrice(price){
  if(Object.prototype.toString.call(price) !== '[object Number]'){
    price = Number(price) || 0;
  }
  return '￥'+price.toFixed(2)
}
