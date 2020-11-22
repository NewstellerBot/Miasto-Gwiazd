export function addToCart(id) {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  cart = cart[id] ? { ...cart, [id]: cart[id] + 1 } : { ...cart, [id]: 1 }
  sessionStorage.setItem('cart', JSON.stringify(cart))
}

export function removeFromCart(id) {
  let cart = JSON.parse(sessionStorage.getItem('cart'))
  if (cart.id > 1) {
    cart = { ...cart, [id]: cart[id] - 1 }
  } else if ((cart.id = 1)) {
    let { [id]: omit, ...cart } = cart
  }

  sessionStorage.setItem('cart', JSON.stringify(cart))
}
