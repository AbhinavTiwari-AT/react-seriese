function customRender(reactElement,container)
{
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)

//     container.appendChild(domElement)

     const domElement = document.createElement(reactElement.type)
     (reactElement.type)
     domElement.innerHTML = reactElement.children
     for(const key in object)
     {
        if(Object.hasOwnProperty.call(object,key))
        {
            const element = object[key];
        }
     }
}



const reactElement ={
    type: 'a',
    props:{
        href:  'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)
