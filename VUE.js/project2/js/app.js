import SearchModel from "/models/SearchModel.js"
import KeywordModel from "/models/KeywordModel.js"
import HistoryModel from "/models/HistoryModel.js"
import FormComponent from "/components/FormComponents.js"
import ResultComponent from "/components/ResultComponents.js"
import ListComponent from "/components/ListComponents.js"
import TabComponent from "/components/TabComponents.js"
new Vue({
    el:'#app',
    data:{
        query:'',
        submitted:false,
        tabs:['추천검색어','최근검색어'],
        selectedTab:'추천검색어',
        searchResult:[],
        selectedTab:'',
        keywords:[],
        history:[],
    },
    components:{
        'search-form':FormComponent,
        'search-result':ResultComponent,
        'list':ListComponent,
        'tabs':TabComponent,
    },
    created(){
        this.selectedTab=this.tabs[0]
        this.fetchKeyword()
        this.fetchHistory()
    },
    methods:{
        onSubmit(query){
            //debugger
            this.query=query
            this.search()
        },
        onReset(e){
            //this.query=""
            this.resetForm()
        },
        // onkeyup(){
        //     if(!this.query.length) this.resetForm()
        // },
        search(){
            SearchModel.list().then(data => {
                this.submitted=true;
                this.searchResult=data
            })
            HistoryModel.add(this.query)
            this.fetchHistory()
        },
        resetForm(){
            this.query="",
            this.submitted=false,
            this.searchResult=[]
        },
        onClickTab(tab){
            this.selectedTab=tab
        },
        fetchKeyword(){
            KeywordModel.list().then(data => {
                this.keywords=data
            })
        },
        onClickKeyword(keyword){
            this.query=keyword;
            this.search()
        },
        fetchHistory(){
            HistoryModel.list().then(data => {
                this.history=data
            })
        },
        onClickRemoveHistory(keyword){
            HistoryModel.remove(keyword);
            this.fetchHistory()
        }
    }
})