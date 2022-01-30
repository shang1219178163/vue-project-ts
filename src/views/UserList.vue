<template>
  <div class='container'>
    <van-nav-bar title="人员清单" left-arrow  @click-left="onRefresh" />
      <ol>
        <li v-for='e in list' :key='e.uid'>
                    <div class="cell">
            <div class="left">
              <van-image :src="e.headUrl" fit="contain">
                  <template v-slot:loading>
                      <van-loading type="spinner" size="20" />
                  </template>
              </van-image>
            </div>
            <div class="mid">
              <div>{{e.name}}</div>
              <div class="flex-row">
                <div>岗位:{{e.job}}</div>
                <div>从业经验:{{e.experience}}</div>
              </div>
              <div>服务宗旨:{{e.des}}</div>
            </div>
            <div class="right">
              <div class="right" @click='callPhone(e)'>呼叫</div>
            </div>
          </div>

          <!-- <UserCellOne :headUrl="e.headUrl" :username="e.name" :job="e.job" :experience="e.experience" :des="e.des"></UserCellOne> -->
        </li>
      </ol>
    <!-- <van-pull-refresh v-model="loading" @refresh="onRefresh">
      <ol>
        <li v-for='e in list' :key='e.uid'>
          <UserCellOne :headUrl="e.headUrl" :name="name" :job="job" :experience="experience" :des="des"></UserCellOne>
        </li>
      </ol>
    </van-pull-refresh> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Toast } from 'vant';
// import { UserCellOne } from "@/components/UserCellOne.vue"

const list = [
        {
          uid: 0,
          name: '张三',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 16666666666,
          des: '我们是最棒的服务!'
        },
        {
          uid: 1,
          name: '赵四',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 18888888888,
          des: '我们是最棒的服务!'
        },
        {
          uid: 2,
          name: '王五',
          headUrl: 'https://img.yzcdn.cn/vant/cat.jpeg',
          job: '项目管家',
          experience: '10年',
          phone: 19999999999,
          des: '我们是最棒的服务!'
        }
      ]
    

const onClickLeft = () => {
      history.back();
    }

const loading = ref(false);
const onRefresh = () => {
  setTimeout(() => {
    Toast('刷新成功');
    loading.value = false;
  }, 1000);
};

const callPhone = (e) => {
      // alert(e.name)
      console.log(e.name, e.phone)
    }

// defineExpose({
//   onRefresh
// })
  

</script>

<style scoped>

div{
  font-size: 12px;
  text-align: left;
  /* border: 0.3px solid blue; */
}

ul, ol{
	list-style-type: none;
	padding:0px;
	margin:0px;
}

li {
  /* list-style: none; */
  border-bottom: 1px solid #eeeeee;
}

.container{
  font-size: 14px;
  margin: 0;
  padding: 0;
  /* background-color: yellow; */
}

.cell{
  display: flex;
  justify-content: space-between;
  /* margin: 0; */
  padding: 8px;
  /* background-color: aquamarine; */
}

.flex-row{
  display: flex;
  justify-content: space-between;
}

.flex-column{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left{
  width: 80px;
  /* height: 80px; */
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
}

.mid{
  padding: 0 8px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 200px; */
  flex-grow: 1;
}

.right{
  display: flex;
  /* align-items: center; */
  align-self: flex-start;
}

UserCellOne{
  height: 90px;
}

</style>
