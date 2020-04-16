<template>  
    <div class="parent">
          <div class="conBody">
               <div class="conStart">
                    <div class="c404"></div>
                    <h1>404</h1>
               </div>
               <h2 id="pnf">Page not found</h2>
			<p id="pnt">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          </div>
     </div>
</template>
<script>
export default {
    name: '404',
    data: () => ({

    }),
    mounted() {
        this.$store.state.selectedMenuName = "Bluetooth";
    }
}
</script>
<style scoped>
.parent {
    position: relative;
    height: 100vh;
}
.conBody {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 90px;
    margin: 0;
}
.conStart {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0 auto 50px;
}
.c404 {
    background-color: #ffa200;
    border: 5px solid black;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: rotate(45deg);
    border-radius: 30px;
}
#pnt,#pnf {
    text-align: center;
    text-transform: uppercase;
}
</style>