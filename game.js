const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')


let state = {}

function startGame(){
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex){
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
   textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild){
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
   }

   textNode.options.forEach( option => {
     if (showOption(option)){
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
     }
   })
}

function showOption(option){
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    header: "I. Choose your Path",
    text: 'The Journey Begins Here. You want to reclaim the old castle which was build by your grandgrandgrandgranadfather. Part of the castle is haunted by ghosts the other part is flooded with vicious wizards the other part is guarder by the mercenaries. Choose Your Path wisely...',
    options: [
      {
        text: 'Front Door',
        //setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Back Door',
        nextText: 6
      },
      {
        text: 'Opened Window on the Second Floor',
        nextText: 7
      },
      {
        text: 'Basement Door',
        nextText: 8
      }
    ]
  },
  {
    id: 2,
    header: "II. Guards",
    text: 'Now you see the guardian of this castle, and what is worse he sees you. Prepare to fight!',
    options: [
      {
        text: 'Charge with all speed',
        //requiredState: (currentState) => currentState.blueGoo,
        //setState: { blueGoo: false, sword: true },
        nextText: 9
      },
      {
        text: 'Run for your life',
        //requiredState: (currentState) => currentState.blueGoo,
        //setState: { blueGoo: false, shield: true },
        nextText: 10
      },
      {
        text: 'Take defending position and try to make a counter strike',
        nextText: 3
      },
      {
        text: 'Try to throw you sword at the enemy',
        nextText: 11
      }
    ]
  },
  {
    id: 3,
    header: "III. Wounded",
    text: "That tactical move worked! You`ve wounded a leg of guard and now his bleeding but still he`s dangerous AF. What are you going to do now?",
    options: [
      {
        text: 'Try to cut guard`s head off with the the quick blow',
        nextText: 4
      },
      {
        text: 'Try to wound his other leg',
        nextText: 12
      },
      {
        text: 'Make him say that he killed your sister and her children',
        nextText: 13
      },
      {
        text: 'Penetrate his heart with you spear',
        nextText: 4
      }
    ]
  },

  {
    id: 4,
    header: "III. What`s behind that door?",
    text: 'Guardian is dead. You`re tough son of bitch. You`ve opened a massive wooden door and got in. You`re in big hall right now. Now it`s time to decide where to go. You can go to the right there is ball room and you can hear a very high voice singing. You can go to the right there is library and this is very strange but you can hear the noise of flowing water from there. You can go to kitchen, you can smell a delicious smell of roasted pork. Or if you are brave enough you can go straight to second floor and try to find master`s cabinet in the Tower. Choose wisely.',
    options: [
      {
        text: 'Go to Ball room',
        nextText: 5
      },
      {
        text: 'Go to Library',
        nextText: 5
      },
      {
        text: 'Go to Kitchen',
        nextText: 5
      },
      {
        text: 'Go to Master`s Tower',
        nextText: 5
      }
    ]
  },

  {
    id: 5,
    text: 'Congratulations you won',
    options: [
      {
        text: 'FIN',
        nextText: -1
      }
    ]
  },

  {
    id: 6,
    text: 'You`ve tried to sneak through the back door but giant guard hound found you. And you`ve become a dinner',
    options: [
      {
        text: 'Start again',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'You`ve tried to climb into the window but fall. Your back is broken prepare to die..',
    options: [
      {
        text: 'Start again',
        nextText: -1
      }
    ]
  },
  {
    id: 8,
    text: 'Basement seemed to be safe so you didn`t notice a dart trap. You`re bleeding this is the end for you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You`ve tried to charge at the guard but didn`t see a big stone so you fall on the ground and guard easily finishes you off.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'You`ve tried to run but guard trows his spear in your unprotected back. But misses. You run your home safely. You finished you life as a little coward.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Guard dodged your sword easily at first and at second.. Guess what? Cut`s your throat eve more easily. Do not trow weapon silly gouse! Who do you think you are? Almighty Thor?!',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'You`ve tried to approach guard`s and he stabbed you in your throat.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'Wounded guard captured your silly head and smashed it like an egg. Damn boy your brain is on the floor. This is totally not a reference, cmon.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  }
]

startGame()
