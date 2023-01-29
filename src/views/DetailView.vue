<template>
  <div v-if="!isLoading">
    <h1>Producto: {{ product.name }}</h1>
    <h2>Precio: {{ product.price }}</h2>
    <img :src="product.images[0]" alt="" />
    <h2>Descripción: {{ product.description }}</h2>

    <button @click="addElementToCart(product)" class="btn btn-success">
      Añadir al Carrito
    </button>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { useCart } from "@/composables/useCart";
import useProducts from "@/composables/useProducts";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { addElementToCart } = useCart();
    const { product, isLoading, fetchProductById } = useProducts();
    fetchProductById(props.id);
    return {
      product,
      addElementToCart,
      isLoading,
    };
  },
});
</script>
