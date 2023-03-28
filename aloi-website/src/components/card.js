import { Card, Button } from 'react-bootstrap'

const InfoPanel = (props) => {
    
    return (

        // <Card style={{ width: '22rem' }} 
        <Card style={{ width: props.width }} 
        bg={"light"}
        >
        <a href={props.btnLink} target='_blank' id={props.id}><Card.Img variant="top" src={props.imgname} width={300} height={300}/></a>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                <p>{props.body}</p>
                <br></br>
                <p>{props.footer}</p>
            </Card.Text>
            <Button variant="primary" href={props.btnLink} target='_blank'>See References</Button>
        </Card.Body>
        </Card>
        
    )
}

export default InfoPanel;