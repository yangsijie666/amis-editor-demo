import AmisEditor from "./AmisEditor.tsx";
import {useState} from "react";
import {SchemaObject} from "amis/lib/Schema";
import ReactJson from "react-json-view";
import {Button, Modal} from "antd";


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentAMISSchema, setCurrentAMISSchema] = useState<SchemaObject | null>(null);

    const saveSchema = (schema: SchemaObject) => {
        setCurrentAMISSchema(schema);
        setIsModalOpen(false);
        console.log('已确定', currentAMISSchema);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        console.log('已确定', currentAMISSchema);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={'100%'} footer={null} style={{top: 20}}>
                <AmisEditor save={saveSchema}/>
            </Modal>
            <ReactJson src={currentAMISSchema || {}}/>
        </>
    );
}

export default App
