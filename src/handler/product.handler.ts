/* eslint-disable indent */
import { Product, ProductStore } from "../models/product.model";
import { Request, Response, Application } from "express";
import { authenticate,  adminRole } from "../middleware/auth.middleware";

const store = new ProductStore();

const index = async (req: Request, res: Response) => {
  try {
    const result = await store.index();
    const response = {
      status: "success",
      statusCode: 200,
      response: result,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
const show = async (req: Request, res: Response) => {
  try {
    const ID = Number(req.params.id);
    const result = await store.show(ID);
    const response = {
      status: "success",
      statusCode: 200,
      response: result,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
const getProductByCategory = async (req: Request, res: Response) => {
  try {
    const category = String(req.body.category);
    const result = await store.getProductByCategory(category);
    const response = {
      status: "success",
      statusCode: 200,
      response: result,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
const create = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
    };
    const result = await store.create(product);
    const response = {
      status: "success",
      statusCode: 200,
      response: result,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const result = await store.destroy(Number(req.params.id));
    const response = {
      status: "success",
      statusCode: 200,
      response: result,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
export default {index, show, getProductByCategory, create, destroy};
