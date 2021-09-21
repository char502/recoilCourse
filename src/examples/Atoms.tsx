import {atom, useRecoilState, useRecoilValue} from 'recoil'

// recoil state - is like useStates linked up together
// whenever calling setDarkMode mode in 'DarkModeSwitch' component it's like calling
// setDarkMode in Button at the same time

// the atom stored outside of any React component
// Not stored in React itself
// completely outside of react state
// basically takes that state and selectively updates components whenever the relevant state changes

// Note, can't have duplicate keys
const darkModeState = atom({
    // key is a serialisable value that labels the atom (it is inside of)
    // useful for persisting state
    // so if add state persistence to our app
    // what can store is  a piece of JSON (as below, see Global State)
    key: 'darkMode',
    default: false,
})

// Global State: {darkMode: true/false}
// can then tell recoil which atom to set to which value

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useRecoilState(darkModeState)

    console.log('darkMode', darkMode)
    return (
        <input
            type="checkbox"
            checked={darkMode}
            onChange={(event) => {
                setDarkMode(event.currentTarget.checked)
            }}
        />
    )
}

const Button = () => {
    // useRecoilValue just gives you the value back
    const darkMode = useRecoilValue(darkModeState)

    console.log('Button Component', darkMode)

    return (
        <button style={{backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black'}}>
            My UI Button
        </button>
    )
}

export const Atoms = () => {
    return (
        <div>
            <div>
                <DarkModeSwitch />
            </div>
            <div>
                <Button />
            </div>
        </div>
    )
}
