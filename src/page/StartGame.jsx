import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import MyChart from '../component/MyChart';
import Table  from '../component/Table'


const StartGame = () => { 
    let luckyParams = useParams().id
    let luckyTitle = useParams().ib
    const navigate = new useNavigate()
    const [gameTitle,setGameTitle] = useState(luckyTitle)
    const [reactivePage,setReactivePage] = useState({
        loader: '',
        status: false,
        text: '',
        animation: '',
        rotation: null,
        luckyTitle: '',
        resultVal: null,
    })
    const [textResult,setTextResult] = useState('')
    const [valResult,setValResult] = useState(null)
    const [status,setStatus] = useState(false)
    const [start,setStart] = useState(false)
    let fv = 0
    let te = 0
    let tw = 0
    let fi = 0

    

    const [sta,setSta] = useState(false)
    let titleAtLoad;
    let rotateValue;
    const [controlAnimation,setControlAnimation] = useState(false)


    useEffect(() => {
        let luckyGameClockCookie = sessionStorage.getItem('lucky-cookie')

        if(!luckyGameClockCookie){
            navigate('/')
        }
    },[])
    
    useEffect(() => {
        setTimeout(() => {
            setControlAnimation(true)
        }, 0);

        setTimeout(() => {
            setControlAnimation(false)
        }, 2000);
    }, [])

    useEffect(() => {
        titleAtLoad = sessionStorage.getItem('title-game')

        if(titleAtLoad) setGameTitle(titleAtLoad)
        
    }, [])


    

    const changeTitleAtClick = (e) => {
        setSta(true)
        
        e.preventDefault()
        document.
        getElementById('editTitle').disabled = true
        document.
        getElementById('modification-title-div').
        classList.remove('d-none') 
        document.
        getElementById('game-title').
        classList.toggle('d-none') 
    }

    const titleInput = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const titleChange = (e) => {
        e.preventDefault()

        setGameTitle(e.target.value)
    }

    const saveTitle = (e) => {
        e.preventDefault()

        document.
        getElementById('editTitle').disabled = false
        document.
        getElementById('modification-title-div').
        classList.toggle('d-none') 
        document.
        getElementById('game-title').
        classList.remove('d-none') 

        sessionStorage.setItem('title-game',gameTitle)
    }

    const navigateToChoice = (e) => {
        e.preventDefault()

        titleAtLoad = sessionStorage.getItem('title-game')
        if(titleAtLoad) sessionStorage.removeItem('title-game')

        navigate(`/LuckyGame/Choices`)
    }

    const navigateToPlay = (e, paramsA,paramsB) => {
        e.preventDefault()

        navigate(`/LuckyGame/Play/${paramsA}/${paramsB}`)
    }

    const startNow = (e) => {
        e.preventDefault()
        
        if(sta){
            document.
            getElementById('modification-title-div').
            classList.toggle('d-none') 
            document.
            getElementById('game-title').
            classList.remove('d-none') 
            document.getElementById('form-title')?.reset()
            document.
            getElementById('editTitle').disabled = false
        }
        // document.getElementById('game-title').classList.toggle('d-block');
        // document.
        // getElementById('game-title').
        // classList.toggle('d-none') 
        document.
        getElementById('beforePlay').
        classList.toggle('d-none')

        

        if(luckyParams == '5'){
            let getResultA
            // Table.myTableA.forEach(element => {
            //     if(element == Table.myTableA[fv]){
            //         getResultA = element
            //     }
            // });
            let getValueA
            Table.myConditionA.forEach(element => {
                if(element == Table.myConditionA[fv]){
                    getValueA = 150
                } 
            })
            // 240:3
            let valA = generateRotateValue(getValueA)
            console.log(valA)

            const rowTableA = getPlageAngle(5)
            console.log(rowTableA)

            getResultA = generateResultValue(240,rowTableA,Table.myTableA)
            console.log(getResultA)

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'roue',
                    rotation: getValueA,
                    resultVal: getResultA
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText').classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText').classList.toggle('d-none')
            }, 1000);

            fv += 1

            setTimeout(() => {
                if(fv == 29){
                    fv = 0
                }
            }, 0);
            
        }
        if(luckyParams == '10'){
            let getResultB
            Table.myTableA.forEach(element => {
                if(element == Table.myTableA[te]){
                    getResultB = element
                }
            });
            let getValueB
            Table.myConditionB.forEach(element => {
                if(element == Table.myConditionB[te]){
                    getValueB = element
                } 
            });
            
            let valB = generateRotateValue(getValueB)

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'roue',
                    rotation: valB,
                    resultVal: getResultB
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText').classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText').classList.toggle('d-none')
            }, 1000);

            te += 1

            setInterval(() => {
                if(te == 29){
                    te = 0
                }
            }, 0);
            
        }
        if(luckyParams == '12'){
            let getResultC
            Table.myTableC.forEach(element => {
                if(element == Table.myTableC[tw]){
                    getResultC = element
                }
            });
            let getValueC
            Table.myConditionC.forEach(element => {
                if(element == Table.myConditionC[tw]){
                    getValueC = element
                } 
            });
            
            let valC = generateRotateValue(getValueC)

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'roue',
                    rotation: valC,
                    resultVal: getResultC
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText').classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText').classList.toggle('d-none')
            }, 1000);

            tw += 1

            setInterval(() => {
                if(tw == 29){
                    tw = 0
                }
            }, 0);
            
        }
        if(luckyParams == '15'){
            let getResultD
            Table.myTableD.forEach(element => {
                if(element == Table.myTableD[fi]){
                    getResultD = element
                }
            });
            Table.myTableD.forEach(element => {
                if(element == Table.myTableD[fi]){
                    getResultD = element
                }
            });
            let getValueD
            Table.myConditionD.forEach(element => {
                if(element == Table.myConditionD[fi]){
                    getValueD = element
                } 
            });
            
            let valD = generateRotateValue(getValueD)



            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: 'Bonne chance',
                    animation: 'roue',
                    rotation: valD,
                    resultVal: getResultD
                })
            }, 0);

            setTimeout(() => {
                setReactivePage({
                    ...reactivePage,
                    text: '',
                    animation: '',
                    rotation: null,
                    resultVal: null
                })
            }, 2000);

            setTimeout(() => {
                document.getElementById('displayText').classList.remove('d-none')
            }, 0);

            setTimeout(() => {
                document.getElementById('displayText').classList.toggle('d-none')
            }, 1000);

            fi += 1

            setInterval(() => {
                if(fi == 29){
                    fi = 0
                }
            }, 0);
            
        }
    
    }
    

    const updateText = (params) => {
        if(params){
            document.
            getElementById('beforePlay')?.
            classList.remove('d-none')
        }
    }


    const generateRotateValue = (params) => {
        // let alertValue = Math.floor(Math.random(3000 * 355 + params) * 20)
        let alertValue = Math.floor(Math.random() * (355 - 0 + 1) + 0)
        console.log(alertValue)
        return Math.floor(alertValue)
    }

    const generateResultValue = (currentAngle, angleRanges, winningNumbers) => {
        for (let i = 0; i < angleRanges.length; i++) {
            const {minDeg, maxDeg, value } = angleRanges[i];
    
            // Vérifier si l'angle actuel est compris dans la plage spécifiée
            if (currentAngle >= minDeg && currentAngle <= maxDeg) {
                // Vérifier si le numéro correspondant à l'angle est un numéro gagnant
                if (winningNumbers.includes(value)) {
                    return value; // Retourner le numéro gagnant
                }
            }
        }
    
        return null; // Retourner null si aucun numéro gagnant n'est trouvé pour l'angle donné
    
        // // Si l'angle ne correspond à aucune plage, calculer l'indice correspondant à l'angle dans la liste des numéros gagnants
        // let index = Math.floor((normalizedAngle / 360) * winningNumbers.length);
    
        // // Retourner le numéro gagnant correspondant à l'indice calculé
        // winningNumber = winningNumbers[index];
    
        // return winningNumber;
    }

    
    const getPlageAngle = (numberOfSections) => {
        const angleParSection = 360 / numberOfSections;

        const wheelSections = Array.from({ length: numberOfSections }, (_, index) => {
            const minDeg = index * angleParSection;
            const maxDeg = (index + 1) * angleParSection;

            return {
                value: index + 1,
                minDeg,
                maxDeg,
            };
        });

        return wheelSections
        // wheelSections.forEach(element => {
        //     console.log(element) 
        // });
    }
    

    // const generateResultValue = (winningNumbers, angleRanges, currentAngle) => {
    //     for (let i = 0; i < angleRanges.length; i++) {
    //         const { num, startAngle, endAngle } = angleRanges[i];
    
    //         // Vérifier si l'angle actuel est compris dans la plage spécifiée
    //         if (currentAngle >= startAngle && currentAngle <= endAngle) {
    //             // Vérifier si le numéro correspondant à l'angle est un numéro gagnant
    //             if (winningNumbers.includes(num)) {
    //                 return number; // Retourner le numéro gagnant
    //             }
    //         }
    //     }
    
    //     return null; // Retourner null si aucun numéro gagnant n'est trouvé pour l'angle donné
    
    // }


    return(
        <>
            {
                controlAnimation ? 
                (
                    <div id="dash-load-home" className="d-flex align-items-center justify-content-center w-100 h-100 position-fixed top-0 end-0 bottom-0 start-0 bg-load z-3">
                        <div className="text-center">
                            <div className="spinner-border text-white" role="status">
                                <span className="col visually-hidden"></span>
                            </div>
                        </div>
                    </div>
                ) :
                ''
            }

            <section>
                <header className='d-flex flex-row justify-content-center align-items-center text-center mar-app'>
                    <div className='col pt-4 position-absolute'>
                        <button id='game-title' disabled className="button-a">
                            {gameTitle}
                        </button>
                    </div>
                    <div id='modification-title-div' className='col pt-4 position-absolute d-none'>
                        <div className='row'>
                            <div className='col-10'>
                                <form id='form-title'>
                                    <input
                                        onInput={titleInput}
                                        onChange={titleChange} 
                                        id='title-input' 
                                        name='title' 
                                        value={gameTitle}
                                        className="form-control"
                                    />
                                </form>
                            </div>
                            <div className='col-2'>
                                <button onClick={saveTitle} className="btn btn-light">Enregistrer</button>
                            </div>
                        </div>
                    </div>
                </header>

                <MyChart
                    action={reactivePage}
                    luckyChoice={luckyParams}
                    rule='one-lucky'
                    updateText={updateText}
                ></MyChart>

                <br/><br/>

                {/* <button type="button" id="modal-result" className="btn btn-primary d-none" 
                    data-bs-toggle="modal" data-bs-target="#resultModal"
                ></button>

                <div className="modal fade" id="resultModal" 
                    tabIndex="-1" aria-labelledby="resultModalLabel" aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {textResult != '' ? textResult : ''}
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* {
                    status ? 
                    (
                        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <img src="..." className="rounded me-2" alt="..."/>
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Hello, world! This is a toast message.
                        </div>
                    </div>
                    ) :
                    ''
                } */}

                    
                <div className="d-flex justify-items-center align-items-center text-center row row-cols-2 position-absolute marg-action" id='beforePlay'>
                    <div>
                        <button title={'cliquer pour démarrer le jeu'} 
                        id='play'
                        // onClick={(e) => navigateToPlay(e, luckyParams, gameTitle)} 
                        onClick={startNow}
                        className="button-j">Jouer</button>
                    </div>
                    <div>
                        <button id="editTitle" title="modifier le titre" onClick={changeTitleAtClick} className="button-e">Editer</button>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center pt-1 bg-white rounded-1 text-center text-black row row-cols-1 position-absolute text-chance d-none" id='displayText'>
                    <p>{reactivePage.text != '' ? reactivePage.text : ''}</p>
                </div>

                {/* <div className="row d-none">
                    <button title={'cliquer pour démarrer le jeu'} 
                        id='play'
                        // onClick={(e) => navigateToPlay(e, luckyParams, gameTitle)} 
                        onClick={startNow}
                        className="button-j">Jouer</button>
                </div> */}

                <div className="d-flex position-absolute mt-5 py-5 marg-action-back">
                    <button 
                        onClick={navigateToChoice}
                        className="button-d"
                        style={{transform: 'translateX(-100px)'}}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>
                </div>
                
            </section>
        </>
    )
}

export default StartGame