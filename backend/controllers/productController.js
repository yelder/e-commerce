import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@des Fetch products
//@ Get /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  res.json(products)
})

//@des Fetch single product
//@ Get /api/products
//@access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Producto no conseguido')
  }
})

export { getProducts, getProductById }
