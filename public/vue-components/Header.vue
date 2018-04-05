<template>
<div>
    <!--
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
-->
<div id="modal-app">
    <nav>
        <ul class="help-links">
            <li @click="toggleSubscribeModal()">Subscribe</li>
            <li>
            <a href="/contact-us/">Contact</a>
            </li>
            <li>Submissions</li>
        </ul>
    </nav>
        <header>
        
            <h1>
            <a href="/">
                World of Rec
                </a>
            </h1>
            <div class="mobile-menu">
            </div>
            <ul class="links">
                <a href = "/"><li>Home</li></a>
                <a href = "/articles"><li>Articles</li></a>
                <li>Resources</li>
                <li>Forum</li>
            </ul>
        </header>

            <div 
            class="subscribe-modal"
            v-bind:class="{'subscribe-modal': !showSubscribeModal, 'show-subscribe': showSubscribeModal}"
            v-cloak>
                <div class="modal-header">
                </div>
                <h1>
                    Subscribe
                </h1>
                <input v-model="email" name="email" placeholder="Email">
                <br>
                <button class="back-button" @click="toggleSubscribeModal()">
                    Back
                    </button>
                <button @click="submitSubscription()">
                    Submit
                    </button>
            </div>
        </div>
    </div>
  
</template>
<script>
export default {
  name: "Header",
  data () {
    return{
        email: '',
        showSubscribeModal: false
    }
  },
  methods: {
    toggleSubscribeModal: function(){
         this.showSubscribeModal ? this.showSubscribeModal=false : this.showSubscribeModal=true;
    },
    submitSubscription: function(){
        var payload={
            email: this.email
        }
        if(this.email.length > 0){
            alert(payload.email)
            fetch("/requests/add-subscription",{
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-Type": "application/json" }, 
                credentials: "same-origin"
            })
        }
        else{
            alert("Email field is empty.")
        }
    }
  }
}
</script>
<style lang="scss">

.subscribe-modal{
    display: none;
}
.show-subscribe{
    display: block;
    margin-left: 25vw;
    position: fixed;
    width: 50vw;
    height: 50vh;
    background-color: white;
    .modal-header{
        background-color: #CC8A56;
        height: 5vh;
        margin: 0;
    }
    h1{
        text-align: center;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: #333;
    }
    input{
        width:90%;
        display: block;
        margin: auto;
        outline: none;
        border: 1px solid #333;
        &:focus{
            border: 1px solid #14B09B;
        }
    }
    button{
        background-color: #ebe5d9;
        padding: 5px 10px;
    }
    .back-button{
        margin-left: 10%;
    }
}
 @media screen and (max-width: 900px){
        .show-subscribe{
            margin: 5vh 5vw;
            width: 90vw;
            height: 50vh;
        }
    }
</style>
