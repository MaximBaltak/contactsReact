import './App.css';
import Header from "./layouts/Header/Header";
import Container from "./components/Container/Container";
import ReactModal from 'react-modal'
import Add from "./components/Modals/Add/Add";
import {useSelector} from "react-redux";

function App() {
    let show = useSelector(state => state.contacts.showModal)
    return (
        <>
            <Header>
                <Container/>
                <ReactModal isOpen={show}
                            overlayClassName="overlayModal"
                            className="content"
                            ariaHideApp={false}
                            closeTimeoutMS={500}>
                    <Add/>
                </ReactModal>
            </Header>
        </>
    )
}

export default App;
