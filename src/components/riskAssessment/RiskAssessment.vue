<template>
    <div class="main">
        <div class="evaluate_page chosePage" v-show="chosePage">
            <div class="evaluate_cont">
                <i class="progress_bar"><span class="txtIndex">{{number}}/</span>10</i>
                <div class="entirety">
                    <div class="profession_cont">
                        <div class="profession_info" v-for="(item,indexNum) in conts" :key="indexNum"
                             :class="[indexNum==0? 'firstQ' :'',]" v-show="active==indexNum">
                            <h2>{{item.title}}</h2>
                            <div :data-index="(indexNum+1)"
                                 v-for="(infoItem,curIndex) in item.choice"
                                 :key="curIndex"
                                 :class="['text_info',(curIndex==emptyAry[indexNum])?'pitch':'']"
                                 @click='choiceItem(curIndex,indexNum+1)'
                            >{{infoItem.content}}
                            </div>
                            <div v-if='indexNum==0'>
                                <input v-show="tip.isInpShow" class="txt" type="text" placeholder="请输入"
                                       v-model="inpCont">
                                <em class="error" v-show="tip.error">{{tip.errCont}}</em>
                            </div>
                            <div v-if="indexNum==9">
                                <select v-model="selectProv"
                                        placeholder="请选择省份"
                                        @change="getProv(selectProv)">
                                    <option v-for="item in provs" :label="item.label" :value="item.value">{{item.value}}</option>
                                </select>
                                <select
                                        v-model="selectCity"
                                        placeholder="请选择城市"
                                        @change="getCity(selectCity)">
                                    <option v-for="item in citys" :label="item.label" :value="item.value">{{item.value}}</option>
                                </select>
                            </div>
                            <div class="choice">
                                <div class="prve_topic" v-if='indexNum > 0' :data-index="(indexNum+1)"
                                     :data-num="indexNum" @click='pre(indexNum)'>上一题
                                </div>
                                <div class="next_topic" v-if='indexNum >= 0 && indexNum < 9' :data-index="(indexNum+1)"
                                     @click='nex(indexNum)'>下一题
                                </div>
                                <div class="next_topic submit" v-if="indexNum==9" @click='submitBtn()'>提交</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="result" v-show='chosePage==false'>
            <div class="evaluate_page">
                <div class="evaluate_cont">
                    <div class="entirety shade">
                        <div class="profession_cont">
                            <div :class="['profession_info',index==0?'baoshou':(index==1?'wenjian':'chengshu')]"
                                 v-for="(item,index) in results" :key="index"
                                 v-show="sumTotal<=14 ? index==0:(sumTotal>14&&sumTotal<=25 ? index==1 :index==2)">
                                <h4>{{item.resultType}}<span>{{item.resultTitle}}</span></h4>
                                <p>{{item.resultContent}}</p>
                                <div class="tips">{{item.resultTip}}</div>
                                <div class="choice">
                                    <div class="prve_topic goInvest" @click='goInvest()'>去投资</div>
                                    <div class="prve_topic appraisal" @click='appraisal()'>重新测评</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="company">聚有钱（北京）信息服务有限公司</div>
        </div>
    </div>
</template>

