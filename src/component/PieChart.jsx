// import React, {  useState, useEffect, forwardRef, useRef, useId } from 'react';
// import { Pie } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import {
//     Chart as Chart,
//     ArcElement,
//     LinearScale,
//     CategoryScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Legend,
//     Tooltip,
//     TimeScale,
//   } from 'chart.js/auto'
  
// Chart.register(ArcElement, TimeScale, Tooltip, Legend)
// Chart.register(ChartDataLabels)


// const PieChart = (
//     {table,animate, options, backgroundColor, label, action, rule,updateText}
// ) => {
//     const element = document.getElementById('canvas')
//     const ref = useRef(null)
//     const instanceRef = useRef(null)
//     let i = 0
//     const [endGame,setEndGame] = useState(false)
//     const [resetGame,setResetGame] = useState(null)
//     const [textResult,setTextResult] = useState('')
//     const [status,setStatus] = useState(false)
//     const endRef = useRef(null)
//     let val

//     useEffect(() => {

//         if(table && table.length){
//             if(instanceRef.current) instanceRef.current.destroy()

//             if(ref){
//                 const ctx = ref.current.getContext('2d')
//                 instanceRef.current = new Chart(ctx, {
//                     plugins: [ChartDataLabels],
//                     type: 'pie',
//                     data: {
//                         datasets: [{
//                             label: label,
//                             data: table.map((par) => par.size),
//                             backgroundColor: backgroundColor,
//                         }],
//                         labels: table.map((par) => par.id),
//                         width:'30px',
//                         height:'30px',
//                     },
//                     options: {
//                         responsive: true,
//                         animation: {duration: 0},
//                         plugins: {
//                             tooltip: false,
//                             legend: {
//                                 display: false,
//                             },
//                             datalabels: {
//                                 color: ["#ffffff",'#1fadc','#fy6b','#lb1k'],
//                                 formatter: (value, context) => context.chart.data.labels[context.dataIndex],
//                                 font: {size: 15},
//                                 borderWidth: 2,
//                                 borderDash: [ 5, 5 ],
//                                 borderDashOffset: 2,
//                             }
//                         }
//                     },
//                 })
//             }
//         }

//         return () => {
//             if(instanceRef.current) instanceRef.current.destroy()
//         }

//     }, [])

 
    



//     if(rule === 'one-lucky'){
//         let val
//         if(action.resultVal != null){
//             val = action.resultVal
//         }

//         const fin = () => {
//             if(instanceRef.current){
//                 setTimeout(() => {
//                     setInterval(() => {
//                         if(i < 300) {
//                             instanceRef.current.options.rotation = instanceRef.current.options.rotation + action.rotation
//                             instanceRef.current.update()
//                             i = i + 1

//                             if(i === 300){
//                                 setTimeout(() => {
//                                     setTextResult(`Numero gagnant est ${val}`) 
//                                     setStatus(true)
//                                     updateText(true)
//                                 },4000);
        
//                                 setTimeout(() => {
//                                     setTextResult('') 
//                                     setStatus(false) 
//                                 },8000);
//                             }
//                         }
//                     }, 15);
//                 }, 1000);
//             }

            
//         }
//         fin()

//         return (
//             <>
//                 <div 
//                     className='my-wrapper'
//                 >
//                     <div 
//                         className='contain'
//                     >
//                         <canvas 
//                             ref={ref} 
//                             className='wheeling' 
//                             width='200px' height='200px' 
//                         />
//                         <i className="bi bi-geo-alt-fill fs-1 bs"></i>
//                     </div>
//                 </div>

//                 {
//                     status ? 
//                     (
//                         <div className="d-flex justify-content-center align-items-center pt-1 bg-white rounded-1 text-center text-black row row-cols-1 position-absolute text-chance" id='displayText'>
//                             <p>{textResult}</p>
//                         </div>
//                     ) :
//                     ''
//                 }
//             </>
//         )
//     }

//     if(rule === 'all-lucky') return <canvas  width='225px' height='225px' ref={ref} />
// }

// export default PieChart




// import React, { useState, useEffect, useRef } from 'react';
// import { Chart, ArcElement, Tooltip, Legend, TimeScale } from 'chart.js/auto';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.register(ArcElement, TimeScale, Tooltip, Legend);
// Chart.register(ChartDataLabels);

// const PieChart = ({ table, backgroundColor, label, action, rule, updateText }) => {
//   const ref = useRef(null);
//   const instanceRef = useRef(null);
//   const endRef = useRef(null);
//   let i = 0;

//   const [textResult, setTextResult] = useState('');
//   const [status, setStatus] = useState(false);

//   useEffect(() => {
//     if (table && table.length) {
//       if (instanceRef.current) instanceRef.current.destroy();

//       if (ref.current) {
//         const ctx = ref.current.getContext('2d');
//         instanceRef.current = new Chart(ctx, {
//           plugins: [ChartDataLabels],
//           type: 'pie',
//           data: {
//             datasets: [
//               {
//                 label: label,
//                 data: table.map((par) => par.size),
//                 backgroundColor: backgroundColor,
//               },
//             ],
//             labels: table.map((par) => par.id),
//             width: '30px',
//             height: '30px',
//           },
//           options: {
//             responsive: true,
//             animation: { duration: 0 },
//             plugins: {
//               tooltip: false,
//               legend: {
//                 display: false,
//               },
//               datalabels: {
//                 color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
//                 formatter: (value, context) => context.chart.data.labels[context.dataIndex],
//                 font: { size: 15 },
//                 borderWidth: 2,
//                 borderDash: [5, 5],
//                 borderDashOffset: 2,
//               },
//             },
//           },
//         });
//       }
//     }

