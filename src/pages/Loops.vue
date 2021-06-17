<template>
<h1>Loops</h1>
<table class="center" border=1>
    <tr v-for="hari in namaHari" v-bind:key="hari">
        <td>{{ hari }} </td>
        </tr>
    </table>
</template>



<script>
export default {
        data(){
            return{
                namaHari : ["Senin", "Selasa", "Rabu", "Kamis",
                            "Jumat", "Sabtu", "Minggu" ]
            }
        }
    }
</script>

<style>
.center{
    margin-left: auto;
    margin-right: auto;
}
</style>