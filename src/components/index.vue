<template>
    <div class="index">
        <sidebar></sidebar>
        <div class="back">
            <form action="http://www.zhuxf.net/manager/artcleadd" class="form" method="post" enctype="multipart/form-data" target="nm_iframe" required="required">
                <label for=""><div class="lable">标题</div><input type="text" class="title2" placeholder="   请输入文章标题" name="title" required="required"></label>
                <label for=""><div class="lable">作者</div><input type="text" class="author" value="Watterson" disabled="disabled" name="author" required="required"></label>
                <label for=""><div class="lable">日期</div><input type="date" class="date" name="date" required="required"></label>
                <label for=""><div class="lable">文章封面</div><input type="file" accept="image/png" class="pic" name="pic" required="required"></label>
                <label for=""><div class="lable">文章类型</div> <select name="kind" id="kind" required="required">
                    <option value="Vue">Vue</option>
                    <option value="ES6">ES6</option>
                    <option value="CSS3">CSS3</option>
                    <option value="Nuxt">Nuxt</option>
                    <option value="Express">Express</option>
                    <option value="Mini_Program">Mini_Program</option>
                </select> </label>
                <label for=""><div class="lable">描述</div><textarea name="describe"  class="describe" required="required"></textarea></label>

                <label for=""><div class="lable">内容</div><textarea name="article"  class="blog" required="required"></textarea></label>
                <label for="" @click="sub()"><input type="submit" class="submit" value="提交"></label>


            </form>
            <iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>  
        </div>

    </div>
</template>

<script>
    import sidebar from '../components/sidebar'
    export default {
        data(){
            return{
                title:'',
                author:'',
                date:'',
                kind:'',
                describe:'',
                article:''
            }
        },
        components:{
            sidebar,


        },
        methods:{
            sub(){              
                if(this.title.length == 0 || this.author.length == 0 || this.date.length == 0 || this.describe.length == 0 || this.article.length == 0){
                     alert("提交错误!")
                }else{
                    setTimeout(function(){
                     alert("操作成功")
                    },500)
                }
               
             
                
            }
            
        }
    }
</script>

<style scoped>
    .back{
        position: absolute;
        top: 0;
        left: 300px;
        height: 100%;
        width: calc(100% - 300px);

        background-color: #eeeeee;
    }
    .form{
        position: relative;
        left: 5%;
        top: 50px;
        display: inline-block;
        background-color: #ffffff;
        height:90%;
        width:90%;
        overflow: auto;
    }

    label{
        position: relative;
        left: 5%;
        top: 5%;
        display: block;

        width:90%;
        margin-bottom: 3%;
    }

    .date,.title2,.author{
        display: block;
        height: 40px;
        border-radius: 5px;
        border: solid 1px grey ;
        width: 100%;

    }
    .title2{
        font-weight: bold;
        font-size: 16px;
    }
    .date{
        width:150px;
        font-weight: bold;
        font-size: 16px;
        text-indent: 3px;
    }
    .author{
        font-weight: bold;
        font-size: 16px;
        text-indent: 1em;
    }
    .lable{
        font-size: 120%;
        font-weight: bold;
    }
    .blog{
        width: 100%;
        height: 200px;
        resize:none;
    }

    .describe{
        width: 100%;
        height: 100px;
        resize:none;
    }

    .submit{
        display: inline-block;
        width: 90px;
        height: 40px;
        border-radius: 3px;
        background-color: #1889ff;
        font-size: 110%;
        font-weight: bold;
        color: #ffffff;
        border: #1889ff 1px solid ;
        transition:0.4s background-color;
    }

    .submit:hover{

        background-color: #126bff;

    }

</style>