//     return () => {
//       if (instanceRef.current) instanceRef.current.destroy();
//     };
//   }, [table, backgroundColor, label]);

//   if (rule === 'one-lucky') {
//     let val;
//     if (action.resultVal != null) {
//       val = action.resultVal;
//     }

//     const fin = () => {
//       if (instanceRef.current) {
//         setTimeout(() => {
//           const intervalId = setInterval(() => {
//             document.getElementById('myWheel').classList.toggle('roue')
//             if (i < 300) {
//                 i += 1;

//                 if (i === 300 && val != null) {
//                     clearInterval(intervalId); // Stop the interval
//                     instanceRef.current.options.rotation += action.rotation;
//                     instanceRef.current.update();

//                     setTextResult(`Numero gagnant est ${val}`);
//                     setStatus(true);
//                     updateText(true);

//                     setTimeout(() => {
//                         setTextResult('');
//                         setStatus(false);
//                         document.getElementById('myWheel').classList.remove('roue')
//                     }, 8000);
//                 }
//             }
//           }, 15);
//         }, 1000);
//       }
//     };

//     fin();

//     return (
//       <div className='my-wrapper'>
//         <div className='contain'>
//           <canvas id='myWheel' ref={ref} className={`wheeling`} width='200px' height='200px' />
//           <i className="bi bi-geo-alt-fill fs-1 bs"></i>
//         </div>

//         {status && (
//           <div className="d-flex justify-content-center align-items-center pt-1 bg-white rounded-1 text-center text-black row row-cols-1 position-absolute text-chance" id='displayText'>
//             <p>{textResult}</p>
//           </div>
//         )}
//       </div>
//     );
//   }

//   if (rule === 'all-lucky') {
//     return <canvas width='225px' height='225px' ref={ref} />;
//   }

//   return null; // Add a default case or handle it according to your requirements.
// };

// export default PieChart;





import React, { useState, useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, TimeScale } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, TimeScale, Tooltip, Legend);
Chart.register(ChartDataLabels);

const PieChart = ({ table, backgroundColor, label, action, rule, updateText }) => {
  const ref = useRef(null);
  const instanceRef = useRef(null);
  let i = 0;
  let animationFrameId;
  let timeoutId;

  const [textResult, setTextResult] = useState('');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (table && table.length) {
      if (instanceRef.current) instanceRef.current.destroy();

      if (ref.current) {
        const ctx = ref.current.getContext('2d');
        instanceRef.current = new Chart(ctx, {
          plugins: [ChartDataLabels],
          type: 'pie',
          data: {
            datasets: [
              {
                label: label,
                data: table.map((par) => par.size),
                backgroundColor: backgroundColor,
              },
            ],
            labels: table.map((par) => par.id),
            width: '30px',
            height: '30px',
          },
          options: {
            responsive: true,
            animation: { duration: 0 },
            plugins: {
              tooltip: false,
              legend: {
                display: false,
              },
              datalabels: {
                color: ["#ffffff", '#1fadc', '#fy6b', '#lb1k'],
                formatter: (value, context) => context.chart.data.labels[context.dataIndex],
                font: { size: 15 },
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 2,
              },
            },
          },
        });
      }
    }

    return () => {
      if (instanceRef.current) instanceRef.current.destroy();
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [table, backgroundColor, label]);

  if (rule === 'one-lucky') {
    let val;
    if (action.resultVal != null) {
      val = action.resultVal;
    }

    const fin = () => {
      if (instanceRef.current) {
        setTimeout(() => {
          const animate = () => {
            if (i < 300) {
                instanceRef.current.options.rotation += action.rotation;
                instanceRef.current.update();
                i += 1;

              if (i === 300 && val != null) {
                instanceRef.current.options.rotation = action.rotation;
                instanceRef.current.update();

                setTextResult(`Numero gagnant est ${val}`);
                setStatus(true);
                updateText(true);

                timeoutId = setTimeout(() => {
                  setTextResult('');
                  setStatus(false);
                }, 8000);
              }

              animationFrameId = requestAnimationFrame(animate);
            }
          };

          animate();
        }, 1000);
      }
    };

    fin();

    return (
      <div className='my-wrapper'>
        <div className='contain'>
          <canvas id='myWheel' ref={ref} className={`wheeling`} width='200px' height='200px' />
          <i className="bi bi-geo-alt-fill fs-1 bs"></i>
        </div>

        {status && (
          <div className="d-flex justify-content-center align-items-center pt-1 bg-white rounded-1 text-center text-black row row-cols-1 position-absolute text-chance" id='displayText'>
            <p>{textResult}</p>
          </div>
        )}
      </div>
    );
  }

  if (rule === 'all-lucky') {
    return <canvas width='225px' height='225px' ref={ref} />;
  }

  return null; 
};

export default PieChart;
