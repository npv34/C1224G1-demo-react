import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";

function FormSearch({actionGetKeyword}) {
    const [keyword, setKeyword] = useState("")

    const handleOnchangeInput = (event) => {
        const input = event.target.value;
        setKeyword(input);
    }

    const handleSubmit = () => {
        actionGetKeyword(keyword);
    }

    return (
        <>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            onChange={(event) => handleOnchangeInput(event)}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button onClick={handleSubmit} type="button">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default FormSearch;