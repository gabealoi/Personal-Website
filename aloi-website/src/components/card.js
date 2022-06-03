import { Card, Button } from 'react-bootstrap'

const InfoPanel = (props) => {
    
    return (

        <Card style={{ width: '18rem' }} 
        bg={"light"}
        >
        <a href={props.btnLink} target='_blank'><Card.Img variant="top" src={props.imgname} width={250} height={250}/></a>
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