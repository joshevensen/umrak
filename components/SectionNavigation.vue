<script setup lang="ts">
const route = useRoute();
const path = route.path;

const { section } = defineProps({
  section: {
    type: Object,
    required: true,
  },
});

section.children.shift();

section.children.forEach((child: any) => {
  if (child.hasOwnProperty("children")) {
    child.children.shift();

    child.children.forEach((subchild: any) => {
      if (subchild.hasOwnProperty("children")) {
        subchild.children.shift();
      }
    });
  }
});
</script>

<template>
  <ul>
    <li>
      <ULink :to="section._path">{{ section.title }}</ULink>

      <ul v-if="path.includes(section._path)" class="pl-4">
        <li v-for="child in section.children" :key="child._path">
          <ULink :to="child._path">{{ child.title }}</ULink>

          <ul
            v-if="
              child.hasOwnProperty('children') && path.includes(child._path)
            "
            class="pl-4"
          >
            <li v-for="link in child.children" :key="link._path">
              <ULink :to="link._path">{{ link.title }}</ULink>

              <ul
                v-if="
                  link.hasOwnProperty('children') && path.includes(link._path)
                "
                class="pl-4"
              >
                <li v-for="sublink in link.children" :key="sublink._path">
                  <ULink :to="sublink._path">{{ sublink.title }}</ULink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>
