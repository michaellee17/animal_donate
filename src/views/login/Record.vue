<script setup>
    import { ref } from 'vue';
    const successOpen = ref(true)
    const failOpen = ref(false)

    const successActive = (() =>{
        successOpen.value = true
        failOpen.value = false 
    })

    const failActive = (() =>{
        successOpen.value = false
        failOpen.value = true 
    })
</script>
<template>
    <div class="container">
        <div class="donate_record">
            <div class="title">捐款紀錄</div>
            <div class="tabs">
                <div class="tab" :class="{active:successOpen}" @click="successActive">
                    <h6>捐款紀錄</h6>
                </div>
                <div class="tab" :class="{active:failOpen}" @click="failActive">
                    <h6>失敗紀錄</h6>
                </div>
            </div>
            <table class="success_table" v-if="successOpen">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>金額</th>
                        <th>捐款方式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>線上刷卡</td>
                    </tr>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>線上刷卡</td>
                    </tr>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>線上刷卡</td>
                    </tr>
                </tbody>
            </table>
            <table class="fail_table" v-if="failOpen">
                <thead>
                    <tr>
                        <th>日期</th>
                        <th>金額</th>
                        <th>捐款方式</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>ATM轉帳</td>
                    </tr>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>ATM轉帳</td>
                    </tr>
                    <tr>
                        <td>2022/01/12</td>
                        <td>$3,000</td>
                        <td>ATM轉帳</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style scoped>
.active{
    color:orange;
}
.container {
    padding: 20px;
}

.donate_record {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.5);
    padding:50px 0 ;
}

.tabs {
    width: 87%;
    display: flex;
    justify-content: flex-start;
    gap: 72px;
    padding: 10px;
    padding-left: -14px;
    border-bottom: 1px solid grey;
}

.success_table td{
    width: 33%;
    text-align: center;
}
.success_table{
    width: 100%;
}
.fail_table td{
    width: 33%;
    text-align: center;
}
.fail_table{
    width: 100%;
}




</style>