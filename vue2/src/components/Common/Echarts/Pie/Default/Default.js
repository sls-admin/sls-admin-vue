import echarts from 'echarts';
module.exports = {
    name: 'echarts',
    data() {
        return {
            chartDom: null,
            data: {
                title: '垂直方向柱状标题',
                subtext: '子标题描述信息',
            },
        }
    },
    methods: {
        init() {
            //基于准备好的dom，初始化echarts实例
            this.chartDom = echarts.init(document.getElementById('chartDom'));
            return this;
        },
        update() {
            if (this.chartDom === null) {
                this.init();
            }
            this.chartDom.setOption({
                title: {
                    text: this.data.title,
                    subtext: this.data.subtext,
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                },
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [{
                        value: 335,
                        name: '直接访问'
                    }, {
                        value: 310,
                        name: '邮件营销'
                    }, {
                        value: 234,
                        name: '联盟广告'
                    }, {
                        value: 135,
                        name: '视频广告'
                    }, {
                        value: 1548,
                        name: '搜索引擎'
                    }],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            });
        }
    },
    mounted: function() {
        this.init()
            .update();
    }
}