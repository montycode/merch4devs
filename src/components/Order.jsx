import React from 'react'

export const Order = () => {
    return (
        <div class="flex flex-col my-5 justify-center items-center shadow-lg">
            <h6 class="text-black font-medium my-4">Pedido</h6>
            <div class="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p class="text-gray-400 ml-4">Subtotal</p>
                <p class="text-black mr-4">$2,650</p>
            </div>
            <div class="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p class="text-gray-400 ml-4">Shipping</p>
                <p class="text-black mr-4">$15</p>
            </div>
            <div class=" flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p class="text-gray-400 ml-4">VAT(included)</p>
                <p class="text-black mr-4">20%</p>
            </div>
            <div class="flex justify-between items-center w-full py-5 border-b-2 border-gray-200">
                <p class="text-gray-400 ml-4">Total</p>
                <p class="text-indigo-600 mr-4">$2,665</p>
            </div>
            {/* <div class="flex flex-col justify-between items-center px-3 py-5 w-full">
                <div class="mb-5 flex flex-col min-w-full">
                    <label for="code" class="font-medium text-black">add promo code</label>
                    <input type="text" id="code" class="w-full py-2 border mt-3 border-gray-300 rounded-md" />
                </div>
                <button class="w-full bg-indigo-600 text-white px-2 py-2 rounded-md">
                    Apply code
                </button>
            </div> */}
        </div>
    )
}
