<template>
    <div class="cell">
        <div class="left">
            <van-image :headUrl="headUrl" fit="contain">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
        </div>
        <div class="mid">
            <div>{{ name }}</div>
            <div class="flex-row">
            <div>岗位:{{ job }}</div>
            <div>从业经验:{{ experience }}</div>
            </div>
            <div>服务宗旨:{{ des }}</div>
        </div>
        <div class="right">
            <div class="right" @click='$emit("click", phone)'>呼叫</div>
        </div>
    </div>
</template>


<script>
// let headUrl = "-";
// let name = "-";
// let job = "-";
// let experience = "-";
// let des = "-";
// let phone = "-";

// </script>
export default {
  created () {},
  // data () {
  //   return {
  //     username: '张三',
  //     headUrl: '',
  //     job: '项目管家',
  //     experience: '10年',
  //     phone: 1888888888,
  //     des: '我们是最棒的服务!'
  //   }
  // },
  props: {
      username: String,
      headUrl: String,
      job: String,
      experience: String,
      phone: String,
      des: String,
  },
  methods: {}
}



<style scoped>
div{
  /* font-size: 12px; */
  text-align: left;
  /* border: 0.3px solid blue; */
}

ul, ol{
	list-style-type: none;
	padding:0px;
	margin:0px;
  /* line-height: 35px; */
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
    height: 80px;

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
  height: 80px;
  border: 1px solid red;
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

</style>