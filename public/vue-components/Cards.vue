<template>
    <div id="cards">
        <ul>
            <li v-bind:key="index" v-for="(card,index) in cards" class="card">
                
                <a :href="card.link"><h1>
                    {{ card.title }}
                </h1></a>
                <img :src="card.image" :alt="card.alt">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "cards",
    data (){
        return {
            cards: [
                {
                    title: "What I learned as an Aquatics Coordinator at the YMCA",
                    link: "/what-i-learned-as-aquatics-coordinator/",
                    image: "../assets/what-i-learned-as-aquatics-coordinator.jpeg",
                    alt: "YMCA Aquatics Coordinator"
                },
                {
                    title: "Getting Your Red Cross LGI",
                    link: "/getting-your-redcross-lgi/",
                    image: "../assets/getting-your-redcross-lgi.jpg",
                    alt: "Redcross LGI"
                },
                {
                    title: "Recreation Event Planning",
                    link: "/recreation-event-planning/",
                    image: "../assets/event-planning-for-rec.jpeg",
                    alt: "Recreation Event Planning"
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    #cards ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    .card{
        color: #0359AE;
        border: 3px solid #14B09B;
        border-radius: 10px;
        margin: 10px;
        width: 350px;
        min-height: 300px;
        h1{
            text-align: center;
            margin: 0;
            padding: 10px;
            &:hover{
                color: #333;
            }
        }
        img{
            width: 95%;
            margin: auto;
            display: block;
            border: 2px solid #ebe5d9;
            margin: 10px;
        }
    }
</style>
