export default{
    template:'#Tabs',
    props:['tabs','selectedTab'],
    methods:{
        onClickTab(tab){
            this.$emit('@change',tab)
        }
    }
}