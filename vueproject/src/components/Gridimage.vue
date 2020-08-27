  <!-- html -->
<template>
    <Div class="Gridimage">
        <div class="ui card my-ig-card" v-for="(username, i) in usernames" :key="i">
            <div class="content">
                <div class="right floated meta">14h</div>
                <img class="ui avatar image" :src="srcimg"> {{ username }}
            </div>
            <div class="image">
                <img :src="srcimg">
            </div>
            <div class="content">
                <span class="right floated">
                <i class="heart outline like icon"></i>
                17 likes
                </span>
                <i class="comment icon"></i>
                3 comments
            </div>
            <div class="extra content">
                <div class="ui large transparent left icon input">
                <i class="heart outline icon"></i>
                <input type="text" placeholder="Add Comment...">
                </div>
            </div>
        </div>
    </Div>
</template>

<script>
export default {
    name:'Gridimage',
    data:function(){
        return{
            srcimg:'https://i.ytimg.com/vi/Ne-kTa8ujLE/maxresdefault.jpg',
             msg:'This us my profile component',
             usernames:['aa','ss','cc','ss','dsd','eqweq','fdsfs','fdsfs','fsdf','fsdfdsf']
        }
       
    }
}
</script>

<style>
.Gridimage{
    margin-left: 5px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}
.my-ig-card{
    margin-right: 1em;
    
}
</style>