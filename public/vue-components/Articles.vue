<template>
<div>
    <h1 class="article-title-main">
        Articles
    </h1>
    <div id="featured">
        <img :src="featured.image" :alt="featured.alt">
        <div>
            <a :href="featured.link">
            <h2>
                {{featured.title}}
            </h2></a>
            <p>
                {{featured.description}}
            </p>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: "articles",
  data(){
      return{
        featured: {
                    title: "What I learned as an Aquatics Coordinator at the YMCA",
                    link: "/what-i-learned-as-aquatics-coordinator/",
                    image: "../assets/what-i-learned-as-aquatics-coordinator.jpeg",
                    alt: "YMCA Aquatics Coordinator",
                    description: "I became a lifeguard at the YMCA the summer before I started graduate school. I was in school for theology which involved much reading, writing, and time devoted to philosophy. The richest lessons I learned during the years spent in graduate school were learned outside the classroom at the YMCA..."
                    },
        articles: [
            {
                    title: "What I learned as an Aquatics Coordinator at the YMCA",
                    link: "/what-i-learned-as-aquatics-coordinator/",
                    image: "../assets/what-i-learned-as-aquatics-coordinator.jpeg",
                    alt: "YMCA Aquatics Coordinator"
                },
                {
                    title: "Getting Your Red Cross LGI",
                    link: "/getting-your-redcross-lgi/",
                    image: "./assets/getting-your-redcross-lgi.jpg",
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
    .article-title-main{
        margin: 0;
        background-color: #ebe5d9;
        padding: 20px 5%;
        color: #14B09B;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    #featured{
        color: #333;
        width: 90vw;
        border: 2px solid #ebe5d9;
        display: flex;
        flex-wrap: nowrap;
        margin: 10px auto;
        padding: 5px;
        img{
           width: 50%;
           height: 50%;
           border: 1px solid #ebe5d9;
        }
        div{
            padding: 15px;
            line-height: 1.25;
            h2{
                color: #0359AE;
                margin: 0;
                text-align: center;
            }
            
        }
    }
</style>
