//Calculator App that provides basic functionality.
//All output is logged in the console.


var Calculator = {

	init: function () {
		this.registerEvents();
	},

	beforeOp: [],

	afterOp: [],

	operator: '',

	result: 0, 

	add: function ( a, b ) {
		return a + b;
	},

	subtract: function ( a, b ) {
		return a - b;
	},

	multiply: function ( a, b ) {
		return a * b;
	},

	divide: function ( a, b ) {
		return a / b;
	},

	registerNumber: function ( ) {
		if (!this.operator) {
			Calculator.beforeOp.push( this.innerHTML );
			$('#output').html( Calculator.beforeOp.join('') );
		} else {
			Calculator.afterOp.push( this.innerHTML );
			$('#output').html( Calculator.afterOp.join('') );
		}
	},

	setOperator: function () {
		if ( Calculator.afterOp.length !== 0 ) {
			Calculator.beforeOp = [];
			Calculator.beforeOp.push( Calculator.result );
			Calculator.afterOp = [];
		};

		Calculator.operator = this.value;
	},

	evalEquation: function () {
		var left = parseInt( Calculator.beforeOp.join('') ),
			right = parseInt( Calculator.afterOp.join('') );

		switch (Calculator.operator) {
			case 'add':
				Calculator.result = Calculator.add( left, right );
				$('#output').html( Calculator.result );
				break;
			case 'subtract':
				Calculator.result = Calculator.subtract( left, right );
				$('#output').html( Calculator.result );
				break;
			case 'multiply':
				Calculator.result = Calculator.multiply( left, right );
				$('#output').html( Calculator.result );
				break;
			case 'divide':
				Calculator.result = Calculator.divide( left, right );
				$('#output').html( Calculator.result );
				break;
		}
	},

	reset: function () {
		Calculator.beforeOp = [];
		Calculator.afterOp = [];
		Calculator.operator = '';
	},


	registerEvents: function () {
		//Collect elements
		var numbers = $('.number'),
			operators = $('.operator'),
			evaluate = $('.evaluate'),
			reset = $('.clear');

		//Assign to event handlers
		numbers.on('click', Calculator.registerNumber );
		operators.on('click', Calculator.setOperator );
		evaluate.on('click', Calculator.evalEquation );
		reset.on('click', Calculator.reset );
	}


};

$(document).ready( function () {
	Calculator.init();
});