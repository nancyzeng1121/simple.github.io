import React from "react"
import styles from "./index.less"
import anime from "animejs";

const NotFound = () => {
  const GLOBAL_CFG = {
    loop: true
  }

  const getRndInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const swetCollection = document.querySelectorAll('.swet')

  swetCollection.forEach((el, index) => {
    anime({
      ...GLOBAL_CFG,
      targets: el,
      opacity: [0, 1, 0],
      delay: index * 100,
      duration: index * 1500,
      translateY: index * 2,
      easing: 'easeInOutSine'
    })
  })

  const spitCollection = document.querySelectorAll('.spit')

  spitCollection.forEach((el, index) => {
    anime({
      ...GLOBAL_CFG,
      targets: el,
      opacity: [0, 1, 0],
      delay: 500,
      duration: index * 1000,
      translateY: getRndInteger(-30, 30),
      translateX: getRndInteger(-30, 30),
      easing: 'easeInOutSine'
    })
  })
  const debreCollection = document.querySelectorAll('.debre')

  debreCollection.forEach((el, index) => {
    anime({
      ...GLOBAL_CFG,
      targets: el,
      opacity: [0, 1, 0],
      delay: index * 100,
      duration: index * 100,
      scaleX: 1.3,
      scaleY: 1.3,
      translateY: getRndInteger(-10, -40),
      translateX: getRndInteger(-30, 30),
      easing: 'linear'
    })
  })

  const GEAR1 = anime({
    ...GLOBAL_CFG,
    targets: '#gear1 path',
    rotate: 360,
    easing: 'linear'
  })
  const GEAR2 = anime({
    ...GLOBAL_CFG,
    targets: '#gear2 path',
    rotate: -360,
    easing: 'linear'
  })
  const SHORT_ARROW = anime({
    ...GLOBAL_CFG,
    targets: '#shortArrow',
    rotate: 360,
    duration: 10000,
    easing: 'linear',
    transformOrigin: ['4px 25px 0', '6px 27px 0']
  })
  const LONG_ARROW = anime({
    ...GLOBAL_CFG,
    targets: '#longArrow',
    rotate: 360,
    duration: 800,
    easing: 'linear',
    transformOrigin: ['2px 32px 0', '10px 39px 0']
  })
  const LEFT_HAND = anime({
    ...GLOBAL_CFG,
    targets: '#leftHand',
    rotate: 6,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeInOutQuart',
    transformOrigin: ['2px 32px 0', '10px 39px 0']
  })
  const LEFT_PALM = anime({
    ...GLOBAL_CFG,
    targets: '#leftPalm',
    translateX: -10,
    duration: 1000,
    direction: 'alternate',
    easing: 'easeInOutQuart',
    transformOrigin: ['2px 32px 0', '10px 39px 0']
  })
  const RIGHT_HAND = anime({
    ...GLOBAL_CFG,
    targets: '#rightHand',
    rotate: 6,
    duration: 500,
    direction: 'alternate',
    easing: 'easeInOutBack',
    transformOrigin: ['280px 120px 0', '280px 120px 0']
  })

  const RIGHT_PALM = anime({
    ...GLOBAL_CFG,
    targets: '#rightPalm',
    rotate: 6,
    translateX: '-15px',
    translateY: '-5px',
    duration: 500,
    direction: 'alternate',
    easing: 'easeInOutBack',
    transformOrigin: ['30px 30px 0', '30px 30px 0']
  })
  const PEN = anime({
    ...GLOBAL_CFG,
    targets: '#pen',
    rotate: 8,
    translateX: '-15px',
    translateY: '-5px',
    duration: 500,
    direction: 'alternate',
    easing: 'easeInOutBack',
    transformOrigin: ['30px 30px 0', '30px 30px 0']
  })
  const MOUTH = anime({
    ...GLOBAL_CFG,
    targets: '#mounth',
    rotate: 2,
    scaleX: 1.1,
    scaleY: [1.2, .9],
    duration: 1500,
    direction: 'alternate',
    easing: 'easeInOutElastic',
    transformOrigin: ['30px 30px 0', '30px 30px 0']
  })
  const TONGUE = anime({
    ...GLOBAL_CFG,
    targets: '#tongue',
    rotate: -5,
    scaleX: 1.2,
    scaleY: [1.1, .6],
    duration: 1500,
    direction: 'alternate',
    easing: 'easeInOutElastic',
    transformOrigin: ['30px 10px 0', '30px 10px 0']
  })
  const HEAD = anime({
    ...GLOBAL_CFG,
    targets: '#head',
    rotate: -5,
    duration: 1500,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: ['200px 200px 0', '200px 200px 0']
  })
  const HAIR1 = anime({
    ...GLOBAL_CFG,
    targets: '#hair1',
    rotate: -3,
    duration: 1500,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: ['200px 200px 0', '200px 200px 0']
  })
  const HAIR2 = anime({
    ...GLOBAL_CFG,
    targets: '#hair2',
    rotate: -4,
    duration: 1500,
    direction: 'alternate',
    easing: 'easeInOutSine',
    transformOrigin: ['100px 180px 0', '100px 180px 0']
  })
  const BRAW = anime({
    ...GLOBAL_CFG,
    targets: '#brows',
    rotate: -10,
    duration: 500,
    direction: 'alternate',
    easing: 'easeInOutSine',
  })
  const EYE1 = anime({
    ...GLOBAL_CFG,
    targets: '#leftEye',
    duration: 2000,
    scaleY: [.4],
    direction: 'alternate',
    easing: 'easeInOutSine',
  })
  const EYE2 = anime({
    ...GLOBAL_CFG,
    targets: '#rghtEye',
    duration: 2000,
    scaleY: [.6],
    direction: 'alternate',
    easing: 'easeInOutSine',
  })
  const FLASH1 = anime({
    ...GLOBAL_CFG,
    targets: '#flash1',
    duration: getRndInteger(400, 500),
    scaleY: [.6],
    scaleX: [.6],
    rotate: getRndInteger(-4, 4),
    opacity: [0, .7, 0],
    easing: 'easeInOutSine',
  })
  const FLASH2 = anime({
    ...GLOBAL_CFG,
    targets: '#flash2',
    delay: 500,
    duration: getRndInteger(400, 500),
    scaleY: [.6],
    scaleX: [.6],
    rotate: getRndInteger(-4, 4),
    opacity: [0, .7, 0],
    easing: 'easeInOutSine',
  })
  const FLASH3 = anime({
    ...GLOBAL_CFG,
    targets: '#whiteFlash1',
    duration: 1000,
    opacity: [0, 0, .9, .7, .7, 0],
    easing: 'easeOutQuint',
  })
  const FLASH4 = anime({
    ...GLOBAL_CFG,
    targets: '#whiteFlash2',
    duration: 900,
    delay: 200,
    opacity: [0, .6, 0],
    easing: 'linear',
  })
  const PAPER = anime({
    ...GLOBAL_CFG,
    targets: '#paper1',
    delay: 500,
    duration: 3500,
    scaleY: [0, .6],
    scaleX: [0, .6],
    translateX: [-200, -100],
    translateY: [-200, -100],
    rotate: getRndInteger(-400, -100),
    opacity: [0.3, .7, 0],
    easing: 'easeInOutSine',
  })

  const arr = [
    GEAR1,
    GEAR2,
    SHORT_ARROW,
    LONG_ARROW, LEFT_HAND,RIGHT_HAND,LEFT_PALM,
    RIGHT_PALM,TONGUE,PEN,PAPER,HEAD,HAIR1,HAIR2,
    BRAW,FLASH1,FLASH2,FLASH3,FLASH4,MOUTH,EYE1,EYE2

  ]
  arr.forEach(v => {
    return v
  })

  return <div className={styles.notFondWrap}>

    <div className={styles.wrp}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
           viewBox="0 0 686 548" enable-background="new 0 0 686 548">
      <g id="bg">
        <g>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M368.5,92.5c-85.2,0-138.4,63.8-126.5,146.3
            c-31.4,12.7-49.2,43.8-44.5,81.5c-1-0.1-2-0.1-2.9-0.1c-28.7,0-46,23.3-38.6,51.9c7.4,28.7,36.6,51.9,65.3,51.9
            c14.1,0,25.4-5.6,32.4-14.7c21.8,15.7,47.7,25.2,73.3,25.2c24.4,0,44.5-8.6,58.3-23c23.5,9.5,48.1,14.7,72.6,14.7
            c92.2,0,146.9-74.7,122.2-166.9C555.5,167.2,460.7,92.5,368.5,92.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#05522b" d="M488.4,133c-33.9-23.8-73.3-38.7-112.6-40.4
            c-1.8,4.3-3.3,8.8-4.2,13.4c-7.4,35.5,15.3,64.2,50.7,64.2C448.1,170.2,473.6,155,488.4,133z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#cc1b1b" d="M442.2,34.5c35.5,0,58.2,28.7,50.7,64.2
            c-7.4,35.5-42.2,64.2-77.7,64.2c-35.5,0-58.2-28.7-50.7-64.2C372,63.3,406.7,34.5,442.2,34.5z" />
          <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" points="275.1,239.2 231.6,198.2 226.6,222.8 164.1,157.8
            176.1,204.2 72.7,140.7 202.9,238.6 192.8,204.2 244.1,247.9 241.3,218.6 		" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M240.5,144.4L240.5,144.4c1.1-1.1,2.8-1.1,3.9,0l2.5,2.5
            c1.1,1.1,1.1,2.8,0,3.9l0,0c-1.1,1.1-2.8,1.1-3.9,0l-2.5-2.5C239.4,147.3,239.4,145.5,240.5,144.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M224.8,128.8L224.8,128.8c1.1-1.1,2.8-1.1,3.9,0l7.1,7.1
            c1.1,1.1,1.1,2.8,0,3.9l0,0c-1.1,1.1-2.8,1.1-3.9,0l-7.1-7.1C223.7,131.6,223.7,129.8,224.8,128.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M223.3,151.8L223.3,151.8c0.4-1.5,1.9-2.3,3.4-2l7.9,2.1
            c1.5,0.4,2.3,1.9,1.9,3.4v0c-0.4,1.5-1.9,2.3-3.4,2l-7.9-2.1C223.8,154.7,223,153.2,223.3,151.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M213.6,149.1L213.6,149.1c0.4-1.5,1.9-2.3,3.4-2l1.3,0.3
            c1.5,0.4,2.3,1.9,1.9,3.4v0c-0.4,1.5-1.9,2.3-3.4,1.9l-1.3-0.3C214.1,152.1,213.2,150.6,213.6,149.1z" />
          <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" points="544.3,223.4 567.6,201.4 570.3,214.5 603.9,179.7
            597.4,204.6 653,170.5 583.1,223.1 588.5,204.6 560.9,228 562.4,212.3 		" />

          <ellipse transform="matrix(0.743 -0.6692 0.6692 0.743 42.794 307.6485)" fill-rule="evenodd" clip-rule="evenodd"
                   fill="#ee3333" cx="422" cy="98.1" rx="71.3" ry="57.8" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M433.3,44.4c29.7,0,48.7,24,42.4,53.7
            c-6.2,29.7-35.3,53.7-65,53.7c-29.7,0-48.7-24-42.4-53.7C374.5,68.4,403.6,44.4,433.3,44.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#cc1b1b" d="M430.8,44.4c0.9,0,1.8,0,2.7,0.1c-28.7,1.4-56.2,24.9-62.3,53.6
            c-6,28.8,11.7,52.2,39.8,53.6c-0.9,0-1.8,0.1-2.7,0.1c-29.7,0-48.7-24-42.4-53.7C372,68.4,401.1,44.4,430.8,44.4z" />
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M414.6,133.7L414.6,133.7c1.6,0,2.7,1.3,2.3,2.9l-1.4,6.5
              c-0.3,1.6-1.9,2.9-3.5,2.9h0c-1.6,0-2.7-1.3-2.3-2.9l1.4-6.5C411.4,135,413,133.7,414.6,133.7z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M432.1,50L432.1,50c1.6,0,2.7,1.3,2.3,2.9l-1.4,6.5
              c-0.3,1.6-1.9,2.9-3.5,2.9h0c-1.6,0-2.7-1.3-2.3-2.9l1.4-6.5C428.9,51.4,430.5,50,432.1,50z" />
          </g>
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M391.6,123.2L391.6,123.2c0.9,1.1,0.7,2.8-0.4,3.8l-6.5,5.4
              c-1.1,0.9-2.8,0.8-3.7-0.4v0c-0.9-1.1-0.7-2.8,0.4-3.8l6.5-5.4C389,121.9,390.7,122.1,391.6,123.2z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M463.1,64.1L463.1,64.1c0.9,1.1,0.7,2.8-0.4,3.8l-6.5,5.4
              c-1.1,0.9-2.8,0.8-3.7-0.4v0c-0.9-1.1-0.7-2.8,0.4-3.8l6.5-5.4C460.5,62.8,462.2,63,463.1,64.1z" />
          </g>
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M386.4,98L386.4,98c-0.3,1.6-2,2.9-3.7,2.9h-6.2
              c-1.7,0-2.8-1.3-2.4-2.9l0,0c0.3-1.6,2-2.9,3.7-2.9h6.2C385.6,95.1,386.7,96.4,386.4,98z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M470,98L470,98c-0.3,1.6-2,2.9-3.7,2.9h-6.2
              c-1.7,0-2.8-1.3-2.4-2.9v0c0.3-1.6,2-2.9,3.7-2.9h6.2C469.3,95.1,470.4,96.4,470,98z" />
          </g>
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M402.1,72.8L402.1,72.8c-1.4,1.1-3.4,0.9-4.5-0.5l-2.9-3.6
              c-1.1-1.4-0.9-3.5,0.5-4.6h0c1.4-1.1,3.4-0.9,4.5,0.5l2.9,3.6C403.7,69.6,403.5,71.7,402.1,72.8z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M448.9,132L448.9,132c-1.4,1.1-3.4,0.9-4.5-0.5l-2.9-3.6
              c-1.1-1.4-0.9-3.5,0.5-4.6l0,0c1.4-1.1,3.4-0.9,4.5,0.5l2.9,3.6C450.5,128.7,450.2,130.8,448.9,132z" />
          </g>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#cccccc" d="M432.8,61.9c14.9,0,23,14.2,18,31.6c-5,17.5-21.1,31.6-36.1,31.6
            c-13.8,0-21.8-12.1-19-27.7c-1.8,13.4,5.3,23.5,17.3,23.5c13.5,0,28-12.8,32.5-28.5c4.5-15.7-2.8-28.5-16.3-28.5
            c-6.4,0-13,2.9-18.7,7.5C417.3,65.6,425.2,61.9,432.8,61.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M355.2,53.6L355.2,53.6c0,1.5-1.2,2.8-2.8,2.8H349
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h3.5C354,50.8,355.2,52,355.2,53.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M377.4,53.6L377.4,53.6c0,1.5-1.2,2.8-2.8,2.8h-10.1
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h10.1C376.2,50.8,377.4,52,377.4,53.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M365.4,71.8L365.4,71.8c0,1.5-1.2,2.8-2.8,2.8h-22.2
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h22.2C364.2,69,365.4,70.3,365.4,71.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M335.2,71.8L335.2,71.8c0,1.5-1.2,2.8-2.8,2.8h-2.3
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h2.3C334,69,335.2,70.3,335.2,71.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M319.5,71.8L319.5,71.8c0,1.5-1.2,2.8-2.8,2.8h-2.3
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h2.3C318.2,69,319.5,70.3,319.5,71.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M298.9,71.8L298.9,71.8c0,1.5-1.2,2.8-2.8,2.8h-2.3
            c-1.5,0-2.8-1.2-2.8-2.8v0c0-1.5,1.2-2.8,2.8-2.8h2.3C297.7,69,298.9,70.3,298.9,71.8z" />
        </g>
      </g>
        <g id="leftHand">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#7A98B0" d="M448.7,317c-8.5,6.7-8.1,20.2,0.8,30.2c8.9,9.9,23,12.6,31.5,5.8
          c0.3-0.3,70.1-70.3,83.5-56.4c6.9,10.7-12.6,33.8-12.7,34c-5.9,9-2,22.8,8.8,30.7c10.8,7.9,24.3,7,30.2-2.1
          c0.2-0.3,65.5-98.5,24.5-125.9C580.9,210.4,449.1,316.7,448.7,317z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#5D7A93" d="M571.4,366.1c7.8,1.6,15.3-0.8,19.3-7c0.1-0.1,7.8-11.7,16.2-27.9
          c-6.4-3.5-14.1-5.6-22-5.6c-17.8,0-30,10.5-27.1,23.5C559.2,355.9,564.3,361.9,571.4,366.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#7A98B0" d="M572.9,324.7c17.8,0,34.6,10.5,37.4,23.5
          c2.8,13-9.3,23.5-27.1,23.5c-17.8,0-34.6-10.5-37.4-23.5C543,335.3,555.1,324.7,572.9,324.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#5D7A93" d="M570,333c13.7,0,26.6,8.1,28.8,18.1c2.2,10-7.1,18.1-20.8,18.1
          c-13.7,0-26.6-8.1-28.8-18.1C547,341.1,556.3,333,570,333z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#93ADC9" d="M576.7,270.6c9.5-17.7,22.7-28.5,29.4-24.2c6.8,4.4,4.5,22.3-5,40
          c-9.5,17.7-22.7,28.5-29.4,24.2C565,306.2,567.2,288.3,576.7,270.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M556.8,347.2c2.5-7.9,11.7-10.9,20.5-6.7c8.8,4.2,14,14.1,11.5,22
          l-13.6,42.9h-28.7c-3.4-4.6-4.9-10.3-3.3-15.3L556.8,347.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDA988" d="M556.8,347.2c2.1-6.6,8.7-9.8,16-8.2L561,376.1h-13.4L556.8,347.2
          z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#E6845E" d="M543.1,398.5c-0.7-2.8-0.7-5.7,0.1-8.3l10.1-31.9
          c16.5,5.2,26.7,18.3,24.1,32.7c-0.5,2.6-1.3,5.1-2.6,7.5H543.1z" />
      </g>
        <g id="Warstwa_17">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#7A98B0" d="M408.2,311.9c54,0,113.8,37.1,133.5,82.9
          c1.6,3.6,2.8,7.2,3.8,10.6H351.4c-2-3.5-3.8-7-5.4-10.6C326.4,349,354.2,311.9,408.2,311.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A7C0DC" d="M408.2,311.9c9,0,18.1,1,27.2,2.9c0.8,4.7,0.7,9.8-0.4,15.2
          c-4.3,22.3-23.3,40.4-42.5,40.4c-19.2,0-31.3-18.1-27.1-40.4c0.6-3.2,1.5-6.4,2.7-9.4C378.9,315,392.4,311.9,408.2,311.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6C8EA2" d="M411.6,311.9c53.1,1.5,110.8,38,130.1,82.9
          c1.6,3.6,2.8,7.2,3.8,10.6h-149c-2-3.9-3.8-7.8-5.4-11.8C377.5,358.2,386.7,327.4,411.6,311.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#93ADC9" d="M411.6,311.9c7.9,0.2,15.8,1.2,23.7,2.9c0.7,4.7,0.7,9.8-0.4,15.2
          c-4.3,22.3-23.3,40.4-42.5,40.4c-2.6,0-5-0.3-7.3-0.9C382.7,344.5,392.6,323.8,411.6,311.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#93ADC9" d="M359.6,378.5h9l1.8,7.3c0.6,2.5-0.9,4.5-3.4,4.5l0,0
          c-2.5,0-5-2-5.6-4.5L359.6,378.5L359.6,378.5z M362.1,370.4c-3.9,0-7,1.6-8.9,4.1l0,0c-1.9,2.5-2.6,6.1-1.6,9.9
          c1,3.9,3.4,7.4,6.6,9.9l0,0c3.2,2.5,7.1,4.1,11,4.1c3.9,0,7-1.6,8.9-4.1l0,0c1.9-2.5,2.6-6.1,1.6-9.9c-1-3.9-3.4-7.4-6.6-9.9l0,0
          C369.9,371.9,366,370.4,362.1,370.4L362.1,370.4z M371,377.3c-2.3-1.8-5.1-2.9-7.9-2.9c-2.8,0-5,1.1-6.4,2.9
          c-1.4,1.8-1.9,4.3-1.2,7.1c0.7,2.8,2.4,5.3,4.7,7.1c2.3,1.8,5.1,2.9,7.9,2.9c2.8,0,5-1.1,6.4-2.9c1.4-1.8,1.9-4.3,1.2-7.1
          C375,381.7,373.2,379.1,371,377.3z" />
      </g>
        <g id="rightHand">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#0a5f34" d="M334,294.9c11.7,2.5,19.2,14.1,16.7,25.8
          c-2.5,11.7-14.1,19.2-25.8,16.7c-0.4-0.1-117-61.3-121.4-44.6c-0.2,11.6,33.9,30.7,34.1,30.8c10.7,5.4,15,18.5,9.5,29.2
          c-5.4,10.7-18.5,15-29.2,9.5c-0.3-0.2-109.4-65.6-87.1-104.1C155.1,206.9,333.4,294.8,334,294.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6C8EA2" d="M356.1,313.2c11.7,2.5,19.2,14.1,16.7,25.8
          c-2.5,11.7-14.1,19.2-25.8,16.7c-0.4-0.1-117-61.3-121.4-44.6c-0.2,11.6,33.9,30.7,34.1,30.8c10.7,5.4,15,18.5,9.5,29.2
          c-5.4,10.7-18.5,15-29.2,9.5c-0.3-0.2-109.4-65.6-87.1-104.1C177.2,225.2,355.6,313.1,356.1,313.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#5D7A93" d="M237.9,327.4c9.7,7.9,21.7,14.5,21.8,14.6
          c0.3,0.1,0.6,0.3,0.9,0.5c3.1,4.7,5.3,10.3,6.2,16.2c1,7.4-0.2,14.2-3.1,19.5c-6.5,5.3-15.7,6.6-23.6,2.6
          c-0.1-0.1-11.8-7.1-26.7-17.8c-0.4-1.4-0.7-2.8-0.9-4.3c-2.5-17.4,7.7-31.4,22.7-31.4C236,327.2,236.9,327.3,237.9,327.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#93ADC9" d="M156.6,280.8c6.8-5.9,22.4,0.9,34.9,15.3
          c12.5,14.4,17.1,30.8,10.3,36.7c-6.8,5.9-22.4-0.9-34.9-15.3C154.4,303.2,149.8,286.8,156.6,280.8z" />
      </g>
        <g id="pen">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF5F59" d="M242.2,281.7L242.2,281.7c2.3-1.4,5.4-0.5,6.7,1.8l7.1,12.4
          c1.4,2.3,0.5,5.4-1.8,6.7h0c-2.3,1.4-5.4,0.5-6.7-1.8l-7.1-12.4C239.1,286,239.9,283,242.2,281.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#B4ABB7" d="M245.7,287.8L245.7,287.8c4.4-2.6,10.2-1,12.7,3.4l2.7,4.7
          c2.6,4.4,1,10.2-3.4,12.7l0,0c-4.4,2.6-10.2,1-12.7-3.4l-2.7-4.7C239.7,296.1,241.3,290.3,245.7,287.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFCD59" d="M250.3,295.7L250.3,295.7c5.1-2.9,11.6-1.2,14.6,3.9l46.3,80.1
          c2.9,5.1,1.2,11.6-3.9,14.6l0,0c-5.1,2.9-11.6,1.2-14.6-3.9l-46.3-80.1C243.5,305.1,245.2,298.6,250.3,295.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M302.2,385.5L302.2,385.5c2.1-1.2,4.9-0.5,6.1,1.6l4.5,7.8
          c1.2,2.1,0.5,4.9-1.6,6.1l0,0c-2.1,1.2-4.9,0.5-6.1-1.6l-4.5-7.8C299.3,389.5,300,386.7,302.2,385.5z" />
      </g>
        <g id="neck">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFE6E0" d="M390,354c0,0-22.2-36.1-37-35.2C338.3,319.8,351.2,355.1,390,354z
          " />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M353.2,259.1c4.3-14.4,19.4-22.5,33.8-18.3
          c14.4,4.3,22.6,19.4,18.3,33.8c0,0.1-5.4,17.8,12.4,39.7c9.4,11.6,7.7,28.7-3.9,38.1c-11.6,9.4-28.7,7.7-38.1-3.9
          C339.5,304.2,353.2,259.2,353.2,259.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D77E5B" d="M353.2,259.1c4.3-14.4,19.4-22.5,33.8-18.3
          c4.4,1.3,8.1,3.6,11.2,6.6v49c0,19.8-10.6,37.3-26.5,47.1C340.5,300.9,353.2,259.2,353.2,259.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFE6E0" d="M413.7,352.4c0,0-10.1-41.2,1-51
          C425.7,291.6,441.8,325.6,413.7,352.4z" />
      </g>
        <g id="head">
        <g id="hair1">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M260.4,136.2l0.8-0.9c2-2.2,4.1-4.2,6.3-5.8
            c-11.8,19.6-11.7,48.1,1.2,67.5v0c12.9,19.4,34.5,23.5,51,11.1c-1.6,2.6-3.3,5-5.3,7.3l-0.8,0.9c-16.9,19.1-42.6,16.8-57.2-5.2h0
            C241.7,189,243.5,155.3,260.4,136.2z" />
        </g>
          <g id="hair2">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M325.2,127h1.2c3,0,5.8,0.3,8.5,0.8c-22.5,4.1-43.8,23-49.8,45.5
            v0c-6,22.5,5.2,41.4,25.4,45.5c-3,0.5-6,0.8-9,0.8h-1.2c-25.5,0-40.8-20.9-33.9-46.4v0C273.2,147.9,299.7,127,325.2,127z" />
        </g>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F08A62" d="M315,260.4L315,260.4c0,8-6.5,14.5-14.5,14.5h-2.8
          c-8,0-14.5-6.5-14.5-14.5l0,0c0-8,6.5-14.5,14.5-14.5h2.8C308.5,245.9,315,252.4,315,260.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#884640" d="M319.5,219v26.2c0,8.8-7.2,15.9-15.9,15.9l0,0
          c-8.8,0-15.9-7.2-15.9-15.9V219c0-8.8,7.2-15.9,15.9-15.9l0,0C312.3,203.1,319.5,210.3,319.5,219z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M318.4,208.5h67.4c11.8,0,21.5,9.7,21.5,21.5V281
          c0,30.3-24.8,55.2-55.2,55.2l0,0c-30.3,0-55.2-24.8-55.2-55.2V230C297,218.2,306.6,208.5,318.4,208.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDA988" d="M316.4,205.5h40.7c0,18.3-7.2,42-21.2,65.1
          c-9.4,15.5-20.5,28.5-31.7,37.9c-5.9-8.8-9.3-19.3-9.3-30.6V227C295,215.2,304.6,205.5,316.4,205.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M319.6,148.1h0.9c19.7,0,31.5,16.1,26.2,35.8v0
          c-5.3,19.7-25.7,35.8-45.5,35.8h-0.9c-19.7,0-31.5-16.1-26.2-35.8v0C279.5,164.2,299.9,148.1,319.6,148.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M406.2,201.4L406.2,201.4c0,10.1-8.3,18.3-18.3,18.3h-89.1
          c-10.1,0-18.3-8.3-18.3-18.3v0c0-10.1,8.3-18.3,18.3-18.3h89.1C398,183.1,406.2,191.4,406.2,201.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M356.9,163.4L356.9,163.4c10.1,0,16.1,8.3,13.4,18.3l-2.2,8.1
          c-2.7,10.1-13.2,18.3-23.3,18.3h0c-10.1,0-16.1-8.3-13.4-18.3l2.2-8.1C336.3,171.7,346.8,163.4,356.9,163.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M416.8,219v26.2c0,8.8-7.2,15.9-15.9,15.9l0,0
          c-8.8,0-15.9-7.2-15.9-15.9V219c0-8.8,7.2-15.9,15.9-15.9l0,0C409.6,203.1,416.8,210.3,416.8,219z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M421.2,260.4L421.2,260.4c0,8-6.5,14.5-14.5,14.5h-2.8
          c-8,0-14.5-6.5-14.5-14.5l0,0c0-8,6.5-14.5,14.5-14.5h2.8C414.6,245.9,421.2,252.4,421.2,260.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#CA7757" d="M410.8,266.7c-0.6,0.2-1.3,0.3-2,0.3h-1.3c-3.6,0-6.6-3-6.6-6.6v0
          c0-3.6,3-6.6,6.6-6.6h1.3c0.7,0,1.4,0.1,2,0.3c-2.6,0.8-4.6,3.3-4.6,6.3v0C406.2,263.3,408.1,265.8,410.8,266.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF5F59" d="M371.5,275.4c6.5-2.4,12.6-1.8,13.8,1.4c1.2,3.2-3.1,7.7-9.6,10.1
          c-6.5,2.4-12.6,1.8-13.8-1.4C360.7,282.3,365,277.8,371.5,275.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M414.6,185.6L414.6,185.6c1.9,1.9,1.9,5.1,0,7l-7.1,7.1
          c-1.9,1.9-5.1,1.9-7,0v0c-1.9-1.9-1.9-5.1,0-7l7.1-7.1C409.6,183.7,412.7,183.7,414.6,185.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M421.2,202.3L421.2,202.3c0,2.7-2.2,5-5,5h-10.1
          c-2.7,0-5-2.2-5-4.9v0c0-2.7,2.2-4.9,5-4.9h10.1C418.9,197.3,421.2,199.5,421.2,202.3z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A65B55" d="M323.1,150.5h0.5c11,0,17.6,9,14.7,20v0c-3,11-14.4,20-25.4,20
          h-0.5c-11,0-17.6-9-14.7-20v0C300.6,159.5,312,150.5,323.1,150.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A65B55" d="M339.3,172.8h0.3c6.7,0,10.8,5.5,8.9,12.2v0
          c-1.8,6.7-8.8,12.2-15.5,12.2h-0.3c-6.7,0-10.8-5.5-8.9-12.2v0C325.6,178.3,332.5,172.8,339.3,172.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A65B55" d="M402.6,203.5L402.6,203.5c0,6.6-5.4,12-12,12h-19.3
          c-6.6,0-12-5.4-12-12v0c0-6.6,5.4-12,12-12h19.3C397.2,191.5,402.6,196.9,402.6,203.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A65B55" d="M410.7,218.2v6.2c0,5.8-4.7,10.5-10.5,10.5h0
          c-5.8,0-10.5-4.7-10.5-10.5v-6.2c0-5.8,4.7-10.5,10.5-10.5h0C405.9,207.7,410.7,212.5,410.7,218.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF5F59" d="M303.1,286.7c-6.3-2.9-10.2-7.7-8.8-10.8
          c1.4-3.1,7.6-3.2,13.9-0.3c6.3,2.9,10.2,7.7,8.8,10.8C315.5,289.4,309.3,289.6,303.1,286.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M427.3,233.9L427.3,233.9c1.4,2.4,0.5,5.4-1.8,6.8l-8.7,5
          c-2.4,1.4-5.4,0.5-6.8-1.8l0,0c-1.4-2.4-0.5-5.4,1.8-6.8l8.7-5C422.9,230.8,425.9,231.6,427.3,233.9z" />
          <g id="mounth">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#A44C51" d="M364.6,327.5L364.6,327.5c-9.9,3.7-22.8-0.8-28.7-9.9l-3.3-5.2
              c-5.8-9.1-2.5-19.6,7.4-23.3h0c9.9-3.7,22.8,0.8,28.7,9.9l3.3,5.2C377.8,313.4,374.5,323.8,364.6,327.5z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#8A3F41" d="M364.6,327.5L364.6,327.5c-0.2,0.1-0.5,0.2-0.7,0.2
              c-6.7-0.7-13.4-4.4-17-10.1l-3-4.7c-5.3-8.3-2.3-17.8,6.7-21.1l0,0c2.7-1,5.7-1.3,8.6-1.1c3.8,1.9,7.2,4.8,9.4,8.3l3.3,5.2
              C377.8,313.4,374.5,323.8,364.6,327.5z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M333.8,293.1c1.6-1.7,3.7-3,6.2-3.9h0c7.3-2.7,16.3-1,22.9,3.8
              c-4.3,2.2-9.8,3.5-15.5,3.4l0,0C341.9,296.3,337.2,295.1,333.8,293.1z" />
        </g>
          <g id="tongue">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF5F59" d="M362.1,323.1L362.1,323.1c-1.7,0.6-3.5,1-5.4,1l-0.9-1.4
              c-4.6-7.1-2-15.3,5.8-18.2l0,0c1.7-0.6,3.5-1,5.4-1l0.9,1.4C372.5,312,369.9,320.2,362.1,323.1z" />
        </g>
          <g id="swet6" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M295.8,239.5L295.8,239.5c1.5,0,2.7,1.2,2.7,2.7v3
              c0,1.5-1.2,2.7-2.7,2.7h0c-1.5,0-2.7-1.2-2.7-2.7v-3C293.1,240.7,294.3,239.5,295.8,239.5z" />
        </g>
          <g id="swet5" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M295.8,250.4L295.8,250.4c2.3,0,4.2,1.9,4.2,4.2v4.5
              c0,2.3-1.9,4.2-4.2,4.2h0c-2.3,0-4.2-1.9-4.2-4.2v-4.5C291.6,252.3,293.5,250.4,295.8,250.4z" />
        </g>
          <g id="swet4" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M323.5,222.9L323.5,222.9c1.5,0,2.7,1.2,2.7,2.7v3
              c0,1.5-1.2,2.7-2.7,2.7h0c-1.5,0-2.7-1.2-2.7-2.7v-3C320.8,224.1,322,222.9,323.5,222.9z" />
        </g>
          <g id="swet3" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M323.5,233.8L323.5,233.8c2.3,0,4.2,1.9,4.2,4.2v4.5
              c0,2.3-1.9,4.2-4.2,4.2h0c-2.3,0-4.2-1.9-4.2-4.2V238C319.3,235.7,321.2,233.8,323.5,233.8z" />
        </g>
          <g id="swet2" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M369.3,223.7L369.3,223.7c1.1,0,2,0.9,2,2v2.2c0,1.1-0.9,2-2,2h0
              c-1.1,0-2-0.9-2-2v-2.2C367.3,224.6,368.2,223.7,369.3,223.7z" />
        </g>
          <g id="swet1" className={styles.swet}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M369.3,231.6L369.3,231.6c1.7,0,3,1.4,3,3v3.3c0,1.7-1.4,3-3,3h0
              c-1.7,0-3-1.4-3-3v-3.3C366.3,233,367.6,231.6,369.3,231.6z" />
        </g>
          <g id="spit5" className={styles.spit}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M381,278.5c0.7,0,1.1,0.6,0.9,1.3c-0.2,0.7-0.9,1.3-1.6,1.3
              c-0.7,0-1.1-0.6-0.9-1.3C379.5,279.1,380.3,278.5,381,278.5z" />
        </g>
          <g id="spit4" className={styles.spit}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M374.3,296.2c0.7,0,1,0.6,0.7,1.3c-0.3,0.7-1.2,1.3-1.9,1.3
              s-1-0.6-0.7-1.3C372.7,296.7,373.5,296.2,374.3,296.2z" />
        </g>
          <g id="spit3" className={styles.spit}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M367.8,304.6c1.2,0,2.3-1,2.3-2.3c0-1.2-1-2.3-2.3-2.3
              c-1.2,0-2.3,1-2.3,2.3C365.5,303.6,366.5,304.6,367.8,304.6z" />
        </g>
          <g id="spit2" className={styles.spit}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M348.9,313.4h1c0.9,0,1.6,0.7,1.6,1.6v0c0,0.9-0.7,1.6-1.6,1.6h-1
              c-0.9,0-1.6-0.7-1.6-1.6v0C347.3,314.1,348,313.4,348.9,313.4z" />
        </g>
          <g id="spit1" className={styles.spit}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M346,312.2h0.5c0.4,0,0.8,0.4,0.8,0.8v0c0,0.4-0.4,0.8-0.8,0.8
              H346c-0.4,0-0.8-0.4-0.8-0.8v0C345.2,312.6,345.6,312.2,346,312.2z" />
        </g>
          <g id="brows">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D77E5B" d="M327.3,256.4c-0.8-0.7-1-1.9-0.3-2.7c0.7-0.8,1.9-1,2.7-0.3
              l9.8,7.7l13.1-4.1c1-0.3,2.1,0.3,2.4,1.3c0.3,1-0.3,2.1-1.3,2.4l-14.1,4.4c-0.6,0.2-1.3,0.1-1.8-0.3L327.3,256.4z" />
        </g>
          <g id="rghtEye">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M316.4,276.6l3.3-0.3c1.6-0.2,3.1,1,3.4,2.5v0
              c0.3,1.6-0.7,2.9-2.3,3.1l-3.3,0.3c-1.6,0.2-3.1-1-3.4-2.5v0C313.8,278.1,314.8,276.7,316.4,276.6z" />
        </g>
          <g id="leftEye">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#924E48" d="M357,267.2L357,267.2c2.1-0.5,3.9,0.8,4.1,3l0.3,4.2
              c0.2,2.2-1.4,4.4-3.5,4.9h0c-2.1,0.5-3.9-0.8-4.1-3l-0.3-4.2C353.4,269.9,354.9,267.7,357,267.2z" />
        </g>
      </g>
        <g id="rightPalm">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#7A98B0" d="M238.9,321c15,0,29.2,14.1,31.6,31.4c2.5,17.4-7.7,31.4-22.7,31.4
          c-15,0-29.2-14.1-31.6-31.4C213.8,335,223.9,321,238.9,321z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F08A62" d="M312.5,347.1c6.5,3.7,7.4,14.6,1.9,24.4
          c-5.5,9.8-15.3,14.8-21.8,11.1c-6.5-3.7-7.4-14.6-1.9-24.4C296.2,348.4,306,343.4,312.5,347.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M304.9,374.7c-7,16.3-29.7,21.2-50.7,11.1
          c-21-10.2-32.3-31.6-25.3-47.9c7-16.3,29.7-21.2,50.7-11.1C300.6,337,311.9,358.5,304.9,374.7z" />
          <g id="debree8" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M326.4,382.4c1.1,0,1.9-0.9,1.9-1.9c0-1.1-0.9-1.9-1.9-1.9
                c-1.1,0-1.9,0.9-1.9,1.9C324.5,381.5,325.4,382.4,326.4,382.4z" />
        </g>
          <g id="debree7" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M339.9,385.7c0.9,0,1.6-0.7,1.6-1.6c0-0.9-0.7-1.6-1.6-1.6
                c-0.9,0-1.6,0.7-1.6,1.6C338.4,385,339.1,385.7,339.9,385.7z" />
        </g>
          <g id="debree6" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M343.6,363.8c1.1,0,1.6,0.9,1.1,1.9c-0.4,1.1-1.7,1.9-2.7,1.9
                c-1.1,0-1.6-0.9-1.1-1.9C341.3,364.6,342.5,363.8,343.6,363.8z" />
        </g>
          <g id="debree5" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M293.9,377.6c1.5,0,3,1.2,3.3,2.7c0.3,1.5-0.6,2.7-2.1,2.7
                c-1.5,0-3-1.2-3.3-2.7C291.4,378.8,292.4,377.6,293.9,377.6z" />
        </g>
          <g id="debree4" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M288.8,365.5c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3
                c-0.7,0-1.3,0.6-1.3,1.3C287.4,364.9,288,365.5,288.8,365.5z" />
        </g>
          <g id="debree3" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M278.1,365.9c1.2,0,2.4,0.9,2.7,2.1c0.3,1.2-0.4,2.1-1.5,2.1
                c-1.2,0-2.4-0.9-2.7-2.1C276.2,366.9,276.9,365.9,278.1,365.9z" />
        </g>
          <g id="debree2" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M257.2,337.1c0.7,0,1.3-0.6,1.3-1.3c0-0.7-0.6-1.3-1.3-1.3
                c-0.7,0-1.3,0.6-1.3,1.3C255.8,336.5,256.4,337.1,257.2,337.1z" />
        </g>
          <g id="debree" className={styles.debre}>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M322.4,387c2.1,0,3.3,1.7,2.5,3.8c-0.7,2.1-3,3.8-5.2,3.8
                c-2.1,0-3.3-1.7-2.5-3.8C317.9,388.7,320.2,387,322.4,387z" />
        </g>
      </g>
        <g id="whiteFlash2" className={styles.flash}>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M345.1,380.5c12.5,9.7,15.5,16.8,6,16.8
          c-11.5,0-36.9-10.4-56.8-23.2c-7.1-4.6-12.5-8.9-16-12.5c2.6,2,5.7,4.2,9.1,6.4c19.9,12.8,45.3,23.2,56.8,23.2
          C351.6,391.3,351.4,387,345.1,380.5z" />
      </g>
        <g id="whiteFlash1" className={styles.flash}>
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M277.5,315.4c18.9,21.6,21.7,35.3,4.8,32
          c-20.4-4-62-31.3-92.8-61.1c-11-10.6-19.2-20.1-24.2-27.8c4,4.5,8.6,9.4,14,14.6c30.8,29.7,72.4,57.1,92.8,61.1
          C285.2,336.8,286.4,329.1,277.5,315.4z" />
      </g>
        <g id="basePaper">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF4DC" d="M221.1,397.3h165c2.2,0,4,1.8,4,4l0,0c0,2.2-1.8,4-4,4h-165
          c-2.2,0-4-1.8-4-4l0,0C217.1,399.2,218.9,397.3,221.1,397.3z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M341,397.3h121.5c2.2,0,4,1.8,4,4l0,0c0,2.2-1.8,4-4,4H341
          c-2.2,0-4-1.8-4-4l0,0C337,399.2,338.8,397.3,341,397.3z" />
      </g>
        <g id="flash2" className={styles.flash}>
        <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FF5F59" points="283.7,391.5 230.5,352.2 228.2,379.8 150.9,316.7
          170.2,366.1 48,310 204.2,400.4 188.6,363.9 250.8,405.2 243.8,373.3 	" />
      </g>
        <g id="flash1" className={styles.flash}>
        <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFCD59" points="297.9,397.4 267.7,375.2 266.5,390.8 222.7,355.1
          233.6,383.1 164.5,351.3 252.9,402.5 244,381.8 279.2,405.2 275.3,387.1 	" />
      </g>
        <g id="papers">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#D6F3ED" d="M568.6,130l0.8,46.6c0.1,8.3-6.6,15.3-14.9,15.4l-74.6,1.2l0-0.1
          c15.2-2.3,12.8-17.6,12.7-28.2l-0.6-38.5c-0.1-8.3,6.6-15.3,14.9-15.4l74.6-1.2l0,0.1c-7.4,1.1-13,7.6-12.9,15.2L568.6,130z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFDF7" d="M490.9,324.6v61c0,10.9-8.9,19.9-19.9,19.9h-97.7v-0.2
          c19.9-2.7,17.2-22.7,17.2-36.7v-50.3c0-10.9,8.9-19.9,19.9-19.9h97.7v0.2c-9.7,1.3-17.2,9.7-17.2,19.7V324.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,348.4h4.2c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3h-4.2
          c-1.3,0-2.3-1-2.3-2.3v0C401.4,349.4,402.4,348.4,403.7,348.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,366.7h10.4c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3
          h-10.4c-1.3,0-2.3-1-2.3-2.3v0C401.4,367.7,402.4,366.7,403.7,366.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,321h44.8c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3h-44.8
          c-1.3,0-2.3-1-2.3-2.3v0C401.4,322.1,402.4,321,403.7,321z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,330.2h44.8c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3
          h-44.8c-1.3,0-2.3-1-2.3-2.3v0C401.4,331.2,402.4,330.2,403.7,330.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,339.3H419c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3
          h-15.3c-1.3,0-2.3-1-2.3-2.3v0C401.4,340.3,402.4,339.3,403.7,339.3z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M403.7,379h40.1c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3h-40.1
          c-1.3,0-2.3-1-2.3-2.3v0C401.4,380,402.4,379,403.7,379z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M466,318.6h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2H466c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C462.3,319.4,464.1,318.6,466,318.6L466,318.6z M471.2,321.9H466c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C473.2,322.3,472.2,321.9,471.2,321.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M466,343.5h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2H466c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C462.3,344.3,464.1,343.5,466,343.5L466,343.5z M471.2,346.8H466c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C473.2,347.2,472.2,346.8,471.2,346.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAC4" d="M466,370.8h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2H466c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C462.3,371.6,464.1,370.8,466,370.8L466,370.8z M471.2,374H466c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C473.2,374.5,472.2,374,471.2,374z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M471.9,392.7L471.9,392.7c1.1-0.7,1.5-2.1,0.9-3.3l-4.8-8.3
          c-0.7-1.1-2.1-1.5-3.3-0.9l0,0l-0.2,0.1c-0.4,0.2-0.7,0.5-0.9,0.9l-4.8,8.3c-0.7,1.1-0.3,2.6,0.9,3.3l0,0c1.1,0.7,2.6,0.3,3.3-0.9
          l2.9-5l2.8,4.8C469.3,393,470.8,393.4,471.9,392.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M470.8,354.5L470.8,354.5c0.7,1.1,0.4,2.6-0.7,3.3l-2,1.3l1.3,2
          c0.7,1.1,0.4,2.6-0.7,3.3l0,0c-1.1,0.7-2.6,0.4-3.3-0.7l-1.3-2l-2,1.3c-1.1,0.7-2.6,0.4-3.3-0.7l0,0c-0.7-1.1-0.4-2.6,0.7-3.3
          l2-1.3l-1.3-2c-0.7-1.1-0.4-2.6,0.7-3.3l0,0c1.1-0.7,2.6-0.4,3.3,0.7l1.3,2l2-1.3C468.6,353,470.1,353.3,470.8,354.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M475.9,317.3L475.9,317.3c0.7,1.1,0.4,2.6-0.7,3.3l-2,1.3l1.3,2
          c0.7,1.1,0.4,2.6-0.7,3.3l0,0c-1.1,0.7-2.6,0.4-3.3-0.7l-1.3-2l-2,1.3c-1.1,0.7-2.6,0.4-3.3-0.7l0,0c-0.7-1.1-0.4-2.6,0.7-3.3
          l2-1.3l-1.3-2c-0.7-1.1-0.4-2.6,0.7-3.3l0,0c1.1-0.7,2.6-0.4,3.3,0.7l1.3,2l2-1.3C473.7,315.9,475.1,316.2,475.9,317.3z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF4DC" d="M538.6,217.7v61c0,10.9-8.9,19.9-19.9,19.9h-97.7v-0.2
          c19.9-2.7,17.2-22.7,17.2-36.7v-50.3c0-10.9,8.9-19.9,19.9-19.9h97.7v0.2c-9.7,1.3-17.2,9.7-17.2,19.7V217.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M514.9,211h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C511.3,211.8,513,211,514.9,211L514.9,211z M520.2,214.2h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C522.1,214.7,521.2,214.2,520.2,214.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M514.9,235.9h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C511.3,236.7,513,235.9,514.9,235.9L514.9,235.9z M520.2,239.1h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C522.1,239.6,521.2,239.1,520.2,239.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M514.9,263.1h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C511.3,263.9,513,263.1,514.9,263.1L514.9,263.1z M520.2,266.4h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C522.1,266.8,521.2,266.4,520.2,266.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M520.8,285.1L520.8,285.1c1.1-0.7,1.5-2.1,0.9-3.3l-4.8-8.3
          c-0.7-1.1-2.1-1.5-3.3-0.9l0,0l-0.2,0.1c-0.4,0.2-0.7,0.5-0.9,0.9l-4.8,8.3c-0.7,1.1-0.3,2.6,0.9,3.3l0,0c1.1,0.7,2.6,0.3,3.3-0.9
          l2.9-5l2.8,4.8C518.2,285.3,519.7,285.7,520.8,285.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M523.6,257.4L523.6,257.4c1.1-0.7,1.5-2.1,0.9-3.3l-4.8-8.3
          c-0.7-1.1-2.1-1.5-3.3-0.9l0,0l-0.2,0.1c-0.4,0.2-0.7,0.5-0.9,0.9l-4.8,8.3c-0.7,1.1-0.3,2.6,0.9,3.3l0,0c1.1,0.7,2.6,0.3,3.3-0.9
          l2.9-5l2.8,4.8C521,257.7,522.5,258.1,523.6,257.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M521.5,231.9L521.5,231.9c1.1-0.7,1.5-2.1,0.9-3.3l-4.8-8.3
          c-0.7-1.1-2.1-1.5-3.3-0.9l0,0l-0.2,0.1c-0.4,0.2-0.7,0.5-0.9,0.9l-4.8,8.3c-0.7,1.1-0.3,2.6,0.9,3.3l0,0c1.1,0.7,2.6,0.3,3.3-0.9
          l2.9-5l2.8,4.8C518.8,232.2,520.3,232.6,521.5,231.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,246.6h-4.2c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h4.2c1.3,0,2.3-1,2.3-2.3v0C498.7,247.6,497.7,246.6,496.5,246.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,264.9h-10.4c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h10.4c1.3,0,2.3-1,2.3-2.3v0C498.7,265.9,497.7,264.9,496.5,264.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,219.2h-44.8c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h44.8c1.3,0,2.3-1,2.3-2.3v0C498.7,220.3,497.7,219.2,496.5,219.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,228.4h-44.8c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h44.8c1.3,0,2.3-1,2.3-2.3v0C498.7,229.4,497.7,228.4,496.5,228.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,237.5h-15.3c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h15.3c1.3,0,2.3-1,2.3-2.3v0C498.7,238.5,497.7,237.5,496.5,237.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE3C7" d="M496.5,277.2h-40.1c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h40.1c1.3,0,2.3-1,2.3-2.3v0C498.7,278.2,497.7,277.2,496.5,277.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M550.5,135.7h4.4c1.6,0,3,0.7,4.1,1.7c1,1.1,1.7,2.5,1.7,4.1v4
          c0,1.6-0.7,3-1.7,4.1c-1.1,1.1-2.5,1.7-4.1,1.7h-4.4c-1.6,0-3-0.7-4.1-1.7c-1.1-1-1.7-2.5-1.7-4.1v-4c0-1.6,0.7-3,1.7-4.1
          S548.9,135.7,550.5,135.7L550.5,135.7z M554.8,138.4h-4.4c-0.8,0-1.6,0.3-2.2,0.9c-0.6,0.6-0.9,1.3-0.9,2.2v4
          c0,0.8,0.3,1.6,0.9,2.2c0.6,0.6,1.3,0.9,2.2,0.9h4.4c0.8,0,1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.3,0.9-2.2v-4c0-0.8-0.3-1.6-0.9-2.2
          C556.5,138.8,555.7,138.4,554.8,138.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M550.5,158.4h4.4c1.6,0,3,0.7,4.1,1.7c1,1.1,1.7,2.5,1.7,4.1v4
          c0,1.6-0.7,3-1.7,4.1c-1.1,1.1-2.5,1.7-4.1,1.7h-4.4c-1.6,0-3-0.7-4.1-1.7c-1.1-1-1.7-2.5-1.7-4.1v-4c0-1.6,0.7-3,1.7-4.1
          C547.4,159.1,548.9,158.4,550.5,158.4L550.5,158.4z M554.8,161.1h-4.4c-0.8,0-1.6,0.3-2.2,0.9c-0.6,0.6-0.9,1.3-0.9,2.2v4
          c0,0.8,0.3,1.6,0.9,2.2c0.6,0.6,1.3,0.9,2.2,0.9h4.4c0.8,0,1.6-0.3,2.2-0.9c0.6-0.6,0.9-1.3,0.9-2.2v-4c0-0.8-0.3-1.6-0.9-2.2
          C556.5,161.5,555.7,161.1,554.8,161.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M555.4,176.7L555.4,176.7c1-0.6,1.3-1.8,0.7-2.7l-4-6.9
          c-0.5-1-1.8-1.3-2.7-0.7l0,0l-0.1,0.1c-0.3,0.2-0.6,0.4-0.8,0.8l-4,6.9c-0.6,1-0.2,2.2,0.7,2.7l0,0c1,0.5,2.2,0.2,2.7-0.7l2.4-4.2
          l2.3,4C553.2,177,554.5,177.3,555.4,176.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M556.5,134.5L556.5,134.5c0.7,1.1,0.4,2.6-0.7,3.3l-2,1.3l1.3,2
          c0.7,1.1,0.4,2.6-0.7,3.3h0c-1.1,0.7-2.6,0.4-3.3-0.7l-1.3-2l-2,1.3c-1.1,0.7-2.6,0.4-3.3-0.7l0,0c-0.7-1.1-0.4-2.6,0.7-3.3l2-1.3
          l-1.3-2c-0.7-1.1-0.4-2.6,0.7-3.3l0,0c1.1-0.7,2.6-0.4,3.3,0.7l1.3,2l2-1.3C554.3,133.1,555.8,133.4,556.5,134.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M530.5,136.7h-26.7c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h26.7c1.3,0,2.3-1,2.3-2.3v0C532.8,137.7,531.8,136.7,530.5,136.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M530.5,145.1h-26.7c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h26.7c1.3,0,2.3-1,2.3-2.3v0C532.8,146.1,531.8,145.1,530.5,145.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M530.5,159h-26.7c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h26.7c1.3,0,2.3-1,2.3-2.3v0C532.8,160,531.8,159,530.5,159z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M514.9,167.9h-11.1c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h11.1c1.3,0,2.3-1,2.3-2.3v0C517.2,168.9,516.1,167.9,514.9,167.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M524.7,167.9h-3.2c-1.3,0-2.3,1-2.3,2.3v0c0,1.3,1,2.3,2.3,2.3
          h3.2c1.3,0,2.3-1,2.3-2.3v0C527,168.9,526,167.9,524.7,167.9z" />
      </g>
        <g id="leftPalm">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FF966C" d="M498.2,391.8c-0.9,4.8-0.3,9.4,1.4,13.6h79.9
          c1.2-2.4,2.1-4.9,2.6-7.5c3.2-17.6-13-33.3-36.1-35C522.7,361.3,501.4,374.2,498.2,391.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FDA988" d="M537.3,370.2c5.6,4.6,5.1,14.8-1.1,22.7
          c-6.2,8-15.8,10.7-21.4,6.1c-5.6-4.6-5.1-14.8,1.1-22.7C522.2,368.4,531.7,365.6,537.3,370.2z" />
      </g>
        <g id="paper1">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF4DC" d="M129.6,181.5l43.1,43.1c7.7,7.7,7.7,20.4,0,28.1l-69.1,69.1
          l-0.1-0.1c12.2-16-3.9-28.2-13.8-38.1L54.2,248c-7.7-7.7-7.7-20.4,0-28.1l69.1-69.1l0.1,0.1c-5.9,7.8-5.3,19,1.8,26.1L129.6,181.5z
          " />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M108.1,193.5l3.7-3.7c1.4-1.4,3.1-2,4.9-2c1.8,0,3.6,0.7,4.9,2
          l3.4,3.4c1.3,1.3,2,3.1,2,4.9c0,1.8-0.7,3.6-2,4.9l-3.7,3.7c-1.3,1.3-3.1,2-4.9,2c-1.8,0-3.6-0.7-4.9-2l-3.4-3.4
          c-1.4-1.4-2-3.1-2-4.9C106.1,196.7,106.8,194.9,108.1,193.5L108.1,193.5z M114.2,192.1l-3.7,3.7c-0.7,0.7-1.1,1.7-1.1,2.6
          c0,0.9,0.4,1.9,1.1,2.6l3.4,3.4c0.7,0.7,1.7,1.1,2.6,1.1c0.9,0,1.9-0.4,2.6-1.1l3.7-3.7c0.7-0.7,1.1-1.7,1.1-2.6
          c0-1-0.4-1.9-1.1-2.6l-3.4-3.4c-0.7-0.7-1.7-1.1-2.6-1.1C115.8,191.1,114.9,191.4,114.2,192.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M125.7,211.1l3.7-3.7c1.4-1.4,3.1-2,4.9-2c1.8,0,3.6,0.7,4.9,2
          l3.4,3.4c1.3,1.3,2,3.1,2,4.9c0,1.8-0.7,3.6-2,4.9l-3.7,3.7c-1.3,1.3-3.1,2-4.9,2c-1.8,0-3.6-0.7-4.9-2l-3.4-3.4
          c-1.4-1.4-2-3.1-2-4.9C123.7,214.3,124.4,212.5,125.7,211.1L125.7,211.1z M131.8,209.7l-3.7,3.7c-0.7,0.7-1.1,1.7-1.1,2.6
          c0,0.9,0.4,1.9,1.1,2.6l3.4,3.4c0.7,0.7,1.7,1.1,2.6,1.1c0.9,0,1.9-0.4,2.6-1.1l3.7-3.7c0.7-0.7,1.1-1.7,1.1-2.6
          c0-0.9-0.4-1.9-1.1-2.6l-3.4-3.4c-0.7-0.7-1.7-1.1-2.6-1.1C133.4,208.7,132.5,209,131.8,209.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M145,230.4l3.7-3.7c1.4-1.4,3.1-2,4.9-2c1.8,0,3.6,0.7,4.9,2
          l3.4,3.4c1.3,1.3,2,3.1,2,4.9c0,1.8-0.7,3.6-2,4.9l-3.7,3.7c-1.3,1.3-3.1,2-4.9,2c-1.8,0-3.6-0.7-4.9-2l-3.4-3.4
          c-1.4-1.4-2-3.1-2-4.9C143,233.6,143.7,231.8,145,230.4L145,230.4z M151,229l-3.7,3.7c-0.7,0.7-1.1,1.7-1.1,2.6
          c0,0.9,0.4,1.9,1.1,2.6l3.4,3.4c0.7,0.7,1.7,1.1,2.6,1.1c0.9,0,1.9-0.4,2.6-1.1l3.7-3.7c0.7-0.7,1.1-1.7,1.1-2.6
          c0-1-0.4-1.9-1.1-2.6l-3.4-3.4c-0.7-0.7-1.7-1.1-2.6-1.1C152.7,227.9,151.7,228.3,151,229z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M164.7,241.8L164.7,241.8c0.3-1.3-0.4-2.6-1.7-2.9l-9.3-2.5
          c-1.3-0.3-2.6,0.4-2.9,1.7v0l0,0.2c-0.1,0.4-0.1,0.9,0,1.3l2.5,9.3c0.3,1.3,1.7,2,2.9,1.7l0,0c1.3-0.3,2-1.7,1.7-2.9l-1.5-5.6
          l5.4,1.4C163.1,243.8,164.4,243,164.7,241.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M120.3,231.8l-3,3c-0.9,0.9-0.9,2.3,0,3.2l0,0
          c0.9,0.9,2.3,0.9,3.2,0l3-3c0.9-0.9,0.9-2.3,0-3.2l0,0C122.6,230.9,121.2,230.9,120.3,231.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M133.2,244.7l-7.3,7.3c-0.9,0.9-0.9,2.3,0,3.2h0
          c0.9,0.9,2.3,0.9,3.2,0l7.3-7.3c0.9-0.9,0.9-2.3,0-3.2h0C135.5,243.8,134.1,243.8,133.2,244.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M100.9,212.4l-31.7,31.7c-0.9,0.9-0.9,2.3,0,3.2l0,0
          c0.9,0.9,2.3,0.9,3.2,0l31.7-31.7c0.9-0.9,0.9-2.3,0-3.2v0C103.3,211.5,101.8,211.5,100.9,212.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M107.4,218.9l-31.7,31.7c-0.9,0.9-0.9,2.3,0,3.2l0,0
          c0.9,0.9,2.3,0.9,3.2,0l31.7-31.7c0.9-0.9,0.9-2.3,0-3.2l0,0C109.7,218,108.3,218,107.4,218.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M113.8,225.3L103,236.2c-0.9,0.9-0.9,2.3,0,3.2l0,0
          c0.9,0.9,2.3,0.9,3.2,0l10.8-10.8c0.9-0.9,0.9-2.3,0-3.2v0C116.2,224.4,114.7,224.4,113.8,225.3z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M141.9,253.4l-28.4,28.4c-0.9,0.9-0.9,2.3,0,3.2h0
          c0.9,0.9,2.3,0.9,3.2,0l28.4-28.4c0.9-0.9,0.9-2.3,0-3.2h0C144.2,252.5,142.8,252.5,141.9,253.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M145.5,209.8L145.5,209.8c1.1,0.8,1.4,2.3,0.6,3.3l-1.4,2l2,1.4
          c1.1,0.8,1.4,2.3,0.6,3.3l0,0c-0.8,1.1-2.3,1.4-3.3,0.6l-2-1.4l-1.4,2c-0.8,1.1-2.3,1.4-3.3,0.6l0,0c-1.1-0.8-1.4-2.3-0.6-3.3
          l1.4-2l-2-1.4c-1.1-0.8-1.4-2.3-0.6-3.3l0,0c0.8-1.1,2.3-1.4,3.3-0.6l2,1.4l1.4-2C142.9,209.3,144.4,209.1,145.5,209.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#6E645E" d="M115.4,194.5L115.4,194.5c0.7,1.1,0.4,2.6-0.7,3.3l-2,1.3l1.3,2
          c0.7,1.1,0.4,2.6-0.7,3.3l0,0c-1.1,0.7-2.6,0.4-3.3-0.7l-1.3-2l-2,1.3c-1.1,0.7-2.6,0.4-3.3-0.7l0,0c-0.7-1.1-0.4-2.6,0.7-3.3
          l2-1.3l-1.3-2c-0.7-1.1-0.4-2.6,0.7-3.3l0,0c1.1-0.7,2.6-0.4,3.3,0.7l1.3,2l2-1.3C113.2,193.1,114.7,193.4,115.4,194.5z" />
      </g>
        <g id="gear2">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M203.3,117.3l-5.6-1.1c-0.6-1.5-1.4-2.9-2.4-4.2l1.9-5.4
          c0.6-1.6,0.3-3.3-1.1-4.2l-3.1-1.8l-3.1-1.8c-1.4-0.8-3.1-0.2-4.1,1.1l-3.7,4.3c-1.6-0.2-3.2-0.2-4.8,0l-3.7-4.3
          c-1.1-1.3-2.7-1.9-4.2-1.1l-3.1,1.8l-3.1,1.8c-1.4,0.8-1.7,2.6-1.1,4.2l1.9,5.4c-0.5,0.6-0.9,1.3-1.3,2c-0.4,0.7-0.8,1.4-1.1,2.2
          l-5.6,1.1c-1.6,0.3-3,1.4-3,3v3.6v3.6c0,1.7,1.4,2.7,3,3l5.6,1.1c0.6,1.5,1.4,2.9,2.4,4.2l-1.9,5.3c-0.5,1.6-0.3,3.3,1.1,4.2
          l3.1,1.8l3.1,1.8c1.4,0.8,3.1,0.2,4.1-1.1l3.7-4.3c1.6,0.2,3.2,0.2,4.8,0l3.7,4.3c1.1,1.3,2.7,1.9,4.2,1.1l3.1-1.8l3.1-1.8
          c1.4-0.8,1.7-2.6,1.1-4.2l-1.9-5.4c0.4-0.5,0.7-1,1-1.5c0.1-0.1,0.2-0.3,0.3-0.5c0.4-0.7,0.8-1.5,1.1-2.2l5.6-1.1
          c1.6-0.3,3-1.4,3-3V124v-3.6C206.4,118.7,205,117.6,203.3,117.3z M188.6,124.9l0,0.2l0,0.1c-0.1,1.2-0.5,2.3-1.1,3.4
          c-2.5,4.4-8.1,5.9-12.4,3.3c-3.1-1.8-4.8-5.2-4.5-8.6l0-0.2l0-0.1l0-0.2l0-0.1c0.2-1.2,0.5-2.3,1.1-3.4c0.1-0.1,0.1-0.2,0.2-0.4
          c2.5-4,7.6-5.4,11.8-3.3c0.2,0.1,0.3,0.2,0.5,0.3C187.3,118,188.9,121.5,188.6,124.9z" />
      </g>
        <g id="gear1" >
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#C4E6E0" d="M235.6,88.3l-3.6-0.7c-0.4-0.9-0.9-1.8-1.5-2.7l1.2-3.4
          c0.3-1,0.2-2.1-0.7-2.6l-2-1.1l-2-1.1c-0.9-0.5-1.9-0.1-2.6,0.7L222,80c-1-0.1-2.1-0.1-3.1,0l-2.4-2.7c-0.7-0.8-1.7-1.2-2.6-0.7
          l-2,1.1l-2,1.1c-0.9,0.5-1.1,1.6-0.7,2.6l1.2,3.4c-0.3,0.4-0.6,0.8-0.8,1.3c-0.3,0.5-0.5,0.9-0.7,1.4l-3.6,0.7
          c-1,0.2-1.9,0.9-1.9,1.9v2.3v2.3c0,1.1,0.9,1.7,1.9,1.9l3.5,0.7c0.4,1,0.9,1.9,1.5,2.7l-1.2,3.4c-0.3,1-0.2,2.1,0.7,2.6l2,1.1
          l2,1.1c0.9,0.5,1.9,0.1,2.6-0.7l2.4-2.7c1,0.1,2.1,0.1,3.1,0l2.4,2.7c0.7,0.8,1.7,1.2,2.6,0.7l2-1.1l2-1.1c0.9-0.5,1.1-1.6,0.7-2.6
          l-1.2-3.4c0.2-0.3,0.5-0.6,0.7-1v0l0,0c0.1-0.1,0.1-0.2,0.2-0.3c0.3-0.5,0.5-0.9,0.7-1.4l3.6-0.7c1-0.2,1.9-0.9,1.9-1.9v-2.3v-2.3
          C237.5,89.2,236.7,88.5,235.6,88.3z M226.2,93.1l0,0.1l0,0l0,0.1l0,0l0,0.1c-0.1,0.7-0.3,1.3-0.7,1.9c-1.6,2.8-5.1,3.7-7.9,2.1
          c-2-1.1-3-3.3-2.9-5.4l0-0.1l0,0l0-0.1l0,0c0.1-0.7,0.3-1.5,0.7-2.1c0-0.1,0.1-0.2,0.1-0.2c1.6-2.5,4.8-3.4,7.5-2.1
          c0.1,0.1,0.2,0.1,0.3,0.2C225.4,88.7,226.5,90.9,226.2,93.1z" />
      </g>
        <g id="shortArrow">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M423.4,91.5c3.6,0,5.9,2.9,5.2,6.6c-0.8,3.6-4.3,6.6-7.9,6.6
          c-3.6,0-5.9-2.9-5.2-6.6C416.2,94.5,419.8,91.5,423.4,91.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M422,98.1L422,98.1c-1.6-0.7-2.1-2.5-1.1-4l12.8-20
          c0.9-1.5,3-2.1,4.5-1.3l0,0c1.6,0.7,2.1,2.5,1.1,4l-12.8,20C425.6,98.2,423.6,98.8,422,98.1z" />
      </g>
        <g id="longArrow">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#333333" d="M416.7,58.7L416.7,58.7c1.2-0.4,2.3,0.3,2.5,1.6l4.7,34.7
          c0.2,1.3-0.7,2.6-1.9,3h0c-1.2,0.4-2.3-0.3-2.5-1.6l-4.7-34.7C414.6,60.5,415.5,59.1,416.7,58.7z" />
      </g>
        <g id="desk">
        <path fill-rule="evenodd" clip-rule="evenodd" fill="#B08454" d="M115.7,407.4h491.2c16.2,0,26.2,13.2,22.4,29.4l0,0
          c-3.9,16.2-20.2,29.4-36.4,29.4H101.6c-16.2,0-26.2-13.2-22.4-29.4l0,0C83.1,420.6,99.5,407.4,115.7,407.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C89761" d="M103.2,407.4h299.5c16.2,0,26.2,13.2,22.4,29.4l0,0
          c-3.9,16.2-20.2,29.4-36.4,29.4H89.1c-16.2,0-26.2-13.2-22.4-29.4l0,0C70.6,420.6,87,407.4,103.2,407.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#B08454" d="M288.4,407.4h98.3c-4.9,2.8-8.2,8.1-8.2,14.1v5.2v39.5h-98.2
          c0-1.3,0-2.5,0-3.7v-41C280.2,415.4,283.5,410.2,288.4,407.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C89761" d="M134.8,405.4h512.5c8.6,0,14,7,11.9,15.7v0
          c-2.1,8.6-10.8,15.7-19.4,15.7H127.3c-8.6,0-14-7-11.9-15.7v0C117.4,412.5,126.2,405.4,134.8,405.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#F4B980" d="M134.8,405.4h315.9c8.6,0,14,7,11.9,15.7v0
          c-2.1,8.6-10.8,15.7-19.4,15.7H127.3c-8.6,0-14-7-11.9-15.7v0C117.4,412.5,126.2,405.4,134.8,405.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#C89761" d="M285.1,405.4h98.3c-7.8,1.2-13.8,7.9-13.8,16v5.2v10.1h-98.3
          v-15.3C271.4,413.3,277.4,406.6,285.1,405.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFC68C" d="M65.6,405.4h69.8c8.6,0,14,7,11.9,15.7l0,0
          c-2.1,8.6-10.8,15.7-19.4,15.7H58.1c-8.6,0-14-7-11.9-15.7l0,0C48.2,412.5,56.9,405.4,65.6,405.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#99CC66" d="M69,364.4h100.2c6.8,0,12.4,5.6,12.4,12.4v16.3
          c0,6.8-5.6,12.4-12.4,12.4H69c-6.8,0-12.4-5.6-12.4-12.4v-16.3C56.6,370,62.2,364.4,69,364.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#85B05A" d="M169.1,364.4h50.1c5.3,0,9.9,3.4,11.6,8.1h-5.4
          c-4.1,0-7.5,3.4-7.5,7.5v9.8c0,4.1,3.4,7.5,7.5,7.5h5.4c-1.7,4.7-6.3,8.1-11.6,8.1h-50.1c-6.8,0-12.4-5.6-12.4-12.4v-16.3
          C156.8,370,162.3,364.4,169.1,364.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF4DC" d="M230.8,397.3H175c-4.1,0-7.5-3.4-7.5-7.5V380
          c0-4.1,3.4-7.5,7.5-7.5h55.8c-4.1,0-7.5,3.4-7.5,7.5v9.8C223.3,394,226.7,397.3,230.8,397.3z" />
          <g>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M177.4,378.3h38.2c1.3,0,2.3,1,2.3,2.3v0c0,1.3-1,2.3-2.3,2.3
            h-38.2c-1.3,0-2.3-1-2.3-2.3v0C175.1,379.3,176.1,378.3,177.4,378.3z" />
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M177.4,387h38.2c1.3,0,2.3,1,2.3,2.3l0,0c0,1.3-1,2.3-2.3,2.3
            h-38.2c-1.3,0-2.3-1-2.3-2.3l0,0C175.1,388.1,176.1,387,177.4,387z" />
        </g>
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#BDE892" d="M78.2,377.1h3.2c1.3,0,2.4,1.1,2.4,2.4v11.6
          c0,1.3-1.1,2.4-2.4,2.4h-3.2c-1.3,0-2.4-1.1-2.4-2.4v-11.6C75.7,378.2,76.8,377.1,78.2,377.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#BDE892" d="M98.4,377.1h23.7c4.5,0,8.2,3.7,8.2,8.2l0,0
          c0,4.5-3.7,8.2-8.2,8.2H98.4c-4.5,0-8.2-3.7-8.2-8.2l0,0C90.1,380.8,93.8,377.1,98.4,377.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#BDE892" d="M138.3,377.1L138.3,377.1c1.1,0,2,0.9,2,2v12.4c0,1.1-0.9,2-2,2h0
          c-1.1,0-2-0.9-2-2v-12.4C136.3,378,137.2,377.1,138.3,377.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M359.8,426.6v49.7c0,8.9-7.3,16.2-16.2,16.2h-96.1v-0.1
          c16.2-2.2,14-18.5,14-29.9v-41c0-8.9,7.3-16.2,16.2-16.2h96.1v0.1c-7.9,1.1-14,7.9-14,16V426.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#D4CAB0" d="M287.4,492.5h-39.9v-0.1c16.2-2.2,14-18.5,14-29.9v-41
          c0-8.9,7.3-16.2,16.2-16.2h39.9v0.1c-7.9,1.1-14,7.9-14,16v5.2v49.7C303.6,485.2,296.3,492.5,287.4,492.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF4DC" d="M286.5,431.5v61c0,10.9-8.9,19.9-19.9,19.9h-118v-0.2
          c19.9-2.7,17.2-22.7,17.2-36.7v-50.3c0-10.9,8.9-19.9,19.9-19.9h118v0.2c-9.7,1.3-17.2,9.7-17.2,19.7V431.5z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M256.7,419.7h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C253.1,420.5,254.8,419.7,256.7,419.7L256.7,419.7z M262,422.9h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C263.9,423.4,263,422.9,262,422.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M256.7,444.6h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C253.1,445.4,254.8,444.6,256.7,444.6L256.7,444.6z M262,447.8h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C263.9,448.2,263,447.8,262,447.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M256.7,471.8h5.2c1.9,0,3.7,0.8,4.9,2c1.3,1.3,2,3,2,4.9v4.7
          c0,1.9-0.8,3.6-2,4.9c-1.3,1.3-3,2-4.9,2h-5.2c-1.9,0-3.6-0.8-4.9-2c-1.3-1.3-2-3-2-4.9v-4.7c0-1.9,0.8-3.7,2-4.9
          C253.1,472.6,254.8,471.8,256.7,471.8L256.7,471.8z M262,475.1h-5.2c-1,0-1.9,0.4-2.6,1.1c-0.7,0.7-1.1,1.6-1.1,2.6v4.7
          c0,1,0.4,1.9,1.1,2.6c0.7,0.7,1.6,1.1,2.6,1.1h5.2c1,0,1.9-0.4,2.6-1.1c0.7-0.7,1.1-1.6,1.1-2.6v-4.7c0-1-0.4-1.9-1.1-2.6
          C263.9,475.5,263,475.1,262,475.1z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,485.7h38.2c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-38.2c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,487.2,179.9,485.7,181.6,485.7z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,475.9h9.1c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-9.1c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,477.3,179.9,475.9,181.6,475.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M199.9,475.9h1.3c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-1.3c-1.8,0-3.2-1.5-3.2-3.2v0C196.6,477.3,198.1,475.9,199.9,475.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M210.8,475.9h1.3c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-1.3c-1.8,0-3.2-1.5-3.2-3.2v0C207.5,477.3,209,475.9,210.8,475.9z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,457.6h19.5c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-19.5c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,459.1,179.9,457.6,181.6,457.6z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,447.8h46.1c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-46.1c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,449.3,179.9,447.8,181.6,447.8z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,427.2h19.5c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-19.5c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,428.6,179.9,427.2,181.6,427.2z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M181.6,417.4h25.9c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-25.9c-1.8,0-3.2-1.5-3.2-3.2v0C178.4,418.8,179.9,417.4,181.6,417.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M216.8,417.4h9.7c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-9.7c-1.8,0-3.2-1.5-3.2-3.2v0C213.5,418.8,215,417.4,216.8,417.4z" />
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#EEE2BE" d="M210.7,427.2h19.5c1.8,0,3.2,1.5,3.2,3.2v0c0,1.8-1.5,3.2-3.2,3.2
          h-19.5c-1.8,0-3.2-1.5-3.2-3.2v0C207.4,428.6,208.9,427.2,210.7,427.2z" />
      </g>
    </svg>
    </div>
  </div>
}
export default NotFound
