<template>
  <div class="about">
    <h1>about page</h1>
    {{ name }}
    {{ wallet }}
    {{ getUserName }}
    <br>
    <button type="button" class="btn btn-primary" @click.prevent="updateName">點擊換名字</button>
  </div>
</template>

<script>
import userStore from '@/stores/user';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(userStore, ['name', 'wallet', 'getUserName']),
  },
  methods: {
    ...mapActions(userStore, ['updateName']),
  },
};

</script>
