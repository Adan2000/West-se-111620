# React Lifecyle
## SWBAT
- Explain the React component lifecycle
- Write methods that interact with data at different points throughout a component’s life
- Identify why we fetch data using ComponentDidMount
- Recognize the most-used lifecyle methods



[React lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

Each component has a lifecycle
![react lifecycle](https://cdn-media-1.freecodecamp.org/images/1*_drMYY_IEgboMS4RhvC-lQ.png)

![react lifecycle methods](https://csharpcorner.azureedge.net/article/components-lifecycle-in-react/Images/Components%20Lifecycle%20In%20React.jpg)

## Mounting 
When the component is first mounted to the dom and rendered for the first time. 
    constructor/State
    render()
    componentDidMount()
## Updating 
When a mounted component is updated by a change in props or state.
    shouldComponentUpdate()
        - return false to prevent re-render
    render()
    componentDidUpdate()

## Unmounting
When a component is removed from the DOM
    componentWillUnmount()