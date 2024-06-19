// Quais ações o carrinho pode fazer

// Adicionar item
async function addItem (userCart, item) {
    userCart.push(item);
};

// Deletar item
async function deleteItem (userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index != -1) {
        userCart.splice(index, 1);
    }
};

// remover item
async function removeItem (userCart, item) {

    // const deleteIndex = index - 1;
    // Maior que zero e menor que o carrinho
    // if (index >= 0 && index < userCart.length) {
    //     userCart.splice(deleteIndex, 1);
    // }    

    const indexFound = userCart.findIndex((p) => p.name === item.name);

    // Caso não enontre o Item
    if (indexFound == -1) {
        console.log('Not item')
        return;
    }

    // Item > 1 subtrair um item, item = 1 deletar o item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
};

// Calcular total
async function calculateTotal (userCart) {
    const resut = userCart.reduce((total, item) => total + item.subtotal());
    
    console.log(resut);
};

async function displayCart (userCart) {
    console.log('Shopee cart list: ');

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}X | Subtotal ${item.subtotal()}`);
    });
};

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
};