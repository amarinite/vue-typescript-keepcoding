<template>
  <nav>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <span>{{ greeting }}</span>
    <div class="links" v-if="links">
      <button @click="toggleCart" class="btn btn-secondary">Carrito</button>
    </div>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Link } from "@/interfaces/link";
import { useStore } from "vuex";
import { useCart } from "@/composables/useCart";

interface NavbarProps {
  title: string;
  links: Link[];
  color?: string;
}

export default defineComponent({
  name: "NavBar",
  emits: ["buttonClicked"],
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array as PropType<Link[]>,
      default(): Link[] {
        return [
          { label: "", link: "" },
          { label: "", link: "" },
        ];
      },
    },
    color: String,
  },
  setup(props: NavbarProps, ctx) {
    const store = useStore();
    const { toggleCart } = useCart();
    return {
      greeting: computed(() => store.getters["saludo"]),
      onClick: (link: Link) => {
        console.log("onClick", link);
        ctx.emit("buttonClicked", link);
      },

      toggleCart,
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e7e5a;
  color: white;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
.bg-red {
  background-color: red;
}

.important-link {
  font-size: larger;
}
</style>
