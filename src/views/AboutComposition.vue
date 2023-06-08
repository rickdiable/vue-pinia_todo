<template>
  <div class="about">
    <h1>about composition</h1>
    {{ user.name }}, {{ user.wallet }} ,{{ user.getUserName }}
    <br>
    {{ name }}, {{ wallet }}, {{ getUserName }}
    <br>
    <button type="button" class="btn btn-primary" @click.prevent="user.updateName">一般</button> |
    <button type="button" class="btn btn-primary" @click.prevent="updateNameIndividual">解構
    </button> |
    <button type="button" class="btn btn-primary" @click.prevent="updateData">patch</button> |
    <button type="button" class="btn btn-primary" @click.prevent="reset">reset</button>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import userStore from '@/stores/user';

export default {
  setup() {
    // 定義一個變數儲存函數型態的 pinia 狀態檔案，預設為 reactive
    const user = userStore();

    // 修改資料方式1.因為是 reative 格式，欲修改該值可直接重新賦值
    // user.name = '被重新賦值了';

    // 修改資料方式2.希望將單獨值取出使用，可以利用 storeToRefs(為 pinia 方法，需先匯入)
    // 解構形式取出
    const { name, wallet, getUserName } = storeToRefs(user);
    // 若使用以上方式取出則為 ref 格式，取值或重賦值皆需加上 value
    // name.value = 'ref後的名字';

    // 方法一樣可以使用解構取出使用，但不同於資料，通常不需雙向綁定，直接取出即可，記得匯出
    const { updateNameIndividual } = user;

    // 修改資料方式3. patch 適合一次更新多個資料
    function updateData() {
      user.$patch({
        name: 'patch方法',
        wallet: 'patchWallet',
      });
    }

    // 修改資料方式3. reset 將資料重置回初始狀態
    function reset() {
      user.$reset();
    }

    // 完成後將之匯出
    return {
      user,
      name,
      wallet,
      getUserName,
      updateNameIndividual,
      updateData,
      reset,
    };
  },
};
</script>
