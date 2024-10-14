<template>
  <div>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <div v-if="editingIndex === index">
          <input v-model="editedProduct.name" placeholder="Edit name" />
          <input v-model="editedProduct.price" placeholder="Edit price" />
          <textarea v-model="editedProduct.description"></textarea>
          <button @click="saveEdit(index)">Save</button>
        </div>
        <div v-else>
          <strong>{{ product.name }}</strong> - ${{ product.price }}
          <p>{{ product.description }}</p>
          <button @click="editProduct(index)">Edit</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['products'],
  data() {
    return {
      editingIndex: null,
      editedProduct: {}
    };
  },
  methods: {
    editProduct(index) {
      this.editingIndex = index;
      this.editedProduct = { ...this.products[index] };
    },
    saveEdit(index) {
      this.$emit('edit-product', { index, product: this.editedProduct });
      this.editingIndex = null;
    }
  }
};
</script>
