import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

/**
 * @desc    Fetch all product
 * @route   GET /api/products
 * @access  Public
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

/**
 * @desc    Fetch single product
 * @route   GET /api/products/:id
 * @access  Public
 */
const getProductById = asyncHandler(async (req, res) => {
  let id = req.params.id;
  let product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('product not found');
  }
});

/**
 * @desc    Delete a product
 * @route   DELETE /api/products/:id
 * @access  Private/Admin
 */
export const deleteProduct = asyncHandler(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({message: 'product removed'})
  } else {
    res.status(404);
    throw new Error('product not found');
  }
});

export { getProducts, getProductById };
