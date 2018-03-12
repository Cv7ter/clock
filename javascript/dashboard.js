let myChart = document.getElementById('myChart').getContext('2d');


					let massPopChart = new Chart(myChart, {
					  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
					  data:{
						labels:['', '', '', '', '', ''],
						datasets:[{
						  label:'',
						  data:[
							5,
							10,
							4,
							3,
							7
							
						  ],
						  //backgroundColor:'green',
						  backgroundColor:[
							'white',
							'white',
							'white',
							'white',
							'white',
							
							
						  ],
						  borderWidth:1,
						  borderColor:'white',
						  hoverBorderWidth:3,
						  hoverBorderColor:'#000'
						}]
					  },
					  options:{
						title:{
						  display:true,
						  text:'',
						  fontSize:25
						},
						legend:{
						  display:false,
						  position:'right',
						  labels:{
							fontColor:'#000'
						  }
						},
						layout:{
						  padding:{
							left:50,
							right:0,
							bottom:0,
							top:0
						  }
						},
						tooltips:{
						  enabled:true
						}
					  }
				});