<script>
    import s from '@/assets/js/risk.js';
    import riskData from 'static/dataRisk.js';
    export default{
        name: 'risk',
        data(){
            return {
                conts: riskData.risk.infoCont,
                results: riskData.risk.resultCont,
                tip: {
                    isInpShow: false,
                    error: false,
                    errCont: ''
                },
                active: 0, /*默认第一题内容显示*/
                Curindex: 'null', /*高亮效果*/
                number: 1, /*默认第一题*/
                test: 0,
                res: ['A', 'B', 'C', 'D', 'E', 'F'],
                selectAry: new Array(10),
                memo: '',
                inpCont: '',
                sumTotal: 0, /*答题分数*/
                chosePage: true, /*默认答题区域显示*/
                emptyAry: [],
                citys: [],
                provs:s.provs,
                selectProv: '',
                selectCity: ''
            }
        },
        mounted () {
            this.getGread();
        },
        created(){
            this.selectProv=this.provs[0].value;
            this.getProv(this.provs[0].value);
            this.selectCity=this.citys[0].label;
        },
        methods: {
            /*index：获取自定义属性值data-index*/
            choiceItem: function (curIndex, index) {
                /*存储上一题选择内容高亮*/
                this.$set(this.emptyAry,index-1,curIndex)
                this.Curindex = curIndex;
                if (index >= 3 && index < 10) { //3-9题开始计分
                    let grade = curIndex + 1;
                    let answerNo = this.res[curIndex];
                    this.memo = '';
                    this.selectAry[index - 1] = {questionNo: index, answerNo: answerNo, grade: grade, memo: this.memo};
                } else {
                    let grade = 0;
                    if (index == 10) { //第十题
                        var answerNo =this.res[curIndex];
                        memo ='test'+ _this.selectProv+ _this.selectCity;

                    } else {
                        if (index == 1) { //第一题
                            if (curIndex == 5) { //其他选项
                                this.tip.isInpShow = true;
                                let answerNo = this.res[curIndex];
                            } else {
                                this.tip.isInpShow = false;
                                let answerNo = this.res[curIndex];
                                this.memo = '';
                                this.selectAry[0] = {
                                    questionNo: '1',
                                    answerNo: answerNo,
                                    grade: grade,
                                    memo: this.memo
                                };
                            }
                        } else {
                            let answerNo = this.res[curIndex];
                            this.memo = '';
                            this.selectAry[index - 1] = {
                                questionNo: index,
                                answerNo: answerNo,
                                grade: grade,
                                memo: this.memo
                            };
                        }
                    }
                }
            },
            /*下一题*/
            nex: function (index) {
                let nextIndex = index + 2;
                /*未点击选项,禁止跳下一题*/
                if ( this.emptyAry[index]==undefined) {
                    return;
                } else {
                    if (this.Curindex == 5 && this.number == 1) {
                        if (this.inpCont.replace(/\s+/g, "") == '') {
                            this.tip.error = true;
                            this.tip.errCont = '请填写信息'
                            return;
                        } else {
                            this.tip.error = false;
                            this.tip.errCont = ''
                            this.memo = this.inpCont.replace(/\s+/g, "");
                            this.selectAry[0] = {questionNo: '1', answerNo: 'F', grade: 0, memo: this.memo};
                        }
                    }
                    this.number = nextIndex;
                    this.active = index + 1;
                };
            },
            /*上一题*/
            pre: function (index) {
                let prevIndex = index;
                this.number = prevIndex;
                this.active = index - 1;
            },
            /*提交按钮*/
            submitBtn: function () {
                let _this = this;
                _this.memo = _this.selectProv+''+_this.selectCity;
                _this.selectAry[9] = {questionNo: '10', answerNo: '', grade: 0, memo: _this.memo};
                _this.$axios.post('/user/setting/addUserRiskAssessmentAnswer.shtml', {
                    token: _this.$route.query.token,
                    answer: JSON.stringify(_this.selectAry).toString()
                }).then(data => {
                    console.log(data);
                    if (data.statusCode == 100000) { //存储风评分数成功
                        if (data.data.riskStatus == 0) {
                            let sum = 0;
                            for (let i = 0; i < 10; i++) {
                                sum += Number(_this.selectAry[i].grade);
                            }
                            _this.sumTotal = sum;
                            _this.flag=1;
                            _this.chosePage = false;
                        }
                    }
                }).catch(err => {
                    console.log(err);
                })
            },
            /*获取分数*/
            getGread(){
                let $this = this;
                this.$axios.post('/user/setting/getRiskAssessment.shtml',{token:$this.$route.query.token})
                    .then(data=>{
                        if(data.statusCode==100000){
                            if(data.data==-1){//未评测
                                $this.chosePage = true;
                            }else{
                                $this.chosePage = false;
                                $this.sumTotal = data.data;
                            }

                        }
                    })
            },
            /*重新评测*/
            appraisal: function () {
                this.emptyAry=[];
                this.active = 0;
                this.number = 1;
                this.tip.isInpShow = false; //其他中的INPUT框收起
                this.chosePage = true;
            },
            /*二级联动选择地区*/
            getProv: function (prov) {
                this.citys = [];
                this.selectCity = '';
                for (var val of s.allCity) {
                    if (prov == val.prov) {
                        this.citys.push({label: val.label, value: val.label});
                    }else {
                       continue ;
                    }
                }
            },
            getCity: function (city) {
            },
            /*去投资*/
            goInvest:function () {
                window.location.href='invest://';
            }
        },
        watch: {
            inpCont: function (newVal, oldVal) {
                if (newVal.replace(/\s+/g, "") == '') {
                    this.tip.error = true;
                    this.tip.errCont = '请填写信息'
                    return;
                } else {
                    this.tip.error = false;
                    this.tip.errCont = ''
                }
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/css/risk/evaluate.css';
</style>