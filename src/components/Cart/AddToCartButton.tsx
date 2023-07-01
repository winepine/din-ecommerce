"use client";
import { Button } from "@chakra-ui/react";
import { AppContext } from "@src/context/AppContext";
import { IProduct } from "@src/model";
import React, { useContext } from "react";

interface IAddToCartButtonProps {
  product: IProduct;
  count?: number;
}
export const AddToCartButton = ({ product, count }: IAddToCartButtonProps) => {
  const { addItem, removeItem, isAdded } = useContext(AppContext);
  return (
    <>
      {isAdded("cart", product.id) ? (
        <Button
          variant="outline"
          borderColor="gray.200"
          color="gray.500"
          borderRadius="50px"
          size="sm"
          w="150px"
          onClick={() => removeItem("cart", product.id)}
        >
          Remove from cart
        </Button>
      ) : (
        <Button
          variant="outline"
          borderColor="brand.primary"
          color="brand.primary"
          borderRadius="50px"
          size="sm"
          w="150px"
          className="snipcart-add-item"
          data-item-id={product.id}
          data-item-price={product.price}
          data-item-description={product.description}
          data-item-image={product.mainImage}
          data-item-name={product.name}
          data-item-url={`/products/${product.slug}`}
          // onClick={() => addItem("cart", product, count)}
        >
          Add to cart
        </Button>
      )}
    </>
  );
};
