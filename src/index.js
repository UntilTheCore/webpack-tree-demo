const echarts = require('echarts')
// const img = require('../img/1.jpg')
var myChart = echarts.init(document.getElementById('main'))
// var image = new Image()
// image.src = '/img/1.jpg'
// image.onload = () => {}
var data = {
	name: '伍露',
	symbol: `image://../img/2.jpg`,
	children: [
		{
			name: '伍熊',
			children: [
				{
					name: '伍熊1',
					symbol: `image://../img/1.jpg`,
					children: [
						{ name: '年齡', value: 10 },
						{ name: '性別', value: '男' },
					],
					value: 1000,
				},
				{
					name: '伍熊2',
					value: 3322,
				},
			],
		},
		{
			name: 'display',
			children: [
				{ name: 'DirtySprite', value: 8833 },
				{ name: 'LineSprite', value: 1732 },
				{ name: 'RectSprite', value: 3623 },
			],
		},
		{
			name: 'flex',
			children: [{ name: 'FlareVis', value: 4116 }],
		},
		{
			name: 'query',
		},
		{
			name: 'scale',
			children: [
				{ name: 'IScaleMap', value: 2105 },
				{ name: 'LinearScale', value: 1316 },
				{ name: 'LogScale', value: 3151 },
				{ name: 'OrdinalScale', value: 3770 },
				{ name: 'QuantileScale', value: 2435 },
				{ name: 'QuantitativeScale', value: 4839 },
				{ name: 'RootScale', value: 1756 },
				{ name: 'Scale', value: 4268 },
				{ name: 'ScaleType', value: 1821 },
				{ name: 'TimeScale', value: 5833 },
			],
		},
	],
}

var option = {
	tooltip: {
		trigger: 'item',
		triggerOn: 'mousemove',
	},
	series: [
		{
			type: 'tree',
			id: 0,
			name: 'tree1',
			data: [data],

			top: '5%',
			left: '8%',
			bottom: '22%',
			right: '20%',
			itemStyle: {
				// 设置边框的颜色和宽度
				borderColor: 'red',
				borderWidth: 2,
			},
			symbolSize: 150,
			symbol: 'circle',
			// symbol: `image://${img}`,
			edgeShape: 'polyline',
			orient: 'TB',
			edgeForkPosition: '63%',
			initialTreeDepth: 3,

			lineStyle: {
				width: 2,
			},

			label: {
				backgroundColor: '#fff',
				position: 'left',
				verticalAlign: 'middle',
				align: 'right',
			},

			leaves: {
				label: {
					position: 'right',
					verticalAlign: 'middle',
					align: 'left',
				},
			},

			expandAndCollapse: true,
			animationDuration: 550,
			animationDurationUpdate: 750,
		},
	],
}
myChart.setOption(option)
