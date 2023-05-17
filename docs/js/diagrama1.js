    var options = {
    	series: [{
    			name: 'Bob',
    			data: [{
    				x: 'Design',
    				y: [
    					new Date('2019-01-05').getTime(),
    					new Date('2019-02-08').getTime()
    				]
    			}, {
    				x: 'Code',
    				y: [
    					new Date('2019-02-08').getTime(),
    					new Date('2019-03-11').getTime()
    				]
    			}, {
    				x: 'Test1',
    				y: [
    					new Date('2019-03-11').getTime(),
    					new Date('2019-04-16').getTime()
    				]
    			}, {
    				x: 'Test2',
    				y: [
    					new Date('2019-04-11').getTime(),
    					new Date('2019-05-16').getTime()
    				]
    			}, {
    				x: 'Test3',
    				y: [
    					new Date('2019-05-11').getTime(),
    					new Date('2019-06-16').getTime()
    				]
    			}, {
    				x: 'Test4',
    				y: [
    					new Date('2019-07-11').getTime(),
    					new Date('2019-08-16').getTime()
    				]
    			}, {
    				x: 'Test5',
    				y: [
    					new Date('2019-08-11').getTime(),
    					new Date('2019-09-16').getTime()
    				]
    			}, {
    				x: 'Test6',
    				y: [
    					new Date('2019-9-11').getTime(),
    					new Date('2019-10-16').getTime()
    				]
    			}, {
    				x: 'Test7',
    				y: [
    					new Date('2019-10-11').getTime(),
    					new Date('2019-11-16').getTime()
    				]
    			}, {
    				x: 'Test8',
    				y: [
    					new Date('2019-11-11').getTime(),
    					new Date('2019-12-16').getTime()
    				]
    			}, {
    				x: 'Test9',
    				y: [
    					new Date('2019-01-11').getTime(),
    					new Date('2019-06-16').getTime()
    				]
    			}]
    		}

    	],
    	chart: {
    		height: 350,
    		type: 'rangeBar'
    	},
    	plotOptions: {
    		bar: {
    			horizontal: true
    		}
    	},

    	fill: {
    		type: 'gradient',
    		gradient: {
    			shade: 'light',
    			type: 'vertical',
    			shadeIntensity: 0.25,
    			gradientToColors: undefined,
    			inverseColors: true,
    			opacityFrom: 1,
    			opacityTo: 1,
    			stops: [50, 0, 100, 100]
    		}
    	},
    	xaxis: {
    		type: 'datetime'
    	},
    	legend: {
    		position: 'top'
    	}
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();