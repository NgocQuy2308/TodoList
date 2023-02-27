export default function logger (reducer) {
    return (pervState, action, args) => {
        console.group(action)
        console.log('Prev state:', pervState)
        console.log('Action arguments:', args)
        const nextState = reducer(pervState, action, args)
        console.log('Next state:', nextState)


        console.groupEnd()
        return nextState
    }
}