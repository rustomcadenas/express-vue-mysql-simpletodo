<template>
<div id = "outer"> 
    <div class="">
        <div class="sticky flex py-2 bg-green-500 space-x-4 text-white px-2">
            <div> 
                <router-link to="/"> Home </router-link>
            </div>
            <div>
                <router-link to="/todo"> Todo </router-link>
            </div> 
            <div>
                <router-link to="/completed"> Completed </router-link>
            </div>
        </div>
    </div>
    <router-view />
</div>
</template>
 

<style scoped lang="postcss">
    a {
        @apply hover:text-gray-700 text-xl font-semibold
    }
    .router-link-active,
    .router-link-exact-active{
        @apply text-gray-700
    }
</style>
 